(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './CoffeeShop-CoffeeShopSDK.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./CoffeeShop-CoffeeShopSDK.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'CoffeeShop-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'CoffeeShop-core'.");
    }
    if (typeof this['CoffeeShop-CoffeeShopSDK'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-core'. Its dependency 'CoffeeShop-CoffeeShopSDK' was not found. Please, check whether 'CoffeeShop-CoffeeShopSDK' is loaded prior to 'CoffeeShop-core'.");
    }
    root['CoffeeShop-core'] = factory(typeof this['CoffeeShop-core'] === 'undefined' ? {} : this['CoffeeShop-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['CoffeeShop-CoffeeShopSDK']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_CoffeeShop_CoffeeShopSDK) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ea;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var equals = kotlin_kotlin.$_$.q6;
  var classMeta = kotlin_kotlin.$_$.p6;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f2;
  var isObject = kotlin_kotlin.$_$.g7;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var emptyList = kotlin_kotlin.$_$.p4;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.i1;
  var flatMapMerge$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var CoroutineImpl = kotlin_kotlin.$_$.c6;
  var Cart = kotlin_CoffeeShop_CoffeeShopSDK.$_$.a;
  var flowOf = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var SuspendFunction1 = kotlin_kotlin.$_$.d6;
  var hashCode = kotlin_kotlin.$_$.v6;
  var List = kotlin_kotlin.$_$.t3;
  var isInterface = kotlin_kotlin.$_$.e7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var Collection = kotlin_kotlin.$_$.m3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n5;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.e2;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c2;
  var KProperty1 = kotlin_kotlin.$_$.y7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t6;
  var getStringHashCode = kotlin_kotlin.$_$.u6;
  var THROW_ISE = kotlin_kotlin.$_$.j9;
  var Enum = kotlin_kotlin.$_$.y8;
  var getNumberHashCode = kotlin_kotlin.$_$.s6;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_getInstance = kotlin_kotlin.$_$.f3;
  var createFailure = kotlin_kotlin.$_$.u9;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var Result = kotlin_kotlin.$_$.g9;
  var SuspendFunction2 = kotlin_kotlin.$_$.e6;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var MutableSharedFlow$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var getKClass = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  updateProduct$slambda.prototype = Object.create(CoroutineImpl.prototype);
  updateProduct$slambda.prototype.constructor = updateProduct$slambda;
  updateProduct$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  updateProduct$slambda_1.prototype.constructor = updateProduct$slambda_1;
  updateProduct$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  updateProduct$slambda_3.prototype.constructor = updateProduct$slambda_3;
  loadCatalog$slambda$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  loadCatalog$slambda$o$collect$slambda.prototype.constructor = loadCatalog$slambda$o$collect$slambda;
  $collectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$0.prototype.constructor = $collectCOROUTINE$0;
  loadCatalog$slambda.prototype = Object.create(CoroutineImpl.prototype);
  loadCatalog$slambda.prototype.constructor = loadCatalog$slambda;
  Successes.prototype = Object.create(CustomerEffect.prototype);
  Successes.prototype.constructor = Successes;
  Error_0.prototype = Object.create(CustomerEffect.prototype);
  Error_0.prototype.constructor = Error_0;
  FieldType.prototype = Object.create(Enum.prototype);
  FieldType.prototype.constructor = FieldType;
  onResult$slambda.prototype = Object.create(CoroutineImpl.prototype);
  onResult$slambda.prototype.constructor = onResult$slambda;
  onResult$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  onResult$slambda_1.prototype.constructor = onResult$slambda_1;
  Store$setState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Store$setState$slambda.prototype.constructor = Store$setState$slambda;
  Store$setEffect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Store$setEffect$slambda.prototype.constructor = Store$setEffect$slambda;
  CatalogUIStore$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CatalogUIStore$slambda.prototype.constructor = CatalogUIStore$slambda;
  CatalogUIStore.prototype = Object.create(Store.prototype);
  CatalogUIStore.prototype.constructor = CatalogUIStore;
  //endregion
  function get_app() {
    var tmp = app;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('app');
    }
  }
  var app;
  function CartState(cart, isLoading) {
    this.y36_1 = cart;
    this.z36_1 = isLoading;
  }
  CartState.prototype.a37 = function (cart, isLoading) {
    return new CartState(cart, isLoading);
  };
  CartState.prototype.b37 = function (cart, isLoading, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cart = this.y36_1;
    if (!(($mask0 & 2) === 0))
      isLoading = this.z36_1;
    return this.a37(cart, isLoading);
  };
  CartState.prototype.toString = function () {
    return 'CartState(cart=' + this.y36_1 + ', isLoading=' + this.z36_1 + ')';
  };
  CartState.prototype.hashCode = function () {
    var result = this.y36_1 == null ? 0 : this.y36_1.hashCode();
    result = imul(result, 31) + (this.z36_1 | 0) | 0;
    return result;
  };
  CartState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CartState))
      return false;
    var tmp0_other_with_cast = other instanceof CartState ? other : THROW_CCE();
    if (!equals(this.y36_1, tmp0_other_with_cast.y36_1))
      return false;
    if (!(this.z36_1 === tmp0_other_with_cast.z36_1))
      return false;
    return true;
  };
  CartState.$metadata$ = classMeta('CartState', [State]);
  function decrementProduct(_this__u8e3s4, product) {
    var tmp = product.m37_1 - 1 | 0;
    return updateProduct(_this__u8e3s4, product.p37(null, 0, 0, null, 0, null, null, null, null, null, tmp, false, false, 7167, null));
  }
  function incrementProduct(_this__u8e3s4, product) {
    var tmp = product.m37_1 + 1 | 0;
    return updateProduct(_this__u8e3s4, product.p37(null, 0, 0, null, 0, null, null, null, null, null, tmp, false, false, 7167, null));
  }
  function loadCart(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.currentState.y36_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q37_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? _this__u8e3s4.e38_1.g38() : tmp1_elvis_lhs;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var cartId = tmp;
    _this__u8e3s4.setState(loadCart$lambda());
    var tmp_0 = _this__u8e3s4.d38_1.h38(cartId);
    launchIn(onResult(tmp_0, loadCart$lambda_0(_this__u8e3s4)), _this__u8e3s4.p38());
  }
  function loadCart$lambda() {
    return function ($this$setState) {
      return $this$setState.b37(null, true, 1, null);
    };
  }
  function loadCart$lambda$lambda($newCart) {
    return function ($this$setState) {
      return $this$setState.a37($newCart, false);
    };
  }
  function loadCart$lambda_0($this_loadCart) {
    return function (result) {
      var tmp$ret$0;
      {
        var tmp;
        if (_Result___get_isFailure__impl__jpiriv(result.p6_1)) {
          tmp = null;
        } else {
          var tmp_0 = _Result___get_value__impl__bjfvqg(result.p6_1);
          tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        }
        tmp$ret$0 = tmp;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        {
          var tmp0_let = CartMapper_getInstance();
          {
          }
          tmp$ret$1 = tmp0_let.q38(tmp0_safe_receiver);
        }
        tmp_1 = tmp$ret$1;
      }
      var newCart = tmp_1;
      $this_loadCart.setState(loadCart$lambda$lambda(newCart));
      var tmp1_safe_receiver = newCart;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s37_1;
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
            var tmp0_iterator = tmp2_safe_receiver.d();
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$2;
              {
                tmp$ret$2 = item.s38_1;
              }
              tmp0_mapTo.b(tmp$ret$2);
            }
            tmp$ret$3 = tmp0_mapTo;
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp_2 = tmp$ret$4;
      }
      var tmp3_elvis_lhs = tmp_2;
      var products = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
      $this_loadCart.f38_1.w38(products);
      var tmp_3;
      if (_Result___get_isFailure__impl__jpiriv(result.p6_1)) {
        tmp_3 = $this_loadCart.e38_1.x38();
      }
      return Unit_getInstance();
    };
  }
  function loadCustomerCart(_this__u8e3s4) {
    _this__u8e3s4.setState(loadCustomerCart$lambda());
    var tmp = _this__u8e3s4.d38_1.y38();
    launchIn(onResult(tmp, loadCustomerCart$lambda_0(_this__u8e3s4)), _this__u8e3s4.p38());
  }
  function loadCustomerCart$lambda() {
    return function ($this$setState) {
      return $this$setState.b37(null, true, 1, null);
    };
  }
  function loadCustomerCart$lambda$lambda($newCart) {
    return function ($this$setState) {
      return $this$setState.a37($newCart, false);
    };
  }
  function loadCustomerCart$lambda_0($this_loadCustomerCart) {
    return function (result) {
      var tmp$ret$0;
      {
        var tmp;
        if (_Result___get_isFailure__impl__jpiriv(result.p6_1)) {
          tmp = null;
        } else {
          var tmp_0 = _Result___get_value__impl__bjfvqg(result.p6_1);
          tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        }
        tmp$ret$0 = tmp;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        {
          var tmp0_let = CartMapper_getInstance();
          {
          }
          tmp$ret$1 = tmp0_let.q38(tmp0_safe_receiver);
        }
        tmp_1 = tmp$ret$1;
      }
      var newCart = tmp_1;
      $this_loadCustomerCart.setState(loadCustomerCart$lambda$lambda(newCart));
      var tmp1_safe_receiver = newCart;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s37_1;
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
            var tmp0_iterator = tmp2_safe_receiver.d();
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$2;
              {
                tmp$ret$2 = item.s38_1;
              }
              tmp0_mapTo.b(tmp$ret$2);
            }
            tmp$ret$3 = tmp0_mapTo;
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp_2 = tmp$ret$4;
      }
      var tmp3_elvis_lhs = tmp_2;
      var products = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
      $this_loadCustomerCart.f38_1.w38(products);
      return Unit_getInstance();
    };
  }
  function productSetLoading(_this__u8e3s4, product, loading) {
    _this__u8e3s4.setState(productSetLoading$lambda(product, loading));
  }
  function productSetLoading$lambda($product, $loading) {
    return function ($this$setState) {
      var tmp;
      if ($this$setState.y36_1 == null) {
        return $this$setState;
      }
      var tmp$ret$2;
      {
        var tmp0_map = $this$setState.y36_1.s37_1;
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            var tmp$ret$0;
            {
              var tmp_0;
              if ($product.c37_1 === item.s38_1.c37_1) {
                tmp_0 = item.s38_1.p37(null, 0, 0, null, 0, null, null, null, null, null, 0, $loading, false, 6143, null);
              } else {
                tmp_0 = item.s38_1;
              }
              tmp$ret$0 = item.z38(null, tmp_0, 1, null);
            }
            tmp0_mapTo.b(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp_1 = tmp$ret$2;
      var tmp_2 = $this$setState.y36_1.a39(null, null, tmp_1, null, null, null, 59, null);
      return $this$setState.b37(tmp_2, false, 2, null);
    };
  }
  function reloadEffect(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.currentState.y36_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s37_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var items = tmp;
    if (items.h())
      return Unit_getInstance();
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
        var tmp0_iterator = items.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = item.s38_1;
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    _this__u8e3s4.f38_1.w38(tmp$ret$2);
  }
  function updateProduct(_this__u8e3s4, product) {
    _this__u8e3s4.setState(updateProduct$lambda());
    _this__u8e3s4.f38_1.b39(product, true);
    var isLoggedIn = !(_this__u8e3s4.e38_1.c39() == null);
    var tmp0_safe_receiver = _this__u8e3s4.currentState.y36_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$4;
      {
        {
        }
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp0_find = tmp0_safe_receiver.s37_1;
            var tmp$ret$1;
            $l$block: {
              var tmp0_iterator = tmp0_find.d();
              while (tmp0_iterator.e()) {
                var element = tmp0_iterator.f();
                var tmp$ret$0;
                {
                  tmp$ret$0 = element.s38_1.c37_1 === product.c37_1;
                }
                if (tmp$ret$0) {
                  tmp$ret$1 = element;
                  break $l$block;
                }
              }
              tmp$ret$1 = null;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          var item = tmp$ret$2;
          var tmp_0;
          if (!(item == null) ? product.m37_1 > 0 : false) {
            tmp_0 = _this__u8e3s4.d38_1.f39(item.r38_1, product.m37_1);
          } else if (!(item == null) ? product.m37_1 === 0 : false) {
            tmp_0 = _this__u8e3s4.d38_1.e39(item.r38_1);
          } else if (item == null ? product.m37_1 > 0 : false) {
            tmp_0 = _this__u8e3s4.d38_1.d39(tmp0_safe_receiver.q37_1, product.c37_1, product.m37_1);
          } else {
            throw Exception_init_$Create$('unknown operation');
          }
          tmp$ret$3 = tmp_0;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp = tmp$ret$4;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp_2 = _this__u8e3s4.d38_1.g39();
      var tmp_3 = flatMapMerge$default(tmp_2, 0, updateProduct$slambda_0(isLoggedIn, _this__u8e3s4, null), 1, null);
      var tmp_4 = onEach(tmp_3, updateProduct$slambda_2(isLoggedIn, _this__u8e3s4, null));
      tmp_1 = flatMapMerge$default(tmp_4, 0, updateProduct$slambda_4(_this__u8e3s4, product, null), 1, null);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_5 = tmp_1;
    launchIn(onResult(tmp_5, updateProduct$lambda_0(_this__u8e3s4, product)), _this__u8e3s4.p38());
  }
  function updateProduct$lambda() {
    return function ($this$setState) {
      return $this$setState.b37(null, true, 1, null);
    };
  }
  function updateProduct$slambda($isLoggedIn, $this_updateProduct, resultContinuation) {
    this.p39_1 = $isLoggedIn;
    this.q39_1 = $this_updateProduct;
    CoroutineImpl.call(this, resultContinuation);
  }
  updateProduct$slambda.prototype.s39 = function (it, $cont) {
    var tmp = this.t39(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  updateProduct$slambda.prototype.ki = function (p1, $cont) {
    return this.s39(p1 instanceof Cart ? p1 : THROW_CCE(), $cont);
  };
  updateProduct$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          var tmp_0;
          if (this.p39_1) {
            tmp_0 = this.q39_1.d38_1.u39(this.r39_1.x31_1);
          } else {
            tmp_0 = flowOf(this.r39_1);
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  updateProduct$slambda.prototype.t39 = function (it, completion) {
    var i = new updateProduct$slambda(this.p39_1, this.q39_1, completion);
    i.r39_1 = it;
    return i;
  };
  updateProduct$slambda.$metadata$ = classMeta('updateProduct$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function updateProduct$slambda_0($isLoggedIn, $this_updateProduct, resultContinuation) {
    var i = new updateProduct$slambda($isLoggedIn, $this_updateProduct, resultContinuation);
    var l = function (it, $cont) {
      return i.s39(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function updateProduct$slambda_1($isLoggedIn, $this_updateProduct, resultContinuation) {
    this.d3a_1 = $isLoggedIn;
    this.e3a_1 = $this_updateProduct;
    CoroutineImpl.call(this, resultContinuation);
  }
  updateProduct$slambda_1.prototype.g3a = function (it, $cont) {
    var tmp = this.t39(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  updateProduct$slambda_1.prototype.ki = function (p1, $cont) {
    return this.g3a(p1 instanceof Cart ? p1 : THROW_CCE(), $cont);
  };
  updateProduct$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          if (!this.d3a_1)
            this.e3a_1.e38_1.h3a(this.f3a_1.x31_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  updateProduct$slambda_1.prototype.t39 = function (it, completion) {
    var i = new updateProduct$slambda_1(this.d3a_1, this.e3a_1, completion);
    i.f3a_1 = it;
    return i;
  };
  updateProduct$slambda_1.$metadata$ = classMeta('updateProduct$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function updateProduct$slambda_2($isLoggedIn, $this_updateProduct, resultContinuation) {
    var i = new updateProduct$slambda_1($isLoggedIn, $this_updateProduct, resultContinuation);
    var l = function (it, $cont) {
      return i.g3a(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function updateProduct$slambda_3($this_updateProduct, $product, resultContinuation) {
    this.q3a_1 = $this_updateProduct;
    this.r3a_1 = $product;
    CoroutineImpl.call(this, resultContinuation);
  }
  updateProduct$slambda_3.prototype.s39 = function (it, $cont) {
    var tmp = this.t39(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  updateProduct$slambda_3.prototype.ki = function (p1, $cont) {
    return this.s39(p1 instanceof Cart ? p1 : THROW_CCE(), $cont);
  };
  updateProduct$slambda_3.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          return this.q3a_1.d38_1.d39(this.s3a_1.x31_1, this.r3a_1.c37_1, this.r3a_1.m37_1);
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  updateProduct$slambda_3.prototype.t39 = function (it, completion) {
    var i = new updateProduct$slambda_3(this.q3a_1, this.r3a_1, completion);
    i.s3a_1 = it;
    return i;
  };
  updateProduct$slambda_3.$metadata$ = classMeta('updateProduct$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function updateProduct$slambda_4($this_updateProduct, $product, resultContinuation) {
    var i = new updateProduct$slambda_3($this_updateProduct, $product, resultContinuation);
    var l = function (it, $cont) {
      return i.s39(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function updateProduct$lambda$lambda($newCart) {
    return function ($this$setState) {
      return $this$setState.a37($newCart, false);
    };
  }
  function updateProduct$lambda_0($this_updateProduct, $product) {
    return function (result) {
      var tmp$ret$0;
      {
        var tmp;
        if (_Result___get_isFailure__impl__jpiriv(result.p6_1)) {
          tmp = null;
        } else {
          var tmp_0 = _Result___get_value__impl__bjfvqg(result.p6_1);
          tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        }
        tmp$ret$0 = tmp;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        {
          var tmp0_let = CartMapper_getInstance();
          {
          }
          tmp$ret$1 = tmp0_let.q38(tmp0_safe_receiver);
        }
        tmp_1 = tmp$ret$1;
      }
      var newCart = tmp_1;
      $this_updateProduct.setState(updateProduct$lambda$lambda(newCart));
      $this_updateProduct.f38_1.b39($product, false);
      var tmp1_safe_receiver = newCart;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s37_1;
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
            var tmp0_iterator = tmp2_safe_receiver.d();
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$2;
              {
                tmp$ret$2 = item.s38_1;
              }
              tmp0_mapTo.b(tmp$ret$2);
            }
            tmp$ret$3 = tmp0_mapTo;
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp_2 = tmp$ret$4;
      }
      var tmp3_elvis_lhs = tmp_2;
      var products = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
      $this_updateProduct.f38_1.w38(products);
      return Unit_getInstance();
    };
  }
  function CatalogState(categories, isLoading) {
    this.t3a_1 = categories;
    this.u3a_1 = isLoading;
  }
  CatalogState.prototype.v3a = function (categories, isLoading) {
    return new CatalogState(categories, isLoading);
  };
  CatalogState.prototype.w3a = function (categories, isLoading, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      categories = this.t3a_1;
    if (!(($mask0 & 2) === 0))
      isLoading = this.u3a_1;
    return this.v3a(categories, isLoading);
  };
  CatalogState.prototype.toString = function () {
    return 'CatalogState(categories=' + this.t3a_1 + ', isLoading=' + this.u3a_1 + ')';
  };
  CatalogState.prototype.hashCode = function () {
    var result = hashCode(this.t3a_1);
    result = imul(result, 31) + (this.u3a_1 | 0) | 0;
    return result;
  };
  CatalogState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CatalogState))
      return false;
    var tmp0_other_with_cast = other instanceof CatalogState ? other : THROW_CCE();
    if (!equals(this.t3a_1, tmp0_other_with_cast.t3a_1))
      return false;
    if (!(this.u3a_1 === tmp0_other_with_cast.u3a_1))
      return false;
    return true;
  };
  CatalogState.$metadata$ = classMeta('CatalogState', [State]);
  function loadCatalog(_this__u8e3s4) {
    _this__u8e3s4.setState(loadCatalog$lambda());
    var tmp = _this__u8e3s4.e3b_1.g3b();
    var tmp_0 = flatMapMerge$default(tmp, 0, loadCatalog$slambda_0(_this__u8e3s4, null), 1, null);
    launchIn(onResult(tmp_0, loadCatalog$lambda_0(_this__u8e3s4)), _this__u8e3s4.p38());
  }
  function loadCatalog$lambda() {
    return function ($this$setState) {
      return $this$setState.w3a(null, true, 1, null);
    };
  }
  function loadCatalog$slambda$o$collect$slambda($collector, $categories, resultContinuation) {
    this.p3b_1 = $collector;
    this.q3b_1 = $categories;
    CoroutineImpl.call(this, resultContinuation);
  }
  loadCatalog$slambda$o$collect$slambda.prototype.t3b = function (value, $cont) {
    var tmp = this.u3b(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  loadCatalog$slambda$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.t3b((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $cont);
  };
  loadCatalog$slambda$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            tmp_0.s3b_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.q3b_1, 10));
            var tmp0_iterator = this.q3b_1.d();
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp_1 = CategoryMapper_getInstance().v3b(item);
              var tmp0_filterTo = ArrayList_init_$Create$_0();
              var tmp0_iterator_0 = this.r3b_1.d();
              while (tmp0_iterator_0.e()) {
                var element = tmp0_iterator_0.f();
                var tmp$ret$0;
                l$ret$1: do {
                  var tmp0_any = element.v33_1.x2m_1;
                  var tmp_2;
                  if (isInterface(tmp0_any, Collection)) {
                    tmp_2 = tmp0_any.h();
                  } else {
                    tmp_2 = false;
                  }
                  if (tmp_2) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                  var tmp0_iterator_1 = tmp0_any.d();
                  while (tmp0_iterator_1.e()) {
                    var element_0 = tmp0_iterator_1.f();
                    if (element_0.y2m_1.f32_1 === item.f32_1) {
                      tmp$ret$0 = true;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = false;
                }
                 while (false);
                if (tmp$ret$0) {
                  tmp0_filterTo.b(element);
                }
              }
              var tmp0_map = tmp0_filterTo;
              var tmp1_map = ProductMapper_getInstance();
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
              var tmp0_iterator_2 = tmp0_map.d();
              while (tmp0_iterator_2.e()) {
                var item_0 = tmp0_iterator_2.f();
                tmp0_mapTo.b(tmp1_map.w3b(item_0));
              }
              this.s3b_1.b(tmp_1.a3c(null, null, tmp0_mapTo, 3, null));
            }

            suspendResult = this.p3b_1.w1q(this.s3b_1, this);
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
  loadCatalog$slambda$o$collect$slambda.prototype.u3b = function (value, completion) {
    var i = new loadCatalog$slambda$o$collect$slambda(this.p3b_1, this.q3b_1, completion);
    i.r3b_1 = value;
    return i;
  };
  loadCatalog$slambda$o$collect$slambda.$metadata$ = classMeta('loadCatalog$slambda$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function loadCatalog$slambda$o$collect$slambda_0($collector, $categories, resultContinuation) {
    var i = new loadCatalog$slambda$o$collect$slambda($collector, $categories, resultContinuation);
    var l = function (value, $cont) {
      return i.t3b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j3c_1 = _this__u8e3s4;
    this.k3c_1 = collector;
  }
  $collectCOROUTINE$0.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = loadCatalog$slambda$o$collect$slambda_0(this.k3c_1, this.j3c_1.m3c_1, null);
            suspendResult = this.j3c_1.l3c_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  $collectCOROUTINE$0.$metadata$ = classMeta('$collectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.n3c_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.w1q = function (value, $cont) {
    return this.n3c_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function _no_name_provided__qut3iv($tmp0_map, $categories) {
    this.l3c_1 = $tmp0_map;
    this.m3c_1 = $categories;
  }
  _no_name_provided__qut3iv.prototype.o3c = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$0(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv.prototype.j1q = function (collector, $cont) {
    return this.o3c(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function loadCatalog$slambda($this_loadCatalog, resultContinuation) {
    this.x3c_1 = $this_loadCatalog;
    CoroutineImpl.call(this, resultContinuation);
  }
  loadCatalog$slambda.prototype.z3c = function (categories, $cont) {
    var tmp = this.a3d(categories, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  loadCatalog$slambda.prototype.ki = function (p1, $cont) {
    return this.z3c((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $cont);
  };
  loadCatalog$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(this.y3c_1, 10));
          var tmp0_iterator = this.y3c_1.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            tmp0_mapTo.b(item.f32_1);
          }
          var tmp0_map = this.x3c_1.e3b_1.b3d(tmp0_mapTo);
          return new _no_name_provided__qut3iv(tmp0_map, this.y3c_1);
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  loadCatalog$slambda.prototype.a3d = function (categories, completion) {
    var i = new loadCatalog$slambda(this.x3c_1, completion);
    i.y3c_1 = categories;
    return i;
  };
  loadCatalog$slambda.$metadata$ = classMeta('loadCatalog$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function loadCatalog$slambda_0($this_loadCatalog, resultContinuation) {
    var i = new loadCatalog$slambda($this_loadCatalog, resultContinuation);
    var l = function (categories, $cont) {
      return i.z3c(categories, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function loadCatalog$lambda$lambda($it) {
    return function ($this$setState) {
      var tmp$ret$0;
      {
        var tmp;
        if (_Result___get_isFailure__impl__jpiriv($it)) {
          tmp = null;
        } else {
          var tmp_0 = _Result___get_value__impl__bjfvqg($it);
          tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        }
        tmp$ret$0 = tmp;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      return $this$setState.v3a(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, false);
    };
  }
  function loadCatalog$lambda_0($this_loadCatalog) {
    return function (it) {
      $this_loadCatalog.setState(loadCatalog$lambda$lambda(it.p6_1));
      $this_loadCatalog.f3b_1.c3d();
      return Unit_getInstance();
    };
  }
  function productSetLoading_0(_this__u8e3s4, product, loading) {
    _this__u8e3s4.setState(productSetLoading$lambda_0(product, loading));
  }
  function productSetLoading$lambda_0($product, $loading) {
    return function ($this$setState) {
      var tmp$ret$5;
      {
        var tmp0_map = $this$setState.t3a_1;
        var tmp$ret$4;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp0_map_0 = item.z3b_1;
                var tmp$ret$1;
                {
                  var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
                  var tmp0_iterator_0 = tmp0_map_0.d();
                  while (tmp0_iterator_0.e()) {
                    var item_0 = tmp0_iterator_0.f();
                    var tmp$ret$0;
                    {
                      var tmp;
                      if ($product.c37_1 === item_0.c37_1) {
                        tmp = item_0.p37(null, 0, 0, null, 0, null, null, null, null, null, 0, $loading, false, 6143, null);
                      } else {
                        tmp = item_0;
                      }
                      tmp$ret$0 = tmp;
                    }
                    tmp0_mapTo_0.b(tmp$ret$0);
                  }
                  tmp$ret$1 = tmp0_mapTo_0;
                }
                tmp$ret$2 = tmp$ret$1;
              }
              tmp$ret$3 = item.a3c(null, null, tmp$ret$2, 3, null);
            }
            tmp0_mapTo.b(tmp$ret$3);
          }
          tmp$ret$4 = tmp0_mapTo;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_0 = tmp$ret$5;
      return $this$setState.w3a(tmp_0, false, 2, null);
    };
  }
  function productSetWishlist(_this__u8e3s4, products) {
    _this__u8e3s4.setState(productSetWishlist$lambda(products));
  }
  function productSetWishlist$lambda($products) {
    return function ($this$setState) {
      var tmp$ret$8;
      {
        var tmp0_map = $this$setState.t3a_1;
        var tmp$ret$7;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                var tmp0_map_0 = item.z3b_1;
                var tmp$ret$4;
                {
                  var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
                  var tmp0_iterator_0 = tmp0_map_0.d();
                  while (tmp0_iterator_0.e()) {
                    var item_0 = tmp0_iterator_0.f();
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        $l$block: {
                          var tmp0_iterator_1 = $products.d();
                          while (tmp0_iterator_1.e()) {
                            var element = tmp0_iterator_1.f();
                            var tmp$ret$0;
                            {
                              tmp$ret$0 = item_0.c37_1 === element.c37_1;
                            }
                            if (tmp$ret$0) {
                              tmp$ret$1 = element;
                              break $l$block;
                            }
                          }
                          tmp$ret$1 = null;
                        }
                        tmp$ret$2 = tmp$ret$1;
                      }
                      tmp$ret$3 = item_0.p37(null, 0, 0, null, 0, null, null, null, null, null, 0, false, !(tmp$ret$2 == null), 4095, null);
                    }
                    tmp0_mapTo_0.b(tmp$ret$3);
                  }
                  tmp$ret$4 = tmp0_mapTo_0;
                }
                tmp$ret$5 = tmp$ret$4;
              }
              tmp$ret$6 = item.a3c(null, null, tmp$ret$5, 3, null);
            }
            tmp0_mapTo.b(tmp$ret$6);
          }
          tmp$ret$7 = tmp0_mapTo;
        }
        tmp$ret$8 = tmp$ret$7;
      }
      var tmp = tmp$ret$8;
      return $this$setState.w3a(tmp, false, 2, null);
    };
  }
  function productsQtyUpdate(_this__u8e3s4, products) {
    _this__u8e3s4.setState(productsQtyUpdate$lambda(products));
  }
  function productsQtyUpdate$lambda($products) {
    return function ($this$setState) {
      var tmp$ret$8;
      {
        var tmp0_map = $this$setState.t3a_1;
        var tmp$ret$7;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                var tmp0_map_0 = item.z3b_1;
                var tmp$ret$4;
                {
                  var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
                  var tmp0_iterator_0 = tmp0_map_0.d();
                  while (tmp0_iterator_0.e()) {
                    var item_0 = tmp0_iterator_0.f();
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        $l$block: {
                          var tmp0_iterator_1 = $products.d();
                          while (tmp0_iterator_1.e()) {
                            var element = tmp0_iterator_1.f();
                            var tmp$ret$0;
                            {
                              tmp$ret$0 = element.c37_1 === item_0.c37_1;
                            }
                            if (tmp$ret$0) {
                              tmp$ret$1 = element;
                              break $l$block;
                            }
                          }
                          tmp$ret$1 = null;
                        }
                        tmp$ret$2 = tmp$ret$1;
                      }
                      var tmp0_safe_receiver = tmp$ret$2;
                      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m37_1;
                      var qty = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                      tmp$ret$3 = item_0.p37(null, 0, 0, null, 0, null, null, null, null, null, qty, false, false, 7167, null);
                    }
                    tmp0_mapTo_0.b(tmp$ret$3);
                  }
                  tmp$ret$4 = tmp0_mapTo_0;
                }
                tmp$ret$5 = tmp$ret$4;
              }
              tmp$ret$6 = item.a3c(null, null, tmp$ret$5, 3, null);
            }
            tmp0_mapTo.b(tmp$ret$6);
          }
          tmp$ret$7 = tmp0_mapTo;
        }
        tmp$ret$8 = tmp$ret$7;
      }
      var tmp = tmp$ret$8;
      return $this$setState.w3a(tmp, false, 2, null);
    };
  }
  function Successes() {
    Successes_instance = this;
    CustomerEffect.call(this);
  }
  Successes.$metadata$ = objectMeta('Successes', undefined, undefined, undefined, undefined, CustomerEffect.prototype);
  var Successes_instance;
  function Successes_getInstance() {
    if (Successes_instance == null)
      new Successes();
    return Successes_instance;
  }
  function Error_0(message) {
    CustomerEffect.call(this);
    this.d3d_1 = message;
  }
  Error_0.$metadata$ = classMeta('Error', undefined, undefined, undefined, undefined, CustomerEffect.prototype);
  function CustomerEffect() {
  }
  CustomerEffect.$metadata$ = classMeta('CustomerEffect');
  function CustomerState(customer, isLoggedIn, isLoading) {
    this.e3d_1 = customer;
    this.f3d_1 = isLoggedIn;
    this.g3d_1 = isLoading;
  }
  CustomerState.prototype.h3d = function (customer, isLoggedIn, isLoading) {
    return new CustomerState(customer, isLoggedIn, isLoading);
  };
  CustomerState.prototype.i3d = function (customer, isLoggedIn, isLoading, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      customer = this.e3d_1;
    if (!(($mask0 & 2) === 0))
      isLoggedIn = this.f3d_1;
    if (!(($mask0 & 4) === 0))
      isLoading = this.g3d_1;
    return this.h3d(customer, isLoggedIn, isLoading);
  };
  CustomerState.prototype.toString = function () {
    return 'CustomerState(customer=' + this.e3d_1 + ', isLoggedIn=' + this.f3d_1 + ', isLoading=' + this.g3d_1 + ')';
  };
  CustomerState.prototype.hashCode = function () {
    var result = this.e3d_1 == null ? 0 : this.e3d_1.hashCode();
    result = imul(result, 31) + (this.f3d_1 | 0) | 0;
    result = imul(result, 31) + (this.g3d_1 | 0) | 0;
    return result;
  };
  CustomerState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomerState))
      return false;
    var tmp0_other_with_cast = other instanceof CustomerState ? other : THROW_CCE();
    if (!equals(this.e3d_1, tmp0_other_with_cast.e3d_1))
      return false;
    if (!(this.f3d_1 === tmp0_other_with_cast.f3d_1))
      return false;
    if (!(this.g3d_1 === tmp0_other_with_cast.g3d_1))
      return false;
    return true;
  };
  CustomerState.$metadata$ = classMeta('CustomerState', [State]);
  function didLoadUser(_this__u8e3s4, result) {
    var tmp$ret$0;
    {
      var tmp;
      if (_Result___get_isFailure__impl__jpiriv(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__bjfvqg(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var user = tmp$ret$0;
    var tmp0_safe_receiver = user;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      {
        {
        }
        var tmp$ret$1;
        {
          tmp$ret$1 = CustomerMapper_getInstance().j3d(tmp0_safe_receiver);
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp_1 = tmp$ret$2;
    }
    var customer = tmp_1;
    _this__u8e3s4.setState(didLoadUser$lambda(customer, result));
    if (_Result___get_isSuccess__impl__sndoy8(result)) {
      _this__u8e3s4.setEffect(Successes_getInstance());
      var tmp1_safe_receiver = user;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l34_1;
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x2m_1;
      var tmp_2;
      if (tmp3_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp3_safe_receiver, 10));
            var tmp0_iterator = tmp3_safe_receiver.d();
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$3;
              {
                tmp$ret$3 = ProductMapper_getInstance().w3b(item.y2m_1);
              }
              tmp0_mapTo.b(tmp$ret$3);
            }
            tmp$ret$4 = tmp0_mapTo;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp_2 = tmp$ret$5;
      }
      var tmp4_elvis_lhs = tmp_2;
      var wishlist = tmp4_elvis_lhs == null ? emptyList() : tmp4_elvis_lhs;
      _this__u8e3s4.t3d_1.u3d(wishlist);
    }
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp5_safe_receiver = Result__exceptionOrNull_impl_p6xea9(result);
      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.message;
      _this__u8e3s4.setEffect(new Error_0(tmp6_elvis_lhs == null ? 'unknown error' : tmp6_elvis_lhs));
    }
  }
  function didLoadUser$lambda($customer, $result) {
    return function ($this$setState) {
      return $this$setState.h3d($customer, _Result___get_isSuccess__impl__sndoy8($result), false);
    };
  }
  function loadCustomer(_this__u8e3s4) {
    _this__u8e3s4.setState(loadCustomer$lambda());
    var tmp = _this__u8e3s4.r3d_1.v3d();
    launchIn(onResult(tmp, didLoadUser$ref(_this__u8e3s4)), _this__u8e3s4.p38());
  }
  function loadCustomer$lambda() {
    return function ($this$setState) {
      return $this$setState.i3d(null, false, true, 3, null);
    };
  }
  function didLoadUser$ref($boundThis) {
    var l = function (p0) {
      didLoadUser($boundThis, p0.p6_1);
      return Unit_getInstance();
    };
    l.callableName = 'didLoadUser';
    return l;
  }
  function productSetLoading_1(_this__u8e3s4, product, loading) {
    _this__u8e3s4.setState(productSetLoading$lambda_1(product, loading));
  }
  function productSetLoading$lambda_1($product, $loading) {
    return function ($this$setState) {
      var tmp0_safe_receiver = $this$setState.e3d_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        {
          {
          }
          var tmp$ret$3;
          {
            var tmp$ret$2;
            {
              var tmp0_map = tmp0_safe_receiver.b3e_1;
              var tmp$ret$1;
              {
                var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
                var tmp0_iterator = tmp0_map.d();
                while (tmp0_iterator.e()) {
                  var item = tmp0_iterator.f();
                  var tmp$ret$0;
                  {
                    var tmp_0;
                    if ($product.c37_1 === item.c37_1) {
                      tmp_0 = item.p37(null, 0, 0, null, 0, null, null, null, null, null, 0, $loading, false, 6143, null);
                    } else {
                      tmp_0 = item;
                    }
                    tmp$ret$0 = tmp_0;
                  }
                  tmp0_mapTo.b(tmp$ret$0);
                }
                tmp$ret$1 = tmp0_mapTo;
              }
              tmp$ret$2 = tmp$ret$1;
            }
            var tmp_1 = tmp$ret$2;
            tmp$ret$3 = tmp0_safe_receiver.d3e(null, null, null, null, null, tmp_1, null, 95, null);
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp = tmp$ret$4;
      }
      var tmp_2 = tmp;
      return $this$setState.i3d(tmp_2, false, false, 6, null);
    };
  }
  function productsQtyUpdate_0(_this__u8e3s4, products) {
    _this__u8e3s4.setState(productsQtyUpdate$lambda_0(products));
  }
  function productsQtyUpdate$lambda_0($products) {
    return function ($this$setState) {
      var tmp0_safe_receiver = $this$setState.e3d_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$7;
        {
          {
          }
          var tmp$ret$6;
          {
            var tmp$ret$5;
            {
              var tmp0_map = tmp0_safe_receiver.b3e_1;
              var tmp$ret$4;
              {
                var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
                var tmp0_iterator = tmp0_map.d();
                while (tmp0_iterator.e()) {
                  var item = tmp0_iterator.f();
                  var tmp$ret$3;
                  {
                    var tmp$ret$2;
                    {
                      var tmp$ret$1;
                      $l$block: {
                        var tmp0_iterator_0 = $products.d();
                        while (tmp0_iterator_0.e()) {
                          var element = tmp0_iterator_0.f();
                          var tmp$ret$0;
                          {
                            tmp$ret$0 = element.c37_1 === item.c37_1;
                          }
                          if (tmp$ret$0) {
                            tmp$ret$1 = element;
                            break $l$block;
                          }
                        }
                        tmp$ret$1 = null;
                      }
                      tmp$ret$2 = tmp$ret$1;
                    }
                    var tmp0_safe_receiver_0 = tmp$ret$2;
                    var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.m37_1;
                    var qty = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                    tmp$ret$3 = item.p37(null, 0, 0, null, 0, null, null, null, null, null, qty, false, false, 7167, null);
                  }
                  tmp0_mapTo.b(tmp$ret$3);
                }
                tmp$ret$4 = tmp0_mapTo;
              }
              tmp$ret$5 = tmp$ret$4;
            }
            var tmp_0 = tmp$ret$5;
            tmp$ret$6 = tmp0_safe_receiver.d3e(null, null, null, null, null, tmp_0, null, 95, null);
          }
          tmp$ret$7 = tmp$ret$6;
        }
        tmp = tmp$ret$7;
      }
      var tmp_1 = tmp;
      return $this$setState.i3d(tmp_1, false, false, 6, null);
    };
  }
  function _get_cartStore__avkpg0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = cartStore$factory();
      tmp$ret$0 = $this.t38_1.l1();
    }
    return tmp$ret$0;
  }
  function _get_catalogStore__u5uv3x($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = catalogStore$factory();
      tmp$ret$0 = $this.u38_1.l1();
    }
    return tmp$ret$0;
  }
  function _get_customerStore__uj4uia($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = customerStore$factory();
      tmp$ret$0 = $this.v38_1.l1();
    }
    return tmp$ret$0;
  }
  function cartStore$factory() {
    return getPropertyCallableRef('cartStore', 1, KProperty1, function (receiver) {
      return _get_cartStore__avkpg0(receiver);
    }, null);
  }
  function catalogStore$factory() {
    return getPropertyCallableRef('catalogStore', 1, KProperty1, function (receiver) {
      return _get_catalogStore__u5uv3x(receiver);
    }, null);
  }
  function customerStore$factory() {
    return getPropertyCallableRef('customerStore', 1, KProperty1, function (receiver) {
      return _get_customerStore__uj4uia(receiver);
    }, null);
  }
  function Address(id, firstName, lastName, city, street, postcode) {
    this.e3e_1 = id;
    this.f3e_1 = firstName;
    this.g3e_1 = lastName;
    this.h3e_1 = city;
    this.i3e_1 = street;
    this.j3e_1 = postcode;
  }
  Address.prototype.m26 = function () {
    return this.e3e_1;
  };
  Address.prototype.k3e = function () {
    return this.f3e_1;
  };
  Address.prototype.l3e = function () {
    return this.g3e_1;
  };
  Address.prototype.m3e = function () {
    return this.h3e_1;
  };
  Address.prototype.n3e = function () {
    return this.i3e_1;
  };
  Address.prototype.o3e = function () {
    return this.j3e_1;
  };
  Address.prototype.component1 = function () {
    return this.e3e_1;
  };
  Address.prototype.component2 = function () {
    return this.f3e_1;
  };
  Address.prototype.component3 = function () {
    return this.g3e_1;
  };
  Address.prototype.component4 = function () {
    return this.h3e_1;
  };
  Address.prototype.component5 = function () {
    return this.i3e_1;
  };
  Address.prototype.component6 = function () {
    return this.j3e_1;
  };
  Address.prototype.copy = function (id, firstName, lastName, city, street, postcode) {
    return this.p3e(id === void 1 ? this.e3e_1 : id, firstName === void 1 ? this.f3e_1 : firstName, lastName === void 1 ? this.g3e_1 : lastName, city === void 1 ? this.h3e_1 : city, street === void 1 ? this.i3e_1 : street, postcode === void 1 ? this.j3e_1 : postcode);
  };
  Address.prototype.p3e = function (id, firstName, lastName, city, street, postcode) {
    return new Address(id, firstName, lastName, city, street, postcode);
  };
  Address.prototype.q3e = function (id, firstName, lastName, city, street, postcode, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.e3e_1;
    if (!(($mask0 & 2) === 0))
      firstName = this.f3e_1;
    if (!(($mask0 & 4) === 0))
      lastName = this.g3e_1;
    if (!(($mask0 & 8) === 0))
      city = this.h3e_1;
    if (!(($mask0 & 16) === 0))
      street = this.i3e_1;
    if (!(($mask0 & 32) === 0))
      postcode = this.j3e_1;
    return this.p3e(id, firstName, lastName, city, street, postcode);
  };
  Address.prototype.toString = function () {
    return 'Address(id=' + this.e3e_1 + ', firstName=' + this.f3e_1 + ', lastName=' + this.g3e_1 + ', city=' + this.h3e_1 + ', street=' + this.i3e_1 + ', postcode=' + this.j3e_1 + ')';
  };
  Address.prototype.hashCode = function () {
    var result = getStringHashCode(this.e3e_1);
    result = imul(result, 31) + getStringHashCode(this.f3e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g3e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h3e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i3e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j3e_1) | 0;
    return result;
  };
  Address.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Address))
      return false;
    var tmp0_other_with_cast = other instanceof Address ? other : THROW_CCE();
    if (!(this.e3e_1 === tmp0_other_with_cast.e3e_1))
      return false;
    if (!(this.f3e_1 === tmp0_other_with_cast.f3e_1))
      return false;
    if (!(this.g3e_1 === tmp0_other_with_cast.g3e_1))
      return false;
    if (!(this.h3e_1 === tmp0_other_with_cast.h3e_1))
      return false;
    if (!(this.i3e_1 === tmp0_other_with_cast.i3e_1))
      return false;
    if (!(this.j3e_1 === tmp0_other_with_cast.j3e_1))
      return false;
    return true;
  };
  Address.$metadata$ = classMeta('Address');
  Object.defineProperty(Address.prototype, 'id', {
    configurable: true,
    get: Address.prototype.m26
  });
  Object.defineProperty(Address.prototype, 'firstName', {
    configurable: true,
    get: Address.prototype.k3e
  });
  Object.defineProperty(Address.prototype, 'lastName', {
    configurable: true,
    get: Address.prototype.l3e
  });
  Object.defineProperty(Address.prototype, 'city', {
    configurable: true,
    get: Address.prototype.m3e
  });
  Object.defineProperty(Address.prototype, 'street', {
    configurable: true,
    get: Address.prototype.n3e
  });
  Object.defineProperty(Address.prototype, 'postcode', {
    configurable: true,
    get: Address.prototype.o3e
  });
  function Item(id, product) {
    this.r38_1 = id;
    this.s38_1 = product;
  }
  Item.prototype.m26 = function () {
    return this.r38_1;
  };
  Item.prototype.u31 = function () {
    return this.s38_1;
  };
  Item.prototype.component1 = function () {
    return this.r38_1;
  };
  Item.prototype.component2 = function () {
    return this.s38_1;
  };
  Item.prototype.copy = function (id, product) {
    return this.r3e(id === void 1 ? this.r38_1 : id, product === void 1 ? this.s38_1 : product);
  };
  Item.prototype.r3e = function (id, product) {
    return new Item(id, product);
  };
  Item.prototype.z38 = function (id, product, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.r38_1;
    if (!(($mask0 & 2) === 0))
      product = this.s38_1;
    return this.r3e(id, product);
  };
  Item.prototype.toString = function () {
    return 'Item(id=' + this.r38_1 + ', product=' + this.s38_1 + ')';
  };
  Item.prototype.hashCode = function () {
    var result = getStringHashCode(this.r38_1);
    result = imul(result, 31) + this.s38_1.hashCode() | 0;
    return result;
  };
  Item.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Item))
      return false;
    var tmp0_other_with_cast = other instanceof Item ? other : THROW_CCE();
    if (!(this.r38_1 === tmp0_other_with_cast.r38_1))
      return false;
    if (!this.s38_1.equals(tmp0_other_with_cast.s38_1))
      return false;
    return true;
  };
  Item.$metadata$ = classMeta('Item');
  Object.defineProperty(Item.prototype, 'id', {
    configurable: true,
    get: Item.prototype.m26
  });
  Object.defineProperty(Item.prototype, 'product', {
    configurable: true,
    get: Item.prototype.u31
  });
  function Cart_0(id, totalPrice, items, paymentMethods, shippingMethods, address) {
    this.q37_1 = id;
    this.r37_1 = totalPrice;
    this.s37_1 = items;
    this.t37_1 = paymentMethods;
    this.u37_1 = shippingMethods;
    this.v37_1 = address;
  }
  Cart_0.prototype.m26 = function () {
    return this.q37_1;
  };
  Cart_0.prototype.s3e = function () {
    return this.r37_1;
  };
  Cart_0.prototype.t3e = function () {
    return this.s37_1;
  };
  Cart_0.prototype.u3e = function () {
    return this.t37_1;
  };
  Cart_0.prototype.v3e = function () {
    return this.u37_1;
  };
  Cart_0.prototype.w3e = function () {
    return this.v37_1;
  };
  Cart_0.prototype.component1 = function () {
    return this.q37_1;
  };
  Cart_0.prototype.component2 = function () {
    return this.r37_1;
  };
  Cart_0.prototype.component3 = function () {
    return this.s37_1;
  };
  Cart_0.prototype.component4 = function () {
    return this.t37_1;
  };
  Cart_0.prototype.component5 = function () {
    return this.u37_1;
  };
  Cart_0.prototype.component6 = function () {
    return this.v37_1;
  };
  Cart_0.prototype.copy = function (id, totalPrice, items, paymentMethods, shippingMethods, address) {
    return this.x3e(id === void 1 ? this.q37_1 : id, totalPrice === void 1 ? this.r37_1 : totalPrice, items === void 1 ? this.s37_1 : items, paymentMethods === void 1 ? this.t37_1 : paymentMethods, shippingMethods === void 1 ? this.u37_1 : shippingMethods, address === void 1 ? this.v37_1 : address);
  };
  Cart_0.prototype.x3e = function (id, totalPrice, items, paymentMethods, shippingMethods, address) {
    return new Cart_0(id, totalPrice, items, paymentMethods, shippingMethods, address);
  };
  Cart_0.prototype.a39 = function (id, totalPrice, items, paymentMethods, shippingMethods, address, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.q37_1;
    if (!(($mask0 & 2) === 0))
      totalPrice = this.r37_1;
    if (!(($mask0 & 4) === 0))
      items = this.s37_1;
    if (!(($mask0 & 8) === 0))
      paymentMethods = this.t37_1;
    if (!(($mask0 & 16) === 0))
      shippingMethods = this.u37_1;
    if (!(($mask0 & 32) === 0))
      address = this.v37_1;
    return this.x3e(id, totalPrice, items, paymentMethods, shippingMethods, address);
  };
  Cart_0.prototype.toString = function () {
    return 'Cart(id=' + this.q37_1 + ', totalPrice=' + this.r37_1 + ', items=' + this.s37_1 + ', paymentMethods=' + this.t37_1 + ', shippingMethods=' + this.u37_1 + ', address=' + this.v37_1 + ')';
  };
  Cart_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.q37_1);
    result = imul(result, 31) + (this.r37_1 == null ? 0 : this.r37_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.s37_1) | 0;
    result = imul(result, 31) + hashCode(this.t37_1) | 0;
    result = imul(result, 31) + hashCode(this.u37_1) | 0;
    result = imul(result, 31) + (this.v37_1 == null ? 0 : this.v37_1.hashCode()) | 0;
    return result;
  };
  Cart_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Cart_0))
      return false;
    var tmp0_other_with_cast = other instanceof Cart_0 ? other : THROW_CCE();
    if (!(this.q37_1 === tmp0_other_with_cast.q37_1))
      return false;
    if (!equals(this.r37_1, tmp0_other_with_cast.r37_1))
      return false;
    if (!equals(this.s37_1, tmp0_other_with_cast.s37_1))
      return false;
    if (!equals(this.t37_1, tmp0_other_with_cast.t37_1))
      return false;
    if (!equals(this.u37_1, tmp0_other_with_cast.u37_1))
      return false;
    if (!equals(this.v37_1, tmp0_other_with_cast.v37_1))
      return false;
    return true;
  };
  Cart_0.$metadata$ = classMeta('Cart');
  Object.defineProperty(Cart_0.prototype, 'id', {
    configurable: true,
    get: Cart_0.prototype.m26
  });
  Object.defineProperty(Cart_0.prototype, 'totalPrice', {
    configurable: true,
    get: Cart_0.prototype.s3e
  });
  Object.defineProperty(Cart_0.prototype, 'items', {
    configurable: true,
    get: Cart_0.prototype.t3e
  });
  Object.defineProperty(Cart_0.prototype, 'paymentMethods', {
    configurable: true,
    get: Cart_0.prototype.u3e
  });
  Object.defineProperty(Cart_0.prototype, 'shippingMethods', {
    configurable: true,
    get: Cart_0.prototype.v3e
  });
  Object.defineProperty(Cart_0.prototype, 'address', {
    configurable: true,
    get: Cart_0.prototype.w3e
  });
  function Category(id, name, products) {
    this.x3b_1 = id;
    this.y3b_1 = name;
    this.z3b_1 = products;
  }
  Category.prototype.m26 = function () {
    return this.x3b_1;
  };
  Category.prototype.zg = function () {
    return this.y3b_1;
  };
  Category.prototype.y3e = function (_set____db54di) {
    this.z3b_1 = _set____db54di;
  };
  Category.prototype.z3e = function () {
    return this.z3b_1;
  };
  Category.prototype.component1 = function () {
    return this.x3b_1;
  };
  Category.prototype.component2 = function () {
    return this.y3b_1;
  };
  Category.prototype.component3 = function () {
    return this.z3b_1;
  };
  Category.prototype.copy = function (id, name, products) {
    return this.a3f(id === void 1 ? this.x3b_1 : id, name === void 1 ? this.y3b_1 : name, products === void 1 ? this.z3b_1 : products);
  };
  Category.prototype.a3f = function (id, name, products) {
    return new Category(id, name, products);
  };
  Category.prototype.a3c = function (id, name, products, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.x3b_1;
    if (!(($mask0 & 2) === 0))
      name = this.y3b_1;
    if (!(($mask0 & 4) === 0))
      products = this.z3b_1;
    return this.a3f(id, name, products);
  };
  Category.prototype.toString = function () {
    return 'Category(id=' + this.x3b_1 + ', name=' + this.y3b_1 + ', products=' + this.z3b_1 + ')';
  };
  Category.prototype.hashCode = function () {
    var result = getStringHashCode(this.x3b_1);
    result = imul(result, 31) + getStringHashCode(this.y3b_1) | 0;
    result = imul(result, 31) + hashCode(this.z3b_1) | 0;
    return result;
  };
  Category.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Category))
      return false;
    var tmp0_other_with_cast = other instanceof Category ? other : THROW_CCE();
    if (!(this.x3b_1 === tmp0_other_with_cast.x3b_1))
      return false;
    if (!(this.y3b_1 === tmp0_other_with_cast.y3b_1))
      return false;
    if (!equals(this.z3b_1, tmp0_other_with_cast.z3b_1))
      return false;
    return true;
  };
  Category.$metadata$ = classMeta('Category');
  Object.defineProperty(Category.prototype, 'id', {
    configurable: true,
    get: Category.prototype.m26
  });
  Object.defineProperty(Category.prototype, 'name', {
    configurable: true,
    get: Category.prototype.zg
  });
  Object.defineProperty(Category.prototype, 'products', {
    configurable: true,
    get: Category.prototype.z3e,
    set: Category.prototype.y3e
  });
  function Customer(id, firstName, lastName, email, addresses, wishlist, orders) {
    this.w3d_1 = id;
    this.x3d_1 = firstName;
    this.y3d_1 = lastName;
    this.z3d_1 = email;
    this.a3e_1 = addresses;
    this.b3e_1 = wishlist;
    this.c3e_1 = orders;
  }
  Customer.prototype.m26 = function () {
    return this.w3d_1;
  };
  Customer.prototype.k3e = function () {
    return this.x3d_1;
  };
  Customer.prototype.l3e = function () {
    return this.y3d_1;
  };
  Customer.prototype.b3f = function () {
    return this.z3d_1;
  };
  Customer.prototype.c3f = function () {
    return this.a3e_1;
  };
  Customer.prototype.d3f = function () {
    return this.b3e_1;
  };
  Customer.prototype.e3f = function () {
    return this.c3e_1;
  };
  Customer.prototype.component1 = function () {
    return this.w3d_1;
  };
  Customer.prototype.component2 = function () {
    return this.x3d_1;
  };
  Customer.prototype.component3 = function () {
    return this.y3d_1;
  };
  Customer.prototype.component4 = function () {
    return this.z3d_1;
  };
  Customer.prototype.component5 = function () {
    return this.a3e_1;
  };
  Customer.prototype.component6 = function () {
    return this.b3e_1;
  };
  Customer.prototype.component7 = function () {
    return this.c3e_1;
  };
  Customer.prototype.copy = function (id, firstName, lastName, email, addresses, wishlist, orders) {
    return this.f3f(id === void 1 ? this.w3d_1 : id, firstName === void 1 ? this.x3d_1 : firstName, lastName === void 1 ? this.y3d_1 : lastName, email === void 1 ? this.z3d_1 : email, addresses === void 1 ? this.a3e_1 : addresses, wishlist === void 1 ? this.b3e_1 : wishlist, orders === void 1 ? this.c3e_1 : orders);
  };
  Customer.prototype.f3f = function (id, firstName, lastName, email, addresses, wishlist, orders) {
    return new Customer(id, firstName, lastName, email, addresses, wishlist, orders);
  };
  Customer.prototype.d3e = function (id, firstName, lastName, email, addresses, wishlist, orders, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.w3d_1;
    if (!(($mask0 & 2) === 0))
      firstName = this.x3d_1;
    if (!(($mask0 & 4) === 0))
      lastName = this.y3d_1;
    if (!(($mask0 & 8) === 0))
      email = this.z3d_1;
    if (!(($mask0 & 16) === 0))
      addresses = this.a3e_1;
    if (!(($mask0 & 32) === 0))
      wishlist = this.b3e_1;
    if (!(($mask0 & 64) === 0))
      orders = this.c3e_1;
    return this.f3f(id, firstName, lastName, email, addresses, wishlist, orders);
  };
  Customer.prototype.toString = function () {
    return 'Customer(id=' + this.w3d_1 + ', firstName=' + this.x3d_1 + ', lastName=' + this.y3d_1 + ', email=' + this.z3d_1 + ', addresses=' + this.a3e_1 + ', wishlist=' + this.b3e_1 + ', orders=' + this.c3e_1 + ')';
  };
  Customer.prototype.hashCode = function () {
    var result = getStringHashCode(this.w3d_1);
    result = imul(result, 31) + getStringHashCode(this.x3d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y3d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z3d_1) | 0;
    result = imul(result, 31) + hashCode(this.a3e_1) | 0;
    result = imul(result, 31) + hashCode(this.b3e_1) | 0;
    result = imul(result, 31) + hashCode(this.c3e_1) | 0;
    return result;
  };
  Customer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Customer))
      return false;
    var tmp0_other_with_cast = other instanceof Customer ? other : THROW_CCE();
    if (!(this.w3d_1 === tmp0_other_with_cast.w3d_1))
      return false;
    if (!(this.x3d_1 === tmp0_other_with_cast.x3d_1))
      return false;
    if (!(this.y3d_1 === tmp0_other_with_cast.y3d_1))
      return false;
    if (!(this.z3d_1 === tmp0_other_with_cast.z3d_1))
      return false;
    if (!equals(this.a3e_1, tmp0_other_with_cast.a3e_1))
      return false;
    if (!equals(this.b3e_1, tmp0_other_with_cast.b3e_1))
      return false;
    if (!equals(this.c3e_1, tmp0_other_with_cast.c3e_1))
      return false;
    return true;
  };
  Customer.$metadata$ = classMeta('Customer');
  Object.defineProperty(Customer.prototype, 'id', {
    configurable: true,
    get: Customer.prototype.m26
  });
  Object.defineProperty(Customer.prototype, 'firstName', {
    configurable: true,
    get: Customer.prototype.k3e
  });
  Object.defineProperty(Customer.prototype, 'lastName', {
    configurable: true,
    get: Customer.prototype.l3e
  });
  Object.defineProperty(Customer.prototype, 'email', {
    configurable: true,
    get: Customer.prototype.b3f
  });
  Object.defineProperty(Customer.prototype, 'addresses', {
    configurable: true,
    get: Customer.prototype.c3f
  });
  Object.defineProperty(Customer.prototype, 'wishlist', {
    configurable: true,
    get: Customer.prototype.d3f
  });
  Object.defineProperty(Customer.prototype, 'orders', {
    configurable: true,
    get: Customer.prototype.e3f
  });
  function Field_init_$Init$(type, value, error, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      value = '';
    if (!(($mask0 & 4) === 0))
      error = null;
    Field.call($this, type, value, error);
    return $this;
  }
  function Field_init_$Create$(type, value, error, $mask0, $marker) {
    return Field_init_$Init$(type, value, error, $mask0, $marker, Object.create(Field.prototype));
  }
  function Field(type, value, error) {
    var value_0 = value === void 1 ? '' : value;
    var error_0 = error === void 1 ? null : error;
    this.g3f_1 = type;
    this.h3f_1 = value_0;
    this.i3f_1 = error_0;
  }
  Field.prototype.j4 = function () {
    return this.g3f_1;
  };
  Field.prototype.l1 = function () {
    return this.h3f_1;
  };
  Field.prototype.j3f = function () {
    return this.i3f_1;
  };
  Field.prototype.component1 = function () {
    return this.g3f_1;
  };
  Field.prototype.component2 = function () {
    return this.h3f_1;
  };
  Field.prototype.component3 = function () {
    return this.i3f_1;
  };
  Field.prototype.copy = function (type, value, error) {
    return this.k3f(type === void 1 ? this.g3f_1 : type, value === void 1 ? this.h3f_1 : value, error === void 1 ? this.i3f_1 : error);
  };
  Field.prototype.k3f = function (type, value, error) {
    return new Field(type, value, error);
  };
  Field.prototype.l3f = function (type, value, error, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.g3f_1;
    if (!(($mask0 & 2) === 0))
      value = this.h3f_1;
    if (!(($mask0 & 4) === 0))
      error = this.i3f_1;
    return this.k3f(type, value, error);
  };
  Field.prototype.toString = function () {
    return 'Field(type=' + this.g3f_1 + ', value=' + this.h3f_1 + ', error=' + this.i3f_1 + ')';
  };
  Field.prototype.hashCode = function () {
    var result = this.g3f_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.h3f_1) | 0;
    result = imul(result, 31) + (this.i3f_1 == null ? 0 : getStringHashCode(this.i3f_1)) | 0;
    return result;
  };
  Field.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Field))
      return false;
    var tmp0_other_with_cast = other instanceof Field ? other : THROW_CCE();
    if (!this.g3f_1.equals(tmp0_other_with_cast.g3f_1))
      return false;
    if (!(this.h3f_1 === tmp0_other_with_cast.h3f_1))
      return false;
    if (!(this.i3f_1 == tmp0_other_with_cast.i3f_1))
      return false;
    return true;
  };
  Field.$metadata$ = classMeta('Field');
  Object.defineProperty(Field.prototype, 'type', {
    configurable: true,
    get: Field.prototype.j4
  });
  Object.defineProperty(Field.prototype, 'value', {
    configurable: true,
    get: Field.prototype.l1
  });
  Object.defineProperty(Field.prototype, 'error', {
    configurable: true,
    get: Field.prototype.j3f
  });
  var FieldType_Email_instance;
  var FieldType_Password_instance;
  var FieldType_NewPassword_instance;
  var FieldType_FirstName_instance;
  var FieldType_LastName_instance;
  var FieldType_City_instance;
  var FieldType_Street_instance;
  var FieldType_Postcode_instance;
  function values() {
    return [FieldType_Email_getInstance(), FieldType_Password_getInstance(), FieldType_NewPassword_getInstance(), FieldType_FirstName_getInstance(), FieldType_LastName_getInstance(), FieldType_City_getInstance(), FieldType_Street_getInstance(), FieldType_Postcode_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Email':
        return FieldType_Email_getInstance();
      case 'Password':
        return FieldType_Password_getInstance();
      case 'NewPassword':
        return FieldType_NewPassword_getInstance();
      case 'FirstName':
        return FieldType_FirstName_getInstance();
      case 'LastName':
        return FieldType_LastName_getInstance();
      case 'City':
        return FieldType_City_getInstance();
      case 'Street':
        return FieldType_Street_getInstance();
      case 'Postcode':
        return FieldType_Postcode_getInstance();
      default:
        FieldType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FieldType_entriesInitialized;
  function FieldType_initEntries() {
    if (FieldType_entriesInitialized)
      return Unit_getInstance();
    FieldType_entriesInitialized = true;
    FieldType_Email_instance = new FieldType('Email', 0);
    FieldType_Password_instance = new FieldType('Password', 1);
    FieldType_NewPassword_instance = new FieldType('NewPassword', 2);
    FieldType_FirstName_instance = new FieldType('FirstName', 3);
    FieldType_LastName_instance = new FieldType('LastName', 4);
    FieldType_City_instance = new FieldType('City', 5);
    FieldType_Street_instance = new FieldType('Street', 6);
    FieldType_Postcode_instance = new FieldType('Postcode', 7);
  }
  function FieldType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  FieldType.$metadata$ = classMeta('FieldType', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(FieldType.prototype, 'name', {
    configurable: true,
    get: FieldType.prototype.zg
  });
  Object.defineProperty(FieldType.prototype, 'ordinal', {
    configurable: true,
    get: FieldType.prototype.k4
  });
  function FieldType_Email_getInstance() {
    FieldType_initEntries();
    return FieldType_Email_instance;
  }
  function FieldType_Password_getInstance() {
    FieldType_initEntries();
    return FieldType_Password_instance;
  }
  function FieldType_NewPassword_getInstance() {
    FieldType_initEntries();
    return FieldType_NewPassword_instance;
  }
  function FieldType_FirstName_getInstance() {
    FieldType_initEntries();
    return FieldType_FirstName_instance;
  }
  function FieldType_LastName_getInstance() {
    FieldType_initEntries();
    return FieldType_LastName_instance;
  }
  function FieldType_City_getInstance() {
    FieldType_initEntries();
    return FieldType_City_instance;
  }
  function FieldType_Street_getInstance() {
    FieldType_initEntries();
    return FieldType_Street_instance;
  }
  function FieldType_Postcode_getInstance() {
    FieldType_initEntries();
    return FieldType_Postcode_instance;
  }
  function Order(id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt) {
    this.o3f_1 = id;
    this.p3f_1 = paymentMethod;
    this.q3f_1 = shippingMethod;
    this.r3f_1 = cartId;
    this.s3f_1 = address;
    this.t3f_1 = products;
    this.u3f_1 = totalPrice;
    this.v3f_1 = createdAt;
  }
  Order.prototype.m26 = function () {
    return this.o3f_1;
  };
  Order.prototype.w3f = function () {
    return this.p3f_1;
  };
  Order.prototype.x3f = function () {
    return this.q3f_1;
  };
  Order.prototype.y3f = function () {
    return this.r3f_1;
  };
  Order.prototype.w3e = function () {
    return this.s3f_1;
  };
  Order.prototype.z3e = function () {
    return this.t3f_1;
  };
  Order.prototype.s3e = function () {
    return this.u3f_1;
  };
  Order.prototype.z3f = function () {
    return this.v3f_1;
  };
  Order.prototype.component1 = function () {
    return this.o3f_1;
  };
  Order.prototype.component2 = function () {
    return this.p3f_1;
  };
  Order.prototype.component3 = function () {
    return this.q3f_1;
  };
  Order.prototype.component4 = function () {
    return this.r3f_1;
  };
  Order.prototype.component5 = function () {
    return this.s3f_1;
  };
  Order.prototype.component6 = function () {
    return this.t3f_1;
  };
  Order.prototype.component7 = function () {
    return this.u3f_1;
  };
  Order.prototype.component8 = function () {
    return this.v3f_1;
  };
  Order.prototype.copy = function (id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt) {
    return this.a3g(id === void 1 ? this.o3f_1 : id, paymentMethod === void 1 ? this.p3f_1 : paymentMethod, shippingMethod === void 1 ? this.q3f_1 : shippingMethod, cartId === void 1 ? this.r3f_1 : cartId, address === void 1 ? this.s3f_1 : address, products === void 1 ? this.t3f_1 : products, totalPrice === void 1 ? this.u3f_1 : totalPrice, createdAt === void 1 ? this.v3f_1 : createdAt);
  };
  Order.prototype.a3g = function (id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt) {
    return new Order(id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt);
  };
  Order.prototype.b3g = function (id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.o3f_1;
    if (!(($mask0 & 2) === 0))
      paymentMethod = this.p3f_1;
    if (!(($mask0 & 4) === 0))
      shippingMethod = this.q3f_1;
    if (!(($mask0 & 8) === 0))
      cartId = this.r3f_1;
    if (!(($mask0 & 16) === 0))
      address = this.s3f_1;
    if (!(($mask0 & 32) === 0))
      products = this.t3f_1;
    if (!(($mask0 & 64) === 0))
      totalPrice = this.u3f_1;
    if (!(($mask0 & 128) === 0))
      createdAt = this.v3f_1;
    return this.a3g(id, paymentMethod, shippingMethod, cartId, address, products, totalPrice, createdAt);
  };
  Order.prototype.toString = function () {
    return 'Order(id=' + this.o3f_1 + ', paymentMethod=' + this.p3f_1 + ', shippingMethod=' + this.q3f_1 + ', cartId=' + this.r3f_1 + ', address=' + this.s3f_1 + ', products=' + this.t3f_1 + ', totalPrice=' + this.u3f_1 + ', createdAt=' + this.v3f_1 + ')';
  };
  Order.prototype.hashCode = function () {
    var result = getStringHashCode(this.o3f_1);
    result = imul(result, 31) + this.p3f_1.hashCode() | 0;
    result = imul(result, 31) + this.q3f_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.r3f_1) | 0;
    result = imul(result, 31) + this.s3f_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.t3f_1) | 0;
    result = imul(result, 31) + this.u3f_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.v3f_1) | 0;
    return result;
  };
  Order.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Order))
      return false;
    var tmp0_other_with_cast = other instanceof Order ? other : THROW_CCE();
    if (!(this.o3f_1 === tmp0_other_with_cast.o3f_1))
      return false;
    if (!this.p3f_1.equals(tmp0_other_with_cast.p3f_1))
      return false;
    if (!this.q3f_1.equals(tmp0_other_with_cast.q3f_1))
      return false;
    if (!(this.r3f_1 === tmp0_other_with_cast.r3f_1))
      return false;
    if (!this.s3f_1.equals(tmp0_other_with_cast.s3f_1))
      return false;
    if (!equals(this.t3f_1, tmp0_other_with_cast.t3f_1))
      return false;
    if (!this.u3f_1.equals(tmp0_other_with_cast.u3f_1))
      return false;
    if (!(this.v3f_1 === tmp0_other_with_cast.v3f_1))
      return false;
    return true;
  };
  Order.$metadata$ = classMeta('Order');
  Object.defineProperty(Order.prototype, 'id', {
    configurable: true,
    get: Order.prototype.m26
  });
  Object.defineProperty(Order.prototype, 'paymentMethod', {
    configurable: true,
    get: Order.prototype.w3f
  });
  Object.defineProperty(Order.prototype, 'shippingMethod', {
    configurable: true,
    get: Order.prototype.x3f
  });
  Object.defineProperty(Order.prototype, 'cartId', {
    configurable: true,
    get: Order.prototype.y3f
  });
  Object.defineProperty(Order.prototype, 'address', {
    configurable: true,
    get: Order.prototype.w3e
  });
  Object.defineProperty(Order.prototype, 'products', {
    configurable: true,
    get: Order.prototype.z3e
  });
  Object.defineProperty(Order.prototype, 'totalPrice', {
    configurable: true,
    get: Order.prototype.s3e
  });
  Object.defineProperty(Order.prototype, 'createdAt', {
    configurable: true,
    get: Order.prototype.z3f
  });
  function PaymentMethod(id, title) {
    this.c3g_1 = id;
    this.d3g_1 = title;
  }
  PaymentMethod.prototype.m26 = function () {
    return this.c3g_1;
  };
  PaymentMethod.prototype.e3g = function () {
    return this.d3g_1;
  };
  PaymentMethod.prototype.component1 = function () {
    return this.c3g_1;
  };
  PaymentMethod.prototype.component2 = function () {
    return this.d3g_1;
  };
  PaymentMethod.prototype.copy = function (id, title) {
    return this.f3g(id === void 1 ? this.c3g_1 : id, title === void 1 ? this.d3g_1 : title);
  };
  PaymentMethod.prototype.f3g = function (id, title) {
    return new PaymentMethod(id, title);
  };
  PaymentMethod.prototype.g3g = function (id, title, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.c3g_1;
    if (!(($mask0 & 2) === 0))
      title = this.d3g_1;
    return this.f3g(id, title);
  };
  PaymentMethod.prototype.toString = function () {
    return 'PaymentMethod(id=' + this.c3g_1 + ', title=' + this.d3g_1 + ')';
  };
  PaymentMethod.prototype.hashCode = function () {
    var result = getStringHashCode(this.c3g_1);
    result = imul(result, 31) + getStringHashCode(this.d3g_1) | 0;
    return result;
  };
  PaymentMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentMethod))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentMethod ? other : THROW_CCE();
    if (!(this.c3g_1 === tmp0_other_with_cast.c3g_1))
      return false;
    if (!(this.d3g_1 === tmp0_other_with_cast.d3g_1))
      return false;
    return true;
  };
  PaymentMethod.$metadata$ = classMeta('PaymentMethod');
  Object.defineProperty(PaymentMethod.prototype, 'id', {
    configurable: true,
    get: PaymentMethod.prototype.m26
  });
  Object.defineProperty(PaymentMethod.prototype, 'title', {
    configurable: true,
    get: PaymentMethod.prototype.e3g
  });
  function Price(value, currency) {
    this.h3g_1 = value;
    this.i3g_1 = currency;
  }
  Price.prototype.l1 = function () {
    return this.h3g_1;
  };
  Price.prototype.j3g = function () {
    return this.i3g_1;
  };
  Price.prototype.component1 = function () {
    return this.h3g_1;
  };
  Price.prototype.component2 = function () {
    return this.i3g_1;
  };
  Price.prototype.copy = function (value, currency) {
    return this.k3g(value === void 1 ? this.h3g_1 : value, currency === void 1 ? this.i3g_1 : currency);
  };
  Price.prototype.k3g = function (value, currency) {
    return new Price(value, currency);
  };
  Price.prototype.l3g = function (value, currency, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.h3g_1;
    if (!(($mask0 & 2) === 0))
      currency = this.i3g_1;
    return this.k3g(value, currency);
  };
  Price.prototype.toString = function () {
    return 'Price(value=' + this.h3g_1 + ', currency=' + this.i3g_1 + ')';
  };
  Price.prototype.hashCode = function () {
    var result = getNumberHashCode(this.h3g_1);
    result = imul(result, 31) + getStringHashCode(this.i3g_1) | 0;
    return result;
  };
  Price.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Price))
      return false;
    var tmp0_other_with_cast = other instanceof Price ? other : THROW_CCE();
    if (!equals(this.h3g_1, tmp0_other_with_cast.h3g_1))
      return false;
    if (!(this.i3g_1 === tmp0_other_with_cast.i3g_1))
      return false;
    return true;
  };
  Price.$metadata$ = classMeta('Price');
  Object.defineProperty(Price.prototype, 'value', {
    configurable: true,
    get: Price.prototype.l1
  });
  Object.defineProperty(Price.prototype, 'currency', {
    configurable: true,
    get: Price.prototype.j3g
  });
  function Product(id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist) {
    this.c37_1 = id;
    this.d37_1 = body;
    this.e37_1 = roast;
    this.f37_1 = name;
    this.g37_1 = acidity;
    this.h37_1 = region;
    this.i37_1 = description;
    this.j37_1 = thumbnail;
    this.k37_1 = price;
    this.l37_1 = categories;
    this.m37_1 = qty;
    this.n37_1 = isLoading;
    this.o37_1 = isOnWishlist;
  }
  Product.prototype.m26 = function () {
    return this.c37_1;
  };
  Product.prototype.m3g = function () {
    return this.d37_1;
  };
  Product.prototype.n3g = function () {
    return this.e37_1;
  };
  Product.prototype.zg = function () {
    return this.f37_1;
  };
  Product.prototype.o3g = function () {
    return this.g37_1;
  };
  Product.prototype.p3g = function (_set____db54di) {
    this.h37_1 = _set____db54di;
  };
  Product.prototype.q3g = function () {
    return this.h37_1;
  };
  Product.prototype.r3g = function () {
    return this.i37_1;
  };
  Product.prototype.s3g = function () {
    return this.j37_1;
  };
  Product.prototype.t3g = function () {
    return this.k37_1;
  };
  Product.prototype.u3g = function () {
    return this.l37_1;
  };
  Product.prototype.t31 = function () {
    return this.m37_1;
  };
  Product.prototype.v3g = function () {
    return this.n37_1;
  };
  Product.prototype.w3g = function () {
    return this.o37_1;
  };
  Product.prototype.component1 = function () {
    return this.c37_1;
  };
  Product.prototype.component2 = function () {
    return this.d37_1;
  };
  Product.prototype.component3 = function () {
    return this.e37_1;
  };
  Product.prototype.component4 = function () {
    return this.f37_1;
  };
  Product.prototype.component5 = function () {
    return this.g37_1;
  };
  Product.prototype.component6 = function () {
    return this.h37_1;
  };
  Product.prototype.component7 = function () {
    return this.i37_1;
  };
  Product.prototype.component8 = function () {
    return this.j37_1;
  };
  Product.prototype.component9 = function () {
    return this.k37_1;
  };
  Product.prototype.component10 = function () {
    return this.l37_1;
  };
  Product.prototype.component11 = function () {
    return this.m37_1;
  };
  Product.prototype.component12 = function () {
    return this.n37_1;
  };
  Product.prototype.component13 = function () {
    return this.o37_1;
  };
  Product.prototype.copy = function (id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist) {
    return this.x3g(id === void 1 ? this.c37_1 : id, body === void 1 ? this.d37_1 : body, roast === void 1 ? this.e37_1 : roast, name === void 1 ? this.f37_1 : name, acidity === void 1 ? this.g37_1 : acidity, region === void 1 ? this.h37_1 : region, description === void 1 ? this.i37_1 : description, thumbnail === void 1 ? this.j37_1 : thumbnail, price === void 1 ? this.k37_1 : price, categories === void 1 ? this.l37_1 : categories, qty === void 1 ? this.m37_1 : qty, isLoading === void 1 ? this.n37_1 : isLoading, isOnWishlist === void 1 ? this.o37_1 : isOnWishlist);
  };
  Product.prototype.x3g = function (id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist) {
    return new Product(id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist);
  };
  Product.prototype.p37 = function (id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.c37_1;
    if (!(($mask0 & 2) === 0))
      body = this.d37_1;
    if (!(($mask0 & 4) === 0))
      roast = this.e37_1;
    if (!(($mask0 & 8) === 0))
      name = this.f37_1;
    if (!(($mask0 & 16) === 0))
      acidity = this.g37_1;
    if (!(($mask0 & 32) === 0))
      region = this.h37_1;
    if (!(($mask0 & 64) === 0))
      description = this.i37_1;
    if (!(($mask0 & 128) === 0))
      thumbnail = this.j37_1;
    if (!(($mask0 & 256) === 0))
      price = this.k37_1;
    if (!(($mask0 & 512) === 0))
      categories = this.l37_1;
    if (!(($mask0 & 1024) === 0))
      qty = this.m37_1;
    if (!(($mask0 & 2048) === 0))
      isLoading = this.n37_1;
    if (!(($mask0 & 4096) === 0))
      isOnWishlist = this.o37_1;
    return this.x3g(id, body, roast, name, acidity, region, description, thumbnail, price, categories, qty, isLoading, isOnWishlist);
  };
  Product.prototype.toString = function () {
    return 'Product(id=' + this.c37_1 + ', body=' + this.d37_1 + ', roast=' + this.e37_1 + ', name=' + this.f37_1 + ', acidity=' + this.g37_1 + ', region=' + this.h37_1 + ', description=' + this.i37_1 + ', thumbnail=' + this.j37_1 + ', price=' + this.k37_1 + ', categories=' + this.l37_1 + ', qty=' + this.m37_1 + ', isLoading=' + this.n37_1 + ', isOnWishlist=' + this.o37_1 + ')';
  };
  Product.prototype.hashCode = function () {
    var result = getStringHashCode(this.c37_1);
    result = imul(result, 31) + this.d37_1 | 0;
    result = imul(result, 31) + this.e37_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.f37_1) | 0;
    result = imul(result, 31) + this.g37_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.h37_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i37_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j37_1) | 0;
    result = imul(result, 31) + this.k37_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.l37_1) | 0;
    result = imul(result, 31) + this.m37_1 | 0;
    result = imul(result, 31) + (this.n37_1 | 0) | 0;
    result = imul(result, 31) + (this.o37_1 | 0) | 0;
    return result;
  };
  Product.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Product))
      return false;
    var tmp0_other_with_cast = other instanceof Product ? other : THROW_CCE();
    if (!(this.c37_1 === tmp0_other_with_cast.c37_1))
      return false;
    if (!(this.d37_1 === tmp0_other_with_cast.d37_1))
      return false;
    if (!(this.e37_1 === tmp0_other_with_cast.e37_1))
      return false;
    if (!(this.f37_1 === tmp0_other_with_cast.f37_1))
      return false;
    if (!(this.g37_1 === tmp0_other_with_cast.g37_1))
      return false;
    if (!(this.h37_1 === tmp0_other_with_cast.h37_1))
      return false;
    if (!(this.i37_1 === tmp0_other_with_cast.i37_1))
      return false;
    if (!(this.j37_1 === tmp0_other_with_cast.j37_1))
      return false;
    if (!this.k37_1.equals(tmp0_other_with_cast.k37_1))
      return false;
    if (!equals(this.l37_1, tmp0_other_with_cast.l37_1))
      return false;
    if (!(this.m37_1 === tmp0_other_with_cast.m37_1))
      return false;
    if (!(this.n37_1 === tmp0_other_with_cast.n37_1))
      return false;
    if (!(this.o37_1 === tmp0_other_with_cast.o37_1))
      return false;
    return true;
  };
  Product.$metadata$ = classMeta('Product');
  Object.defineProperty(Product.prototype, 'id', {
    configurable: true,
    get: Product.prototype.m26
  });
  Object.defineProperty(Product.prototype, 'body', {
    configurable: true,
    get: Product.prototype.m3g
  });
  Object.defineProperty(Product.prototype, 'roast', {
    configurable: true,
    get: Product.prototype.n3g
  });
  Object.defineProperty(Product.prototype, 'name', {
    configurable: true,
    get: Product.prototype.zg
  });
  Object.defineProperty(Product.prototype, 'acidity', {
    configurable: true,
    get: Product.prototype.o3g
  });
  Object.defineProperty(Product.prototype, 'region', {
    configurable: true,
    get: Product.prototype.q3g,
    set: Product.prototype.p3g
  });
  Object.defineProperty(Product.prototype, 'description', {
    configurable: true,
    get: Product.prototype.r3g
  });
  Object.defineProperty(Product.prototype, 'thumbnail', {
    configurable: true,
    get: Product.prototype.s3g
  });
  Object.defineProperty(Product.prototype, 'price', {
    configurable: true,
    get: Product.prototype.t3g
  });
  Object.defineProperty(Product.prototype, 'categories', {
    configurable: true,
    get: Product.prototype.u3g
  });
  Object.defineProperty(Product.prototype, 'qty', {
    configurable: true,
    get: Product.prototype.t31
  });
  Object.defineProperty(Product.prototype, 'isLoading', {
    configurable: true,
    get: Product.prototype.v3g
  });
  Object.defineProperty(Product.prototype, 'isOnWishlist', {
    configurable: true,
    get: Product.prototype.w3g
  });
  function ShippingMethod(id, title) {
    this.y3g_1 = id;
    this.z3g_1 = title;
  }
  ShippingMethod.prototype.m26 = function () {
    return this.y3g_1;
  };
  ShippingMethod.prototype.e3g = function () {
    return this.z3g_1;
  };
  ShippingMethod.prototype.component1 = function () {
    return this.y3g_1;
  };
  ShippingMethod.prototype.component2 = function () {
    return this.z3g_1;
  };
  ShippingMethod.prototype.copy = function (id, title) {
    return this.f3g(id === void 1 ? this.y3g_1 : id, title === void 1 ? this.z3g_1 : title);
  };
  ShippingMethod.prototype.f3g = function (id, title) {
    return new ShippingMethod(id, title);
  };
  ShippingMethod.prototype.g3g = function (id, title, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.y3g_1;
    if (!(($mask0 & 2) === 0))
      title = this.z3g_1;
    return this.f3g(id, title);
  };
  ShippingMethod.prototype.toString = function () {
    return 'ShippingMethod(id=' + this.y3g_1 + ', title=' + this.z3g_1 + ')';
  };
  ShippingMethod.prototype.hashCode = function () {
    var result = getStringHashCode(this.y3g_1);
    result = imul(result, 31) + getStringHashCode(this.z3g_1) | 0;
    return result;
  };
  ShippingMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ShippingMethod))
      return false;
    var tmp0_other_with_cast = other instanceof ShippingMethod ? other : THROW_CCE();
    if (!(this.y3g_1 === tmp0_other_with_cast.y3g_1))
      return false;
    if (!(this.z3g_1 === tmp0_other_with_cast.z3g_1))
      return false;
    return true;
  };
  ShippingMethod.$metadata$ = classMeta('ShippingMethod');
  Object.defineProperty(ShippingMethod.prototype, 'id', {
    configurable: true,
    get: ShippingMethod.prototype.m26
  });
  Object.defineProperty(ShippingMethod.prototype, 'title', {
    configurable: true,
    get: ShippingMethod.prototype.e3g
  });
  function onResult(_this__u8e3s4, result) {
    var tmp = catch_0(_this__u8e3s4, onResult$slambda_0(result, null));
    return onEach(tmp, onResult$slambda_2(result, null));
  }
  function onResult$slambda($result, resultContinuation) {
    this.i3h_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  onResult$slambda.prototype.l3h = function ($this$catch, it, $cont) {
    var tmp = this.m3h($this$catch, it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  onResult$slambda.prototype.i6 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.l3h(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $cont);
  };
  onResult$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          var tmp0_failure = Companion_getInstance();
          this.i3h_1(new Result(_Result___init__impl__xyqfz8(createFailure(this.k3h_1))));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  onResult$slambda.prototype.m3h = function ($this$catch, it, completion) {
    var i = new onResult$slambda(this.i3h_1, completion);
    i.j3h_1 = $this$catch;
    i.k3h_1 = it;
    return i;
  };
  onResult$slambda.$metadata$ = classMeta('onResult$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function onResult$slambda_0($result, resultContinuation) {
    var i = new onResult$slambda($result, resultContinuation);
    var l = function ($this$catch, it, $cont) {
      return i.l3h($this$catch, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function onResult$slambda_1($result, resultContinuation) {
    this.v3h_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  onResult$slambda_1.prototype.o1y = function (it, $cont) {
    var tmp = this.p1y(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  onResult$slambda_1.prototype.ki = function (p1, $cont) {
    return this.o1y((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  onResult$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          var tmp0_success = Companion_getInstance();
          this.v3h_1(new Result(_Result___init__impl__xyqfz8(this.w3h_1)));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  onResult$slambda_1.prototype.p1y = function (it, completion) {
    var i = new onResult$slambda_1(this.v3h_1, completion);
    i.w3h_1 = it;
    return i;
  };
  onResult$slambda_1.$metadata$ = classMeta('onResult$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function onResult$slambda_2($result, resultContinuation) {
    var i = new onResult$slambda_1($result, resultContinuation);
    var l = function (it, $cont) {
      return i.o1y(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function AddressMapper() {
    AddressMapper_instance = this;
  }
  AddressMapper.prototype.x3h = function (address) {
    return new Address(address.i31_1, address.j31_1, address.k31_1, address.l31_1, address.m31_1, address.n31_1);
  };
  AddressMapper.$metadata$ = objectMeta('AddressMapper');
  var AddressMapper_instance;
  function AddressMapper_getInstance() {
    if (AddressMapper_instance == null)
      new AddressMapper();
    return AddressMapper_instance;
  }
  function CartMapper() {
    CartMapper_instance = this;
  }
  CartMapper.prototype.q38 = function (cart) {
    var tmp0_safe_receiver = cart.y31_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        var tmp0_let = PriceMapper_getInstance();
        {
        }
        tmp$ret$0 = tmp0_let.y3h(tmp0_safe_receiver);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var tmp$ret$3;
    {
      var tmp1_map = cart.z31_1.x2m_1;
      var tmp$ret$2;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
        var tmp0_iterator = tmp1_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$1;
          {
            tmp$ret$1 = CartMapper_getInstance().z3h(item.y2m_1);
          }
          tmp0_mapTo.b(tmp$ret$1);
        }
        tmp$ret$2 = tmp0_mapTo;
      }
      tmp$ret$3 = tmp$ret$2;
    }
    var tmp_1 = tmp$ret$3;
    var tmp$ret$6;
    {
      var tmp2_map = cart.c32_1.x2m_1;
      var tmp$ret$5;
      {
        var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_map, 10));
        var tmp0_iterator_0 = tmp2_map.d();
        while (tmp0_iterator_0.e()) {
          var item_0 = tmp0_iterator_0.f();
          var tmp$ret$4;
          {
            tmp$ret$4 = CartMapper_getInstance().a3i(item_0.y2m_1);
          }
          tmp0_mapTo_0.b(tmp$ret$4);
        }
        tmp$ret$5 = tmp0_mapTo_0;
      }
      tmp$ret$6 = tmp$ret$5;
    }
    var tmp_2 = tmp$ret$6;
    var tmp$ret$9;
    {
      var tmp3_map = cart.b32_1.x2m_1;
      var tmp$ret$8;
      {
        var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp3_map, 10));
        var tmp0_iterator_1 = tmp3_map.d();
        while (tmp0_iterator_1.e()) {
          var item_1 = tmp0_iterator_1.f();
          var tmp$ret$7;
          {
            tmp$ret$7 = CartMapper_getInstance().b3i(item_1.y2m_1);
          }
          tmp0_mapTo_1.b(tmp$ret$7);
        }
        tmp$ret$8 = tmp0_mapTo_1;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var tmp_3 = tmp$ret$9;
    var tmp1_safe_receiver = cart.a32_1;
    var tmp_4;
    if (tmp1_safe_receiver == null) {
      tmp_4 = null;
    } else {
      var tmp$ret$10;
      {
        var tmp4_let = AddressMapper_getInstance();
        {
        }
        tmp$ret$10 = tmp4_let.x3h(tmp1_safe_receiver);
      }
      tmp_4 = tmp$ret$10;
    }
    return new Cart_0(cart.x31_1, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4);
  };
  CartMapper.prototype.z3h = function (item) {
    var tmp = ProductMapper_getInstance().w3b(item.s31_1);
    return new Item(item.q31_1, tmp.p37(null, 0, 0, null, 0, null, null, null, null, null, item.r31_1, false, false, 7167, null));
  };
  CartMapper.prototype.a3i = function (method) {
    return new PaymentMethod(method.e33_1, method.f33_1);
  };
  CartMapper.prototype.b3i = function (method) {
    return new ShippingMethod(method.c34_1, method.d34_1);
  };
  CartMapper.$metadata$ = objectMeta('CartMapper');
  var CartMapper_instance;
  function CartMapper_getInstance() {
    if (CartMapper_instance == null)
      new CartMapper();
    return CartMapper_instance;
  }
  function CategoryMapper() {
    CategoryMapper_instance = this;
  }
  CategoryMapper.prototype.v3b = function (category) {
    return new Category(category.f32_1, category.g32_1, emptyList());
  };
  CategoryMapper.$metadata$ = objectMeta('CategoryMapper');
  var CategoryMapper_instance;
  function CategoryMapper_getInstance() {
    if (CategoryMapper_instance == null)
      new CategoryMapper();
    return CategoryMapper_instance;
  }
  function CustomerMapper() {
    CustomerMapper_instance = this;
  }
  CustomerMapper.prototype.j3d = function (customer) {
    var tmp$ret$2;
    {
      var tmp0_map = customer.k34_1.x2m_1;
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = AddressMapper_getInstance().x3h(item.y2m_1);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    {
      var tmp1_map = customer.l34_1.x2m_1;
      var tmp$ret$4;
      {
        var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
        var tmp0_iterator_0 = tmp1_map.d();
        while (tmp0_iterator_0.e()) {
          var item_0 = tmp0_iterator_0.f();
          var tmp$ret$3;
          {
            tmp$ret$3 = ProductMapper_getInstance().w3b(item_0.y2m_1);
          }
          tmp0_mapTo_0.b(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo_0;
      }
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp_0 = tmp$ret$5;
    var tmp$ret$8;
    {
      var tmp2_map = customer.m34_1.x2m_1;
      var tmp$ret$7;
      {
        var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_map, 10));
        var tmp0_iterator_1 = tmp2_map.d();
        while (tmp0_iterator_1.e()) {
          var item_1 = tmp0_iterator_1.f();
          var tmp$ret$6;
          {
            tmp$ret$6 = OrderMapper_getInstance().c3i(item_1.y2m_1);
          }
          tmp0_mapTo_1.b(tmp$ret$6);
        }
        tmp$ret$7 = tmp0_mapTo_1;
      }
      tmp$ret$8 = tmp$ret$7;
    }
    return new Customer(customer.g34_1, customer.h34_1, customer.i34_1, customer.j34_1, tmp, tmp_0, tmp$ret$8);
  };
  CustomerMapper.$metadata$ = objectMeta('CustomerMapper');
  var CustomerMapper_instance;
  function CustomerMapper_getInstance() {
    if (CustomerMapper_instance == null)
      new CustomerMapper();
    return CustomerMapper_instance;
  }
  function OrderMapper() {
    OrderMapper_instance = this;
  }
  OrderMapper.prototype.c3i = function (order) {
    var tmp = CartMapper_getInstance().a3i(order.y32_1);
    var tmp_0 = CartMapper_getInstance().b3i(order.z32_1);
    var tmp_1 = AddressMapper_getInstance().x3h(ensureNotNull(order.a33_1.a32_1));
    var tmp$ret$2;
    {
      var tmp0_map = order.a33_1.z31_1.x2m_1;
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            var tmp_2 = ProductMapper_getInstance().w3b(item.y2m_1.s31_1);
            tmp$ret$0 = tmp_2.p37(null, 0, 0, null, 0, null, null, null, null, null, item.y2m_1.r31_1, false, false, 7167, null);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return new Order(order.x32_1, tmp, tmp_0, order.a33_1.x31_1, tmp_1, tmp$ret$2, PriceMapper_getInstance().y3h(ensureNotNull(order.a33_1.y31_1)), order.b33_1);
  };
  OrderMapper.$metadata$ = objectMeta('OrderMapper');
  var OrderMapper_instance;
  function OrderMapper_getInstance() {
    if (OrderMapper_instance == null)
      new OrderMapper();
    return OrderMapper_instance;
  }
  function PriceMapper() {
    PriceMapper_instance = this;
  }
  PriceMapper.prototype.y3h = function (price) {
    return new Price(price.i33_1, price.j33_1);
  };
  PriceMapper.$metadata$ = objectMeta('PriceMapper');
  var PriceMapper_instance;
  function PriceMapper_getInstance() {
    if (PriceMapper_instance == null)
      new PriceMapper();
    return PriceMapper_instance;
  }
  function ProductMapper() {
    ProductMapper_instance = this;
  }
  ProductMapper.prototype.w3b = function (product) {
    var tmp = product.r33_1.z33_1;
    var tmp_0 = PriceMapper_getInstance().y3h(product.u33_1);
    var tmp$ret$2;
    {
      var tmp0_map = product.v33_1.x2m_1;
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = item.y2m_1.f32_1;
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return new Product(product.m33_1, product.n33_1, product.o33_1, product.p33_1, product.q33_1, tmp, product.s33_1, product.t33_1.l32_1, tmp_0, tmp$ret$2, 0, false, false);
  };
  ProductMapper.$metadata$ = objectMeta('ProductMapper');
  var ProductMapper_instance;
  function ProductMapper_getInstance() {
    if (ProductMapper_instance == null)
      new ProductMapper();
    return ProductMapper_instance;
  }
  function State() {
  }
  State.$metadata$ = interfaceMeta('State');
  function Store$setState$slambda(this$0, $reduce, resultContinuation) {
    this.l3i_1 = this$0;
    this.m3i_1 = $reduce;
    CoroutineImpl.call(this, resultContinuation);
  }
  Store$setState$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  Store$setState$slambda.prototype.ki = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Store$setState$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.l3i_1.j38_1.w1q(this.m3i_1(this.l3i_1.currentState), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.l3i_1.l38_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver();
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
  Store$setState$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new Store$setState$slambda(this.l3i_1, this.m3i_1, completion);
    i.n3i_1 = $this$launch;
    return i;
  };
  Store$setState$slambda.$metadata$ = classMeta('Store$setState$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Store$setState$slambda_0(this$0, $reduce, resultContinuation) {
    var i = new Store$setState$slambda(this$0, $reduce, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Store$setEffect$slambda(this$0, $effect, resultContinuation) {
    this.w3i_1 = this$0;
    this.x3i_1 = $effect;
    CoroutineImpl.call(this, resultContinuation);
  }
  Store$setEffect$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  Store$setEffect$slambda.prototype.ki = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Store$setEffect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.w3i_1.n38_1.w1q(this.x3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.w3i_1.m38_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.x3i_1);
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
  Store$setEffect$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new Store$setEffect$slambda(this.w3i_1, this.x3i_1, completion);
    i.y3i_1 = $this$launch;
    return i;
  };
  Store$setEffect$slambda.$metadata$ = classMeta('Store$setEffect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Store$setEffect$slambda_0(this$0, $effect, resultContinuation) {
    var i = new Store$setEffect$slambda(this$0, $effect, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Store(initialState) {
    var tmp = this;
    var tmp_0 = Dispatchers_getInstance().i1j_1;
    tmp.i38_1 = CoroutineScope_0(tmp_0.w3(Job$default(null, 1, null)));
    this.j38_1 = MutableStateFlow(initialState);
    this.k38_1 = asStateFlow(this.j38_1);
    this.l38_1 = null;
    this.m38_1 = null;
    var tmp_1 = this;
    tmp_1.n38_1 = MutableSharedFlow$default(0, 0, null, 7, null);
    this.o38_1 = asSharedFlow(this.n38_1);
  }
  Store.prototype.p38 = function () {
    return this.i38_1;
  };
  Store.prototype.l1b = function () {
    return this.k38_1;
  };
  Store.prototype.z3i = function () {
    return this.k38_1.l1();
  };
  Store.prototype.a3j = function (_set____db54di) {
    this.l38_1 = _set____db54di;
  };
  Store.prototype.b3j = function () {
    return this.l38_1;
  };
  Store.prototype.setState = function (reduce) {
    launch$default(this.i38_1, null, null, Store$setState$slambda_0(this, reduce, null), 3, null);
  };
  Store.prototype.c3j = function () {
    return this.o38_1;
  };
  Store.prototype.setEffect = function (effect) {
    launch$default(this.i38_1, null, null, Store$setEffect$slambda_0(this, effect, null), 3, null);
  };
  Store.prototype.onEffect = function (effect) {
    this.m38_1 = effect;
  };
  Store.$metadata$ = classMeta('Store');
  Object.defineProperty(Store.prototype, 'state', {
    configurable: true,
    get: Store.prototype.l1b
  });
  Object.defineProperty(Store.prototype, 'currentState', {
    configurable: true,
    get: Store.prototype.z3i
  });
  Object.defineProperty(Store.prototype, 'didSetState', {
    configurable: true,
    get: Store.prototype.b3j,
    set: Store.prototype.a3j
  });
  Object.defineProperty(Store.prototype, 'effect', {
    configurable: true,
    get: Store.prototype.c3j
  });
  function CatalogUIState_init_$Init$(categories, isLoading, isRefreshing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      categories = emptyList();
    if (!(($mask0 & 2) === 0))
      isLoading = false;
    if (!(($mask0 & 4) === 0))
      isRefreshing = false;
    CatalogUIState.call($this, categories, isLoading, isRefreshing);
    return $this;
  }
  function CatalogUIState_init_$Create$(categories, isLoading, isRefreshing, $mask0, $marker) {
    return CatalogUIState_init_$Init$(categories, isLoading, isRefreshing, $mask0, $marker, Object.create(CatalogUIState.prototype));
  }
  function CatalogUIState(categories, isLoading, isRefreshing) {
    var categories_0 = categories === void 1 ? emptyList() : categories;
    var isLoading_0 = isLoading === void 1 ? false : isLoading;
    var isRefreshing_0 = isRefreshing === void 1 ? false : isRefreshing;
    this.d3j_1 = categories_0;
    this.e3j_1 = isLoading_0;
    this.f3j_1 = isRefreshing_0;
  }
  CatalogUIState.prototype.u3g = function () {
    return this.d3j_1;
  };
  CatalogUIState.prototype.v3g = function () {
    return this.e3j_1;
  };
  CatalogUIState.prototype.g3j = function () {
    return this.f3j_1;
  };
  CatalogUIState.prototype.component1 = function () {
    return this.d3j_1;
  };
  CatalogUIState.prototype.component2 = function () {
    return this.e3j_1;
  };
  CatalogUIState.prototype.component3 = function () {
    return this.f3j_1;
  };
  CatalogUIState.prototype.copy = function (categories, isLoading, isRefreshing) {
    return this.h3j(categories === void 1 ? this.d3j_1 : categories, isLoading === void 1 ? this.e3j_1 : isLoading, isRefreshing === void 1 ? this.f3j_1 : isRefreshing);
  };
  CatalogUIState.prototype.h3j = function (categories, isLoading, isRefreshing) {
    return new CatalogUIState(categories, isLoading, isRefreshing);
  };
  CatalogUIState.prototype.i3j = function (categories, isLoading, isRefreshing, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      categories = this.d3j_1;
    if (!(($mask0 & 2) === 0))
      isLoading = this.e3j_1;
    if (!(($mask0 & 4) === 0))
      isRefreshing = this.f3j_1;
    return this.h3j(categories, isLoading, isRefreshing);
  };
  CatalogUIState.prototype.toString = function () {
    return 'CatalogUIState(categories=' + this.d3j_1 + ', isLoading=' + this.e3j_1 + ', isRefreshing=' + this.f3j_1 + ')';
  };
  CatalogUIState.prototype.hashCode = function () {
    var result = hashCode(this.d3j_1);
    result = imul(result, 31) + (this.e3j_1 | 0) | 0;
    result = imul(result, 31) + (this.f3j_1 | 0) | 0;
    return result;
  };
  CatalogUIState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CatalogUIState))
      return false;
    var tmp0_other_with_cast = other instanceof CatalogUIState ? other : THROW_CCE();
    if (!equals(this.d3j_1, tmp0_other_with_cast.d3j_1))
      return false;
    if (!(this.e3j_1 === tmp0_other_with_cast.e3j_1))
      return false;
    if (!(this.f3j_1 === tmp0_other_with_cast.f3j_1))
      return false;
    return true;
  };
  CatalogUIState.$metadata$ = classMeta('CatalogUIState', [State]);
  Object.defineProperty(CatalogUIState.prototype, 'categories', {
    configurable: true,
    get: CatalogUIState.prototype.u3g
  });
  Object.defineProperty(CatalogUIState.prototype, 'isLoading', {
    configurable: true,
    get: CatalogUIState.prototype.v3g
  });
  Object.defineProperty(CatalogUIState.prototype, 'isRefreshing', {
    configurable: true,
    get: CatalogUIState.prototype.g3j
  });
  function CatalogUIStore$slambda$lambda($it) {
    return function ($this$setState) {
      return $this$setState.h3j($it.t3a_1, $it.u3a_1, ($this$setState.f3j_1 ? !$it.u3a_1 : false) ? false : $this$setState.f3j_1);
    };
  }
  function CatalogUIStore$slambda(this$0, resultContinuation) {
    this.r3j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  CatalogUIStore$slambda.prototype.t3j = function (it, $cont) {
    var tmp = this.u3j(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  CatalogUIStore$slambda.prototype.ki = function (p1, $cont) {
    return this.t3j(p1 instanceof CatalogState ? p1 : THROW_CCE(), $cont);
  };
  CatalogUIStore$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          this.r3j_1.setState(CatalogUIStore$slambda$lambda(this.s3j_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  CatalogUIStore$slambda.prototype.u3j = function (it, completion) {
    var i = new CatalogUIStore$slambda(this.r3j_1, completion);
    i.s3j_1 = it;
    return i;
  };
  CatalogUIStore$slambda.$metadata$ = classMeta('CatalogUIStore$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CatalogUIStore$slambda_0(this$0, resultContinuation) {
    var i = new CatalogUIStore$slambda(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.t3j(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CatalogUIStore(catalogStore, cartStore) {
    Store.call(this, CatalogUIState_init_$Create$(null, false, false, 7, null));
    this.c3k_1 = catalogStore;
    this.d3k_1 = cartStore;
    var tmp = this.c3k_1.state;
    launchIn(onEach(tmp, CatalogUIStore$slambda_0(this, null)), this.p38());
  }
  CatalogUIStore.prototype.e3k = function () {
    return this.c3k_1;
  };
  CatalogUIStore.prototype.f3k = function () {
    return this.d3k_1;
  };
  CatalogUIStore.$metadata$ = classMeta('CatalogUIStore', undefined, undefined, undefined, undefined, Store.prototype);
  function decrementProduct_0(_this__u8e3s4, product) {
    return decrementProduct(_this__u8e3s4.d3k_1, product);
  }
  function incrementProduct_0(_this__u8e3s4, product) {
    return incrementProduct(_this__u8e3s4.d3k_1, product);
  }
  function loadCatalog_0(_this__u8e3s4) {
    return loadCatalog(_this__u8e3s4.c3k_1);
  }
  function refreshCatalog(_this__u8e3s4) {
    _this__u8e3s4.setState(refreshCatalog$lambda());
    loadCatalog(_this__u8e3s4.c3k_1);
  }
  function refreshCatalog$lambda() {
    return function ($this$setState) {
      return $this$setState.i3j(null, false, true, 3, null);
    };
  }
  function catalogUIStore() {
    var tmp$ret$1;
    {
      var tmp0_get = get_app().g3k_1;
      var tmp$ret$0;
      {
        var tmp0_get_0 = tmp0_get.f36_1.l3k_1;
        tmp$ret$0 = tmp0_get_0.m3k(getKClass(CatalogUIStore), null, null);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function onState(store, didSetState) {
    store.l38_1 = didSetState;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Address = Address;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Cart = Cart_0;
    $me$haymob$coffeeshop$entities.Cart.Item = Item;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Category = Category;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Customer = Customer;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Field = Field;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.FieldType = FieldType;
    $me$haymob$coffeeshop$entities.FieldType.values = values;
    $me$haymob$coffeeshop$entities.FieldType.valueOf = valueOf;
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'Email', {
      configurable: true,
      get: FieldType_Email_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'Password', {
      configurable: true,
      get: FieldType_Password_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'NewPassword', {
      configurable: true,
      get: FieldType_NewPassword_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'FirstName', {
      configurable: true,
      get: FieldType_FirstName_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'LastName', {
      configurable: true,
      get: FieldType_LastName_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'City', {
      configurable: true,
      get: FieldType_City_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'Street', {
      configurable: true,
      get: FieldType_Street_getInstance
    });
    Object.defineProperty($me$haymob$coffeeshop$entities.FieldType, 'Postcode', {
      configurable: true,
      get: FieldType_Postcode_getInstance
    });
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Order = Order;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.PaymentMethod = PaymentMethod;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Price = Price;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.Product = Product;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$entities = $me$haymob$coffeeshop.entities || ($me$haymob$coffeeshop.entities = {});
    $me$haymob$coffeeshop$entities.ShippingMethod = ShippingMethod;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$store = $me$haymob$coffeeshop.store || ($me$haymob$coffeeshop.store = {});
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$store = $me$haymob$coffeeshop.store || ($me$haymob$coffeeshop.store = {});
    $me$haymob$coffeeshop$store.Store = Store;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    $me$haymob$coffeeshop$ui$catalog.CatalogUIState = CatalogUIState;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    $me$haymob$coffeeshop$ui$catalog.CatalogUIStore = CatalogUIStore;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    var $me$haymob$coffeeshop$ui$catalog$actions = $me$haymob$coffeeshop$ui$catalog.actions || ($me$haymob$coffeeshop$ui$catalog.actions = {});
    $me$haymob$coffeeshop$ui$catalog$actions.decrementProduct = decrementProduct_0;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    var $me$haymob$coffeeshop$ui$catalog$actions = $me$haymob$coffeeshop$ui$catalog.actions || ($me$haymob$coffeeshop$ui$catalog.actions = {});
    $me$haymob$coffeeshop$ui$catalog$actions.incrementProduct = incrementProduct_0;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    var $me$haymob$coffeeshop$ui$catalog$actions = $me$haymob$coffeeshop$ui$catalog.actions || ($me$haymob$coffeeshop$ui$catalog.actions = {});
    $me$haymob$coffeeshop$ui$catalog$actions.loadCatalog = loadCatalog_0;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    var $me$haymob$coffeeshop$ui = $me$haymob$coffeeshop.ui || ($me$haymob$coffeeshop.ui = {});
    var $me$haymob$coffeeshop$ui$catalog = $me$haymob$coffeeshop$ui.catalog || ($me$haymob$coffeeshop$ui.catalog = {});
    var $me$haymob$coffeeshop$ui$catalog$actions = $me$haymob$coffeeshop$ui$catalog.actions || ($me$haymob$coffeeshop$ui$catalog.actions = {});
    $me$haymob$coffeeshop$ui$catalog$actions.refreshCatalog = refreshCatalog;
    var $me = _.me || (_.me = {});
    var $me$haymob = $me.haymob || ($me.haymob = {});
    var $me$haymob$coffeeshop = $me$haymob.coffeeshop || ($me$haymob.coffeeshop = {});
    $me$haymob$coffeeshop.catalogUIStore = catalogUIStore;
    $me$haymob$coffeeshop.onState = onState;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=CoffeeShop-core.js.map