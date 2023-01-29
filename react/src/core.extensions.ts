import core, { me } from "./shop-core/Shop-core"
import shop = core.me.haymob.shop
import loginActions = shop.ui.customer.login.actions
import signupActions = shop.ui.customer.signup.actions
import accountActions = shop.ui.customer.account.actions
import createAddressActions = shop.ui.customer.address.create.actions
import editAddressActions = shop.ui.customer.address.edit.actions
import catalogActions = shop.ui.catalog.actions
import productDetailActions = shop.ui.productDetail.actions
import cartActions = shop.ui.cart.actions
import checkoutActions = shop.ui.cart.checkout.actions
import wishlistActions = shop.ui.customer.wishlist.actions
import CatalogUIState = shop.ui.catalog.CatalogUIState
import CatalogUIStore = shop.ui.catalog.CatalogUIStore
import Product = shop.entities.Product
import Category = shop.entities.Category
import Price = shop.entities.Price
import Address = shop.entities.Address
import PaymentMethod = shop.entities.PaymentMethod
import ShippingMethod = shop.entities.ShippingMethod
import Order = shop.entities.Order
import LoginUIState = shop.ui.customer.login.LoginUIState
import LoginUIStore = shop.ui.customer.login.LoginUIStore
import Field = shop.entities.Field
import FieldType = shop.entities.FieldType
import SignupUIState = shop.ui.customer.signup.SignupUIState
import SignupUIStore = shop.ui.customer.signup.SignupUIStore
import ProductDetailUIStore = shop.ui.productDetail.ProductDetailUIStore
import Cart = shop.entities.Cart
import CartUIState = shop.ui.cart.CartUIState
import CartUIStore = shop.ui.cart.CartUIStore
import CustomerUIStore = shop.ui.customer.CustomerUIStore
import AccountUIStore = shop.ui.customer.account.AccountUIStore
import AccountUIState = shop.ui.customer.account.AccountUIState
import AddressListUIState = shop.ui.customer.address.list.AddressListUIState
import CreateAddressUIStore = shop.ui.customer.address.create.CreateAddressUIStore
import CreateAddressUIState = shop.ui.customer.address.create.CreateAddressUIState
import EditAddressUIStore = shop.ui.customer.address.edit.EditAddressUIStore
import EditAddressUIState = shop.ui.customer.address.edit.EditAddressUIState
import CheckoutUIState = shop.ui.cart.checkout.CheckoutUIState
import CheckoutUIStore = shop.ui.cart.checkout.CheckoutUIStore
import OrderListUIState = shop.ui.customer.order.OrderListUIState
import OrderDetailUIStore = shop.ui.customer.order.detail.OrderDetailUIStore
import WishlistUIState = shop.ui.customer.wishlist.WishlistUIState
import WishlistUIStore = shop.ui.customer.wishlist.WishlistUIStore

declare module "./shop-core/Shop-core" {
    namespace me.haymob.shop.ui.catalog {
        interface CatalogUIState {
            getCategories(): Array<Category>
        }
        interface CatalogUIStore {
            incrementProduct(product: Product): void
            decrementProduct(product: Product): void
        }
    }
    namespace me.haymob.shop.ui.productDetail {
        interface ProductDetailUIStore {
            incrementProduct(): void
            decrementProduct(): void
            addProductToWishlist(): void
            removeProductFromWishlist(): void
        }
    }
    namespace me.haymob.shop.ui.customer.login {
        interface LoginUIState {
            getFields(): Array<Field>
        }
        interface LoginUIStore {
            updateField(type: FieldType, value: string): void
            login(): void
        }
    }
    namespace me.haymob.shop.ui.customer.signup {
        interface SignupUIState {
            getFields(): Array<Field>
        }
        interface SignupUIStore {
            updateField(type: FieldType, value: string): void
            signup(): void
        }
    }
    namespace me.haymob.shop.ui.customer {
        interface CustomerUIStore {
            logout(): void
        }
    }
    namespace me.haymob.shop.ui.customer.account {
        interface AccountUIStore {
            updateCustomer(): void
            updateField(type: FieldType, value: string): void
        }
        interface AccountUIState {
            getFields(): Array<Field>
        }
    }
    namespace me.haymob.shop.ui.customer.address.list {
        interface AddressListUIState {
            getAddresses(): Array<Address>
        }
    }
    namespace me.haymob.shop.ui.customer.address.create {
        interface CreateAddressUIState {
            getFields(): Array<Field>
        }
        interface CreateAddressUIStore {
            createAddress(): void
            updateField(type: FieldType, value: string): void
        }
    }
    namespace me.haymob.shop.ui.customer.address.edit {
        interface EditAddressUIState {
            getFields(): Array<Field>
        }
        interface EditAddressUIStore {
            updateAddress(): void
            removeAddress(): void
            updateField(type: FieldType, value: string): void
        }
    }
    namespace me.haymob.shop.ui.customer.order {
        interface OrderListUIState {
            getOrders(): Array<Order>
        }
    }
    namespace me.haymob.shop.ui.customer.order.detail {
        interface OrderDetailUIStore {
            reorder(): void
        }
    }
    namespace me.haymob.shop.ui.customer.wishlist {
        interface WishlistUIState {
            getWishlist(): Array<Product>
        }
        interface WishlistUIStore {
            incrementProduct(product: Product): void
            decrementProduct(product: Product): void
            removeProductFromWishlist(product: Product): void
        }
    }
    namespace me.haymob.shop.entities {
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
        interface Order {
            getProducts(): Array<Product>
        }
    }
    namespace me.haymob.shop.ui.cart {
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
    namespace me.haymob.shop.ui.cart.checkout {
        interface CheckoutUIState {
            getAddresses(): Array<Address>
        }
        interface CheckoutUIStore {
            createOrder(): void
            selectPayment(method: PaymentMethod): void
            selectShipping(method: ShippingMethod): void
            setAddress(address: Address): void
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
    shop.ui.customer.actions.logout(this)
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

CreateAddressUIStore.prototype.createAddress = function () {
    createAddressActions.createAddress(this)
}

CreateAddressUIStore.prototype.updateField = function (type: FieldType, value: string) {
    createAddressActions.updateField(this, type, value)
}

CreateAddressUIState.prototype.getFields = function () {
    return toArray(this.fields["h_1"])
}

EditAddressUIStore.prototype.updateAddress = function () {
    editAddressActions.updateAddress(this)
}

EditAddressUIStore.prototype.removeAddress = function () {
    editAddressActions.removeAddress(this)
}

EditAddressUIStore.prototype.updateField = function (type: FieldType, value: string) {
    editAddressActions.updateField(this, type, value)
}

EditAddressUIState.prototype.getFields = function () {
    return toArray(this.fields["h_1"])
}

CheckoutUIState.prototype.getAddresses = function () {
    return toArray(this.addresses["h_1"])
}

CheckoutUIStore.prototype.createOrder = function () {
    checkoutActions.createOrder(this)
}

CheckoutUIStore.prototype.selectPayment = function (method: PaymentMethod) {
    checkoutActions.selectPayment(this, method)
}

CheckoutUIStore.prototype.selectShipping = function (method: ShippingMethod) {
    checkoutActions.selectShipping(this, method)
}

CheckoutUIStore.prototype.setAddress = function (address: Address) {
    checkoutActions.setAddress(this, address)
}

OrderListUIState.prototype.getOrders = function () {
    return toArray(this.orders["h_1"])
}

Order.prototype.getProducts = function () {
    return toArray(this.products["h_1"])
}

OrderDetailUIStore.prototype.reorder = function () {
    shop.ui.customer.order.detail.actions.reorder(this)
}

WishlistUIState.prototype.getWishlist = function () {
    return toArray(this.wishlist["h_1"])
}

WishlistUIStore.prototype.incrementProduct = function (product: Product) {
    wishlistActions.incrementProduct(this, product)
}

WishlistUIStore.prototype.decrementProduct = function (product: Product) {
    wishlistActions.decrementProduct(this, product)
}

WishlistUIStore.prototype.removeProductFromWishlist = function (product: Product) {
    wishlistActions.removeProductFromWishlist(this, product)
}