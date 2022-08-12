import core from "./coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import loginActions = coffeeshop.ui.customer.login.actions
import signupActions = coffeeshop.ui.customer.signup.actions
import accountActions = coffeeshop.ui.customer.account.actions
import createAddressActions = coffeeshop.ui.customer.address.create.actions
import editAddressActions = coffeeshop.ui.customer.address.edit.actions
import catalogActions = coffeeshop.ui.catalog.actions
import productDetailActions = coffeeshop.ui.productDetail.actions
import cartActions = coffeeshop.ui.cart.actions
import CatalogUIState = coffeeshop.ui.catalog.CatalogUIState
import CatalogUIStore = coffeeshop.ui.catalog.CatalogUIStore
import Product = coffeeshop.entities.Product
import Category = coffeeshop.entities.Category
import Price = coffeeshop.entities.Price
import Address = coffeeshop.entities.Address
import LoginUIState = coffeeshop.ui.customer.login.LoginUIState
import LoginUIStore = coffeeshop.ui.customer.login.LoginUIStore
import Field = coffeeshop.entities.Field
import FieldType = coffeeshop.entities.FieldType
import SignupUIState = coffeeshop.ui.customer.signup.SignupUIState
import SignupUIStore = coffeeshop.ui.customer.signup.SignupUIStore
import ProductDetailUIStore = coffeeshop.ui.productDetail.ProductDetailUIStore
import Cart = coffeeshop.entities.Cart
import CartUIState = coffeeshop.ui.cart.CartUIState
import CartUIStore = coffeeshop.ui.cart.CartUIStore
import CustomerUIStore = coffeeshop.ui.customer.CustomerUIStore
import AccountUIStore = coffeeshop.ui.customer.account.AccountUIStore
import AccountUIState = coffeeshop.ui.customer.account.AccountUIState
import AddressListUIState = coffeeshop.ui.customer.address.list.AddressListUIState
import CreateAddressUIStore = coffeeshop.ui.customer.address.create.CreateAddressUIStore
import CreateAddressUIState = coffeeshop.ui.customer.address.create.CreateAddressUIState
import EditAddressUIStore = coffeeshop.ui.customer.address.edit.EditAddressUIStore
import EditAddressUIState = coffeeshop.ui.customer.address.edit.EditAddressUIState

declare module "./coffee-shop-core/CoffeeShop-core" {
    namespace me.haymob.coffeeshop.ui.catalog {
        interface CatalogUIState {
            getCategories(): Array<Category>
        }
        interface CatalogUIStore {
            incrementProduct(product: Product): void
            decrementProduct(product: Product): void
        }
    }
    namespace me.haymob.coffeeshop.ui.productDetail {
        interface ProductDetailUIStore {
            incrementProduct(): void
            decrementProduct(): void
            addProductToWishlist(): void
            removeProductFromWishlist(): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.login {
        interface LoginUIState {
            getFields(): Array<Field>
        }
        interface LoginUIStore {
            updateField(type: FieldType, value: string): void
            login(): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.signup {
        interface SignupUIState {
            getFields(): Array<Field>
        }
        interface SignupUIStore {
            updateField(type: FieldType, value: string): void
            signup(): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer {
        interface CustomerUIStore {
            logout(): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.account {
        interface AccountUIStore {
            updateCustomer(): void
            updateField(type: FieldType, value: string): void
        }
        interface AccountUIState {
            getFields(): Array<Field>
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.address.list {
        interface AddressListUIState {
            getAddresses(): Array<Address>
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.address.create {
        interface CreateAddressUIState {
            getFields(): Array<Field>
        }
        interface CreateAddressUIStore {
            createAddress(): void
            updateField(type: FieldType, value: string): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.address.edit {
        interface EditAddressUIState {
            getFields(): Array<Field>
        }
        interface EditAddressUIStore {
            updateAddress(): void
            removeAddress(): void
            updateField(type: FieldType, value: string): void
        }
    }
    namespace me.haymob.coffeeshop.entities {
        interface Category {
            getProducts(): Array<Product>
        }
        interface Price {
            stringValue(): String
        }
        interface Cart {
            getItems(): Array<Cart.Item>
            getPaymentMethods(): Array<PaymentMethod>
            getShippingMethods(): Array<ShippingMethod>
        }
    }
    namespace me.haymob.coffeeshop.ui.cart {
        interface CartUIState {
            getSelectedItems(): Array<string>
        }
        interface CartUIStore {
            incrementProduct(product: Product): void
            decrementProduct(product: Product): void
            selectCartItem(item: Cart.Item): void
            selectAllItems(): void
            removeSelectedItems(): void
        }
    }
}


function toArray(obj: any) {
    return Array.isArray(obj) ? obj : Array()
}

CatalogUIState.prototype.getCategories = function () {
    return toArray(this.categories["h_1"])
}

Category.prototype.getProducts = function () {
    return toArray(this.products["h_1"])
}

Price.prototype.stringValue = function () {
    return `${this.value} ${this.currency}`
}

LoginUIState.prototype.getFields = function () {
    return toArray(this.fields["h_1"])
}

LoginUIStore.prototype.updateField = function (type: FieldType, value: string) {
    loginActions.updateField(this, type, value)
}

LoginUIStore.prototype.login = function () {
    loginActions.login(this)
}

SignupUIState.prototype.getFields = function () {
    return toArray(this.fields["h_1"])
}

SignupUIStore.prototype.updateField = function (type: FieldType, value: string) {
    signupActions.updateField(this, type, value)
}

SignupUIStore.prototype.signup = function () {
    signupActions.signup(this)
}
CustomerUIStore.prototype.logout = function () {
    coffeeshop.ui.customer.actions.logout(this)
}

CatalogUIStore.prototype.incrementProduct = function (product: Product) {
    catalogActions.incrementProduct(this, product)
}

CatalogUIStore.prototype.decrementProduct = function (product: Product) {
    catalogActions.decrementProduct(this, product)
}

ProductDetailUIStore.prototype.incrementProduct = function () {
    productDetailActions.incrementProduct(this)
}
ProductDetailUIStore.prototype.decrementProduct = function () {
    productDetailActions.decrementProduct(this)
}

ProductDetailUIStore.prototype.addProductToWishlist = function () {
    productDetailActions.addProductToWishlist(this)
}

ProductDetailUIStore.prototype.removeProductFromWishlist = function () {
    productDetailActions.removeProductFromWishlist(this)
}

Cart.prototype.getItems = function () {
    return toArray(this.items["h_1"])
}

Cart.prototype.getPaymentMethods = function () {
    return toArray(this.paymentMethods["h_1"])
}

Cart.prototype.getShippingMethods = function () {
    return toArray(this.shippingMethods["h_1"])
}

CartUIState.prototype.getSelectedItems = function () {
    return toArray(this.selectedItems["h_1"])
}

CartUIStore.prototype.incrementProduct = function (product: Product) {
    cartActions.incrementProduct(this, product)
}

CartUIStore.prototype.decrementProduct = function (product: Product) {
    cartActions.decrementProduct(this, product)
}

CartUIStore.prototype.selectCartItem = function (item: Cart.Item) {
    cartActions.selectCartItem(this, item)
}

CartUIStore.prototype.selectAllItems = function () {
    cartActions.selectAllItems(this)
}

CartUIStore.prototype.removeSelectedItems = function () {
    cartActions.removeSelectedItems(this)
}

AccountUIStore.prototype.updateCustomer = function () {
    accountActions.updateCustomer(this)
}

AccountUIStore.prototype.updateField = function (type: FieldType, value: string) {
    accountActions.updateField(this, type, value)
}

AccountUIState.prototype.getFields = function () {
    return toArray(this.fields["h_1"])
}

AddressListUIState.prototype.getAddresses = function () {
    return toArray(this.addresses["h_1"])
}

CreateAddressUIStore.prototype.createAddress = function() {
    createAddressActions.createAddress(this)
}

CreateAddressUIStore.prototype.updateField = function(type: FieldType, value: string) {
    createAddressActions.updateField(this, type, value)
}

CreateAddressUIState.prototype.getFields = function() {
    return toArray(this.fields["h_1"])
}

EditAddressUIStore.prototype.updateAddress = function() {
    editAddressActions.updateAddress(this)
}

EditAddressUIStore.prototype.removeAddress = function() {
    editAddressActions.removeAddress(this)
}

EditAddressUIStore.prototype.updateField = function(type: FieldType, value: string) {
    editAddressActions.updateField(this, type, value)
}

EditAddressUIState.prototype.getFields = function() {
    return toArray(this.fields["h_1"])
}