(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var isObject = kotlin_kotlin.$_$.g7;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var plus = kotlin_kotlin.$_$.b6;
  var get = kotlin_kotlin.$_$.x5;
  var fold = kotlin_kotlin.$_$.w5;
  var minusKey = kotlin_kotlin.$_$.y5;
  var Continuation = kotlin_kotlin.$_$.v5;
  var classMeta = kotlin_kotlin.$_$.p6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.o5;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var isInterface = kotlin_kotlin.$_$.e7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var toString = kotlin_kotlin.$_$.fa;
  var toString_0 = kotlin_kotlin.$_$.q7;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n5;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var hashCode = kotlin_kotlin.$_$.v6;
  var equals = kotlin_kotlin.$_$.q6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f2;
  var Companion_getInstance = kotlin_kotlin.$_$.f3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.u9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.r5;
  var Key_getInstance = kotlin_kotlin.$_$.s2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.q5;
  var get_0 = kotlin_kotlin.$_$.s5;
  var minusKey_0 = kotlin_kotlin.$_$.t5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.u5;
  var Key = kotlin_kotlin.$_$.a6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Enum = kotlin_kotlin.$_$.y8;
  var startCoroutine = kotlin_kotlin.$_$.f6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ba;
  var Long = kotlin_kotlin.$_$.d9;
  var RuntimeException = kotlin_kotlin.$_$.h9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.k6;
  var Error_0 = kotlin_kotlin.$_$.z8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.g1;
  var Element = kotlin_kotlin.$_$.z5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var anyToString = kotlin_kotlin.$_$.h6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ea;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var CancellationException = kotlin_kotlin.$_$.m5;
  var ArrayList = kotlin_kotlin.$_$.l3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var UnsupportedOperationException = kotlin_kotlin.$_$.q9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var intercepted = kotlin_kotlin.$_$.p5;
  var addSuppressed = kotlin_kotlin.$_$.r9;
  var fillArrayVal = kotlin_kotlin.$_$.r6;
  var fill = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var fill$default = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var NoSuchElementException = kotlin_kotlin.$_$.e9;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.r1;
  var IllegalStateException = kotlin_kotlin.$_$.c9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var Unit = kotlin_kotlin.$_$.p9;
  var CoroutineImpl = kotlin_kotlin.$_$.c6;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.y2;
  var toLong = kotlin_kotlin.$_$.o7;
  var arrayIterator = kotlin_kotlin.$_$.i6;
  var copyOf = kotlin_kotlin.$_$.m4;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var SuspendFunction1 = kotlin_kotlin.$_$.d6;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.da;
  var arrayCopy = kotlin_kotlin.$_$.a4;
  var toLongOrNull = kotlin_kotlin.$_$.l8;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.b1;
  var getStringHashCode = kotlin_kotlin.$_$.u6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.t1b(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveElement.prototype = Object.create(Receive.prototype);
  ReceiveElement.prototype.constructor = ReceiveElement;
  ReceiveElementWithUndeliveredHandler.prototype = Object.create(ReceiveElement.prototype);
  ReceiveElementWithUndeliveredHandler.prototype.constructor = ReceiveElementWithUndeliveredHandler;
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.z1l(cause) : $handler(cause);
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  SendElement.prototype = Object.create(Send.prototype);
  SendElement.prototype.constructor = SendElement;
  SendElementWithUndeliveredHandler.prototype = Object.create(SendElement.prototype);
  SendElementWithUndeliveredHandler.prototype.constructor = SendElementWithUndeliveredHandler;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ChannelCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ChannelCoroutine.prototype.constructor = ChannelCoroutine;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  ProducerCoroutine.prototype = Object.create(ChannelCoroutine.prototype);
  ProducerCoroutine.prototype.constructor = ProducerCoroutine;
  $awaitCloseCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCloseCOROUTINE$2.prototype.constructor = $awaitCloseCOROUTINE$2;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  $collectToCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $collectToCOROUTINE$3.prototype.constructor = $collectToCOROUTINE$3;
  ChannelFlowBuilder.prototype = Object.create(ChannelFlow.prototype);
  ChannelFlowBuilder.prototype.constructor = ChannelFlowBuilder;
  CallbackFlowBuilder.prototype = Object.create(ChannelFlowBuilder.prototype);
  CallbackFlowBuilder.prototype.constructor = CallbackFlowBuilder;
  $collectCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$5.prototype.constructor = $collectCOROUTINE$5;
  $emitAllImplCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $emitAllImplCOROUTINE$6.prototype.constructor = $emitAllImplCOROUTINE$6;
  $collectCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$7.prototype.constructor = $collectCOROUTINE$7;
  SharedFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  SharedFlowImpl.prototype.constructor = SharedFlowImpl;
  SharedFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  SharedFlowSlot.prototype.constructor = SharedFlowSlot;
  $collectCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$8.prototype.constructor = $collectCOROUTINE$8;
  StateFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  StateFlowImpl.prototype.constructor = StateFlowImpl;
  StateFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  StateFlowSlot.prototype.constructor = StateFlowSlot;
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.constructor = ChannelFlow$_get_collectToFun_$slambda_j53z2e;
  ChannelFlow$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlow$collect$slambda.prototype.constructor = ChannelFlow$collect$slambda;
  ChannelFlowMerge$collectTo$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlowMerge$collectTo$slambda$slambda.prototype.constructor = ChannelFlowMerge$collectTo$slambda$slambda;
  ChannelFlowMerge$collectTo$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlowMerge$collectTo$slambda.prototype.constructor = ChannelFlowMerge$collectTo$slambda;
  ChannelFlowMerge.prototype = Object.create(ChannelFlow.prototype);
  ChannelFlowMerge.prototype.constructor = ChannelFlowMerge;
  unsafeTransform$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  unsafeTransform$o$collect$slambda.prototype.constructor = unsafeTransform$o$collect$slambda;
  $collectCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$10.prototype.constructor = $collectCOROUTINE$10;
  $collectCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$12.prototype.constructor = $collectCOROUTINE$12;
  catchImpl$slambda.prototype = Object.create(CoroutineImpl.prototype);
  catchImpl$slambda.prototype.constructor = catchImpl$slambda;
  $catchImplCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $catchImplCOROUTINE$11.prototype.constructor = $catchImplCOROUTINE$11;
  flatMapMerge$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  flatMapMerge$o$collect$slambda.prototype.constructor = flatMapMerge$o$collect$slambda;
  $collectCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$13.prototype.constructor = $collectCOROUTINE$13;
  flattenConcat$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  flattenConcat$o$collect$slambda.prototype.constructor = flattenConcat$o$collect$slambda;
  $collectCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$14.prototype.constructor = $collectCOROUTINE$14;
  $onSubscriptionCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $onSubscriptionCOROUTINE$15.prototype.constructor = $onSubscriptionCOROUTINE$15;
  $collectCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$16.prototype.constructor = $collectCOROUTINE$16;
  $collectCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$17.prototype.constructor = $collectCOROUTINE$17;
  onEach$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  onEach$o$collect$slambda.prototype.constructor = onEach$o$collect$slambda;
  $collectCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$18.prototype.constructor = $collectCOROUTINE$18;
  map$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  map$o$collect$slambda.prototype.constructor = map$o$collect$slambda;
  $collectCOROUTINE$19.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$19.prototype.constructor = $collectCOROUTINE$19;
  launchIn$slambda.prototype = Object.create(CoroutineImpl.prototype);
  launchIn$slambda.prototype.constructor = launchIn$slambda;
  Segment.prototype = Object.create(ConcurrentLinkedListNode.prototype);
  Segment.prototype.constructor = Segment;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  SemaphoreSegment.prototype = Object.create(Segment.prototype);
  SemaphoreSegment.prototype.constructor = SemaphoreSegment;
  CancelSemaphoreAcquisitionHandler.prototype = Object.create(CancelHandler.prototype);
  CancelSemaphoreAcquisitionHandler.prototype.constructor = CancelSemaphoreAcquisitionHandler;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.n1a(parentContext.p3(Key_getInstance_2()));
    this.q1a_1 = parentContext.w3(this);
  }
  AbstractCoroutine.prototype.l3 = function () {
    return this.q1a_1;
  };
  AbstractCoroutine.prototype.r1a = function () {
    return this.q1a_1;
  };
  AbstractCoroutine.prototype.s1a = function () {
    return JobSupport.prototype.s1a.call(this);
  };
  AbstractCoroutine.prototype.t1a = function (value) {
  };
  AbstractCoroutine.prototype.u1a = function (cause, handled) {
  };
  AbstractCoroutine.prototype.v1a = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.w1a = function (state) {
    if (state instanceof CompletedExceptionally)
      this.u1a(state.x1a_1, state.z1a());
    else {
      this.t1a((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.m3 = function (result) {
    var state = this.a1b(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.b1b(state);
  };
  AbstractCoroutine.prototype.b1b = function (state) {
    return this.c1b(state);
  };
  AbstractCoroutine.prototype.d1b = function (exception) {
    handleCoroutineException(this.q1a_1, exception);
  };
  AbstractCoroutine.prototype.e1b = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.q1a_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.e1b.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.e1b.call(this);
  };
  AbstractCoroutine.prototype.f1b = function (start, receiver, block) {
    start.i1b(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.k1c() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.f1b(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.i1c = function (exception) {
    handleCoroutineException(this.l3(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.r1c_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.p1b = function () {
    startCoroutineCancellable_0(this.r1c_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return _this__u8e3s4.v1c(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.x1c_1 = handle;
  }
  DisposeOnCancel.prototype.y1c = function (cause) {
    return this.x1c_1.z1c();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.x1c_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.g1d();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp_0;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_safe_receiver.n1d();
        }
        if (tmp$ret$0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp$ret$1 = tmp_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return _this__u8e3s4.v1c(tmp$ret$1);
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.o1d_1 = node;
  }
  RemoveOnCancel.prototype.y1c = function (cause) {
    this.o1d_1.s1d();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.o1d_1 + ']';
  };
  RemoveOnCancel.$metadata$ = classMeta('RemoveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.l1b();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.v1d())) {
      var tmp_0 = $this.i1d_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).t1d();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.i1d_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.w1d(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this.l3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop = $this.k1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a1a_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.k1d_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop = $this.k1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a1a_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.k1d_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.l3().p3(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var handle = parent.u1b(true, false, tmp$ret$1, 2, null);
    $this.m1d_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.i1d_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1d($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.y1d();
    $this.z1d(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop = $this.l1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelledContinuation) {
              if (tmp1__anonymous__uwfjfc.e1e()) {
                var tmp1_safe_receiver = onCancellation;
                if (tmp1_safe_receiver == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp$ret$1 = $this.a1e(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.z());
                  }
                }
                return Unit_getInstance();
              }
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    {
      var tmp0_loop = $this.l1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.v1d(), onCancellation, idempotent);
            if (!$this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            return get_RESUME_TOKEN();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              var tmp;
              if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.i1e_1 === idempotent : false) {
                {
                }
                tmp = get_RESUME_TOKEN();
              } else {
                tmp = null;
              }
              return tmp;
            } else {
              return null;
            }
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.y1d();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.i1d_1 = delegate;
    {
    }
    this.j1d_1 = this.i1d_1.l3();
    this.k1d_1 = atomic$int$1(0);
    this.l1d_1 = atomic$ref$1(Active_getInstance());
    this.m1d_1 = null;
  }
  CancellableContinuationImpl.prototype.k1e = function () {
    return this.i1d_1;
  };
  CancellableContinuationImpl.prototype.l3 = function () {
    return this.j1d_1;
  };
  CancellableContinuationImpl.prototype.l1b = function () {
    return this.l1d_1.z19_1;
  };
  CancellableContinuationImpl.prototype.m1b = function () {
    var tmp = this.l1b();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.l1e = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.m1b()) {
      handle.z1c();
      this.m1d_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.n1d = function () {
    {
    }
    {
    }
    var state = this.l1d_1.z19_1;
    {
    }
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.i1e_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.y1d();
      return false;
    }
    this.k1d_1.a1a_1 = 0;
    this.l1d_1.z19_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.m1e = function () {
    return this.l1b();
  };
  CancellableContinuationImpl.prototype.n1e = function (takenState, cause) {
    var tmp0_loop = this.l1d_1;
    while (true) {
      {
        var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject instanceof CompletedContinuation) {
              {
                var tmp0_check = !tmp1__anonymous__uwfjfc.o1e();
                {
                }
                if (!tmp0_check) {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'Must be called at most once';
                  }
                  var message = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message));
                }
              }
              var update = tmp1__anonymous__uwfjfc.p1e(null, null, null, null, cause, 15, null);
              if (this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                tmp1__anonymous__uwfjfc.q1e(this, cause);
                return Unit_getInstance();
              }
            } else {
              if (this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.z1d = function (cause) {
    {
      var tmp0_loop = this.l1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
            return false;
          var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
          if (!this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$1;
            {
              {
              }
              tmp$ret$1 = this.r1e(tmp0_safe_receiver, cause);
            }
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, this.v1d());
          return true;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.s1e = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.z1d(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.r1e = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this.l3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.a1e = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.l3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.t1e = function (parent) {
    return parent.q1b();
  };
  CancellableContinuationImpl.prototype.u1e = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.m1d_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.l1b();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.x1a_1, this);
    if (get_isCancellableMode(this.v1d())) {
      var job = this.l3().p3(Key_getInstance_2());
      if (!(job == null) ? !job.s1a() : false) {
        var cause = job.q1b();
        this.n1e(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.v1e(state);
  };
  CancellableContinuationImpl.prototype.m3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.v1d();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.w1c = function (value, onCancellation) {
    return resumeImpl(this, value, this.v1d(), onCancellation);
  };
  CancellableContinuationImpl.prototype.v1c = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop = this.l1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Active) {
            if (this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            else {
              if (tmp0_subject instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__uwfjfc.w1e())
                  multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
                  var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1a_1);
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject instanceof CompletedContinuation) {
                  if (!(tmp1__anonymous__uwfjfc.g1e_1 == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  if (tmp1__anonymous__uwfjfc.o1e()) {
                    callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.j1e_1);
                    return Unit_getInstance();
                  }
                  var update = tmp1__anonymous__uwfjfc.p1e(null, cancelHandler, null, null, null, 29, null);
                  if (this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                    return Unit_getInstance();
                } else {
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
                  if (this.l1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                    return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.y1d = function () {
    var tmp0_elvis_lhs = this.m1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.z1c();
    this.m1d_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.s1c = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.t1c = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.u1c = function (token) {
    {
    }
    dispatchResume(this, this.v1d());
  };
  CancellableContinuationImpl.prototype.v1e = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.f1e_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.x1e = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.x1e.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.i1d_1);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.e1b() + '(' + toDebugString(this.i1d_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.e1b = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.f1e_1 = result;
    this.g1e_1 = cancelHandler;
    this.h1e_1 = onCancellation;
    this.i1e_1 = idempotentResume;
    this.j1e_1 = cancelCause;
  }
  CompletedContinuation.prototype.a1f = function () {
    return this.g1e_1;
  };
  CompletedContinuation.prototype.b1f = function () {
    return this.i1e_1;
  };
  CompletedContinuation.prototype.c1f = function () {
    return this.j1e_1;
  };
  CompletedContinuation.prototype.o1e = function () {
    return !(this.j1e_1 == null);
  };
  CompletedContinuation.prototype.q1e = function (cont, cause) {
    var tmp0_safe_receiver = this.g1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = cont.r1e(tmp0_safe_receiver, cause);
      }
    }
    var tmp1_safe_receiver = this.h1e_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = cont.a1e(tmp1_safe_receiver, cause);
      }
    }
  };
  CompletedContinuation.prototype.d1f = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.p1e = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.f1e_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.g1e_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.h1e_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.i1e_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.j1e_1;
    return this.d1f(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.f1e_1) + ', cancelHandler=' + this.g1e_1 + ', onCancellation=' + this.h1e_1 + ', idempotentResume=' + toString(this.i1e_1) + ', cancelCause=' + this.j1e_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.f1e_1 == null ? 0 : hashCode(this.f1e_1);
    result = imul(result, 31) + (this.g1e_1 == null ? 0 : hashCode(this.g1e_1)) | 0;
    result = imul(result, 31) + (this.h1e_1 == null ? 0 : hashCode(this.h1e_1)) | 0;
    result = imul(result, 31) + (this.i1e_1 == null ? 0 : hashCode(this.i1e_1)) | 0;
    result = imul(result, 31) + (this.j1e_1 == null ? 0 : hashCode(this.j1e_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.f1e_1, tmp0_other_with_cast.f1e_1))
      return false;
    if (!equals(this.g1e_1, tmp0_other_with_cast.g1e_1))
      return false;
    if (!equals(this.h1e_1, tmp0_other_with_cast.h1e_1))
      return false;
    if (!equals(this.i1e_1, tmp0_other_with_cast.i1e_1))
      return false;
    if (!equals(this.j1e_1, tmp0_other_with_cast.j1e_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.e1f_1 = handler;
  }
  InvokeOnCancel.prototype.y1c = function (cause) {
    this.e1f_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.e1f_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.x1a_1 = cause;
    this.y1a_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.z = function () {
    return this.x1a_1;
  };
  CompletedExceptionally.prototype.z1a = function () {
    return this.y1a_1.g1a_1;
  };
  CompletedExceptionally.prototype.w1e = function () {
    return this.y1a_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.x1a_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.d1e_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.e1e = function () {
    return this.d1e_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          var tmp_1 = recoverStackTrace(exception, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.f1f_1 = result;
    this.g1f_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.f1f_1) + ', onCancellation=' + this.g1f_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.f1f_1 == null ? 0 : hashCode(this.f1f_1);
    result = imul(result, 31) + hashCode(this.g1f_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.f1f_1, tmp0_other_with_cast.f1f_1))
      return false;
    if (!equals(this.g1f_1, tmp0_other_with_cast.g1f_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(state.x1a_1, uCont);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp2_success = Companion_getInstance();
        var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5());
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.i1f = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.n3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.o3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.d10();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.p3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.k1f(context, exception);
          return Unit_getInstance();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    {
      var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.p3(Key_getInstance_2()) == null)) {
      tmp = context;
    } else {
      tmp = context.w3(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function coroutineScope(block, $cont) {
    {
    }
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.l3(), tmp0__anonymous__q1qw7t);
      tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    }
    return tmp$ret$0;
  }
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.r1a().p3(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.x1b(cause);
  }
  function cancel$default(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.i1b = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.k4();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        break;
      case 2:
        tmp = startCoroutine(block, receiver, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched(block, receiver, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.k1c = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.m1f_1 = new Long(0, 0);
    this.n1f_1 = false;
    this.o1f_1 = null;
  }
  EventLoop.prototype.p1f = function () {
    var tmp0_elvis_lhs = this.o1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.t1f();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.y1e();
    return true;
  };
  EventLoop.prototype.u1f = function (task) {
    var tmp0_elvis_lhs = this.o1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = new ArrayQueue();
        {
        }
        {
          this.o1f_1 = tmp0_also;
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.v1f(task);
  };
  EventLoop.prototype.w1f = function () {
    return this.m1f_1.v(delta(this, true)) >= 0;
  };
  EventLoop.prototype.x1f = function () {
    var tmp0_safe_receiver = this.o1f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1f();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.z1f = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.m1f_1 = tmp0_this.m1f_1.p4(delta(this, unconfined));
    if (!unconfined)
      this.n1f_1 = true;
  };
  EventLoop.prototype.a1g = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.m1f_1 = tmp0_this.m1f_1.q4(delta(this, unconfined));
    if (this.m1f_1.v(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.n1f_1) {
      this.b1g();
    }
  };
  EventLoop.prototype.b1g = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.c1g_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.d1g = function () {
    var tmp0_elvis_lhs = this.c1g_1.f1g();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().c1g_1.g1g(tmp0_also);
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.h1g = function () {
    return null;
  };
  NonDisposableHandle.prototype.z1c = function () {
  };
  NonDisposableHandle.prototype.a1c = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p3(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.s1a())
      throw _this__u8e3s4.q1b();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.i1g_1 = isActive;
  }
  Empty.prototype.s1a = function () {
    return this.i1g_1;
  };
  Empty.prototype.j1g = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.i1g_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.s1a = function () {
    return true;
  };
  NodeList.prototype.j1g = function () {
    return this;
  };
  NodeList.prototype.n1g = function (state) {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply.s5('List{');
          tmp0_apply.s5(state);
          tmp0_apply.s5('}[');
          var first = true;
          {
            var cur = this.o1g();
            while (!equals(cur, this)) {
              if (cur instanceof JobNode) {
                var tmp0__anonymous__q1qw7t = cur;
                if (first)
                  first = false;
                else {
                  tmp0_apply.s5(', ');
                }
                tmp0_apply.r5(tmp0__anonymous__q1qw7t);
              }
              cur = cur.p1d_1;
            }
          }
          tmp0_apply.s5(']');
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.n1g('Active') : anyToString(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.f1h = function () {
    var tmp = this.e1h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.s1a = function () {
    return true;
  };
  JobNode.prototype.j1g = function () {
    return null;
  };
  JobNode.prototype.z1c = function () {
    return this.f1h().v1b(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.f1h()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.k1h_1.z19_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.k1h_1.z19_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1a_1;
    var wasCancelling = false;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        wasCancelling = state.l1h();
        var exceptions = state.m1h(proposedException);
        var finalCause = getFinalRootCause($this, state, exceptions);
        if (!(finalCause == null))
          addSuppressedExceptions($this, finalCause, exceptions);
        tmp$ret$0 = finalCause;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.i1c(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).w1e();
      }
    }
    if (!wasCancelling)
      $this.f1c(finalException);
    $this.w1a(finalState);
    var casSuccess = $this.l1a_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.h()) {
      if (state.l1h()) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.v1a() : tmp0_elvis_lhs, null, $this);
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      var tmp0_iterator = exceptions.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        {
          tmp$ret$1 = !(element instanceof CancellationException);
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.g(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        var tmp0_iterator_0 = exceptions.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$3;
          {
            var tmp;
            if (!(element_0 === first)) {
              tmp = element_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.c() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.c());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.d();
    while (tmp0_iterator.e()) {
      var exception = tmp0_iterator.f();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        {
        }
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.l1a_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.f1c(null);
    $this.w1a(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.k1b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp0_safe_receiver.z1c();
        tmp$ret$0 = $this.j1b(NonDisposableHandle_getInstance());
      }
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1a_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.d1b(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.j1g();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.f1c(cause);
    {
      var exception = null;
      {
        var cur = list.o1g();
        while (!equals(cur, list)) {
          if (cur instanceof JobCancellingNode) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              tmp0__anonymous__q1qw7t.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver = exception;
                var tmp;
                if (tmp0_safe_receiver == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs = tmp;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$1;
                  {
                    {
                    }
                    exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                  }
                } else
                  tmp1_elvis_lhs;
              } else {
                throw $p;
              }
            }
          }
          cur = cur.p1d_1;
        }
      }
      var tmp0_safe_receiver_0 = exception;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$2;
        {
          {
          }
          tmp$ret$2 = $this.d1b(tmp0_safe_receiver_0);
        }
      }
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.g1c())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.k1b();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.a1c(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    {
      var cur = _this__u8e3s4.o1g();
      while (!equals(cur, _this__u8e3s4)) {
        if (cur instanceof JobNode) {
          var tmp0__anonymous__q1qw7t = cur;
          try {
            tmp0__anonymous__q1qw7t.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver = exception;
              var tmp;
              if (tmp0_safe_receiver == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs = tmp;
              if (tmp1_elvis_lhs == null) {
                var tmp$ret$1;
                {
                  {
                  }
                  exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                }
              } else
                tmp1_elvis_lhs;
            } else {
              throw $p;
            }
          }
        }
        cur = cur.p1d_1;
      }
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        tmp$ret$2 = $this.d1b(tmp0_safe_receiver_0);
      }
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.i1g_1)
        return 0;
      if (!$this.l1a_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.p1b();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.l1a_1.atomicfu$compareAndSet(state, state.n1h_1))
          return -1;
        $this.p1b();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.e1h_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this.l1b() === expect;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.v1g(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.i1g_1 ? list : new InactiveNodeList(list);
    $this.l1a_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.g1h(new NodeList());
    var tmp$ret$0;
    {
      tmp$ret$0 = state.p1d_1;
    }
    var list = tmp$ret$0;
    $this.l1a_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.l1b();
          var tmp;
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
            tmp = true;
          } else {
            var tmp_0;
            if (tmp0__anonymous__q1qw7t instanceof Finishing) {
              tmp_0 = tmp0__anonymous__q1qw7t.o1h();
            } else {
              tmp_0 = false;
            }
            tmp = tmp_0;
          }
          if (tmp) {
            return get_COMPLETING_ALREADY();
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (!(finalState === get_COMPLETING_RETRY()))
            return finalState;
        }
      }
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.v1a() : tmp0_elvis_lhs, null, $this);
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).d1c();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block: {
          var tmp0__anonymous__q1qw7t = $this.l1b();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Finishing) {
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                if (tmp0__anonymous__q1qw7t.p1h())
                  return get_TOO_LATE_TO_CANCEL();
                var wasCancelling = tmp0__anonymous__q1qw7t.l1h();
                if (!(cause == null) ? true : !wasCancelling) {
                  var tmp0_elvis_lhs = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs == null) {
                    var tmp$ret$0;
                    {
                      var tmp0_also = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also;
                      }
                      tmp$ret$0 = tmp0_also;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs;
                  }
                  var causeException = tmp;
                  tmp0__anonymous__q1qw7t.q1h(causeException);
                }
                var tmp$ret$2;
                {
                  var tmp1_takeIf = tmp0__anonymous__q1qw7t.r1h();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = !wasCancelling;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf;
                  } else {
                    tmp_0 = null;
                  }
                  tmp$ret$2 = tmp_0;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var notifyRootCause = tmp$ret$4;
            var tmp1_safe_receiver = notifyRootCause;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp$ret$5;
              {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__q1qw7t.h1h_1, tmp1_safe_receiver);
              }
            }
            return get_COMPLETING_ALREADY();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var tmp2_elvis_lhs = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs == null) {
                var tmp$ret$6;
                {
                  var tmp0_also_0 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0;
                  }
                  tmp$ret$6 = tmp0_also_0;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs;
              }
              var causeException_0 = tmp_1;
              if (tmp0__anonymous__q1qw7t.s1a()) {
                if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                  return get_COMPLETING_ALREADY();
              } else {
                var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
                if (finalState === get_COMPLETING_ALREADY()) {
                  var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
                } else if (finalState === get_COMPLETING_RETRY()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block;
                } else
                  return finalState;
              }
            } else {
              return get_TOO_LATE_TO_CANCEL();
            }
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.j1g();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.l1a_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    {
      if (finishing.o1h())
        return get_COMPLETING_ALREADY();
      finishing.s1h(true);
      if (!(finishing === state)) {
        if (!$this.l1a_1.atomicfu$compareAndSet(state, finishing))
          return get_COMPLETING_RETRY();
      }
      {
      }
      var wasCancelling = finishing.l1h();
      var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = finishing.q1h(tmp0_safe_receiver.x1a_1);
        }
      }
      var tmp$ret$2;
      {
        var tmp0_takeIf = finishing.r1h();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        {
          tmp$ret$1 = !wasCancelling;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf;
        } else {
          tmp_0 = null;
        }
        tmp$ret$2 = tmp_0;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
      }
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1a_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.j1g();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var handle = child_1.x1h_1.u1b(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.c1b(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      {
        var tmp0__get_isRemoved__hsfvgr = cur;
        tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.r1d_1;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      {
        var tmp1__get_prevNode__b1i0ed = cur;
        tmp$ret$1 = tmp1__get_prevNode__b1i0ed.q1d_1;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      {
        var tmp2__get_nextNode__ek7k4a = cur;
        tmp$ret$2 = tmp2__get_nextNode__ek7k4a.p1d_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      {
        var tmp3__get_isRemoved__lodk3s = cur;
        tmp$ret$3 = tmp3__get_isRemoved__lodk3s.r1d_1;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.l1h() ? 'Cancelling' : state.o1h() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.s1a() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.h1h_1 = list;
    this.i1h_1 = atomic$boolean$1(isCompleting);
    this.j1h_1 = atomic$ref$1(rootCause);
    this.k1h_1 = atomic$ref$1(null);
  }
  Finishing.prototype.j1g = function () {
    return this.h1h_1;
  };
  Finishing.prototype.s1h = function (value) {
    this.i1h_1.g1a_1 = value;
  };
  Finishing.prototype.o1h = function () {
    return this.i1h_1.g1a_1;
  };
  Finishing.prototype.y1h = function (value) {
    this.j1h_1.z19_1 = value;
  };
  Finishing.prototype.r1h = function () {
    return this.j1h_1.z19_1;
  };
  Finishing.prototype.p1h = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.l1h = function () {
    return !(this.r1h() == null);
  };
  Finishing.prototype.s1a = function () {
    return this.r1h() == null;
  };
  Finishing.prototype.m1h = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        {
          var tmp0_also = allocateList(this);
          {
          }
          {
            tmp0_also.b(eh);
          }
          tmp$ret$0 = tmp0_also;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.r1h();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = list.da(0, tmp0_safe_receiver);
      }
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.b(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.q1h = function (exception) {
    var rootCause = this.r1h();
    if (rootCause == null) {
      this.y1h(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null)
      _set_exceptionsHolder__tqm22h(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        {
          var tmp0_apply = allocateList(this);
          {
          }
          {
            tmp0_apply.b(eh);
            tmp0_apply.b(exception);
          }
          tmp$ret$0 = tmp0_apply;
        }
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.l1h() + ', completing=' + this.o1h() + ', rootCause=' + this.r1h() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.h1h_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.d1i_1 = parent;
    this.e1i_1 = state;
    this.f1i_1 = child;
    this.g1i_1 = proposedUpdate;
  }
  ChildCompletion.prototype.y1c = function (cause) {
    continueCompleting(this.d1i_1, this.e1i_1, this.f1i_1, this.g1i_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function JobSupport(active) {
    this.l1a_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.m1a_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.j1 = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.j1b = function (value) {
    this.m1a_1.z19_1 = value;
  };
  JobSupport.prototype.k1b = function () {
    return this.m1a_1.z19_1;
  };
  JobSupport.prototype.n1a = function (parent) {
    {
    }
    if (parent == null) {
      this.j1b(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.o1b();
    var handle = parent.e1c(this);
    this.j1b(handle);
    if (this.m1b()) {
      handle.z1c();
      this.j1b(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.l1b = function () {
    {
      var tmp0_loop = this.l1a_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
            return tmp1__anonymous__uwfjfc;
          tmp1__anonymous__uwfjfc.h1i(this);
        }
      }
    }
  };
  JobSupport.prototype.s1a = function () {
    var state = this.l1b();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.s1a();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.m1b = function () {
    var tmp = this.l1b();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.n1b = function () {
    var state = this.l1b();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.l1h();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobSupport.prototype.o1b = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.l1b();
          var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
          if (tmp0_subject === 0)
            return false;
          else if (tmp0_subject === 1)
            return true;
        }
      }
    }
  };
  JobSupport.prototype.p1b = function () {
  };
  JobSupport.prototype.q1b = function () {
    var state = this.l1b();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.r1h();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.r1b(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.s1b(state.x1a_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.r1b = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.v1a() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.s1b = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.r1b(_this__u8e3s4, message);
  };
  JobSupport.prototype.i1i = function (handler) {
    return this.t1b(false, true, handler);
  };
  JobSupport.prototype.t1b = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.l1b();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Empty) {
            if (tmp0__anonymous__q1qw7t.i1g_1) {
              if (this.l1a_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var list = tmp0__anonymous__q1qw7t.j1g();
              if (list == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
              } else {
                var rootCause = null;
                var handle = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  {
                    rootCause = tmp0__anonymous__q1qw7t.r1h();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__q1qw7t.o1h();
                      } else {
                        tmp_2 = false;
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block;
                      }
                      if (rootCause == null)
                        return node;
                      handle = node;
                      tmp_0 = Unit_getInstance();
                    }
                    tmp$ret$2 = tmp_0;
                  }
                }
                if (!(rootCause == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause);
                  return handle;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                    return node;
                }
              }
            } else {
              if (invokeImmediately) {
                var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
                invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1a_1);
              }
              return NonDisposableHandle_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.v1b = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.l1b();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof JobNode) {
            if (!(tmp0__anonymous__q1qw7t === node))
              return Unit_getInstance();
            if (this.l1a_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              if (!(tmp0__anonymous__q1qw7t.j1g() == null)) {
                node.s1d();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.w1b = function () {
    return false;
  };
  JobSupport.prototype.x1b = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.v1a() : tmp0_elvis_lhs_0, null, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.y1b(tmp);
  };
  JobSupport.prototype.v1a = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.y1b = function (cause) {
    this.b1c(cause);
  };
  JobSupport.prototype.z1b = function (parentJob) {
    this.b1c(parentJob);
  };
  JobSupport.prototype.a1c = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.b1c(cause) ? this.h1c() : false;
  };
  JobSupport.prototype.j1i = function (cause) {
    return this.b1c(cause);
  };
  JobSupport.prototype.b1c = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.w1b()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.c1b(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.c1c = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.v1a() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.d1c = function () {
    var state = this.l1b();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.r1h();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.x1a_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.a1b = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.l1b();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState;
        }
      }
    }
  };
  JobSupport.prototype.e1c = function (child) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = this.u1b(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.d1b = function (exception) {
    throw exception;
  };
  JobSupport.prototype.f1c = function (cause) {
  };
  JobSupport.prototype.g1c = function () {
    return false;
  };
  JobSupport.prototype.h1c = function () {
    return true;
  };
  JobSupport.prototype.i1c = function (exception) {
    return false;
  };
  JobSupport.prototype.w1a = function (state) {
  };
  JobSupport.prototype.c1b = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.j1c() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.j1c = function () {
    return this.e1b() + '{' + stateString(this, this.l1b()) + '}';
  };
  JobSupport.prototype.e1b = function () {
    return get_classSimpleName(this);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.n1h_1 = list;
  }
  InactiveNodeList.prototype.j1g = function () {
    return this.n1h_1;
  };
  InactiveNodeList.prototype.s1a = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.n1h_1.n1g('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.x1h_1 = childJob;
  }
  ChildHandleNode.prototype.h1g = function () {
    return this.f1h();
  };
  ChildHandleNode.prototype.y1c = function (cause) {
    return this.x1h_1.z1b(this.f1h());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  ChildHandleNode.prototype.a1c = function (cause) {
    return this.f1h().a1c(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.o1i_1 = handler;
    this.p1i_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.y1c = function (cause) {
    if (this.p1i_1.atomicfu$compareAndSet(0, 1))
      this.o1i_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.u1i_1 = handler;
  }
  InvokeOnCompletion.prototype.y1c = function (cause) {
    return this.u1i_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1i_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.v1i_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.a1j_1 = child;
  }
  ChildContinuation.prototype.y1c = function (cause) {
    this.a1j_1.s1e(this.a1j_1.t1e(this.f1h()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.k1b();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1h();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.h1c())
        return true;
      var tmp_1 = parentJob.k1b();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.f1h();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.n1a(parent);
    this.d1j_1 = handlesException(this);
  }
  JobImpl.prototype.w1b = function () {
    return true;
  };
  JobImpl.prototype.h1c = function () {
    return this.d1j_1;
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.g1j();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.g1j = function () {
    var main = Dispatchers_getInstance().l1j();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.f1j();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.i1f = function (context) {
    return false;
  };
  Unconfined.prototype.j1f = function (context, block) {
    var yieldContext = context.p3(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.o1j_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
      var tmp$ret$0;
      $l$block_1: {
        var tmp;
        if ($this.s1j() == null) {
          tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
        } else {
          tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.s1j());
        }
        var receive = tmp;
        while (true) {
          if (enqueueReceive($this, receive)) {
            removeReceiveOnCancel($this, cancellable, receive);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          var result = $this.w1j();
          if (result instanceof Closed) {
            receive.c1k(result);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          if (!(result === get_POLL_FAILED())) {
            var tmp_0 = receive.d1k((result == null ? true : isObject(result)) ? result : THROW_CCE());
            cancellable.w1c(tmp_0, receive.h1k((result == null ? true : isObject(result)) ? result : THROW_CCE()));
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      tmp$ret$1 = cancellable.u1e();
    }
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    {
      var tmp0_also = $this.i1k(receive);
      {
      }
      {
        if (tmp0_also)
          $this.j1k();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return cont.v1c(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.l1k_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.k1k_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.y1c = function (cause) {
    if (this.k1k_1.s1d())
      this.l1k_1.m1k();
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.k1k_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.a1k_1 = cont;
    this.b1k_1 = receiveMode;
  }
  ReceiveElement.prototype.n1k = function () {
    return this.a1k_1;
  };
  ReceiveElement.prototype.d1k = function (value) {
    var tmp0_subject = this.b1k_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_0().p1k(value)) : value;
  };
  ReceiveElement.prototype.q1k = function (value, otherOp) {
    var tmp = this.d1k(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.a1k_1.t1c(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1k_1, this.h1k(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.u1k();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveElement.prototype.v1k = function (value) {
    return this.a1k_1.u1c(get_RESUME_TOKEN());
  };
  ReceiveElement.prototype.c1k = function (closed) {
    if (this.b1k_1 === 1) {
      var tmp$ret$2;
      {
        var tmp0_resume = this.a1k_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = Companion_getInstance_0().b1l(closed.z1k_1);
        }
        var tmp1_resume = tmp$ret$0;
        var tmp$ret$1;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
        }
        tmp$ret$2 = tmp0_resume.m3(tmp$ret$1);
      }
    } else {
      var tmp$ret$4;
      {
        var tmp2_resumeWithException = this.a1k_1;
        var tmp3_resumeWithException = closed.a1l();
        var tmp$ret$3;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
        }
        tmp$ret$4 = tmp2_resumeWithException.m3(tmp$ret$3);
      }
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.b1k_1 + ']';
  };
  ReceiveElement.$metadata$ = classMeta('ReceiveElement', undefined, undefined, undefined, undefined, Receive.prototype);
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.i1l_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.h1k = function (value) {
    return bindCancellationFun(this.i1l_1, value, this.n1k().l3());
  };
  ReceiveElementWithUndeliveredHandler.$metadata$ = classMeta('ReceiveElementWithUndeliveredHandler', undefined, undefined, undefined, undefined, ReceiveElement.prototype);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.w1j = function () {
    while (true) {
      var tmp0_elvis_lhs = this.l1l();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.p1l(null);
      if (!(token == null)) {
        {
        }
        send.q1l();
        return send.r1l();
      }
      send.s1l();
    }
  };
  AbstractChannel.prototype.t1l = function () {
    return !(this.u1l() == null) ? this.k1l() : false;
  };
  AbstractChannel.prototype.i1k = function (receive) {
    var tmp;
    if (this.j1l()) {
      var tmp$ret$1;
      $l$block: {
        var tmp0_addLastIfPrev = this.v1l();
        var tmp$ret$0;
        {
          var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.q1d_1;
          tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.v1g(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        var tmp2_addLastIfPrevAndIf = this.v1l();
        var tmp$ret$2;
        {
          var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.q1d_1;
          tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        {
          tmp$ret$4 = this.k1l();
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.v1g(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.w1l = function ($cont) {
    var result = this.w1j();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      {
        var tmp;
        if (result instanceof Closed) {
          tmp = Companion_getInstance_0().b1l(result.z1k_1);
        } else {
          var tmp_0 = Companion_getInstance_0();
          tmp = tmp_0.p1k((result == null ? true : isObject(result)) ? result : THROW_CCE());
        }
        tmp$ret$0 = tmp;
      }
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $cont);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return new ChannelResult(tmp_1.x1l_1);
  };
  AbstractChannel.prototype.x1b = function (cause) {
    if (this.t1l())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.y1l(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.y1l = function (cause) {
    var tmp$ret$0;
    {
      var tmp0_also = this.z1l(cause);
      {
      }
      {
        this.a1m(tmp0_also);
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.a1m = function (wasClosed) {
    var tmp0_elvis_lhs = this.b1m();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.q1d_1;
      }
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      {
      }
      if (!previous.s1d()) {
        previous.a1h();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.c1m(list, closed);
  };
  AbstractChannel.prototype.c1m = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.d1m(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.g(i);
                tmp1__anonymous__uwfjfc.d1m(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.e1m = function () {
    var tmp$ret$0;
    {
      var tmp0_also = AbstractSendChannel.prototype.e1m.call(this);
      {
      }
      {
        var tmp;
        if (!(tmp0_also == null)) {
          tmp = !(tmp0_also instanceof Closed);
        } else {
          tmp = false;
        }
        if (tmp)
          this.m1k();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.j1k = function () {
  };
  AbstractChannel.prototype.m1k = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = $this.q1j_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.p1d_1;
    }
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.g1m();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.q1m();
  }
  function sendSuspend($this, element, $cont) {
    var tmp$ret$3;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
      var tmp$ret$0;
      $l$block_2: {
        loop: while (true) {
          if (_get_isFullImpl__v905xu($this)) {
            var send = $this.p1j_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.p1j_1);
            var enqueueResult = $this.l1m(send);
            if (enqueueResult == null) {
              removeOnCancellation(cancellable, send);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              if (enqueueResult instanceof Closed) {
                helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_2;
              } else {
                if (enqueueResult === get_ENQUEUE_FAILED()) {
                } else {
                  if (enqueueResult instanceof Receive) {
                  } else {
                    var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                  }
                }
              }
            }
          }
          var offerResult = $this.h1m(element);
          if (offerResult === get_OFFER_SUCCESS()) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_success = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
              }
              tmp$ret$2 = cancellable.m3(tmp$ret$1);
            }
            tmp$ret$0 = Unit_getInstance();
            break $l$block_2;
          } else {
            if (offerResult === get_OFFER_FAILED())
              continue loop;
            else {
              if (offerResult instanceof Closed) {
                helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_2;
              } else {
                var tmp1_error = 'offerInternal returned ' + toString_0(offerResult);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
      tmp$ret$3 = cancellable.u1e();
    }
    return tmp$ret$3;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.q1m();
    var tmp0_safe_receiver = $this.p1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        addSuppressed(tmp1_safe_receiver, sendException);
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance();
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
          }
          tmp$ret$1 = _this__u8e3s4.m3(tmp$ret$0);
        }
        return Unit_getInstance();
      }
    }
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var tmp0_failure_0 = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
      }
      tmp$ret$4 = _this__u8e3s4.m3(tmp$ret$3);
    }
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.r1j_1.z19_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.r1j_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.q1d_1;
      }
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.s1d()) {
        previous.a1h();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.c1k(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp2__anonymous__z9zvc9 = list.g(i);
                tmp2__anonymous__z9zvc9.c1k(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.o1m(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = $this.q1j_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.p1d_1;
    }
    var head = tmp$ret$0;
    if (head === $this.q1j_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    {
      var tmp1__get_prevNode__b1i0ed = $this.q1j_1;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.q1d_1;
    }
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    {
      var tmp0_forEach = $this.q1j_1;
      var cur = tmp0_forEach.o1g();
      while (!equals(cur, tmp0_forEach)) {
        if (cur instanceof LinkedListNode) {
          var tmp1__anonymous__uwfjfc = cur;
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        cur = cur.p1d_1;
      }
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.u1m_1 = element;
  }
  SendBuffered.prototype.v1m = function () {
    return this.u1m_1;
  };
  SendBuffered.prototype.r1l = function () {
    return this.u1m_1;
  };
  SendBuffered.prototype.p1l = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.u1k();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  SendBuffered.prototype.q1l = function () {
  };
  SendBuffered.prototype.d1m = function (closed) {
    {
    }
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.u1m_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel(onUndeliveredElement) {
    this.p1j_1 = onUndeliveredElement;
    this.q1j_1 = new LinkedListHead();
    this.r1j_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.s1j = function () {
    return this.p1j_1;
  };
  AbstractSendChannel.prototype.v1l = function () {
    return this.q1j_1;
  };
  AbstractSendChannel.prototype.h1m = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.e1m();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.q1k(element, null);
      if (!(token == null)) {
        {
        }
        receive.v1k(element);
        return receive.c1l();
      }
    }
  };
  AbstractSendChannel.prototype.b1m = function () {
    var tmp$ret$0;
    {
      var tmp0__get_prevNode__2ljhpg = this.q1j_1;
      tmp$ret$0 = tmp0__get_prevNode__2ljhpg.q1d_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.u1l = function () {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = this.q1j_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.p1d_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.l1l = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.q1j_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.p1d_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.w1g();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.w1m = function (element) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.q1j_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      {
        var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.q1d_1;
        if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
          return tmp2__anonymous__z9zvc9;
        tmp$ret$0 = true;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.v1g(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.i1m = function () {
    return !(this.b1m() == null);
  };
  AbstractSendChannel.prototype.j1m = function (element, $cont) {
    if (this.h1m(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $cont);
  };
  AbstractSendChannel.prototype.k1m = function (element) {
    var result = this.h1m(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_0().p1k(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.b1m();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_0().x1m();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_0().b1l(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_0().b1l(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.l1m = function (send) {
    if (this.f1m()) {
      var tmp$ret$1;
      $l$block: {
        var tmp0_addLastIfPrev = this.q1j_1;
        var tmp$ret$0;
        {
          var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.q1d_1;
          if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
            return tmp1__anonymous__uwfjfc;
          tmp$ret$0 = true;
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.v1g(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        var tmp2_addLastIfPrevAndIf = this.q1j_1;
        var tmp$ret$2;
        {
          var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.q1d_1;
          if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
            return tmp3__anonymous__ufb84q;
          tmp$ret$2 = true;
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        {
          tmp$ret$4 = this.g1m();
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.v1g(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  AbstractSendChannel.prototype.z1l = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.q1j_1;
      var tmp$ret$0;
      {
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.q1d_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.v1g(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      {
        var tmp2__get_prevNode__jhgj3a = this.q1j_1;
        tmp$ret$2 = tmp2__get_prevNode__jhgj3a.q1d_1;
      }
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded)
      invokeOnCloseHandler(this, cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.n1m = function (handler) {
    if (!this.r1j_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.r1j_1.z19_1;
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.b1m();
      if (!(closedToken == null) ? this.r1j_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.z1k_1);
      }
    }
  };
  AbstractSendChannel.prototype.o1m = function (closed) {
  };
  AbstractSendChannel.prototype.e1m = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.q1j_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.p1d_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.w1g();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.p1m();
  };
  AbstractSendChannel.prototype.p1m = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.s1l = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.z1k_1 = closeCause;
  }
  Closed.prototype.q1m = function () {
    var tmp0_elvis_lhs = this.z1k_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.a1l = function () {
    var tmp0_elvis_lhs = this.z1k_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.c1l = function () {
    return this;
  };
  Closed.prototype.r1l = function () {
    return this;
  };
  Closed.prototype.p1l = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.u1k();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.q1l = function () {
  };
  Closed.prototype.q1k = function (value, otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.u1k();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.v1k = function (value) {
  };
  Closed.prototype.d1m = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.z1k_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.c1l = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.prototype.h1k = function (value) {
    return null;
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  function toResult(_this__u8e3s4) {
    init_properties_AbstractChannel_kt_mjk5bh();
    var tmp;
    if (_this__u8e3s4 instanceof Closed) {
      tmp = Companion_getInstance_0().b1l(_this__u8e3s4.z1k_1);
    } else {
      var tmp_0 = Companion_getInstance_0();
      tmp = tmp_0.p1k((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
    }
    return tmp;
  }
  function toResult_0(_this__u8e3s4) {
    init_properties_AbstractChannel_kt_mjk5bh();
    return Companion_getInstance_0().b1l(_this__u8e3s4.z1k_1);
  }
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.b1n_1 = pollResult;
    this.c1n_1 = cont;
  }
  SendElement.prototype.r1l = function () {
    return this.b1n_1;
  };
  SendElement.prototype.n1k = function () {
    return this.c1n_1;
  };
  SendElement.prototype.p1l = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.c1n_1.s1c(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1k_1);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.u1k();
    }
    return get_RESUME_TOKEN();
  };
  SendElement.prototype.q1l = function () {
    return this.c1n_1.u1c(get_RESUME_TOKEN());
  };
  SendElement.prototype.d1m = function (closed) {
    var tmp$ret$1;
    {
      var tmp0_resumeWithException = this.c1n_1;
      var tmp1_resumeWithException = closed.q1m();
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      }
      tmp$ret$1 = tmp0_resumeWithException.m3(tmp$ret$0);
    }
    return tmp$ret$1;
  };
  SendElement.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.r1l() + ')';
  };
  SendElement.$metadata$ = classMeta('SendElement', undefined, undefined, undefined, undefined, Send.prototype);
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.i1n_1 = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype.s1d = function () {
    if (!SendElement.prototype.s1d.call(this))
      return false;
    this.s1l();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.s1l = function () {
    callUndeliveredElement(this.i1n_1, this.r1l(), this.n1k().l3());
  };
  SendElementWithUndeliveredHandler.$metadata$ = classMeta('SendElementWithUndeliveredHandler', undefined, undefined, undefined, undefined, SendElement.prototype);
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.m1n_1) {
      $this.r1n_1.a1a_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.n1n_1;
    var tmp0 = tmp0_subject.k4();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.m1n_1) {
      ensureCapacity($this, currentSize);
      $this.p1n_1[($this.q1n_1 + currentSize | 0) % $this.p1n_1.length | 0] = element;
    } else {
      {
      }
      $this.p1n_1[$this.q1n_1 % $this.p1n_1.length | 0] = null;
      $this.p1n_1[($this.q1n_1 + currentSize | 0) % $this.p1n_1.length | 0] = element;
      $this.q1n_1 = ($this.q1n_1 + 1 | 0) % $this.p1n_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.p1n_1.length) {
      var tmp$ret$0;
      {
        var tmp0_min = imul($this.p1n_1.length, 2);
        var tmp1_min = $this.m1n_1;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      }
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
      }
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.p1n_1[($this.q1n_1 + i | 0) % $this.p1n_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.p1n_1 = newBuffer;
      $this.q1n_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.m1n_1 = capacity;
    this.n1n_1 = onBufferOverflow;
    {
      var tmp0_require = this.m1n_1 >= 1;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.m1n_1 + ' was specified';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    this.o1n_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_min = this.m1n_1;
          tmp$ret$1 = Math.min(tmp0_min, 8);
        }
        var tmp1_arrayOfNulls = tmp$ret$1;
        tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
      }
      var tmp2_apply = tmp$ret$2;
      {
      }
      {
        var tmp_0 = get_EMPTY();
        fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
      }
      tmp$ret$3 = tmp2_apply;
    }
    tmp.p1n_1 = tmp$ret$3;
    this.q1n_1 = 0;
    this.r1n_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.j1l = function () {
    return false;
  };
  ArrayChannel.prototype.k1l = function () {
    return this.r1n_1.a1a_1 === 0;
  };
  ArrayChannel.prototype.f1m = function () {
    return false;
  };
  ArrayChannel.prototype.g1m = function () {
    return this.r1n_1.a1a_1 === this.m1n_1 ? this.n1n_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  ArrayChannel.prototype.t1l = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.o1n_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.t1l.call(this);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.h1m = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.o1n_1;
      var tmp$ret$2;
      $l$block: {
        var size = this.r1n_1.a1a_1;
        var tmp0_safe_receiver = this.b1m();
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            return tmp0_safe_receiver;
          }
        }
        var tmp1_safe_receiver = updateBufferSize(this, size);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          {
            {
            }
            return tmp1_safe_receiver;
          }
        }
        if (size === 0) {
          loop: while (true) {
            var tmp2_elvis_lhs = this.e1m();
            var tmp;
            if (tmp2_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp2_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              this.r1n_1.a1a_1 = size;
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).q1k(element, null);
            if (!(token == null)) {
              {
              }
              this.r1n_1.a1a_1 = size;
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        enqueueElement(this, size, element);
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$2;
    }
    ensureNotNull(receive).v1k(element);
    return ensureNotNull(receive).c1l();
  };
  ArrayChannel.prototype.l1m = function (send) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.o1n_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.l1m.call(this, send);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.w1j = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.o1n_1;
      var size = this.r1n_1.a1a_1;
      if (size === 0) {
        var tmp0_elvis_lhs = this.b1m();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.p1n_1[this.q1n_1];
      this.p1n_1[this.q1n_1] = null;
      this.r1n_1.a1a_1 = size - 1 | 0;
      var replacement = get_POLL_FAILED();
      if (size === this.m1n_1) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.l1l();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          send = tmp;
          var token = ensureNotNull(send).p1l(null);
          if (!(token == null)) {
            {
            }
            resumed = true;
            replacement = ensureNotNull(send).r1l();
            break loop;
          }
          ensureNotNull(send).s1l();
        }
      }
      var tmp_0;
      if (!(replacement === get_POLL_FAILED())) {
        tmp_0 = !(replacement instanceof Closed);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.r1n_1.a1a_1 = size;
        this.p1n_1[(this.q1n_1 + size | 0) % this.p1n_1.length | 0] = replacement;
      }
      this.q1n_1 = (this.q1n_1 + 1 | 0) % this.p1n_1.length | 0;
      tmp$ret$0 = Unit_getInstance();
    }
    if (resumed)
      ensureNotNull(send).q1l();
    return result;
  };
  ArrayChannel.prototype.i1k = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.o1n_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.i1k.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.a1m = function (wasClosed) {
    var onUndeliveredElement = this.s1j();
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.o1n_1;
      {
        var tmp0_repeat = this.r1n_1.a1a_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var value = this.p1n_1[this.q1n_1];
              if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
                undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
              }
              this.p1n_1[this.q1n_1] = get_EMPTY();
              this.q1n_1 = (this.q1n_1 + 1 | 0) % this.p1n_1.length | 0;
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
      this.r1n_1.a1a_1 = 0;
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.a1m.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ArrayChannel.prototype.p1m = function () {
    return '(buffer:capacity=' + this.m1n_1 + ',size=' + this.r1n_1.a1a_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.s1n_1 = 2147483647;
    this.t1n_1 = 0;
    this.u1n_1 = -1;
    this.v1n_1 = -2;
    this.w1n_1 = -3;
    this.x1n_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.y1n_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).z1n_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).z1n_1;
    {
      var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1n_1;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.z1n_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.z1n_1, other.z1n_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    {
      var tmp0_hashCode = this.z1n_1;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.z1n_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.o1k_1 = new Failed();
  }
  Companion.prototype.p1k = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.x1m = function () {
    return _ChannelResult___init__impl__siwsuf(this.o1k_1);
  };
  Companion.prototype.b1l = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.x1l_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.x1l_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.x1l_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.x1l_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.x1l_1, other);
  };
  ChannelResult.$metadata$ = classMeta('ChannelResult');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        {
          var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
          {
          }
          if (!tmp0_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
            }
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().y1n_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.d1o_1 = _channel;
  }
  ChannelCoroutine.prototype.e1o = function () {
    return this.d1o_1;
  };
  ChannelCoroutine.prototype.i1m = function () {
    return this.d1o_1.i1m();
  };
  ChannelCoroutine.prototype.z1l = function (cause) {
    return this.d1o_1.z1l(cause);
  };
  ChannelCoroutine.prototype.n1m = function (handler) {
    this.d1o_1.n1m(handler);
  };
  ChannelCoroutine.prototype.w1l = function ($cont) {
    var tmp = this.d1o_1.w1l($cont);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.x1l_1);
  };
  ChannelCoroutine.prototype.j1m = function (element, $cont) {
    return this.d1o_1.j1m(element, $cont);
  };
  ChannelCoroutine.prototype.k1m = function (element) {
    return this.d1o_1.k1m(element);
  };
  ChannelCoroutine.prototype.x1b = function (cause) {
    if (this.n1b())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.v1a() : tmp0_elvis_lhs_0, null, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.y1b(tmp);
  };
  ChannelCoroutine.prototype.y1b = function (cause) {
    var exception = this.s1b(cause, null, 1, null);
    this.d1o_1.x1b(exception);
    this.j1i(exception);
  };
  ChannelCoroutine.$metadata$ = classMeta('ChannelCoroutine', [Channel], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
          tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.x1b(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.j1o_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.s1j();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.j1o_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.i1o_1 = new NoOpLock();
    this.j1o_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.j1l = function () {
    return false;
  };
  ConflatedChannel.prototype.k1l = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.i1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = this.j1o_1 === get_EMPTY();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.f1m = function () {
    return false;
  };
  ConflatedChannel.prototype.g1m = function () {
    return false;
  };
  ConflatedChannel.prototype.h1m = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.i1o_1;
      var tmp$ret$1;
      $l$block: {
        var tmp0_safe_receiver = this.b1m();
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            return tmp0_safe_receiver;
          }
        }
        if (this.j1o_1 === get_EMPTY()) {
          loop: while (true) {
            var tmp1_elvis_lhs = this.e1m();
            var tmp;
            if (tmp1_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp1_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).q1k(element, null);
            if (!(token == null)) {
              {
              }
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        var tmp2_safe_receiver = updateValueLocked(this, element);
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          {
            {
            }
            throw tmp2_safe_receiver;
          }
        }
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$1;
    }
    ensureNotNull(receive).v1k(element);
    return ensureNotNull(receive).c1l();
  };
  ConflatedChannel.prototype.w1j = function () {
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.i1o_1;
      if (this.j1o_1 === get_EMPTY()) {
        var tmp0_elvis_lhs = this.b1m();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.j1o_1;
      this.j1o_1 = get_EMPTY();
      tmp$ret$0 = Unit_getInstance();
    }
    return result;
  };
  ConflatedChannel.prototype.a1m = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.i1o_1;
      undeliveredElementException = updateValueLocked(this, get_EMPTY());
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.a1m.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ConflatedChannel.prototype.i1k = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.i1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.i1k.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.p1m = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.i1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = '(value=' + toString(this.j1o_1) + ')';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.j1l = function () {
    return true;
  };
  LinkedListChannel.prototype.k1l = function () {
    return true;
  };
  LinkedListChannel.prototype.f1m = function () {
    return false;
  };
  LinkedListChannel.prototype.g1m = function () {
    return false;
  };
  LinkedListChannel.prototype.h1m = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.h1m.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.w1m(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.c1m = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.s1j();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.u1m_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.d1m(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.g(i);
                var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
                if (tmp0_subject_1 instanceof SendBuffered) {
                  var tmp1_safe_receiver_0 = this.s1j();
                  var tmp_3;
                  if (tmp1_safe_receiver_0 == null) {
                    tmp_3 = null;
                  } else {
                    var tmp_4 = tmp1__anonymous__uwfjfc.u1m_1;
                    tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                  }
                  undeliveredElementException = tmp_3;
                } else {
                  tmp1__anonymous__uwfjfc.d1m(closed);
                }
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function produce(_this__u8e3s4, context, capacity, block) {
    return produce_0(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function ProducerScope() {
  }
  ProducerScope.$metadata$ = interfaceMeta('ProducerScope', [CoroutineScope, SendChannel]);
  function produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    var channel = Channel$default(capacity, onBufferOverflow, null, 4, null);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.i1i(onCompletion);
    }
    coroutine.f1b(start, coroutine, block);
    return coroutine;
  }
  function produce$default(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 8) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    if (!(($mask0 & 16) === 0))
      onCompletion = null;
    return produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block);
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  ProducerCoroutine.prototype.s1a = function () {
    return ChannelCoroutine.prototype.s1a.call(this);
  };
  ProducerCoroutine.prototype.r1o = function (value) {
    var tmp = this.e1o();
    tmp.m1m(null, 1, null);
  };
  ProducerCoroutine.prototype.t1a = function (value) {
    return this.r1o(value instanceof Unit ? value : THROW_CCE());
  };
  ProducerCoroutine.prototype.u1a = function (cause, handled) {
    var processed = this.e1o().z1l(cause);
    if (!processed ? !handled : false)
      handleCoroutineException(this.l3(), cause);
  };
  ProducerCoroutine.$metadata$ = classMeta('ProducerCoroutine', [ProducerScope], undefined, undefined, undefined, ChannelCoroutine.prototype);
  function awaitClose(_this__u8e3s4, block, $cont) {
    var tmp = new $awaitCloseCOROUTINE$2(_this__u8e3s4, block, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  }
  function awaitClose$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        }
        tmp$ret$1 = $cancellable.m3(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function $awaitCloseCOROUTINE$2(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1p_1 = _this__u8e3s4;
    this.b1p_1 = block;
  }
  $awaitCloseCOROUTINE$2.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 5;
            var tmp_0 = this;
            tmp_0.c1p_1 = this.l3().p3(Key_getInstance_2()) === this.a1p_1;
            if (!this.c1p_1) {
              var message = 'awaitClose() can only be invoked from the producer context';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 4;
            this.zh_1 = 2;
            var tmp_1 = this;
            tmp_1.e1p_1 = this;
            this.f1p_1 = new CancellableContinuationImpl(intercepted(this.e1p_1), get_MODE_CANCELLABLE());
            this.f1p_1.l1e();
            this.a1p_1.n1m(awaitClose$lambda(this.f1p_1));
            suspendResult = returnIfSuspended(this.f1p_1.u1e(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d1p_1 = suspendResult;
            this.ai_1 = 5;
            this.zh_1 = 3;
            continue $sm;
          case 3:
            this.b1p_1();
            return Unit_getInstance();
          case 4:
            this.ai_1 = 5;
            var t = this.ci_1;
            this.b1p_1();
            throw t;
          case 5:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 5) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $awaitCloseCOROUTINE$2.$metadata$ = classMeta('$awaitCloseCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.j1l = function () {
    return true;
  };
  RendezvousChannel.prototype.k1l = function () {
    return true;
  };
  RendezvousChannel.prototype.f1m = function () {
    return true;
  };
  RendezvousChannel.prototype.g1m = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function flowOf(value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv(value);
    }
    return tmp$ret$0;
  }
  function callbackFlow(block) {
    return CallbackFlowBuilder_init_$Create$(block, null, 0, null, 14, null);
  }
  function CallbackFlowBuilder_init_$Init$(block, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 4) === 0)) {
      Factory_getInstance();
      capacity = -2;
    }
    if (!(($mask0 & 8) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    CallbackFlowBuilder.call($this, block, context, capacity, onBufferOverflow);
    return $this;
  }
  function CallbackFlowBuilder_init_$Create$(block, context, capacity, onBufferOverflow, $mask0, $marker) {
    return CallbackFlowBuilder_init_$Init$(block, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(CallbackFlowBuilder.prototype));
  }
  function $collectToCOROUTINE$3(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1p_1 = _this__u8e3s4;
    this.s1p_1 = scope;
  }
  $collectToCOROUTINE$3.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = ChannelFlowBuilder.prototype.x1p.call(this.r1p_1, this.s1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!this.s1p_1.i1m()) {
              throw IllegalStateException_init_$Create$("'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\nOtherwise, a callback/listener may leak in case of external cancellation.\nSee callbackFlow API documentation for the details.");
            }

            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectToCOROUTINE$3.$metadata$ = classMeta('$collectToCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CallbackFlowBuilder(block, context, capacity, onBufferOverflow) {
    ChannelFlowBuilder.call(this, block, context, capacity, onBufferOverflow);
    this.c1q_1 = block;
  }
  CallbackFlowBuilder.prototype.x1p = function (scope, $cont) {
    var tmp = new $collectToCOROUTINE$3(this, scope, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  CallbackFlowBuilder.$metadata$ = classMeta('CallbackFlowBuilder', undefined, undefined, undefined, undefined, ChannelFlowBuilder.prototype);
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.w1p_1 = block;
  }
  ChannelFlowBuilder.prototype.x1p = function (scope, $cont) {
    return this.w1p_1(scope, $cont);
  };
  ChannelFlowBuilder.prototype.toString = function () {
    return 'block[' + this.w1p_1 + '] -> ' + ChannelFlow.prototype.toString.call(this);
  };
  ChannelFlowBuilder.$metadata$ = classMeta('ChannelFlowBuilder', undefined, undefined, undefined, undefined, ChannelFlow.prototype);
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1q_1 = _this__u8e3s4;
    this.u1q_1 = collector;
  }
  $collectCOROUTINE$5.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.u1q_1.w1q(this.t1q_1.v1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$5.$metadata$ = classMeta('$collectCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv($value) {
    this.v1q_1 = $value;
  }
  _no_name_provided__qut3iv.prototype.j1q = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function emitAll(_this__u8e3s4, channel, $cont) {
    return emitAllImpl(_this__u8e3s4, channel, true, $cont);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $cont) {
    var tmp = new $emitAllImplCOROUTINE$6(_this__u8e3s4, channel, consume, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  }
  function $emitAllImplCOROUTINE$6(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1r_1 = _this__u8e3s4;
    this.g1r_1 = channel;
    this.h1r_1 = consume;
  }
  $emitAllImplCOROUTINE$6.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 11;
            ensureActive_1(this.f1r_1);
            this.i1r_1 = null;
            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 9;
            this.ai_1 = 8;
            this.zh_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.zh_1 = 7;
              continue $sm;
            }

            this.zh_1 = 3;
            suspendResult = this.g1r_1.w1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.zh_1 = 4;
            continue $sm;
          case 3:
            this.k1r_1 = suspendResult.x1l_1;
            suspendResult = new ChannelResult(this.k1r_1);
            this.zh_1 = 4;
            continue $sm;
          case 4:
            this.l1r_1 = suspendResult.x1l_1;
            if (_ChannelResult___get_isClosed__impl__mg7kuu(this.l1r_1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.l1r_1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              this.zh_1 = 7;
              continue $sm;
            } else {
              this.zh_1 = 5;
              continue $sm;
            }

            break;
          case 5:
            this.zh_1 = 6;
            suspendResult = this.f1r_1.w1q(ChannelResult__getOrThrow_impl_od1axs(this.l1r_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.zh_1 = 2;
            continue $sm;
          case 7:
            this.j1r_1 = Unit_getInstance();
            this.ai_1 = 11;
            this.zh_1 = 10;
            continue $sm;
          case 8:
            this.ai_1 = 9;
            var tmp_0 = this.ci_1;
            if (tmp_0 instanceof Error) {
              var e = this.ci_1;
              var tmp_1 = this;
              this.i1r_1 = e;
              throw e;
            } else {
              throw this.ci_1;
            }

            break;
          case 9:
            this.ai_1 = 11;
            var t = this.ci_1;
            if (this.h1r_1)
              cancelConsumed(this.g1r_1, this.i1r_1);
            throw t;
          case 10:
            if (this.h1r_1)
              cancelConsumed(this.g1r_1, this.i1r_1);
            return Unit_getInstance();
          case 11:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 11) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $emitAllImplCOROUTINE$6.$metadata$ = classMeta('$emitAllImplCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Flow() {
  }
  Flow.$metadata$ = interfaceMeta('Flow');
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = interfaceMeta('FlowCollector');
  function get_NO_VALUE() {
    init_properties_SharedFlow_kt_5sqb47();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  MutableSharedFlow.$metadata$ = interfaceMeta('MutableSharedFlow', [SharedFlow, FlowCollector]);
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_5sqb47();
    {
      var tmp0_require = replay >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    {
      var tmp1_require = extraBufferCapacity >= 0;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
        }
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
    }
    {
      var tmp2_require = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
      {
      }
      if (!tmp2_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
        }
        var message_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString_0(message_1));
      }
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().m_1 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function MutableSharedFlow$default(replay, extraBufferCapacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      replay = 0;
    if (!(($mask0 & 2) === 0))
      extraBufferCapacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow);
  }
  function SharedFlow() {
  }
  SharedFlow.$metadata$ = interfaceMeta('SharedFlow', [Flow]);
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    {
      var tmp0_minOf = $this.w1r_1;
      var tmp1_minOf = $this.v1r_1;
      tmp$ret$0 = tmp0_minOf.v(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    }
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    {
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = $this.x1r_1;
      tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
    }
    return tmp$ret$0.q4($this.v1r_1).j5();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.x1r_1 + $this.y1r_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    {
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = $this.x1r_1;
      tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
    }
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = $this.x1r_1;
        tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
      }
      var tmp2_plus = tmp$ret$0;
      var tmp3_plus = $this.y1r_1;
      tmp$ret$1 = tmp2_plus.p4(toLong(tmp3_plus));
    }
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.d1s() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.x1r_1 >= $this.s1r_1 ? $this.w1r_1.v($this.v1r_1) <= 0 : false) {
      var tmp0_subject = $this.t1r_1;
      var tmp0 = tmp0_subject.k4();
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.x1r_1;
    tmp1_this.x1r_1 = tmp2 + 1 | 0;
    if ($this.x1r_1 > $this.s1r_1)
      dropOldestLocked($this);
    if (_get_replaySize__dxgnb1($this) > $this.r1r_1) {
      var tmp$ret$0;
      {
        var tmp0_plus = $this.v1r_1;
        tmp$ret$0 = tmp0_plus.p4(new Long(1, 0));
      }
      updateBufferLocked($this, tmp$ret$0, $this.w1r_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    {
    }
    if ($this.r1r_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.x1r_1;
    tmp0_this.x1r_1 = tmp1 + 1 | 0;
    if ($this.x1r_1 > $this.r1r_1)
      dropOldestLocked($this);
    var tmp = $this;
    var tmp$ret$0;
    {
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = $this.x1r_1;
      tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
    }
    tmp.w1r_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.u1r_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.x1r_1;
    tmp0_this.x1r_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    {
      var tmp0_plus = _get_head__d7jo8b($this);
      tmp$ret$0 = tmp0_plus.p4(new Long(1, 0));
    }
    var newHead = tmp$ret$0;
    if ($this.v1r_1.v(newHead) < 0)
      $this.v1r_1 = newHead;
    if ($this.w1r_1.v(newHead) < 0)
      correctCollectorIndexesOnDropOldest($this, newHead);
    {
    }
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      if ($this.a1s_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.z1r_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              if (!(element == null)) {
                if (element.e1s_1.v(new Long(0, 0)) >= 0 ? element.e1s_1.v(newHead) < 0 : false) {
                  element.e1s_1 = newHead;
                }
              }
            }
          }
        }
      }
    }
    $this.w1r_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.u1r_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    {
      var tmp0_plus = _get_head__d7jo8b($this);
      tmp$ret$0 = tmp0_plus.p4(toLong(curSize));
    }
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    {
      var tmp0_check = newSize > 0;
      {
      }
      if (!tmp0_check) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Buffer size overflow';
        }
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
      }
      var tmp1_also = tmp$ret$1;
      {
      }
      {
        $this.u1r_1 = tmp1_also;
      }
      tmp$ret$2 = tmp1_also;
    }
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        {
          tmp$ret$3 = head.p4(toLong(i));
        }
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        {
          tmp$ret$4 = head.p4(toLong(i));
        }
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $cont) {
    var tmp$ret$9;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.l1e();
      {
        var resumes = get_EMPTY_RESUMES();
        var tmp$ret$5;
        {
          var tmp$ret$2;
          $l$block: {
            if (tryEmitLocked($this, value)) {
              var tmp$ret$1;
              {
                var tmp$ret$0;
                {
                  var tmp0_success = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
                }
                tmp$ret$1 = cancellable.m3(tmp$ret$0);
              }
              resumes = findSlotsToResumeLocked($this, resumes);
              tmp$ret$2 = null;
              break $l$block;
            }
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                var tmp0_plus = _get_head__d7jo8b($this);
                var tmp1_plus = _get_totalSize__xhdb3o($this);
                tmp$ret$3 = tmp0_plus.p4(toLong(tmp1_plus));
              }
              var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
              {
              }
              {
                enqueueLocked($this, tmp2_also);
                var tmp0_this = $this;
                var tmp1 = tmp0_this.y1r_1;
                tmp0_this.y1r_1 = tmp1 + 1 | 0;
                if ($this.s1r_1 === 0)
                  resumes = findSlotsToResumeLocked($this, resumes);
              }
              tmp$ret$4 = tmp2_also;
            }
            tmp$ret$2 = tmp$ret$4;
          }
          tmp$ret$5 = tmp$ret$2;
        }
        var emitter = tmp$ret$5;
        var tmp0_safe_receiver = emitter;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$6;
          {
            {
            }
            tmp$ret$6 = disposeOnCancellation(cancellable, tmp0_safe_receiver);
          }
        }
        var indexedObject = resumes;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var r = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp2_safe_receiver = r;
          if (tmp2_safe_receiver == null)
            null;
          else {
            var tmp$ret$8;
            {
              var tmp$ret$7;
              {
                var tmp0_success_0 = Companion_getInstance();
                tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
              }
              tmp$ret$8 = tmp2_safe_receiver.m3(tmp$ret$7);
            }
          }
        }
      }
      tmp$ret$9 = cancellable.u1e();
    }
    return tmp$ret$9;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    {
      if (emitter.h1s_1.v(_get_head__d7jo8b($this)) < 0)
        return Unit_getInstance();
      var buffer = ensureNotNull($this.u1r_1);
      if (!(getBufferAt(buffer, emitter.h1s_1) === emitter))
        return Unit_getInstance();
      setBufferAt(buffer, emitter.h1s_1, get_NO_VALUE());
      tmp$ret$0 = cleanupTailLocked($this);
    }
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    {
      tmp$ret$0 = newMinCollectorIndex.v(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    }
    var newHead = tmp$ret$0;
    {
    }
    var inductionVariable = _get_head__d7jo8b($this);
    var step = new Long(1, 0);
    if (inductionVariable.v(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.p4(step);
        setBufferAt(ensureNotNull($this.u1r_1), index, null);
      }
       while (inductionVariable.v(newHead) < 0);
    $this.v1r_1 = newReplayIndex;
    $this.w1r_1 = newMinCollectorIndex;
    $this.x1r_1 = newBufferEndIndex.q4(newHead).j5();
    $this.y1r_1 = newQueueEndIndex.q4(newBufferEndIndex).j5();
    {
    }
    {
    }
    {
    }
  }
  function cleanupTailLocked($this) {
    if ($this.s1r_1 === 0 ? $this.y1r_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.u1r_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.y1r_1 > 0) {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_plus = _get_head__d7jo8b($this);
            var tmp1_plus = _get_totalSize__xhdb3o($this);
            tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
          }
          var tmp2_minus = tmp$ret$0;
          tmp$ret$1 = tmp2_minus.q4(new Long(1, 0));
        }
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.y1r_1;
      tmp0_this.y1r_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      {
        var tmp3_plus = _get_head__d7jo8b($this);
        var tmp4_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$2 = tmp3_plus.p4(toLong(tmp4_plus));
      }
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var index = tryPeekLocked($this, slot);
        var tmp;
        if (index.v(new Long(0, 0)) < 0) {
          tmp = get_NO_VALUE();
        } else {
          var oldIndex = slot.e1s_1;
          var newValue = getPeekedValueLockedAt($this, index);
          var tmp_0 = slot;
          var tmp$ret$0;
          {
            tmp$ret$0 = index.p4(new Long(1, 0));
          }
          tmp_0.e1s_1 = tmp$ret$0;
          resumes = $this.k1s(oldIndex);
          tmp = newValue;
        }
        tmp$ret$1 = tmp;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp$ret$4 = tmp1_safe_receiver.m3(tmp$ret$3);
        }
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.e1s_1;
    if (index.v(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.s1r_1 > 0)
      return new Long(-1, -1);
    if (index.v(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.y1r_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.u1r_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.i1s_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $cont) {
    var tmp$ret$4;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.l1e();
      {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          $l$block: {
            var index = tryPeekLocked($this, slot);
            if (index.v(new Long(0, 0)) < 0) {
              slot.f1s_1 = cancellable;
            } else {
              var tmp$ret$1;
              {
                var tmp$ret$0;
                {
                  var tmp0_success = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
                }
                tmp$ret$1 = cancellable.m3(tmp$ret$0);
              }
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            }
            slot.f1s_1 = cancellable;
          }
          tmp$ret$3 = tmp$ret$2;
        }
      }
      tmp$ret$4 = cancellable.u1e();
    }
    return tmp$ret$4;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      if ($this.a1s_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.z1r_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              if (!(element == null)) {
                var tmp$ret$1;
                $l$block_1: {
                  var tmp0_elvis_lhs = element.f1s_1;
                  var tmp;
                  if (tmp0_elvis_lhs == null) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_1;
                  } else {
                    tmp = tmp0_elvis_lhs;
                  }
                  var cont = tmp;
                  if (tryPeekLocked($this, element).v(new Long(0, 0)) < 0) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_1;
                  }
                  if (resumeCount >= resumes.length) {
                    var tmp_0 = resumes;
                    var tmp$ret$2;
                    {
                      var tmp0_maxOf = imul(2, resumes.length);
                      tmp$ret$2 = Math.max(2, tmp0_maxOf);
                    }
                    resumes = copyOf(tmp_0, tmp$ret$2);
                  }
                  var tmp_1 = resumes;
                  var tmp1 = resumeCount;
                  resumeCount = tmp1 + 1 | 0;
                  tmp_1[tmp1] = cont;
                  element.f1s_1 = null;
                }
              }
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.g1s_1 = flow;
    this.h1s_1 = index;
    this.i1s_1 = value;
    this.j1s_1 = cont;
  }
  Emitter.prototype.z1c = function () {
    return cancelEmitter(this.g1s_1, this);
  };
  Emitter.$metadata$ = classMeta('Emitter', [DisposableHandle]);
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1s_1 = _this__u8e3s4;
    this.u1s_1 = collector;
  }
  $collectCOROUTINE$7.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 13;
            this.v1s_1 = this.t1s_1.z1s();
            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 12;
            var tmp_0 = this.u1s_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.zh_1 = 2;
              suspendResult = this.u1s_1.c1t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zh_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.x1s_1 = this.l3().p3(Key_getInstance_2());
            this.zh_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.zh_1 = 10;
              continue $sm;
            }

            this.zh_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.zh_1 = 8;
              continue $sm;
            }

            this.y1s_1 = tryTakeValue(this.t1s_1, this.v1s_1);
            if (!(this.y1s_1 === get_NO_VALUE())) {
              this.zh_1 = 8;
              continue $sm;
            } else {
              this.zh_1 = 6;
              continue $sm;
            }

            break;
          case 6:
            this.zh_1 = 7;
            suspendResult = awaitValue(this.t1s_1, this.v1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.zh_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.x1s_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.zh_1 = 9;
            var tmp_2 = this.y1s_1;
            suspendResult = this.u1s_1.w1q((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.zh_1 = 4;
            continue $sm;
          case 10:
            this.w1s_1 = Unit_getInstance();
            this.ai_1 = 13;
            this.zh_1 = 11;
            continue $sm;
          case 11:
            this.t1s_1.d1t(this.v1s_1);
            return Unit_getInstance();
          case 12:
            this.ai_1 = 13;
            var t = this.ci_1;
            this.t1s_1.d1t(this.v1s_1);
            throw t;
          case 13:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 13) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$7.$metadata$ = classMeta('$collectCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.r1r_1 = replay;
    this.s1r_1 = bufferCapacity;
    this.t1r_1 = onBufferOverflow;
    this.u1r_1 = null;
    this.v1r_1 = new Long(0, 0);
    this.w1r_1 = new Long(0, 0);
    this.x1r_1 = 0;
    this.y1r_1 = 0;
  }
  SharedFlowImpl.prototype.e1t = function () {
    var tmp = ensureNotNull(this.u1r_1);
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0_plus = this.v1r_1;
        var tmp1_plus = _get_replaySize__dxgnb1(this);
        tmp$ret$0 = tmp0_plus.p4(toLong(tmp1_plus));
      }
      var tmp2_minus = tmp$ret$0;
      tmp$ret$1 = tmp2_minus.q4(new Long(1, 0));
    }
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  SharedFlowImpl.prototype.m1r = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  SharedFlowImpl.prototype.j1q = function (collector, $cont) {
    return this.m1r(collector, $cont);
  };
  SharedFlowImpl.prototype.f1t = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp;
        if (tryEmitLocked(this, value)) {
          resumes = findSlotsToResumeLocked(this, resumes);
          tmp = true;
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp$ret$3 = tmp1_safe_receiver.m3(tmp$ret$2);
        }
      }
    }
    return emitted;
  };
  SharedFlowImpl.prototype.w1q = function (value, $cont) {
    if (this.f1t(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $cont);
  };
  SharedFlowImpl.prototype.g1t = function () {
    var index = this.v1r_1;
    if (index.v(this.w1r_1) < 0)
      this.w1r_1 = index;
    return index;
  };
  SharedFlowImpl.prototype.k1s = function (oldIndex) {
    {
    }
    if (oldIndex.v(this.w1r_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    {
      var tmp0_plus = this.x1r_1;
      tmp$ret$0 = head.p4(toLong(tmp0_plus));
    }
    var newMinCollectorIndex = tmp$ret$0;
    if (this.s1r_1 === 0 ? this.y1r_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.mh();
    }
    var tmp$ret$1;
    $l$block: {
      if (this.a1s_1 === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.z1r_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              if (!(element == null)) {
                if (element.e1s_1.v(new Long(0, 0)) >= 0 ? element.e1s_1.v(newMinCollectorIndex) < 0 : false)
                  newMinCollectorIndex = element.e1s_1;
              }
            }
          }
        }
      }
    }
    {
    }
    if (newMinCollectorIndex.v(this.w1r_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.d1s() > 0) {
      var newBufferSize0 = newBufferEndIndex.q4(newMinCollectorIndex).j5();
      var tmp$ret$2;
      {
        var tmp1_minOf = this.y1r_1;
        var tmp2_minOf = this.s1r_1 - newBufferSize0 | 0;
        tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      }
      tmp = tmp$ret$2;
    } else {
      tmp = this.y1r_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    {
      var tmp3_plus = newBufferEndIndex;
      var tmp4_plus = this.y1r_1;
      tmp$ret$3 = tmp3_plus.p4(toLong(tmp4_plus));
    }
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      {
        tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      }
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.u1r_1);
      var inductionVariable = newBufferEndIndex;
      var step = new Long(1, 0);
      if (inductionVariable.v(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.p4(step);
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.j1s_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.i1s_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.mh();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.v(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.q4(head).j5();
    if (this.d1s() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    {
      var tmp8_maxOf = this.v1r_1;
      var tmp$ret$6;
      {
        var tmp6_minus = newBufferEndIndex;
        var tmp$ret$5;
        {
          var tmp5_minOf = this.r1r_1;
          tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
        }
        var tmp7_minus = tmp$ret$5;
        tmp$ret$6 = tmp6_minus.q4(toLong(tmp7_minus));
      }
      var tmp9_maxOf = tmp$ret$6;
      tmp$ret$7 = tmp8_maxOf.v(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    }
    var newReplayIndex = tmp$ret$7;
    if ((this.s1r_1 === 0 ? newReplayIndex.v(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.u1r_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.mh();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.mh();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    {
      var tmp10_isNotEmpty = resumes;
      var tmp$ret$8;
      {
        tmp$ret$8 = tmp10_isNotEmpty.length === 0;
      }
      tmp$ret$9 = !tmp$ret$8;
    }
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  SharedFlowImpl.prototype.h1t = function () {
    return new SharedFlowSlot();
  };
  SharedFlowImpl.prototype.i1t = function (size) {
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(size), null);
    }
    return tmp$ret$0;
  };
  SharedFlowImpl.$metadata$ = classMeta('SharedFlowImpl', [MutableSharedFlow, CancellableFlow, FusibleFlow], undefined, undefined, undefined, AbstractSharedFlow.prototype);
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.e1s_1 = new Long(-1, -1);
    this.f1s_1 = null;
  }
  SharedFlowSlot.prototype.l1t = function (_set____db54di) {
    this.e1s_1 = _set____db54di;
  };
  SharedFlowSlot.prototype.p2 = function () {
    return this.e1s_1;
  };
  SharedFlowSlot.prototype.m1t = function (_set____db54di) {
    this.f1s_1 = _set____db54di;
  };
  SharedFlowSlot.prototype.n1k = function () {
    return this.f1s_1;
  };
  SharedFlowSlot.prototype.n1t = function (flow) {
    if (this.e1s_1.v(new Long(0, 0)) >= 0)
      return false;
    this.e1s_1 = flow.g1t();
    return true;
  };
  SharedFlowSlot.prototype.o1t = function (flow) {
    return this.n1t(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.prototype.p1t = function (flow) {
    {
    }
    var oldIndex = this.e1s_1;
    this.e1s_1 = new Long(-1, -1);
    this.f1s_1 = null;
    return flow.k1s(oldIndex);
  };
  SharedFlowSlot.prototype.q1t = function (flow) {
    return this.p1t(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.$metadata$ = classMeta('SharedFlowSlot', undefined, undefined, undefined, undefined, AbstractSharedFlowSlot.prototype);
  function getBufferAt(_this__u8e3s4, index) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.j5() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    init_properties_SharedFlow_kt_5sqb47();
    return _this__u8e3s4[index.j5() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function init_properties_SharedFlow_kt_5sqb47() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    init_properties_StateFlow_kt_6znnsl();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    init_properties_StateFlow_kt_6znnsl();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
  }
  MutableStateFlow.$metadata$ = interfaceMeta('MutableStateFlow', [StateFlow, MutableSharedFlow]);
  function MutableStateFlow_0(value) {
    init_properties_StateFlow_kt_6znnsl();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function StateFlow() {
  }
  StateFlow.$metadata$ = interfaceMeta('StateFlow', [SharedFlow]);
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.j1t();
    var tmp$ret$0;
    {
      var oldState = $this.v1t_1.z19_1;
      if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
        return false;
      if (equals(oldState, newState))
        return true;
      $this.v1t_1.z19_1 = newState;
      curSequence = $this.w1t_1;
      if ((curSequence & 1) === 0) {
        var tmp0 = curSequence;
        curSequence = tmp0 + 1 | 0;
        $this.w1t_1 = curSequence;
      } else {
        $this.w1t_1 = curSequence + 2 | 0;
        return true;
      }
      curSlots = $this.j1t();
      tmp$ret$0 = Unit_getInstance();
    }
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              var tmp0_safe_receiver_0 = element;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                tmp0_safe_receiver_0.y1t();
              }
            }
          }
        }
      }
      var tmp$ret$1;
      {
        if ($this.w1t_1 === curSequence) {
          $this.w1t_1 = curSequence + 1 | 0;
          return true;
        }
        curSequence = $this.w1t_1;
        curSlots = $this.j1t();
        tmp$ret$1 = Unit_getInstance();
      }
    }
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1u_1 = _this__u8e3s4;
    this.i1u_1 = collector;
  }
  $collectCOROUTINE$8.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 12;
            this.j1u_1 = this.h1u_1.z1s();
            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 11;
            var tmp_0 = this.i1u_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.zh_1 = 2;
              suspendResult = this.i1u_1.c1t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zh_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.l1u_1 = this.l3().p3(Key_getInstance_2());
            this.m1u_1 = null;
            this.zh_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.zh_1 = 9;
              continue $sm;
            }

            this.n1u_1 = this.h1u_1.v1t_1.z19_1;
            var tmp0_safe_receiver = this.l1u_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            if (this.m1u_1 == null ? true : !equals(this.m1u_1, this.n1u_1)) {
              this.zh_1 = 5;
              var tmp_2 = this;
              tmp_2.o1u_1 = get_NULL();
              var tmp_3;
              if (this.n1u_1 === this.o1u_1) {
                tmp_3 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_4 = this.n1u_1;
                tmp_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
              }
              suspendResult = this.i1u_1.w1q(tmp_3, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 6;
              continue $sm;
            }

            break;
          case 5:
            this.m1u_1 = this.n1u_1;
            this.zh_1 = 6;
            continue $sm;
          case 6:
            if (!this.j1u_1.q1u()) {
              this.zh_1 = 7;
              suspendResult = this.j1u_1.p1u(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 8;
              continue $sm;
            }

            break;
          case 7:
            this.zh_1 = 8;
            continue $sm;
          case 8:
            this.zh_1 = 4;
            continue $sm;
          case 9:
            this.k1u_1 = Unit_getInstance();
            this.ai_1 = 12;
            this.zh_1 = 10;
            continue $sm;
          case 10:
            this.h1u_1.d1t(this.j1u_1);
            return Unit_getInstance();
          case 11:
            this.ai_1 = 12;
            var t = this.ci_1;
            this.h1u_1.d1t(this.j1u_1);
            throw t;
          case 12:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 12) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$8.$metadata$ = classMeta('$collectCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.v1t_1 = atomic$ref$1(initialState);
    this.w1t_1 = 0;
  }
  StateFlowImpl.prototype.r1u = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  StateFlowImpl.prototype.l1 = function () {
    var tmp$ret$0;
    {
      var tmp0_unbox = get_NULL();
      var tmp1_unbox = this.v1t_1.z19_1;
      var tmp;
      if (tmp1_unbox === tmp0_unbox) {
        tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
      } else {
        tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.w1q = function (value, $cont) {
    this.r1u(value);
    return Unit_getInstance();
  };
  StateFlowImpl.prototype.m1r = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$8(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  StateFlowImpl.prototype.j1q = function (collector, $cont) {
    return this.m1r(collector, $cont);
  };
  StateFlowImpl.prototype.h1t = function () {
    return new StateFlowSlot();
  };
  StateFlowImpl.prototype.i1t = function (size) {
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(size), null);
    }
    return tmp$ret$0;
  };
  StateFlowImpl.$metadata$ = classMeta('StateFlowImpl', [MutableStateFlow, CancellableFlow, FusibleFlow], undefined, undefined, undefined, AbstractSharedFlow.prototype);
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.x1t_1 = atomic$ref$1(null);
  }
  StateFlowSlot.prototype.s1u = function (flow) {
    if (!(this.x1t_1.z19_1 == null))
      return false;
    this.x1t_1.z19_1 = get_NONE();
    return true;
  };
  StateFlowSlot.prototype.o1t = function (flow) {
    return this.s1u(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.t1u = function (flow) {
    this.x1t_1.z19_1 = null;
    return get_EMPTY_RESUMES();
  };
  StateFlowSlot.prototype.q1t = function (flow) {
    return this.t1u(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.y1t = function () {
    {
      var tmp0_loop = this.x1t_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (tmp1__anonymous__uwfjfc == null)
            return Unit_getInstance();
          else if (tmp1__anonymous__uwfjfc === get_PENDING())
            return Unit_getInstance();
          else if (tmp1__anonymous__uwfjfc === get_NONE()) {
            if (this.x1t_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_PENDING()))
              return Unit_getInstance();
          } else {
            if (this.x1t_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_NONE())) {
              var tmp$ret$1;
              {
                var tmp0_resume = tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
                var tmp$ret$0;
                {
                  var tmp0_success = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
                }
                tmp$ret$1 = tmp0_resume.m3(tmp$ret$0);
              }
              return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  StateFlowSlot.prototype.q1u = function () {
    var tmp$ret$0;
    {
      var tmp0_let = ensureNotNull(this.x1t_1.atomicfu$getAndSet(get_NONE()));
      {
      }
      {
      }
      return tmp0_let === get_PENDING();
    }
    return tmp$ret$0;
  };
  StateFlowSlot.prototype.p1u = function ($cont) {
    var tmp$ret$3;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.l1e();
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (this.x1t_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        {
        }
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp$ret$2 = cancellable.m3(tmp$ret$1);
        }
      }
      tmp$ret$3 = cancellable.u1e();
    }
    return tmp$ret$3;
  };
  StateFlowSlot.$metadata$ = classMeta('StateFlowSlot', undefined, undefined, undefined, undefined, AbstractSharedFlowSlot.prototype);
  var properties_initialized_StateFlow_kt_nsqikx;
  function init_properties_StateFlow_kt_6znnsl() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    init_properties_AbstractSharedFlow_kt_ejuukb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.z1r_1 = null;
    this.a1s_1 = 0;
    this.b1s_1 = 0;
    this.c1s_1 = null;
  }
  AbstractSharedFlow.prototype.j1t = function () {
    return this.z1r_1;
  };
  AbstractSharedFlow.prototype.d1s = function () {
    return this.a1s_1;
  };
  AbstractSharedFlow.prototype.z1s = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var curSlots = this.z1r_1;
        var tmp;
        if (curSlots == null) {
          var tmp$ret$0;
          {
            var tmp0_also = this.i1t(2);
            {
            }
            {
              this.z1r_1 = tmp0_also;
            }
            tmp$ret$0 = tmp0_also;
          }
          tmp = tmp$ret$0;
        } else {
          var tmp_0;
          if (this.a1s_1 >= curSlots.length) {
            var tmp$ret$1;
            {
              var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
              {
              }
              {
                this.z1r_1 = tmp1_also;
              }
              tmp$ret$1 = tmp1_also;
            }
            tmp_0 = tmp$ret$1;
          } else {
            tmp_0 = curSlots;
          }
          tmp = tmp_0;
        }
        var slots = tmp;
        var index = this.b1s_1;
        var slot;
        $l$loop: while (true) {
          var tmp0_elvis_lhs = slots[index];
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            var tmp$ret$2;
            {
              var tmp2_also = this.h1t();
              {
              }
              {
                slots[index] = tmp2_also;
              }
              tmp$ret$2 = tmp2_also;
            }
            tmp_1 = tmp$ret$2;
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          slot = tmp_1;
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          if (index >= slots.length)
            index = 0;
          if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).o1t(this))
            break $l$loop;
        }
        this.b1s_1 = index;
        var tmp2_this = this;
        var tmp3 = tmp2_this.a1s_1;
        tmp2_this.a1s_1 = tmp3 + 1 | 0;
        subscriptionCount = this.c1s_1;
        tmp$ret$3 = slot;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var slot_0 = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.g1v(1);
    return slot_0;
  };
  AbstractSharedFlow.prototype.d1t = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0_this = this;
        var tmp1 = tmp0_this.a1s_1;
        tmp0_this.a1s_1 = tmp1 - 1 | 0;
        subscriptionCount = this.c1s_1;
        if (this.a1s_1 === 0)
          this.b1s_1 = 0;
        tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).q1t(this);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp$ret$3 = tmp1_safe_receiver.m3(tmp$ret$2);
        }
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.g1v(-1);
  };
  AbstractSharedFlow.prototype.k1t = function (block) {
    if (this.a1s_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.z1r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      {
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          {
            if (!(element == null))
              block(element);
          }
        }
      }
    }
  };
  AbstractSharedFlow.$metadata$ = classMeta('AbstractSharedFlow');
  function AbstractSharedFlowSlot() {
  }
  AbstractSharedFlowSlot.$metadata$ = classMeta('AbstractSharedFlowSlot');
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function init_properties_AbstractSharedFlow_kt_ejuukb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      {
        tmp$ret$0 = fillArrayVal(Array(0), null);
      }
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function FusibleFlow() {
  }
  FusibleFlow.$metadata$ = interfaceMeta('FusibleFlow', [Flow]);
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.p1v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.r1v = function (it, $cont) {
    var tmp = this.s1v(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.ki = function (p1, $cont) {
    return this.r1v((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.p1v_1.x1p(this.q1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.prototype.s1v = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.p1v_1, completion);
    i.q1v_1 = it;
    return i;
  };
  ChannelFlow$_get_collectToFun_$slambda_j53z2e.$metadata$ = classMeta('ChannelFlow$<get-collectToFun>$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.r1v(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.b1w_1 = $collector;
    this.c1w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$collect$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ChannelFlow$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = emitAll(this.b1w_1, this.c1w_1.i1q(this.d1w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  ChannelFlow$collect$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.b1w_1, this.c1w_1, completion);
    i.d1w_1 = $this$coroutineScope;
    return i;
  };
  ChannelFlow$collect$slambda.$metadata$ = classMeta('ChannelFlow$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.d1q_1 = context;
    this.e1q_1 = capacity;
    this.f1q_1 = onBufferOverflow;
    {
    }
  }
  ChannelFlow.prototype.l3 = function () {
    return this.d1q_1;
  };
  ChannelFlow.prototype.g1w = function () {
    return this.e1q_1;
  };
  ChannelFlow.prototype.g1q = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  ChannelFlow.prototype.h1q = function () {
    var tmp;
    Factory_getInstance();
    if (this.e1q_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.e1q_1;
    }
    return tmp;
  };
  ChannelFlow.prototype.i1q = function (scope) {
    var tmp = this.h1q();
    var tmp_0 = CoroutineStart_ATOMIC_getInstance();
    return produce$default(scope, this.d1q_1, tmp, this.f1q_1, tmp_0, null, this.g1q(), 16, null);
  };
  ChannelFlow.prototype.j1q = function (collector, $cont) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $cont);
  };
  ChannelFlow.prototype.k1q = function () {
    return null;
  };
  ChannelFlow.prototype.toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.k1q();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = props.b(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
    }
    if (!(this.d1q_1 === EmptyCoroutineContext_getInstance())) {
      props.b('context=' + this.d1q_1);
    }
    Factory_getInstance();
    if (!(this.e1q_1 === -3)) {
      props.b('capacity=' + this.e1q_1);
    }
    if (!this.f1q_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.b('onBufferOverflow=' + this.f1q_1);
    }
    var tmp = get_classSimpleName(this);
    return tmp + '[' + joinToString$default(props, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  ChannelFlow.$metadata$ = classMeta('ChannelFlow', [FusibleFlow]);
  function ChannelFlowMerge$collectTo$slambda$slambda($inner, $collector, $semaphore, resultContinuation) {
    this.p1w_1 = $inner;
    this.q1w_1 = $collector;
    this.r1w_1 = $semaphore;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowMerge$collectTo$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ChannelFlowMerge$collectTo$slambda$slambda.prototype.ki = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowMerge$collectTo$slambda$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 5;
            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 4;
            this.zh_1 = 2;
            suspendResult = this.p1w_1.j1q(this.q1w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t1w_1 = suspendResult;
            this.ai_1 = 5;
            this.zh_1 = 3;
            continue $sm;
          case 3:
            this.r1w_1.d10();
            return Unit_getInstance();
          case 4:
            this.ai_1 = 5;
            var t = this.ci_1;
            this.r1w_1.d10();
            throw t;
          case 5:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 5) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  ChannelFlowMerge$collectTo$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new ChannelFlowMerge$collectTo$slambda$slambda(this.p1w_1, this.q1w_1, this.r1w_1, completion);
    i.s1w_1 = $this$launch;
    return i;
  };
  ChannelFlowMerge$collectTo$slambda$slambda.$metadata$ = classMeta('ChannelFlowMerge$collectTo$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ChannelFlowMerge$collectTo$slambda$slambda_0($inner, $collector, $semaphore, resultContinuation) {
    var i = new ChannelFlowMerge$collectTo$slambda$slambda($inner, $collector, $semaphore, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowMerge_init_$Init$(flow, concurrency, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 8) === 0)) {
      Factory_getInstance();
      capacity = -2;
    }
    if (!(($mask0 & 16) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    ChannelFlowMerge.call($this, flow, concurrency, context, capacity, onBufferOverflow);
    return $this;
  }
  function ChannelFlowMerge_init_$Create$(flow, concurrency, context, capacity, onBufferOverflow, $mask0, $marker) {
    return ChannelFlowMerge_init_$Init$(flow, concurrency, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(ChannelFlowMerge.prototype));
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.u1w_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.w1q = function (value, $cont) {
    return this.u1w_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function ChannelFlowMerge$collectTo$slambda($job, $semaphore, $scope, $collector, resultContinuation) {
    this.d1x_1 = $job;
    this.e1x_1 = $semaphore;
    this.f1x_1 = $scope;
    this.g1x_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowMerge$collectTo$slambda.prototype.i1x = function (inner, $cont) {
    var tmp = this.j1x(inner, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ChannelFlowMerge$collectTo$slambda.prototype.ki = function (p1, $cont) {
    return this.i1x((!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowMerge$collectTo$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            var tmp0_safe_receiver = this.d1x_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.zh_1 = 1;
            suspendResult = this.e1x_1.k1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            launch$default(this.f1x_1, null, null, ChannelFlowMerge$collectTo$slambda$slambda_0(this.h1x_1, this.g1x_1, this.e1x_1, null), 3, null);
            ;
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  ChannelFlowMerge$collectTo$slambda.prototype.j1x = function (inner, completion) {
    var i = new ChannelFlowMerge$collectTo$slambda(this.d1x_1, this.e1x_1, this.f1x_1, this.g1x_1, completion);
    i.h1x_1 = inner;
    return i;
  };
  ChannelFlowMerge$collectTo$slambda.$metadata$ = classMeta('ChannelFlowMerge$collectTo$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ChannelFlowMerge$collectTo$slambda_0($job, $semaphore, $scope, $collector, resultContinuation) {
    var i = new ChannelFlowMerge$collectTo$slambda($job, $semaphore, $scope, $collector, resultContinuation);
    var l = function (inner, $cont) {
      return i.i1x(inner, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowMerge(flow, concurrency, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.o1x_1 = flow;
    this.p1x_1 = concurrency;
  }
  ChannelFlowMerge.prototype.i1q = function (scope) {
    return produce(scope, this.l3(), this.g1w(), this.g1q());
  };
  ChannelFlowMerge.prototype.x1p = function (scope, $cont) {
    var semaphore = Semaphore$default(this.p1x_1, 0, 2, null);
    var collector = new SendingCollector(scope);
    var tmp$ret$0;
    {
      tmp$ret$0 = $cont.l3();
    }
    var job = tmp$ret$0.p3(Key_getInstance_2());
    var tmp = ChannelFlowMerge$collectTo$slambda_0(job, semaphore, scope, collector, null);
    return this.o1x_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $cont);
  };
  ChannelFlowMerge.prototype.k1q = function () {
    return 'concurrency=' + this.p1x_1;
  };
  ChannelFlowMerge.$metadata$ = classMeta('ChannelFlowMerge', undefined, undefined, undefined, undefined, ChannelFlow.prototype);
  function NopCollector() {
    NopCollector_instance = this;
  }
  NopCollector.prototype.q1x = function (value, $cont) {
    return Unit_getInstance();
  };
  NopCollector.prototype.w1q = function (value, $cont) {
    return this.q1x((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  NopCollector.$metadata$ = objectMeta('NopCollector', [FlowCollector]);
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function get_NULL() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function init_properties_NullSurrogate_kt_8d5lbx() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_0(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.v3(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.t1x_1)) {
      {
        var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.s1x_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    while (true) {
      var $this_0 = $this;
      var collectJob_1 = collectJob_0;
      if ($this_0 === null)
        return null;
      if ($this_0 === collectJob_1)
        return $this_0;
      if (!($this_0 instanceof ScopeCoroutine))
        return $this_0;
      var tmp0 = $this_0.h1g();
      var tmp1 = collectJob_1;
      $this = tmp0;
      collectJob_0 = tmp1;
      continue;
    }
  }
  function _no_name_provided__qut3iv_0($block) {
    this.z1x_1 = $block;
  }
  _no_name_provided__qut3iv_0.prototype.j1q = function (collector, $cont) {
    return this.z1x_1(collector, $cont);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.j1();
      var collectElement = $this_checkContext.s1x_1.p3(key);
      var tmp;
      if (!(key === Key_getInstance_2())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().l_1 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.a1y_1 = channel;
  }
  SendingCollector.prototype.w1q = function (value, $cont) {
    return this.a1y_1.j1m(value, $cont);
  };
  SendingCollector.$metadata$ = classMeta('SendingCollector', [FlowCollector]);
  function CancellableFlow() {
  }
  CancellableFlow.$metadata$ = interfaceMeta('CancellableFlow', [Flow]);
  function unsafeTransform(_this__u8e3s4, transform) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_1(_this__u8e3s4, transform);
    }
    return tmp$ret$0;
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.b1y_1;
  }
  function ThrowingCollector() {
  }
  ThrowingCollector.$metadata$ = classMeta('ThrowingCollector', [FlowCollector]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.c1y_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.w1q = function (value, $cont) {
    return this.c1y_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation) {
    this.l1y_1 = $transform;
    this.m1y_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  unsafeTransform$o$collect$slambda.prototype.o1y = function (value, $cont) {
    var tmp = this.p1y(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  unsafeTransform$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  unsafeTransform$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.l1y_1(this.m1y_1, this.n1y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  unsafeTransform$o$collect$slambda.prototype.p1y = function (value, completion) {
    var i = new unsafeTransform$o$collect$slambda(this.l1y_1, this.m1y_1, completion);
    i.n1y_1 = value;
    return i;
  };
  unsafeTransform$o$collect$slambda.$metadata$ = classMeta('unsafeTransform$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function unsafeTransform$o$collect$slambda_0($transform, $collector, resultContinuation) {
    var i = new unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.o1y(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1y_1 = _this__u8e3s4;
    this.z1y_1 = collector;
  }
  $collectCOROUTINE$10.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = unsafeTransform$o$collect$slambda_0(this.y1y_1.b1z_1, this.z1y_1, null);
            suspendResult = this.y1y_1.a1z_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$10.$metadata$ = classMeta('$collectCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_1($this_unsafeTransform, $transform) {
    this.a1z_1 = $this_unsafeTransform;
    this.b1z_1 = $transform;
  }
  _no_name_provided__qut3iv_1.prototype.c1z = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_1.prototype.j1q = function (collector, $cont) {
    return this.c1z(collector, $cont);
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Flow]);
  function catch_0(_this__u8e3s4, action) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_2(_this__u8e3s4, action);
    }
    return tmp$ret$0;
  }
  function catchImpl(_this__u8e3s4, collector, $cont) {
    var tmp = new $catchImplCOROUTINE$11(_this__u8e3s4, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  }
  function isSameExceptionAs(_this__u8e3s4, other) {
    return !(other == null) ? equals(unwrap(other), unwrap(_this__u8e3s4)) : false;
  }
  function isCancellationCause(_this__u8e3s4, coroutineContext) {
    var job = coroutineContext.p3(Key_getInstance_2());
    if (job == null ? true : !job.n1b())
      return false;
    return isSameExceptionAs(_this__u8e3s4, job.q1b());
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.o1z_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.w1q = function (value, $cont) {
    return this.o1z_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1z_1 = _this__u8e3s4;
    this.y1z_1 = collector;
  }
  $collectCOROUTINE$12.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 4;
            this.zh_1 = 1;
            suspendResult = catchImpl(this.x1z_1.a20_1, this.y1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z1z_1 = suspendResult;
            if (!(this.z1z_1 == null)) {
              this.zh_1 = 2;
              suspendResult = this.x1z_1.b20_1(this.y1z_1, this.z1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.zh_1 = 3;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 4) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$12.$metadata$ = classMeta('$collectCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_2($this_catch, $action) {
    this.a20_1 = $this_catch;
    this.b20_1 = $action;
  }
  _no_name_provided__qut3iv_2.prototype.j1q = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$12(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [Flow]);
  function catchImpl$slambda($collector, $fromDownstream, resultContinuation) {
    this.k20_1 = $collector;
    this.l20_1 = $fromDownstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  catchImpl$slambda.prototype.o1y = function (it, $cont) {
    var tmp = this.p1y(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  catchImpl$slambda.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  catchImpl$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.k20_1.w1q(this.m20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ai_1 = 3;
            this.zh_1 = 4;
            continue $sm;
          case 2:
            this.ai_1 = 3;
            var tmp_0 = this.ci_1;
            if (tmp_0 instanceof Error) {
              var e = this.ci_1;
              this.l20_1._v = e;
              throw e;
            } else {
              throw this.ci_1;
            }

            break;
          case 3:
            throw this.ci_1;
          case 4:
            this.ai_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ai_1 === 3) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  catchImpl$slambda.prototype.p1y = function (it, completion) {
    var i = new catchImpl$slambda(this.k20_1, this.l20_1, completion);
    i.m20_1 = it;
    return i;
  };
  catchImpl$slambda.$metadata$ = classMeta('catchImpl$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function catchImpl$slambda_0($collector, $fromDownstream, resultContinuation) {
    var i = new catchImpl$slambda($collector, $fromDownstream, resultContinuation);
    var l = function (it, $cont) {
      return i.o1y(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $catchImplCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1z_1 = _this__u8e3s4;
    this.m1z_1 = collector;
  }
  $catchImplCOROUTINE$11.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.n1z_1 = {_v: null};
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = catchImpl$slambda_0(this.m1z_1, this.n1z_1, null);
            suspendResult = this.l1z_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ai_1 = 3;
            this.zh_1 = 4;
            continue $sm;
          case 2:
            this.ai_1 = 3;
            var tmp_1 = this.ci_1;
            if (tmp_1 instanceof Error) {
              var e = this.ci_1;
              var fromDownstream = this.n1z_1._v;
              var tmp_2;
              if (isSameExceptionAs(e, fromDownstream)) {
                tmp_2 = true;
              } else {
                tmp_2 = isCancellationCause(e, this.l3());
              }
              if (tmp_2) {
                throw e;
              } else {
                if (fromDownstream == null) {
                  return e;
                }
                if (e instanceof CancellationException) {
                  addSuppressed(fromDownstream, e);
                  throw fromDownstream;
                } else {
                  addSuppressed(e, fromDownstream);
                  throw e;
                }
              }
              this.zh_1 = 4;
              continue $sm;
            } else {
              throw this.ci_1;
            }

            break;
          case 3:
            throw this.ci_1;
          case 4:
            this.ai_1 = 3;
            return null;
        }
      } catch ($p) {
        if (this.ai_1 === 3) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $catchImplCOROUTINE$11.$metadata$ = classMeta('$catchImplCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_DEFAULT_CONCURRENCY() {
    init_properties_Merge_kt_uorl8c();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function flatMapMerge(_this__u8e3s4, concurrency, transform) {
    init_properties_Merge_kt_uorl8c();
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = new _no_name_provided__qut3iv_3(_this__u8e3s4, transform);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return flattenMerge(tmp$ret$2, concurrency);
  }
  function flatMapMerge$default(_this__u8e3s4, concurrency, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      concurrency = get_DEFAULT_CONCURRENCY();
    return flatMapMerge(_this__u8e3s4, concurrency, transform);
  }
  function flattenMerge(_this__u8e3s4, concurrency) {
    init_properties_Merge_kt_uorl8c();
    {
      var tmp0_require = concurrency > 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Expected positive concurrency level, but had ' + concurrency;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    var tmp;
    if (concurrency === 1) {
      tmp = flattenConcat(_this__u8e3s4);
    } else {
      tmp = ChannelFlowMerge_init_$Create$(_this__u8e3s4, concurrency, null, 0, null, 28, null);
    }
    return tmp;
  }
  function flattenConcat(_this__u8e3s4) {
    init_properties_Merge_kt_uorl8c();
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_4(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.n20_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.w1q = function (value, $cont) {
    return this.n20_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function flatMapMerge$o$collect$slambda($collector, $transform, resultContinuation) {
    this.w20_1 = $collector;
    this.x20_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  flatMapMerge$o$collect$slambda.prototype.o1y = function (value, $cont) {
    var tmp = this.p1y(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  flatMapMerge$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  flatMapMerge$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.zh_1 = 1;
            suspendResult = this.x20_1(this.y20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z20_1 = suspendResult;
            this.zh_1 = 2;
            suspendResult = this.w20_1.w1q(this.z20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 3) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  flatMapMerge$o$collect$slambda.prototype.p1y = function (value, completion) {
    var i = new flatMapMerge$o$collect$slambda(this.w20_1, this.x20_1, completion);
    i.y20_1 = value;
    return i;
  };
  flatMapMerge$o$collect$slambda.$metadata$ = classMeta('flatMapMerge$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function flatMapMerge$o$collect$slambda_0($collector, $transform, resultContinuation) {
    var i = new flatMapMerge$o$collect$slambda($collector, $transform, resultContinuation);
    var l = function (value, $cont) {
      return i.o1y(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i21_1 = _this__u8e3s4;
    this.j21_1 = collector;
  }
  $collectCOROUTINE$13.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = flatMapMerge$o$collect$slambda_0(this.j21_1, this.i21_1.l21_1, null);
            suspendResult = this.i21_1.k21_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$13.$metadata$ = classMeta('$collectCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_3($this_flatMapMerge, $transform) {
    this.k21_1 = $this_flatMapMerge;
    this.l21_1 = $transform;
  }
  _no_name_provided__qut3iv_3.prototype.m21 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$13(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_3.prototype.j1q = function (collector, $cont) {
    return this.m21(collector, $cont);
  };
  _no_name_provided__qut3iv_3.$metadata$ = classMeta(undefined, [Flow]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.n21_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.prototype.w1q = function (value, $cont) {
    return this.n21_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function flattenConcat$o$collect$slambda($collector, resultContinuation) {
    this.w21_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  flattenConcat$o$collect$slambda.prototype.i1x = function (value, $cont) {
    var tmp = this.j1x(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  flattenConcat$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.i1x((!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE(), $cont);
  };
  flattenConcat$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = emitAll_0(this.w21_1, this.x21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  flattenConcat$o$collect$slambda.prototype.j1x = function (value, completion) {
    var i = new flattenConcat$o$collect$slambda(this.w21_1, completion);
    i.x21_1 = value;
    return i;
  };
  flattenConcat$o$collect$slambda.$metadata$ = classMeta('flattenConcat$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function flattenConcat$o$collect$slambda_0($collector, resultContinuation) {
    var i = new flattenConcat$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.i1x(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g22_1 = _this__u8e3s4;
    this.h22_1 = collector;
  }
  $collectCOROUTINE$14.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = flattenConcat$o$collect$slambda_0(this.h22_1, null);
            suspendResult = this.g22_1.i22_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$14.$metadata$ = classMeta('$collectCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_4($this_flattenConcat) {
    this.i22_1 = $this_flattenConcat;
  }
  _no_name_provided__qut3iv_4.prototype.j1q = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$14(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_4.$metadata$ = classMeta(undefined, [Flow]);
  var properties_initialized_Merge_kt_dhn6vs;
  function init_properties_Merge_kt_uorl8c() {
    if (properties_initialized_Merge_kt_dhn6vs) {
    } else {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().m_1);
    }
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function $onSubscriptionCOROUTINE$15(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r22_1 = _this__u8e3s4;
  }
  $onSubscriptionCOROUTINE$15.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 7;
            var tmp_0 = this;
            tmp_0.s22_1 = new SafeCollector(this.r22_1.a1t_1, this.l3());
            this.zh_1 = 1;
            continue $sm;
          case 1:
            this.ai_1 = 6;
            this.zh_1 = 2;
            suspendResult = this.r22_1.b1t_1(this.s22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t22_1 = suspendResult;
            this.ai_1 = 7;
            this.zh_1 = 3;
            continue $sm;
          case 3:
            this.s22_1.u22();
            var tmp_1 = this.r22_1.a1t_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.zh_1 = 4;
              suspendResult = this.r22_1.a1t_1.c1t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zh_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.zh_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.ai_1 = 7;
            var t = this.ci_1;
            this.s22_1.u22();
            throw t;
          case 7:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 7) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $onSubscriptionCOROUTINE$15.$metadata$ = classMeta('$onSubscriptionCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function SubscribedFlowCollector() {
  }
  SubscribedFlowCollector.prototype.c1t = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$15(this, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  SubscribedFlowCollector.$metadata$ = classMeta('SubscribedFlowCollector', [FlowCollector]);
  function $collectCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d23_1 = _this__u8e3s4;
    this.e23_1 = collector;
  }
  $collectCOROUTINE$16.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.d23_1.g23_1.m1r(this.e23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$16.$metadata$ = classMeta('$collectCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ReadonlyStateFlow(flow, job) {
    this.f23_1 = job;
    this.g23_1 = flow;
  }
  ReadonlyStateFlow.prototype.l1 = function () {
    return this.g23_1.l1();
  };
  ReadonlyStateFlow.prototype.m1r = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$16(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ReadonlyStateFlow.prototype.j1q = function (collector, $cont) {
    return this.m1r(collector, $cont);
  };
  ReadonlyStateFlow.$metadata$ = classMeta('ReadonlyStateFlow', [StateFlow, CancellableFlow, FusibleFlow]);
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p23_1 = _this__u8e3s4;
    this.q23_1 = collector;
  }
  $collectCOROUTINE$17.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.p23_1.s23_1.m1r(this.q23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$17.$metadata$ = classMeta('$collectCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ReadonlySharedFlow(flow, job) {
    this.r23_1 = job;
    this.s23_1 = flow;
  }
  ReadonlySharedFlow.prototype.m1r = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$17(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  ReadonlySharedFlow.prototype.j1q = function (collector, $cont) {
    return this.m1r(collector, $cont);
  };
  ReadonlySharedFlow.$metadata$ = classMeta('ReadonlySharedFlow', [SharedFlow, CancellableFlow, FusibleFlow]);
  function onEach(_this__u8e3s4, action) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = new _no_name_provided__qut3iv_5(_this__u8e3s4, action);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function map(_this__u8e3s4, transform) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = new _no_name_provided__qut3iv_6(_this__u8e3s4, transform);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.t23_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_4.prototype.w1q = function (value, $cont) {
    return this.t23_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_4.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function onEach$o$collect$slambda($action, $collector, resultContinuation) {
    this.c24_1 = $action;
    this.d24_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  onEach$o$collect$slambda.prototype.o1y = function (value, $cont) {
    var tmp = this.p1y(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  onEach$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  onEach$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.zh_1 = 1;
            suspendResult = this.c24_1(this.e24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zh_1 = 2;
            suspendResult = this.d24_1.w1q(this.e24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 3) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  onEach$o$collect$slambda.prototype.p1y = function (value, completion) {
    var i = new onEach$o$collect$slambda(this.c24_1, this.d24_1, completion);
    i.e24_1 = value;
    return i;
  };
  onEach$o$collect$slambda.$metadata$ = classMeta('onEach$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function onEach$o$collect$slambda_0($action, $collector, resultContinuation) {
    var i = new onEach$o$collect$slambda($action, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.o1y(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$18(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n24_1 = _this__u8e3s4;
    this.o24_1 = collector;
  }
  $collectCOROUTINE$18.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = onEach$o$collect$slambda_0(this.n24_1.q24_1, this.o24_1, null);
            suspendResult = this.n24_1.p24_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$18.$metadata$ = classMeta('$collectCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_5($this_onEach, $action) {
    this.p24_1 = $this_onEach;
    this.q24_1 = $action;
  }
  _no_name_provided__qut3iv_5.prototype.j1q = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$18(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_5.$metadata$ = classMeta(undefined, [Flow]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.r24_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_5.prototype.w1q = function (value, $cont) {
    return this.r24_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_5.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function map$o$collect$slambda($collector, $transform, resultContinuation) {
    this.a25_1 = $collector;
    this.b25_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  map$o$collect$slambda.prototype.o1y = function (value, $cont) {
    var tmp = this.p1y(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  map$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  map$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.zh_1 = 1;
            suspendResult = this.b25_1(this.c25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d25_1 = suspendResult;
            this.zh_1 = 2;
            suspendResult = this.a25_1.w1q(this.d25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 3) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  map$o$collect$slambda.prototype.p1y = function (value, completion) {
    var i = new map$o$collect$slambda(this.a25_1, this.b25_1, completion);
    i.c25_1 = value;
    return i;
  };
  map$o$collect$slambda.$metadata$ = classMeta('map$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function map$o$collect$slambda_0($collector, $transform, resultContinuation) {
    var i = new map$o$collect$slambda($collector, $transform, resultContinuation);
    var l = function (value, $cont) {
      return i.o1y(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m25_1 = _this__u8e3s4;
    this.n25_1 = collector;
  }
  $collectCOROUTINE$19.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = map$o$collect$slambda_0(this.n25_1, this.m25_1.p25_1, null);
            suspendResult = this.m25_1.o25_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$19.$metadata$ = classMeta('$collectCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_6($this_map, $transform) {
    this.o25_1 = $this_map;
    this.p25_1 = $transform;
  }
  _no_name_provided__qut3iv_6.prototype.c1z = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$19(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_6.prototype.j1q = function (collector, $cont) {
    return this.c1z(collector, $cont);
  };
  _no_name_provided__qut3iv_6.$metadata$ = classMeta(undefined, [Flow]);
  function launchIn(_this__u8e3s4, scope) {
    return launch$default(scope, null, null, launchIn$slambda_0(_this__u8e3s4, null), 3, null);
  }
  function collect(_this__u8e3s4, $cont) {
    return _this__u8e3s4.j1q(NopCollector_getInstance(), $cont);
  }
  function emitAll_0(_this__u8e3s4, flow, $cont) {
    ensureActive_1(_this__u8e3s4);
    return flow.j1q(_this__u8e3s4, $cont);
  }
  function launchIn$slambda($this_launchIn, resultContinuation) {
    this.y25_1 = $this_launchIn;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchIn$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  launchIn$slambda.prototype.ki = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchIn$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = collect(this.y25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ci_1;
        }
      } catch ($p) {
        if (this.ai_1 === 2) {
          throw $p;
        } else {
          this.zh_1 = this.ai_1;
          this.ci_1 = $p;
        }
      }
     while (true);
  };
  launchIn$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new launchIn$slambda(this.y25_1, completion);
    i.z25_1 = $this$launch;
    return i;
  };
  launchIn$slambda.$metadata$ = classMeta('launchIn$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function launchIn$slambda_0($this_launchIn, resultContinuation) {
    var i = new launchIn$slambda($this_launchIn, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.q1f_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp0_copyInto = $this.q1f_1;
      var tmp1_copyInto = $this.r1f_1;
      var tmp2_copyInto = tmp0_copyInto.length;
      arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newElements;
    }
    var tmp$ret$2;
    {
      var tmp3_copyInto = $this.q1f_1;
      var tmp4_copyInto = $this.q1f_1.length - $this.r1f_1 | 0;
      var tmp5_copyInto = $this.r1f_1;
      arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
      tmp$ret$2 = newElements;
    }
    $this.q1f_1 = newElements;
    $this.r1f_1 = 0;
    $this.s1f_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(16), null);
    }
    tmp.q1f_1 = tmp$ret$0;
    this.r1f_1 = 0;
    this.s1f_1 = 0;
  }
  ArrayQueue.prototype.y1f = function () {
    return this.r1f_1 === this.s1f_1;
  };
  ArrayQueue.prototype.v1f = function (element) {
    this.q1f_1[this.s1f_1] = element;
    this.s1f_1 = (this.s1f_1 + 1 | 0) & (this.q1f_1.length - 1 | 0);
    if (this.s1f_1 === this.r1f_1)
      ensureCapacity_0(this);
  };
  ArrayQueue.prototype.t1f = function () {
    if (this.r1f_1 === this.s1f_1)
      return null;
    var element = this.q1f_1[this.r1f_1];
    this.q1f_1[this.r1f_1] = null;
    this.r1f_1 = (this.r1f_1 + 1 | 0) & (this.q1f_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function get_CLOSED() {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    return CLOSED;
  }
  var CLOSED;
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      throw IllegalStateException_init_$Create$('Does not contain segment');
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.a26_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.a26_1 = value;
  }
  SegmentOrClosed.prototype.toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.a26_1);
  };
  SegmentOrClosed.prototype.hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.a26_1);
  };
  SegmentOrClosed.prototype.equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.a26_1, other);
  };
  SegmentOrClosed.$metadata$ = classMeta('SegmentOrClosed');
  function findSegmentAndMoveForward(_this__u8e3s4, id, startFrom, createNewSegment) {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    while (true) {
      var tmp$ret$0;
      $l$block: {
        var cur = startFrom;
        $l$loop: while (cur.d26_1.v(id) < 0 ? true : cur.f26()) {
          var tmp$ret$3;
          {
            var tmp1_nextOrIfClosed = cur;
            var tmp$ret$2;
            {
              var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
              {
              }
              var tmp$ret$1;
              {
                var tmp;
                if (tmp0_let === get_CLOSED()) {
                  tmp$ret$0 = _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
                  break $l$block;
                } else {
                  tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
                }
                tmp$ret$1 = tmp;
              }
              tmp$ret$2 = tmp$ret$1;
            }
            tmp$ret$3 = tmp$ret$2;
          }
          var next = tmp$ret$3;
          if (!(next == null)) {
            cur = next;
            continue $l$loop;
          }
          var tmp$ret$4;
          {
            var tmp2_plus = cur.d26_1;
            tmp$ret$4 = tmp2_plus.p4(new Long(1, 0));
          }
          var newTail = createNewSegment(tmp$ret$4, cur);
          if (cur.j26(newTail)) {
            if (cur.f26())
              cur.i26();
            cur = newTail;
          }
        }
        tmp$ret$0 = _SegmentOrClosed___init__impl__jnexvb(cur);
      }
      var s = tmp$ret$0;
      var tmp_0;
      if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
        tmp_0 = true;
      } else {
        var tmp$ret$5;
        $l$block_2: {
          var tmp4_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          while (true) {
            {
              var tmp3__anonymous__ufb84q = _this__u8e3s4.z19_1;
              if (tmp3__anonymous__ufb84q.d26_1.v(tmp4_moveForward.d26_1) >= 0) {
                tmp$ret$5 = true;
                break $l$block_2;
              }
              if (!tmp4_moveForward.k26()) {
                tmp$ret$5 = false;
                break $l$block_2;
              }
              if (_this__u8e3s4.atomicfu$compareAndSet(tmp3__anonymous__ufb84q, tmp4_moveForward)) {
                if (tmp3__anonymous__ufb84q.l26())
                  tmp3__anonymous__ufb84q.i26();
                tmp$ret$5 = true;
                break $l$block_2;
              }
              if (tmp4_moveForward.l26())
                tmp4_moveForward.i26();
            }
          }
          tmp$ret$5 = Unit_getInstance();
        }
        tmp_0 = tmp$ret$5;
      }
      if (tmp_0)
        return s;
    }
  }
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.d26_1 = id;
    this.e26_1 = atomic$int$1(pointers << 16);
  }
  Segment.prototype.m26 = function () {
    return this.d26_1;
  };
  Segment.prototype.f26 = function () {
    return this.e26_1.a1a_1 === this.n26() ? !this.o26() : false;
  };
  Segment.prototype.k26 = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_addConditionally = this.e26_1;
      var tmp1_addConditionally = 65536;
      while (true) {
        var cur = tmp0_addConditionally.a1a_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = !(cur === this.n26()) ? true : this.o26();
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0_addConditionally.atomicfu$compareAndSet(cur, cur + tmp1_addConditionally | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  Segment.prototype.l26 = function () {
    return this.e26_1.atomicfu$addAndGet(-65536) === this.n26() ? !this.o26() : false;
  };
  Segment.prototype.p26 = function () {
    if (this.e26_1.atomicfu$incrementAndGet() === this.n26() ? !this.o26() : false)
      this.i26();
  };
  Segment.$metadata$ = classMeta('Segment', undefined, undefined, undefined, undefined, ConcurrentLinkedListNode.prototype);
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.d26_1.v(id) < 0 ? true : cur.f26()) {
      var tmp$ret$2;
      {
        var tmp1_nextOrIfClosed = cur;
        var tmp$ret$1;
        {
          var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
          {
          }
          var tmp$ret$0;
          {
            var tmp;
            if (tmp0_let === get_CLOSED()) {
              return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
            } else {
              tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
            }
            tmp$ret$0 = tmp;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var next = tmp$ret$2;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      var tmp$ret$3;
      {
        var tmp2_plus = cur.d26_1;
        tmp$ret$3 = tmp2_plus.p4(new Long(1, 0));
      }
      var newTail = createNewSegment(tmp$ret$3, cur);
      if (cur.j26(newTail)) {
        if (cur.f26())
          cur.i26();
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function moveForward(_this__u8e3s4, to) {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    while (true) {
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.z19_1;
        if (tmp0__anonymous__q1qw7t.d26_1.v(to.d26_1) >= 0)
          return true;
        if (!to.k26())
          return false;
        if (_this__u8e3s4.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, to)) {
          if (tmp0__anonymous__q1qw7t.l26())
            tmp0__anonymous__q1qw7t.i26();
          return true;
        }
        if (to.l26())
          to.i26();
      }
    }
    return Unit_getInstance();
  }
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.g26_1.z19_1;
  }
  function _get_leftmostAliveNode__kwbzbo($this) {
    var cur = $this.s26();
    while (!(cur === null) ? cur.f26() : false)
      cur = cur.h26_1.z19_1;
    return cur;
  }
  function _get_rightmostAliveNode__e6c5q3($this) {
    {
    }
    var cur = ensureNotNull($this.r26());
    while (cur.f26())
      cur = ensureNotNull(cur.r26());
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this.g26_1 = atomic$ref$1(null);
    this.h26_1 = atomic$ref$1(prev);
  }
  ConcurrentLinkedListNode.prototype.q26 = function (onClosedAction) {
    var tmp$ret$1;
    {
      var tmp0_let = _get_nextOrClosed__w0gmuv(this);
      {
      }
      var tmp$ret$0;
      {
        var tmp;
        if (tmp0_let === get_CLOSED()) {
          onClosedAction();
          tmp = throwKotlinNothingValueException();
        } else {
          tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
        }
        tmp$ret$0 = tmp;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConcurrentLinkedListNode.prototype.r26 = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_let = _get_nextOrClosed__w0gmuv(this);
        {
        }
        var tmp$ret$0;
        {
          var tmp;
          if (tmp0_let === get_CLOSED()) {
            return null;
          } else {
            tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  ConcurrentLinkedListNode.prototype.j26 = function (value) {
    return this.g26_1.atomicfu$compareAndSet(null, value);
  };
  ConcurrentLinkedListNode.prototype.o26 = function () {
    return this.r26() == null;
  };
  ConcurrentLinkedListNode.prototype.s26 = function () {
    return this.h26_1.z19_1;
  };
  ConcurrentLinkedListNode.prototype.t26 = function () {
    {
      var tmp0_lazySet = this.h26_1;
      tmp0_lazySet.z19_1 = null;
    }
  };
  ConcurrentLinkedListNode.prototype.i26 = function () {
    {
    }
    {
    }
    $l$loop_0: while (true) {
      var prev = _get_leftmostAliveNode__kwbzbo(this);
      var next = _get_rightmostAliveNode__e6c5q3(this);
      next.h26_1.z19_1 = prev;
      if (!(prev === null))
        prev.g26_1.z19_1 = next;
      if (next.f26())
        continue $l$loop_0;
      if (!(prev === null) ? prev.f26() : false)
        continue $l$loop_0;
      return Unit_getInstance();
    }
  };
  ConcurrentLinkedListNode.$metadata$ = classMeta('ConcurrentLinkedListNode');
  function addConditionally(_this__u8e3s4, delta, condition) {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    while (true) {
      var cur = _this__u8e3s4.a1a_1;
      if (!condition(cur))
        return false;
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, cur + delta | 0))
        return true;
    }
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function init_properties_ConcurrentLinkedList_kt_u21ib0() {
    if (properties_initialized_ConcurrentLinkedList_kt_kwt434) {
    } else {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.b1d_1.i1f(tmp1_resumeCancellableWith.l3())) {
        tmp1_resumeCancellableWith.d1d_1 = state;
        tmp1_resumeCancellableWith.u26(get_MODE_CANCELLABLE());
        tmp_0 = tmp1_resumeCancellableWith.b1d_1.j1f(tmp1_resumeCancellableWith.l3(), tmp1_resumeCancellableWith);
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          {
          }
          var eventLoop = ThreadLocalEventLoop_getInstance().d1g();
          if (false ? eventLoop.x1f() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.w1f()) {
            tmp1_resumeCancellableWith.d1d_1 = state;
            tmp1_resumeCancellableWith.u26(tmp0_executeUnconfined);
            eventLoop.u1f(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            {
              eventLoop.z1f(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_0: {
                    var job = tmp1_resumeCancellableWith.l3().p3(Key_getInstance_2());
                    if (!(job == null) ? !job.s1a() : false) {
                      var cause = job.q1b();
                      tmp1_resumeCancellableWith.n1e(state, cause);
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          var tmp0_failure = Companion_getInstance();
                          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith.m3(tmp$ret$1);
                      }
                      tmp$ret$3 = true;
                      break $l$block_0;
                    }
                    tmp$ret$3 = false;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      {
                        var tmp0_withContinuationContext = tmp1_resumeCancellableWith.c1d_1;
                        var tmp1_withContinuationContext = tmp1_resumeCancellableWith.e1d_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith.c1d_1.m3(result);
                      }
                    }
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop.p1f())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith.z1e($p, null);
                } else {
                  throw $p;
                }
              }
              finally {
                eventLoop.a1g(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = _this__u8e3s4.m3(result);
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.f1d_1.z19_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.b1d_1 = dispatcher;
    this.c1d_1 = continuation;
    this.d1d_1 = get_UNDEFINED();
    this.e1d_1 = threadContextElements(this.l3());
    this.f1d_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.v26 = function () {
    return this.c1d_1;
  };
  DispatchedContinuation.prototype.l3 = function () {
    return this.c1d_1.l3();
  };
  DispatchedContinuation.prototype.w26 = function () {
    return this.e1d_1;
  };
  DispatchedContinuation.prototype.t1d = function () {
    return !(this.f1d_1.z19_1 == null);
  };
  DispatchedContinuation.prototype.x26 = function () {
    {
      var tmp0_loop = this.f1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
            return Unit_getInstance();
        }
      }
    }
  };
  DispatchedContinuation.prototype.d10 = function () {
    this.x26();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1d();
    }
  };
  DispatchedContinuation.prototype.g1d = function () {
    {
      var tmp0_loop = this.f1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (tmp1__anonymous__uwfjfc === null) {
            this.f1d_1.z19_1 = get_REUSABLE_CLAIMED();
            return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
              if (this.f1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
                return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
              }
            } else {
              if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
              } else {
                if (tmp1__anonymous__uwfjfc instanceof Error) {
                } else {
                  var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.x1d = function (continuation) {
    {
      var tmp0_loop = this.f1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
            if (this.f1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
              {
                var tmp0_require = this.f1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require) {
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = 'Failed requirement.';
                    }
                    var message = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message));
                  }
                }
              }
              return tmp1__anonymous__uwfjfc;
            } else {
              var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.w1d = function (cause) {
    {
      var tmp0_loop = this.f1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.z19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
            if (this.f1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
              return true;
          } else {
            if (tmp0_subject instanceof Error)
              return true;
            else {
              if (this.f1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
                return false;
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.m1e = function () {
    var state = this.d1d_1;
    {
    }
    this.d1d_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.k1e = function () {
    return this;
  };
  DispatchedContinuation.prototype.m3 = function (result) {
    var context = this.c1d_1.l3();
    var state = toState$default(result, null, 1, null);
    if (this.b1d_1.i1f(context)) {
      this.d1d_1 = state;
      this.u26(get_MODE_ATOMIC());
      this.b1d_1.j1f(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        {
        }
        var eventLoop = ThreadLocalEventLoop_getInstance().d1g();
        if (false ? eventLoop.x1f() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.w1f()) {
          this.d1d_1 = state;
          this.u26(tmp0_executeUnconfined);
          eventLoop.u1f(this);
          tmp = true;
        } else {
          {
            eventLoop.z1f(true);
            try {
              {
                var tmp$ret$1;
                {
                  var tmp0_withCoroutineContext = this.l3();
                  var tmp1_withCoroutineContext = this.e1d_1;
                  tmp$ret$1 = this.c1d_1.m3(result);
                }
              }
              $l$loop: while (true) {
                if (!eventLoop.p1f())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.z1e($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.a1g(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.n1e = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.g1f_1(cause);
    }
  };
  DispatchedContinuation.prototype.y26 = function (state) {
    var job = this.l3().p3(Key_getInstance_2());
    if (!(job == null) ? !job.s1a() : false) {
      var cause = job.q1b();
      this.n1e(state, cause);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = this.m3(tmp$ret$0);
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.z26 = function (result) {
    var tmp$ret$0;
    {
      var tmp0_withContinuationContext = this.c1d_1;
      var tmp1_withContinuationContext = this.e1d_1;
      tmp$ret$0 = this.c1d_1.m3(result);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.b1d_1 + ', ' + toDebugString(this.c1d_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance().d1g();
    if (doYield ? eventLoop.x1f() : false)
      return false;
    var tmp;
    if (eventLoop.w1f()) {
      _this__u8e3s4.d1d_1 = contState;
      _this__u8e3s4.u26(mode);
      eventLoop.u1f(_this__u8e3s4);
      tmp = true;
    } else {
      {
        eventLoop.z1f(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.p1f())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.z1e($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.a1g(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.u1d_1 = resumeMode;
  }
  DispatchedTask.prototype.u26 = function (_set____db54di) {
    this.u1d_1 = _set____db54di;
  };
  DispatchedTask.prototype.v1d = function () {
    return this.u1d_1;
  };
  DispatchedTask.prototype.n1e = function (takenState, cause) {
  };
  DispatchedTask.prototype.v1e = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.x1e = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1a_1;
  };
  DispatchedTask.prototype.y1e = function () {
    {
    }
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.k1e();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.c1d_1;
      var tmp$ret$5;
      {
        var tmp0_withContinuationContext = delegate.e1d_1;
        var context = continuation.l3();
        var state = this.m1e();
        var exception = this.x1e(state);
        var job = (exception == null ? get_isCancellableMode(this.u1d_1) : false) ? context.p3(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job == null) ? !job.s1a() : false) {
          var cause = job.q1b();
          this.n1e(state, cause);
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance();
            var tmp1_failure = recoverStackTrace(cause, continuation);
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
          }
          tmp_0 = continuation.m3(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception == null)) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_failure_0 = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
              }
              tmp$ret$2 = continuation.m3(tmp$ret$1);
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            {
              var tmp2_resume = this.v1e(state);
              var tmp$ret$3;
              {
                var tmp0_success = Companion_getInstance();
                tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
              }
              tmp$ret$4 = continuation.m3(tmp$ret$3);
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      {
        var tmp_2;
        try {
          var tmp$ret$6;
          {
            var tmp0_success_0 = Companion_getInstance();
            var tmp1_success = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            {
              var tmp2_failure = Companion_getInstance();
              tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_3 = tmp$ret$7;
          } else {
            throw $p;
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
      }
      var result = tmp$ret$8;
      this.z1e(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.z1e = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.k1e().l3(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    {
    }
    var delegate = _this__u8e3s4.k1e();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.u1d_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.b1d_1;
      var context = delegate.l3();
      if (dispatcher.i1f(context)) {
        dispatcher.j1f(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.z1f(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.p1f())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.z1e($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.a1g(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().d1g();
    if (eventLoop.w1f()) {
      eventLoop.u1f(_this__u8e3s4);
    } else {
      {
        eventLoop.z1f(true);
        try {
          {
            resume(_this__u8e3s4, _this__u8e3s4.k1e(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.p1f())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.z1e($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.a1g(true);
        }
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.m1e();
    var exception = _this__u8e3s4.x1e(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp1_success = Companion_getInstance();
        var tmp2_success = _this__u8e3s4.v1e(state);
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      {
        var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.c1d_1;
        var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.e1d_1;
        tmp$ret$2 = tmp3_resumeUndispatchedWith.c1d_1.m3(result);
      }
    } else
      delegate.m3(result);
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    {
    }
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.b((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.b(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.c() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.g(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.a27_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.a27_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.a27_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.a27_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.a27_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          {
          }
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = handleCoroutineException(context, tmp0_safe_receiver);
      }
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.b27_1 = context;
  }
  ContextScope.prototype.r1a = function () {
    return this.b27_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.b27_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.y1x_1 = uCont;
  }
  ScopeCoroutine.prototype.g1c = function () {
    return true;
  };
  ScopeCoroutine.prototype.h1g = function () {
    var tmp0_safe_receiver = this.k1b();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1g();
  };
  ScopeCoroutine.prototype.c1b = function (state) {
    var tmp = intercepted(this.y1x_1);
    var tmp_0 = recoverResult(state, this.y1x_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.b1b = function (state) {
    this.y1x_1.m3(recoverResult(state, this.y1x_1));
  };
  ScopeCoroutine.$metadata$ = classMeta('ScopeCoroutine', [CoroutineStackFrame], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function Symbol(symbol) {
    this.c27_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.c27_1 + '>';
  };
  Symbol.prototype.d27 = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).j5();
  }
  function systemProp$default(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      minValue = 1;
    if (!(($mask0 & 8) === 0))
      maxValue = IntCompanionObject_getInstance().m_1;
    return systemProp(propertyName, defaultValue, minValue, maxValue);
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.v(parsed) <= 0 ? parsed.v(maxValue) <= 0 : false)) {
      {
        var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      }
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$paksz7(completion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    {
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    }
    completion.m3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = completion;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_failure = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          tmp$ret$2 = actualCompletion.m3(tmp$ret$1);
        }
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      {
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
        }
        tmp$ret$4 = actualCompletion.m3(tmp$ret$3);
      }
    }
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      var tmp;
      try {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = block;
            }
            var a = tmp$ret$0;
            tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.ki(receiver, _this__u8e3s4);
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.a1b(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        {
          var tmp0__anonymous__q1qw7t = state.x1a_1;
          tmp$ret$4 = true;
        }
        if (tmp$ret$4) {
          throw recoverStackTrace(state.x1a_1, _this__u8e3s4.y1x_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.x1a_1, _this__u8e3s4.y1x_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = completion;
      }
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            var tmp0_withCoroutineContext = completion.l3();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  tmp$ret$1 = _this__u8e3s4;
                }
                var a = tmp$ret$1;
                tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.ki(receiver, actualCompletion);
              }
              tmp$ret$3 = tmp$ret$2;
            }
            tmp$ret$4 = tmp$ret$3;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          {
            var tmp$ret$6;
            {
              var tmp0_failure = Companion_getInstance();
              tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp$ret$7 = actualCompletion.m3(tmp$ret$6);
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        {
          var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
          var tmp$ret$9;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$10 = actualCompletion.m3(tmp$ret$9);
        }
      }
    }
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.a1b(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.x1a_1)) {
        throw recoverStackTrace(state.x1a_1, _this__u8e3s4.y1x_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.x1a_1, _this__u8e3s4.y1x_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function get_MAX_SPIN_CYCLES() {
    init_properties_Semaphore_kt_nhoai8();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    init_properties_Semaphore_kt_nhoai8();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    init_properties_Semaphore_kt_nhoai8();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    init_properties_Semaphore_kt_nhoai8();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    init_properties_Semaphore_kt_nhoai8();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE() {
    init_properties_Semaphore_kt_nhoai8();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function Semaphore() {
  }
  Semaphore.$metadata$ = interfaceMeta('Semaphore');
  function Semaphore_0(permits, acquiredPermits) {
    init_properties_Semaphore_kt_nhoai8();
    return new SemaphoreImpl(permits, acquiredPermits);
  }
  function Semaphore$default(permits, acquiredPermits, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      acquiredPermits = 0;
    return Semaphore_0(permits, acquiredPermits);
  }
  function acquireSlowPath($this, $cont) {
    var tmp$ret$1;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
      var tmp$ret$0;
      $l$block_0: {
        while (true) {
          if (addAcquireToQueue($this, cancellable)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block_0;
          }
          var p = $this.j27_1.atomicfu$getAndDecrement();
          if (p > 0) {
            cancellable.w1c(Unit_getInstance(), $this.k27_1);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_0;
          }
        }
      }
      tmp$ret$1 = cancellable.u1e();
    }
    return tmp$ret$1;
  }
  function addAcquireToQueue($this, cont) {
    var curTail = $this.h27_1.z19_1;
    var enqIdx = $this.i27_1.atomicfu$getAndIncrement$long();
    var tmp$ret$7;
    $l$block_3: {
      var tmp1_findSegmentAndMoveForward = $this.h27_1;
      var tmp$ret$0;
      {
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$0 = enqIdx.n4(toLong(tmp0_div));
      }
      var tmp2_findSegmentAndMoveForward = tmp$ret$0;
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var cur = curTail;
          $l$loop: while (cur.d26_1.v(tmp2_findSegmentAndMoveForward) < 0 ? true : cur.f26()) {
            var tmp$ret$4;
            {
              var tmp1_nextOrIfClosed = cur;
              var tmp$ret$3;
              {
                var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
                {
                }
                var tmp$ret$2;
                {
                  var tmp;
                  if (tmp0_let === get_CLOSED()) {
                    tmp$ret$1 = _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
                    break $l$block;
                  } else {
                    tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
                  }
                  tmp$ret$2 = tmp;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var next = tmp$ret$4;
            if (!(next == null)) {
              cur = next;
              continue $l$loop;
            }
            var tmp$ret$5;
            {
              var tmp2_plus = cur.d26_1;
              tmp$ret$5 = tmp2_plus.p4(new Long(1, 0));
            }
            var newTail = createSegment(tmp$ret$5, cur);
            if (cur.j26(newTail)) {
              if (cur.f26())
                cur.i26();
              cur = newTail;
            }
          }
          tmp$ret$1 = _SegmentOrClosed___init__impl__jnexvb(cur);
        }
        var s = tmp$ret$1;
        var tmp_0;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp_0 = true;
        } else {
          var tmp$ret$6;
          $l$block_2: {
            var tmp4_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              {
                var tmp3__anonymous__ufb84q = tmp1_findSegmentAndMoveForward.z19_1;
                if (tmp3__anonymous__ufb84q.d26_1.v(tmp4_moveForward.d26_1) >= 0) {
                  tmp$ret$6 = true;
                  break $l$block_2;
                }
                if (!tmp4_moveForward.k26()) {
                  tmp$ret$6 = false;
                  break $l$block_2;
                }
                if (tmp1_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp3__anonymous__ufb84q, tmp4_moveForward)) {
                  if (tmp3__anonymous__ufb84q.l26())
                    tmp3__anonymous__ufb84q.i26();
                  tmp$ret$6 = true;
                  break $l$block_2;
                }
                if (tmp4_moveForward.l26())
                  tmp4_moveForward.i26();
              }
            }
            tmp$ret$6 = Unit_getInstance();
          }
          tmp_0 = tmp$ret$6;
        }
        if (tmp_0) {
          tmp$ret$7 = s;
          break $l$block_3;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$7);
    var tmp$ret$8;
    {
      var tmp3_rem = get_SEGMENT_SIZE();
      tmp$ret$8 = enqIdx.q5(toLong(tmp3_rem));
    }
    var i = tmp$ret$8.j5();
    var tmp$ret$9;
    {
      tmp$ret$9 = segment.p27_1.atomicfu$get(i).atomicfu$compareAndSet(null, cont);
    }
    if (tmp$ret$9) {
      var tmp$ret$11;
      {
        var tmp4__get_asHandler__z7w7dj = new CancelSemaphoreAcquisitionHandler(segment, i);
        var tmp$ret$10;
        {
          tmp$ret$10 = tmp4__get_asHandler__z7w7dj;
        }
        tmp$ret$11 = tmp$ret$10;
      }
      cont.v1c(tmp$ret$11);
      return true;
    }
    var tmp$ret$12;
    {
      var tmp5_cas = get_PERMIT();
      var tmp6_cas = get_TAKEN();
      tmp$ret$12 = segment.p27_1.atomicfu$get(i).atomicfu$compareAndSet(tmp5_cas, tmp6_cas);
    }
    if (tmp$ret$12) {
      cont.w1c(Unit_getInstance(), $this.k27_1);
      return true;
    }
    {
    }
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.f27_1.z19_1;
    var deqIdx = $this.g27_1.atomicfu$getAndIncrement$long();
    var tmp$ret$0;
    {
      var tmp0_div = get_SEGMENT_SIZE();
      tmp$ret$0 = deqIdx.n4(toLong(tmp0_div));
    }
    var id = tmp$ret$0;
    var tmp$ret$7;
    $l$block_3: {
      var tmp1_findSegmentAndMoveForward = $this.f27_1;
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var cur = curHead;
          $l$loop: while (cur.d26_1.v(id) < 0 ? true : cur.f26()) {
            var tmp$ret$4;
            {
              var tmp1_nextOrIfClosed = cur;
              var tmp$ret$3;
              {
                var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
                {
                }
                var tmp$ret$2;
                {
                  var tmp;
                  if (tmp0_let === get_CLOSED()) {
                    tmp$ret$1 = _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
                    break $l$block;
                  } else {
                    tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
                  }
                  tmp$ret$2 = tmp;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var next = tmp$ret$4;
            if (!(next == null)) {
              cur = next;
              continue $l$loop;
            }
            var tmp$ret$5;
            {
              var tmp2_plus = cur.d26_1;
              tmp$ret$5 = tmp2_plus.p4(new Long(1, 0));
            }
            var newTail = createSegment(tmp$ret$5, cur);
            if (cur.j26(newTail)) {
              if (cur.f26())
                cur.i26();
              cur = newTail;
            }
          }
          tmp$ret$1 = _SegmentOrClosed___init__impl__jnexvb(cur);
        }
        var s = tmp$ret$1;
        var tmp_0;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp_0 = true;
        } else {
          var tmp$ret$6;
          $l$block_2: {
            var tmp4_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              {
                var tmp3__anonymous__ufb84q = tmp1_findSegmentAndMoveForward.z19_1;
                if (tmp3__anonymous__ufb84q.d26_1.v(tmp4_moveForward.d26_1) >= 0) {
                  tmp$ret$6 = true;
                  break $l$block_2;
                }
                if (!tmp4_moveForward.k26()) {
                  tmp$ret$6 = false;
                  break $l$block_2;
                }
                if (tmp1_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp3__anonymous__ufb84q, tmp4_moveForward)) {
                  if (tmp3__anonymous__ufb84q.l26())
                    tmp3__anonymous__ufb84q.i26();
                  tmp$ret$6 = true;
                  break $l$block_2;
                }
                if (tmp4_moveForward.l26())
                  tmp4_moveForward.i26();
              }
            }
            tmp$ret$6 = Unit_getInstance();
          }
          tmp_0 = tmp$ret$6;
        }
        if (tmp_0) {
          tmp$ret$7 = s;
          break $l$block_3;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$7);
    segment.t26();
    if (segment.m26().v(id) > 0)
      return false;
    var tmp$ret$8;
    {
      var tmp2_rem = get_SEGMENT_SIZE();
      tmp$ret$8 = deqIdx.q5(toLong(tmp2_rem));
    }
    var i = tmp$ret$8.j5();
    var tmp$ret$9;
    {
      var tmp3_getAndSet = get_PERMIT();
      tmp$ret$9 = segment.p27_1.atomicfu$get(i).atomicfu$getAndSet(tmp3_getAndSet);
    }
    var cellState = tmp$ret$9;
    if (cellState === null) {
      {
        var tmp4_repeat = get_MAX_SPIN_CYCLES();
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp4_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp$ret$10;
              {
                tmp$ret$10 = segment.p27_1.atomicfu$get(i).z19_1;
              }
              if (tmp$ret$10 === get_TAKEN())
                return true;
            }
          }
           while (inductionVariable < tmp4_repeat);
      }
      var tmp$ret$11;
      {
        var tmp5_cas = get_PERMIT();
        var tmp6_cas = get_BROKEN();
        tmp$ret$11 = segment.p27_1.atomicfu$get(i).atomicfu$compareAndSet(tmp5_cas, tmp6_cas);
      }
      return !tmp$ret$11;
    } else if (cellState === get_CANCELLED())
      return false;
    else {
      return tryResumeAcquire((!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) ? cellState : THROW_CCE(), $this);
    }
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp0_elvis_lhs = _this__u8e3s4.t1c(Unit_getInstance(), null, $this.k27_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.u1c(token);
    return true;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.d10();
      return Unit_getInstance();
    };
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.e27_1 = permits;
    this.g27_1 = atomic$long$1(new Long(0, 0));
    this.i27_1 = atomic$long$1(new Long(0, 0));
    {
      var tmp0_require = this.e27_1 > 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Semaphore should have at least 1 permit, but had ' + this.e27_1;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    {
      var tmp1_require = 0 <= acquiredPermits ? acquiredPermits <= this.e27_1 : false;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'The number of acquired permits should be in 0..' + this.e27_1;
        }
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.f27_1 = atomic$ref$1(s);
    this.h27_1 = atomic$ref$1(s);
    this.j27_1 = atomic$int$1(this.e27_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.k27_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  SemaphoreImpl.prototype.k1x = function ($cont) {
    var p = this.j27_1.atomicfu$getAndDecrement();
    if (p > 0)
      return Unit_getInstance();
    return acquireSlowPath(this, $cont);
  };
  SemaphoreImpl.prototype.d10 = function () {
    while (true) {
      var tmp$ret$2;
      $l$block: {
        var tmp0_getAndUpdate = this.j27_1;
        while (true) {
          var cur = tmp0_getAndUpdate.a1a_1;
          var tmp$ret$1;
          {
            {
              var tmp0_check = cur < this.e27_1;
              {
              }
              if (!tmp0_check) {
                var tmp$ret$0;
                {
                  tmp$ret$0 = 'The number of released permits cannot be greater than ' + this.e27_1;
                }
                var message = tmp$ret$0;
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
            }
            tmp$ret$1 = cur + 1 | 0;
          }
          var upd = tmp$ret$1;
          if (tmp0_getAndUpdate.atomicfu$compareAndSet(cur, upd)) {
            tmp$ret$2 = cur;
            break $l$block;
          }
        }
      }
      var p = tmp$ret$2;
      if (p >= 0)
        return Unit_getInstance();
      if (tryResumeNextFromQueue(this))
        return Unit_getInstance();
    }
  };
  SemaphoreImpl.$metadata$ = classMeta('SemaphoreImpl', [Semaphore]);
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.p27_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE());
  }
  SemaphoreSegment.prototype.q27 = function () {
    return this.p27_1;
  };
  SemaphoreSegment.prototype.n26 = function () {
    return get_SEGMENT_SIZE();
  };
  SemaphoreSegment.prototype.g = function (index) {
    return this.p27_1.atomicfu$get(index).z19_1;
  };
  SemaphoreSegment.prototype.r27 = function (index, value) {
    this.p27_1.atomicfu$get(index).z19_1 = value;
  };
  SemaphoreSegment.prototype.s27 = function (index, expected, value) {
    return this.p27_1.atomicfu$get(index).atomicfu$compareAndSet(expected, value);
  };
  SemaphoreSegment.prototype.t27 = function (index, value) {
    return this.p27_1.atomicfu$get(index).atomicfu$getAndSet(value);
  };
  SemaphoreSegment.prototype.u27 = function (index) {
    {
      var tmp0_set = get_CANCELLED();
      this.p27_1.atomicfu$get(index).z19_1 = tmp0_set;
    }
    this.p26();
  };
  SemaphoreSegment.prototype.toString = function () {
    return 'SemaphoreSegment[id=' + toString_0(this.m26()) + ', hashCode=' + hashCode(this) + ']';
  };
  SemaphoreSegment.$metadata$ = classMeta('SemaphoreSegment', undefined, undefined, undefined, undefined, Segment.prototype);
  function createSegment(id, prev) {
    init_properties_Semaphore_kt_nhoai8();
    return new SemaphoreSegment(id, prev, 0);
  }
  function CancelSemaphoreAcquisitionHandler(segment, index) {
    CancelHandler.call(this);
    this.v27_1 = segment;
    this.w27_1 = index;
  }
  CancelSemaphoreAcquisitionHandler.prototype.y1c = function (cause) {
    this.v27_1.u27(this.w27_1);
  };
  CancelSemaphoreAcquisitionHandler.prototype.invoke = function (cause) {
    return this.y1c(cause);
  };
  CancelSemaphoreAcquisitionHandler.prototype.toString = function () {
    return 'CancelSemaphoreAcquisitionHandler[' + this.v27_1 + ', ' + this.w27_1 + ']';
  };
  CancelSemaphoreAcquisitionHandler.$metadata$ = classMeta('CancelSemaphoreAcquisitionHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_Semaphore_kt_uqcwok;
  function init_properties_Semaphore_kt_nhoai8() {
    if (properties_initialized_Semaphore_kt_uqcwok) {
    } else {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp$default('kotlinx.coroutines.semaphore.maxSpinCycles', 100, 0, 0, 12, null);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp$default('kotlinx.coroutines.semaphore.segmentSize', 16, 0, 0, 12, null);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        {
          var tmp0_asDynamic = window;
          tmp$ret$0 = tmp0_asDynamic;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        {
          var tmp1_asDynamic = window;
          tmp$ret$1 = tmp1_asDynamic;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.r1a().w3(context);
    return (!(combined === Dispatchers_getInstance().h1j_1) ? combined.p3(Key_getInstance()) == null : false) ? combined.w3(Dispatchers_getInstance().h1j_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).dd();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      {
        tmp$ret$1 = _this__u8e3s4;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.h1j_1 = createDefaultDispatcher();
    this.i1j_1 = Unconfined_getInstance();
    this.j1j_1 = new JsMainDispatcher(this.h1j_1, false);
    this.k1j_1 = null;
  }
  Dispatchers.prototype.l1j = function () {
    var tmp0_elvis_lhs = this.k1j_1;
    return tmp0_elvis_lhs == null ? this.j1j_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.y27_1 = delegate;
    this.z27_1 = invokeImmediately;
    this.a28_1 = this.z27_1 ? this : new JsMainDispatcher(this.y27_1, true);
  }
  JsMainDispatcher.prototype.f1j = function () {
    return this.a28_1;
  };
  JsMainDispatcher.prototype.i1f = function (context) {
    return !this.z27_1;
  };
  JsMainDispatcher.prototype.j1f = function (context, block) {
    return this.y27_1.j1f(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.g1j();
    return tmp0_elvis_lhs == null ? this.y27_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.j1f = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.f28_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.f28_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.f28_1, this.f28_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.f28_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.i28 = function () {
    process.nextTick(this.s28().o28_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.i28 = function () {
    setTimeout(this.s28().o28_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.a29();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.p28_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.o28_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.b29 = function () {
    this.p28_1.i28();
  };
  ScheduledMessageQueue.prototype.c29 = function () {
    setTimeout(this.o28_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.r28_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.s28 = function () {
    return this.r28_1;
  };
  SetTimeoutBasedDispatcher.prototype.j1f = function (context, block) {
    this.r28_1.d29(block);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.y28_1 = 16;
    this.z28_1 = false;
  }
  MessageQueue.prototype.d29 = function (element) {
    this.v1f(element);
    if (!this.z28_1) {
      this.z28_1 = true;
      this.b29();
    }
  };
  MessageQueue.prototype.a29 = function () {
    try {
      {
        var tmp0_repeat = this.y28_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs = this.t1f();
              var tmp;
              if (tmp0_elvis_lhs == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var element = tmp;
              element.y1e();
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
    }finally {
      if (this.y1f()) {
        this.z28_1 = false;
      } else {
        this.c29();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.f29_1 = window_0;
    this.g29_1 = new WindowMessageQueue(this.f29_1);
  }
  WindowDispatcher.prototype.j1f = function (context, block) {
    return this.g29_1.d29(block);
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.m29_1 ? event.data == this$0.n29_1 : false) {
        event.stopPropagation();
        tmp = this$0.a29();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.a29();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.m29_1 = window_0;
    this.n29_1 = 'dispatchCoroutine';
    this.m29_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.b29 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.c29 = function () {
    this.m29_1.postMessage(this.n29_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      {
        var tmp0_also = new WindowDispatcher(_this__u8e3s4);
        {
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = _this__u8e3s4;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also;
        }
        tmp$ret$2 = tmp0_also;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SafeCollector$collectContextSize$lambda() {
    return function (count, _anonymous_parameter_1__qggqgd) {
      return count + 1 | 0;
    };
  }
  function SafeCollector(collector, collectContext) {
    this.r1x_1 = collector;
    this.s1x_1 = collectContext;
    var tmp = this;
    tmp.t1x_1 = this.s1x_1.v3(0, SafeCollector$collectContextSize$lambda());
    this.u1x_1 = null;
  }
  SafeCollector.prototype.w1q = function (value, $cont) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = $cont.l3();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.u1x_1 === currentContext)) {
      checkContext(this, currentContext);
      this.u1x_1 = currentContext;
    }
    return this.r1x_1.w1q(value, $cont);
  };
  SafeCollector.prototype.u22 = function () {
  };
  SafeCollector.$metadata$ = classMeta('SafeCollector', [FlowCollector]);
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.s1d = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.p1d_1 = this;
    this.q1d_1 = this;
    this.r1d_1 = false;
  }
  LinkedListNode.prototype.o1g = function () {
    return this.p1d_1;
  };
  LinkedListNode.prototype.s1g = function () {
    return this.p1d_1;
  };
  LinkedListNode.prototype.t1g = function () {
    return this.q1d_1;
  };
  LinkedListNode.prototype.u1g = function () {
    return this.r1d_1;
  };
  LinkedListNode.prototype.v1g = function (node) {
    var prev = this.q1d_1;
    node.p1d_1 = this;
    node.q1d_1 = prev;
    prev.p1d_1 = node;
    this.q1d_1 = node;
  };
  LinkedListNode.prototype.s1d = function () {
    return this.w1g();
  };
  LinkedListNode.prototype.w1g = function () {
    if (this.r1d_1)
      return false;
    var prev = this.q1d_1;
    var next = this.p1d_1;
    prev.p1d_1 = next;
    next.q1d_1 = prev;
    this.r1d_1 = true;
    return true;
  };
  LinkedListNode.prototype.g1h = function (node) {
    if (!(this.p1d_1 === this))
      return false;
    this.v1g(node);
    return true;
  };
  LinkedListNode.prototype.x1g = function (node, condition) {
    if (!condition())
      return false;
    this.v1g(node);
    return true;
  };
  LinkedListNode.prototype.y1g = function (node, predicate) {
    if (!predicate(this.q1d_1))
      return false;
    this.v1g(node);
    return true;
  };
  LinkedListNode.prototype.z1g = function (node, predicate, condition) {
    if (!predicate(this.q1d_1))
      return false;
    if (!condition())
      return false;
    this.v1g(node);
    return true;
  };
  LinkedListNode.prototype.a1h = function () {
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.e1g_1 = null;
  }
  CommonThreadLocal.prototype.f1g = function () {
    var tmp = this.e1g_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.g1g = function (value) {
    this.e1g_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.u1b = invokeOnCompletion$default;
  JobSupport.prototype.w3 = plus;
  JobSupport.prototype.p3 = get;
  JobSupport.prototype.v3 = fold;
  JobSupport.prototype.u3 = minusKey;
  AbstractCoroutine.prototype.u1b = invokeOnCompletion$default;
  AbstractCoroutine.prototype.w3 = plus;
  AbstractCoroutine.prototype.p3 = get;
  AbstractCoroutine.prototype.v3 = fold;
  AbstractCoroutine.prototype.u3 = minusKey;
  StandaloneCoroutine.prototype.u1b = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.w3 = plus;
  StandaloneCoroutine.prototype.p3 = get;
  StandaloneCoroutine.prototype.v3 = fold;
  StandaloneCoroutine.prototype.u3 = minusKey;
  LazyStandaloneCoroutine.prototype.u1b = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.w3 = plus;
  LazyStandaloneCoroutine.prototype.p3 = get;
  LazyStandaloneCoroutine.prototype.v3 = fold;
  LazyStandaloneCoroutine.prototype.u3 = minusKey;
  CoroutineDispatcher.prototype.p3 = get_0;
  CoroutineDispatcher.prototype.v3 = fold;
  CoroutineDispatcher.prototype.u3 = minusKey_0;
  CoroutineDispatcher.prototype.w3 = plus;
  EventLoop.prototype.w3 = plus;
  EventLoop.prototype.p3 = get_0;
  EventLoop.prototype.v3 = fold;
  EventLoop.prototype.u3 = minusKey_0;
  JobImpl.prototype.u1b = invokeOnCompletion$default;
  JobImpl.prototype.w3 = plus;
  JobImpl.prototype.p3 = get;
  JobImpl.prototype.v3 = fold;
  JobImpl.prototype.u3 = minusKey;
  MainCoroutineDispatcher.prototype.w3 = plus;
  MainCoroutineDispatcher.prototype.p3 = get_0;
  MainCoroutineDispatcher.prototype.v3 = fold;
  MainCoroutineDispatcher.prototype.u3 = minusKey_0;
  Unconfined.prototype.w3 = plus;
  Unconfined.prototype.p3 = get_0;
  Unconfined.prototype.v3 = fold;
  Unconfined.prototype.u3 = minusKey_0;
  AbstractSendChannel.prototype.m1m = close$default;
  AbstractChannel.prototype.m1m = close$default;
  ArrayChannel.prototype.m1m = close$default;
  ChannelCoroutine.prototype.m1m = close$default;
  ChannelCoroutine.prototype.u1b = invokeOnCompletion$default;
  ChannelCoroutine.prototype.w3 = plus;
  ChannelCoroutine.prototype.p3 = get;
  ChannelCoroutine.prototype.v3 = fold;
  ChannelCoroutine.prototype.u3 = minusKey;
  ConflatedChannel.prototype.m1m = close$default;
  LinkedListChannel.prototype.m1m = close$default;
  ProducerCoroutine.prototype.m1m = close$default;
  ProducerCoroutine.prototype.u1b = invokeOnCompletion$default;
  ProducerCoroutine.prototype.w3 = plus;
  ProducerCoroutine.prototype.p3 = get;
  ProducerCoroutine.prototype.v3 = fold;
  ProducerCoroutine.prototype.u3 = minusKey;
  RendezvousChannel.prototype.m1m = close$default;
  ScopeCoroutine.prototype.u1b = invokeOnCompletion$default;
  ScopeCoroutine.prototype.w3 = plus;
  ScopeCoroutine.prototype.p3 = get;
  ScopeCoroutine.prototype.v3 = fold;
  ScopeCoroutine.prototype.u3 = minusKey;
  JsMainDispatcher.prototype.w3 = plus;
  JsMainDispatcher.prototype.p3 = get_0;
  JsMainDispatcher.prototype.v3 = fold;
  JsMainDispatcher.prototype.u3 = minusKey_0;
  UnconfinedEventLoop.prototype.w3 = plus;
  UnconfinedEventLoop.prototype.p3 = get_0;
  UnconfinedEventLoop.prototype.v3 = fold;
  UnconfinedEventLoop.prototype.u3 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.w3 = plus;
  SetTimeoutBasedDispatcher.prototype.p3 = get_0;
  SetTimeoutBasedDispatcher.prototype.v3 = fold;
  SetTimeoutBasedDispatcher.prototype.u3 = minusKey_0;
  NodeDispatcher.prototype.w3 = plus;
  NodeDispatcher.prototype.p3 = get_0;
  NodeDispatcher.prototype.v3 = fold;
  NodeDispatcher.prototype.u3 = minusKey_0;
  SetTimeoutDispatcher.prototype.w3 = plus;
  SetTimeoutDispatcher.prototype.p3 = get_0;
  SetTimeoutDispatcher.prototype.v3 = fold;
  SetTimeoutDispatcher.prototype.u3 = minusKey_0;
  WindowDispatcher.prototype.w3 = plus;
  WindowDispatcher.prototype.p3 = get_0;
  WindowDispatcher.prototype.v3 = fold;
  WindowDispatcher.prototype.u3 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = awaitClose;
  _.$_$.b = MutableSharedFlow$default;
  _.$_$.c = flatMapMerge$default;
  _.$_$.d = Job$default;
  _.$_$.e = cancel$default;
  _.$_$.f = launch$default;
  _.$_$.g = Dispatchers_getInstance;
  _.$_$.h = ProducerScope;
  _.$_$.i = FlowCollector;
  _.$_$.j = Flow;
  _.$_$.k = MutableStateFlow_0;
  _.$_$.l = asSharedFlow;
  _.$_$.m = asStateFlow;
  _.$_$.n = callbackFlow;
  _.$_$.o = catch_0;
  _.$_$.p = flowOf;
  _.$_$.q = launchIn;
  _.$_$.r = onEach;
  _.$_$.s = CoroutineScope_0;
  _.$_$.t = CoroutineScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map