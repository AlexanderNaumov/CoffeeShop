import Combine
import core

public struct FlowPublisher<T: AnyObject>: Publisher {
    public typealias Output = T
    public typealias Failure = Never
    
    private let wrapper: FlowWrapper<Output>
    public init(wrapper: FlowWrapper<Output>) {
        self.wrapper = wrapper
    }
    
    public func receive<S: Subscriber>(subscriber: S) where S.Input == Output, S.Failure == Failure {
        subscriber.receive(subscription: FlowSubscription(wrapper: wrapper, subscriber: subscriber))
    }
    
    final class FlowSubscription<S: Subscriber>: Subscription where S.Input == Output, S.Failure == Failure {
        
        private var subscriber: S?
        private var job: core.Cancellable? = nil
        
        private let wrapper: FlowWrapper<Output>
        
        init(wrapper: FlowWrapper<Output>, subscriber: S) {
            self.wrapper = wrapper
            self.subscriber = subscriber
            
            job = wrapper.collect(onEach: { data in
                _ = subscriber.receive(data!)
            }, onCompletion: { error in
                if let error = error {
                    debugPrint(error.description())
                }
                subscriber.receive(completion: .finished)
            })
        }
        
        func cancel() {
            subscriber = nil
            job?.cancel()
        }
        
        func request(_ demand: Subscribers.Demand) {}
    }
}
