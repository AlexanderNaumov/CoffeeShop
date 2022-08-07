type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace me.haymob.coffeeshop.entities {
    class Address {
        constructor(id: string, firstName: string, lastName: string, city: string, street: string, postcode: string);
        get id(): string;
        get firstName(): string;
        get lastName(): string;
        get city(): string;
        get street(): string;
        get postcode(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): string;
        copy(id?: string, firstName?: string, lastName?: string, city?: string, street?: string, postcode?: string): me.haymob.coffeeshop.entities.Address;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Cart {
        constructor(id: string, totalPrice: Nullable<me.haymob.coffeeshop.entities.Price>, items: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Cart.Item> */, paymentMethods: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.PaymentMethod> */, shippingMethods: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.ShippingMethod> */, address: Nullable<me.haymob.coffeeshop.entities.Address>);
        get id(): string;
        get totalPrice(): Nullable<me.haymob.coffeeshop.entities.Price>;
        get items(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Cart.Item> */;
        get paymentMethods(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.PaymentMethod> */;
        get shippingMethods(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.ShippingMethod> */;
        get address(): Nullable<me.haymob.coffeeshop.entities.Address>;
        component1(): string;
        component2(): Nullable<me.haymob.coffeeshop.entities.Price>;
        component3(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Cart.Item> */;
        component4(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.PaymentMethod> */;
        component5(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.ShippingMethod> */;
        component6(): Nullable<me.haymob.coffeeshop.entities.Address>;
        copy(id?: string, totalPrice?: Nullable<me.haymob.coffeeshop.entities.Price>, items?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Cart.Item> */, paymentMethods?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.PaymentMethod> */, shippingMethods?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.ShippingMethod> */, address?: Nullable<me.haymob.coffeeshop.entities.Address>): me.haymob.coffeeshop.entities.Cart;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Cart {
        class Item {
            constructor(id: string, product: me.haymob.coffeeshop.entities.Product);
            get id(): string;
            get product(): me.haymob.coffeeshop.entities.Product;
            component1(): string;
            component2(): me.haymob.coffeeshop.entities.Product;
            copy(id?: string, product?: me.haymob.coffeeshop.entities.Product): me.haymob.coffeeshop.entities.Cart.Item;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Category {
        constructor(id: string, name: string, products: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */);
        get id(): string;
        get name(): string;
        get products(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        set products(value: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */);
        component1(): string;
        component2(): string;
        component3(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        copy(id?: string, name?: string, products?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */): me.haymob.coffeeshop.entities.Category;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Customer {
        constructor(id: string, firstName: string, lastName: string, email: string, addresses: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Address> */, wishlist: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */, orders: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Order> */);
        get id(): string;
        get firstName(): string;
        get lastName(): string;
        get email(): string;
        get addresses(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Address> */;
        get wishlist(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        get orders(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Order> */;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Address> */;
        component6(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        component7(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Order> */;
        copy(id?: string, firstName?: string, lastName?: string, email?: string, addresses?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Address> */, wishlist?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */, orders?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Order> */): me.haymob.coffeeshop.entities.Customer;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Field {
        constructor(type: me.haymob.coffeeshop.entities.FieldType, value: string, error: Nullable<string>);
        get type(): me.haymob.coffeeshop.entities.FieldType;
        get value(): string;
        get error(): Nullable<string>;
        component1(): me.haymob.coffeeshop.entities.FieldType;
        component2(): string;
        component3(): Nullable<string>;
        copy(type?: me.haymob.coffeeshop.entities.FieldType, value?: string, error?: Nullable<string>): me.haymob.coffeeshop.entities.Field;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    abstract class FieldType {
        private constructor();
        static get Email(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "Email";
            get ordinal(): 0;
        };
        static get Password(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "Password";
            get ordinal(): 1;
        };
        static get NewPassword(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "NewPassword";
            get ordinal(): 2;
        };
        static get FirstName(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "FirstName";
            get ordinal(): 3;
        };
        static get LastName(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "LastName";
            get ordinal(): 4;
        };
        static get City(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "City";
            get ordinal(): 5;
        };
        static get Street(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "Street";
            get ordinal(): 6;
        };
        static get Postcode(): me.haymob.coffeeshop.entities.FieldType & {
            get name(): "Postcode";
            get ordinal(): 7;
        };
        static values(): Array<me.haymob.coffeeshop.entities.FieldType>;
        static valueOf(value: string): me.haymob.coffeeshop.entities.FieldType;
        get name(): "Email" | "Password" | "NewPassword" | "FirstName" | "LastName" | "City" | "Street" | "Postcode";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Order {
        constructor(id: string, paymentMethod: me.haymob.coffeeshop.entities.PaymentMethod, shippingMethod: me.haymob.coffeeshop.entities.ShippingMethod, cartId: string, address: me.haymob.coffeeshop.entities.Address, products: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */, totalPrice: me.haymob.coffeeshop.entities.Price, createdAt: string);
        get id(): string;
        get paymentMethod(): me.haymob.coffeeshop.entities.PaymentMethod;
        get shippingMethod(): me.haymob.coffeeshop.entities.ShippingMethod;
        get cartId(): string;
        get address(): me.haymob.coffeeshop.entities.Address;
        get products(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        get totalPrice(): me.haymob.coffeeshop.entities.Price;
        get createdAt(): string;
        component1(): string;
        component2(): me.haymob.coffeeshop.entities.PaymentMethod;
        component3(): me.haymob.coffeeshop.entities.ShippingMethod;
        component4(): string;
        component5(): me.haymob.coffeeshop.entities.Address;
        component6(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */;
        component7(): me.haymob.coffeeshop.entities.Price;
        component8(): string;
        copy(id?: string, paymentMethod?: me.haymob.coffeeshop.entities.PaymentMethod, shippingMethod?: me.haymob.coffeeshop.entities.ShippingMethod, cartId?: string, address?: me.haymob.coffeeshop.entities.Address, products?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Product> */, totalPrice?: me.haymob.coffeeshop.entities.Price, createdAt?: string): me.haymob.coffeeshop.entities.Order;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class PaymentMethod {
        constructor(id: string, title: string);
        get id(): string;
        get title(): string;
        component1(): string;
        component2(): string;
        copy(id?: string, title?: string): me.haymob.coffeeshop.entities.PaymentMethod;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Price {
        constructor(value: number, currency: string);
        get value(): number;
        get currency(): string;
        component1(): number;
        component2(): string;
        copy(value?: number, currency?: string): me.haymob.coffeeshop.entities.Price;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class Product {
        constructor(id: string, body: number, roast: number, name: string, acidity: number, region: string, description: string, thumbnail: string, price: me.haymob.coffeeshop.entities.Price, categories: any/* kotlin.collections.List<string> */, qty: number, isLoading: boolean, isOnWishlist: boolean);
        get id(): string;
        get body(): number;
        get roast(): number;
        get name(): string;
        get acidity(): number;
        get region(): string;
        set region(value: string);
        get description(): string;
        get thumbnail(): string;
        get price(): me.haymob.coffeeshop.entities.Price;
        get categories(): any/* kotlin.collections.List<string> */;
        get qty(): number;
        get isLoading(): boolean;
        get isOnWishlist(): boolean;
        component1(): string;
        component2(): number;
        component3(): number;
        component4(): string;
        component5(): number;
        component6(): string;
        component7(): string;
        component8(): string;
        component9(): me.haymob.coffeeshop.entities.Price;
        component10(): any/* kotlin.collections.List<string> */;
        component11(): number;
        component12(): boolean;
        component13(): boolean;
        copy(id?: string, body?: number, roast?: number, name?: string, acidity?: number, region?: string, description?: string, thumbnail?: string, price?: me.haymob.coffeeshop.entities.Price, categories?: any/* kotlin.collections.List<string> */, qty?: number, isLoading?: boolean, isOnWishlist?: boolean): me.haymob.coffeeshop.entities.Product;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.entities {
    class ShippingMethod {
        constructor(id: string, title: string);
        get id(): string;
        get title(): string;
        component1(): string;
        component2(): string;
        copy(id?: string, title?: string): me.haymob.coffeeshop.entities.ShippingMethod;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace me.haymob.coffeeshop.store {
    interface State {
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace me.haymob.coffeeshop.store {
    abstract class Store<StoreState, StoreEffect> {
        constructor(initialState: StoreState);
        get state(): any/* kotlinx.coroutines.flow.StateFlow<StoreState> */;
        get currentState(): StoreState;
        get didSetState(): Nullable<() => void>;
        set didSetState(value: Nullable<() => void>);
        setState(reduce: (p0: StoreState) => StoreState): void;
        get effect(): any/* kotlinx.coroutines.flow.SharedFlow<StoreEffect> */;
        setEffect(effect: StoreEffect): void;
        onEffect(effect: (p0: StoreEffect) => void): void;
    }
}
export namespace me.haymob.coffeeshop.ui.catalog {
    class CatalogUIState implements me.haymob.coffeeshop.store.State {
        constructor(categories: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Category> */, isLoading: boolean, isRefreshing: boolean);
        get categories(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Category> */;
        get isLoading(): boolean;
        get isRefreshing(): boolean;
        component1(): any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Category> */;
        component2(): boolean;
        component3(): boolean;
        copy(categories?: any/* kotlin.collections.List<me.haymob.coffeeshop.entities.Category> */, isLoading?: boolean, isRefreshing?: boolean): me.haymob.coffeeshop.ui.catalog.CatalogUIState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace me.haymob.coffeeshop.ui.catalog {
    class CatalogUIStore extends me.haymob.coffeeshop.store.Store<me.haymob.coffeeshop.ui.catalog.CatalogUIState, void> {
        private constructor();
    }
}
export namespace me.haymob.coffeeshop.ui.catalog.actions {
    function decrementProduct(_this_: me.haymob.coffeeshop.ui.catalog.CatalogUIStore, product: me.haymob.coffeeshop.entities.Product): void;
}
export namespace me.haymob.coffeeshop.ui.catalog.actions {
    function incrementProduct(_this_: me.haymob.coffeeshop.ui.catalog.CatalogUIStore, product: me.haymob.coffeeshop.entities.Product): void;
}
export namespace me.haymob.coffeeshop.ui.catalog.actions {
    function loadCatalog(_this_: me.haymob.coffeeshop.ui.catalog.CatalogUIStore): void;
}
export namespace me.haymob.coffeeshop.ui.catalog.actions {
    function refreshCatalog(_this_: me.haymob.coffeeshop.ui.catalog.CatalogUIStore): void;
}
export namespace me.haymob.coffeeshop {
    function catalogUIStore(): me.haymob.coffeeshop.ui.catalog.CatalogUIStore;
    function onState<S extends me.haymob.coffeeshop.store.State>(store: me.haymob.coffeeshop.store.Store<S, any /*UnknownType **/>, didSetState: () => void): void;
}
export as namespace CoffeeShop_core;