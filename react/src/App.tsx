import core from "./coffee-shop-core/CoffeeShop-core"
const coffeeshop = core.me.haymob.coffeeshop
const actions = coffeeshop.ui.catalog.actions

export function App() {
    let store = coffeeshop.catalogUIStore()
    
    coffeeshop.onState(store, () => {
        console.log(store.currentState.categories)
    })

    actions.loadCatalog(store)

    return (<h1>Hello world!</h1>)
}