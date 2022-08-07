(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-CoffeeShopSDK'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'CoffeeShop-CoffeeShopSDK'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-CoffeeShopSDK'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'CoffeeShop-CoffeeShopSDK'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-CoffeeShopSDK'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'CoffeeShop-CoffeeShopSDK'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-CoffeeShopSDK'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'CoffeeShop-CoffeeShopSDK'.");
    }
    root['CoffeeShop-CoffeeShopSDK'] = factory(typeof this['CoffeeShop-CoffeeShopSDK'] === 'undefined' ? {} : this['CoffeeShop-CoffeeShopSDK'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getStringHashCode = kotlin_kotlin.$_$.u6;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var classMeta = kotlin_kotlin.$_$.p6;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var flatMapMerge$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var equals = kotlin_kotlin.$_$.q6;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.c6;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.s9;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.e7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.q7;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n5;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.i1;
  var firstOrNull = kotlin_kotlin.$_$.t4;
  var KProperty1 = kotlin_kotlin.$_$.y7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t6;
  var SuspendFunction1 = kotlin_kotlin.$_$.d6;
  var hashCode = kotlin_kotlin.$_$.v6;
  var List = kotlin_kotlin.$_$.t3;
  var toList = kotlin_kotlin.$_$.j5;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.n6;
  var charSequenceGet = kotlin_kotlin.$_$.m6;
  var toString_0 = kotlin_kotlin.$_$.a2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var Enum = kotlin_kotlin.$_$.y8;
  var numberRangeToNumber = kotlin_kotlin.$_$.k7;
  var joinToString$default_0 = kotlin_kotlin.$_$.j;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var replace$default = kotlin_kotlin.$_$.m;
  var Exception = kotlin_kotlin.$_$.a9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.k6;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getNumberHashCode = kotlin_kotlin.$_$.s6;
  var KMutableProperty1 = kotlin_kotlin.$_$.x7;
  var last = kotlin_kotlin.$_$.e8;
  var Char = kotlin_kotlin.$_$.v8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x1;
  var dropLast = kotlin_kotlin.$_$.a8;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Pair = kotlin_kotlin.$_$.f9;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var emptyList = kotlin_kotlin.$_$.p4;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var println = kotlin_kotlin.$_$.g6;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ba;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  //endregion
  //region block: pre-declaration
  createCart$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  createCart$o$collect$slambda.prototype.constructor = createCart$o$collect$slambda;
  $collectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$0.prototype.constructor = $collectCOROUTINE$0;
  createCart$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  createCart$o$collect$slambda_1.prototype.constructor = createCart$o$collect$slambda_1;
  $collectCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$1.prototype.constructor = $collectCOROUTINE$1;
  addProduct$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  addProduct$o$collect$slambda.prototype.constructor = addProduct$o$collect$slambda;
  $collectCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$2.prototype.constructor = $collectCOROUTINE$2;
  addProduct$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  addProduct$o$collect$slambda_1.prototype.constructor = addProduct$o$collect$slambda_1;
  $collectCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$3.prototype.constructor = $collectCOROUTINE$3;
  updateItem$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  updateItem$o$collect$slambda.prototype.constructor = updateItem$o$collect$slambda;
  $collectCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$4.prototype.constructor = $collectCOROUTINE$4;
  updateItem$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  updateItem$o$collect$slambda_1.prototype.constructor = updateItem$o$collect$slambda_1;
  $collectCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$5.prototype.constructor = $collectCOROUTINE$5;
  removeItem$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  removeItem$o$collect$slambda.prototype.constructor = removeItem$o$collect$slambda;
  $collectCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$6.prototype.constructor = $collectCOROUTINE$6;
  removeItem$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  removeItem$o$collect$slambda_1.prototype.constructor = removeItem$o$collect$slambda_1;
  $collectCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$7.prototype.constructor = $collectCOROUTINE$7;
  cart$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  cart$o$collect$slambda.prototype.constructor = cart$o$collect$slambda;
  $collectCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$8.prototype.constructor = $collectCOROUTINE$8;
  cart$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  cart$o$collect$slambda_1.prototype.constructor = cart$o$collect$slambda_1;
  $collectCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$9.prototype.constructor = $collectCOROUTINE$9;
  loadCustomerCart$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  loadCustomerCart$o$collect$slambda.prototype.constructor = loadCustomerCart$o$collect$slambda;
  $collectCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$12.prototype.constructor = $collectCOROUTINE$12;
  loadCustomerCart$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  loadCustomerCart$o$collect$slambda_1.prototype.constructor = loadCustomerCart$o$collect$slambda_1;
  $collectCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$13.prototype.constructor = $collectCOROUTINE$13;
  loadCustomerCart$o$collect$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  loadCustomerCart$o$collect$slambda_3.prototype.constructor = loadCustomerCart$o$collect$slambda_3;
  $collectCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$14.prototype.constructor = $collectCOROUTINE$14;
  setCustomerCart$slambda.prototype = Object.create(CoroutineImpl.prototype);
  setCustomerCart$slambda.prototype.constructor = setCustomerCart$slambda;
  setUserCart$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  setUserCart$o$collect$slambda.prototype.constructor = setUserCart$o$collect$slambda;
  $collectCOROUTINE$22.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$22.prototype.constructor = $collectCOROUTINE$22;
  setUserCart$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  setUserCart$o$collect$slambda_1.prototype.constructor = setUserCart$o$collect$slambda_1;
  $collectCOROUTINE$23.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$23.prototype.constructor = $collectCOROUTINE$23;
  getUserId$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  getUserId$o$collect$slambda.prototype.constructor = getUserId$o$collect$slambda;
  $collectCOROUTINE$24.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$24.prototype.constructor = $collectCOROUTINE$24;
  getUserId$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  getUserId$o$collect$slambda_1.prototype.constructor = getUserId$o$collect$slambda_1;
  $collectCOROUTINE$25.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$25.prototype.constructor = $collectCOROUTINE$25;
  categories$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  categories$o$collect$slambda.prototype.constructor = categories$o$collect$slambda;
  $collectCOROUTINE$26.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$26.prototype.constructor = $collectCOROUTINE$26;
  categories$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  categories$o$collect$slambda_1.prototype.constructor = categories$o$collect$slambda_1;
  $collectCOROUTINE$27.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$27.prototype.constructor = $collectCOROUTINE$27;
  products$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  products$o$collect$slambda.prototype.constructor = products$o$collect$slambda;
  $collectCOROUTINE$28.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$28.prototype.constructor = $collectCOROUTINE$28;
  products$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  products$o$collect$slambda_1.prototype.constructor = products$o$collect$slambda_1;
  $collectCOROUTINE$29.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$29.prototype.constructor = $collectCOROUTINE$29;
  tryMap$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  tryMap$o$collect$slambda.prototype.constructor = tryMap$o$collect$slambda;
  $collectCOROUTINE$30.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$30.prototype.constructor = $collectCOROUTINE$30;
  KeyEncodingStrategy.prototype = Object.create(Enum.prototype);
  KeyEncodingStrategy.prototype.constructor = KeyEncodingStrategy;
  InternalServerException.prototype = Object.create(Exception.prototype);
  InternalServerException.prototype.constructor = InternalServerException;
  user$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  user$o$collect$slambda.prototype.constructor = user$o$collect$slambda;
  $collectCOROUTINE$37.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$37.prototype.constructor = $collectCOROUTINE$37;
  user$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  user$o$collect$slambda_1.prototype.constructor = user$o$collect$slambda_1;
  $collectCOROUTINE$38.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$38.prototype.constructor = $collectCOROUTINE$38;
  http$slambda.prototype = Object.create(CoroutineImpl.prototype);
  http$slambda.prototype.constructor = http$slambda;
  //endregion
  function get_config() {
    init_properties_CoffeeShopSDK_kt_cyasg4();
    return config;
  }
  var config;
  function Config_init_$Init$(url, appId, masterKey, sessionToken, isLoggingEnabled, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      sessionToken = null;
    if (!(($mask0 & 16) === 0))
      isLoggingEnabled = false;
    Config.call($this, url, appId, masterKey, sessionToken, isLoggingEnabled);
    return $this;
  }
  function Config_init_$Create$(url, appId, masterKey, sessionToken, isLoggingEnabled, $mask0, $marker) {
    return Config_init_$Init$(url, appId, masterKey, sessionToken, isLoggingEnabled, $mask0, $marker, Object.create(Config.prototype));
  }
  function Config(url, appId, masterKey, sessionToken, isLoggingEnabled) {
    this.o29_1 = url;
    this.p29_1 = appId;
    this.q29_1 = masterKey;
    this.r29_1 = sessionToken;
    this.s29_1 = isLoggingEnabled;
  }
  Config.prototype.toString = function () {
    return 'Config(url=' + this.o29_1 + ', appId=' + this.p29_1 + ', masterKey=' + this.q29_1 + ', sessionToken=' + this.r29_1 + ', isLoggingEnabled=' + this.s29_1 + ')';
  };
  Config.prototype.hashCode = function () {
    var result = getStringHashCode(this.o29_1);
    result = imul(result, 31) + getStringHashCode(this.p29_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q29_1) | 0;
    result = imul(result, 31) + (this.r29_1 == null ? 0 : getStringHashCode(this.r29_1)) | 0;
    result = imul(result, 31) + (this.s29_1 | 0) | 0;
    return result;
  };
  Config.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Config))
      return false;
    var tmp0_other_with_cast = other instanceof Config ? other : THROW_CCE();
    if (!(this.o29_1 === tmp0_other_with_cast.o29_1))
      return false;
    if (!(this.p29_1 === tmp0_other_with_cast.p29_1))
      return false;
    if (!(this.q29_1 === tmp0_other_with_cast.q29_1))
      return false;
    if (!(this.r29_1 == tmp0_other_with_cast.r29_1))
      return false;
    if (!(this.s29_1 === tmp0_other_with_cast.s29_1))
      return false;
    return true;
  };
  Config.$metadata$ = classMeta('Config');
  var properties_initialized_CoffeeShopSDK_kt_7v0ffs;
  function init_properties_CoffeeShopSDK_kt_cyasg4() {
    if (properties_initialized_CoffeeShopSDK_kt_7v0ffs) {
    } else {
      properties_initialized_CoffeeShopSDK_kt_7v0ffs = true;
      config = Config_init_$Create$('', '', '', null, false, 24, null);
    }
  }
  function createCart() {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(mutation(createCart$lambda()));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_0(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function addProduct(cartId, productId, qty) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(mutation(addProduct$lambda(cartId, productId, qty)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_1(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_2(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function updateItem(itemId, qty) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(mutation(updateItem$lambda(itemId, qty)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_3(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_4(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function removeItem(itemId) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(mutation(removeItem$lambda(itemId)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_5(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_6(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function cart(id) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(query(cart$lambda(id)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_7(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_8(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function loadCustomerCart(token) {
    var tmp$ret$10;
    {
      var tmp$ret$7;
      {
        var tmp$ret$3;
        {
          var tmp0_decode = http(query(loadCustomerCart$lambda(token)));
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = new _no_name_provided__qut3iv_9(tmp0_decode);
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        var tmp1_tryMap = tmp$ret$3;
        var tmp$ret$6;
        {
          var tmp$ret$5;
          {
            var tmp$ret$4;
            {
              tmp$ret$4 = new _no_name_provided__qut3iv_10(tmp1_tryMap);
            }
            tmp$ret$5 = tmp$ret$4;
          }
          tmp$ret$6 = tmp$ret$5;
        }
        tmp$ret$7 = tmp$ret$6;
      }
      var tmp2_map = tmp$ret$7;
      var tmp$ret$9;
      {
        var tmp$ret$8;
        {
          tmp$ret$8 = new _no_name_provided__qut3iv_11(tmp2_map);
        }
        tmp$ret$9 = tmp$ret$8;
      }
      tmp$ret$10 = tmp$ret$9;
    }
    return tmp$ret$10;
  }
  function loadCustomerCart$default(token, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp0_elvis_lhs = get_config().r29_1;
      token = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    }
    return loadCustomerCart(token);
  }
  function setCustomerCart(cartId) {
    var tmp = getUserId$default(null, 1, null);
    return flatMapMerge$default(tmp, 0, setCustomerCart$slambda_0(cartId, null), 1, null);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CreateCartMutation', this, 1);
    tmp0_serialDesc.ys('createCart', false);
    this.t29_1 = tmp0_serialDesc;
  }
  $serializer.prototype.gj = function () {
    return this.t29_1;
  };
  $serializer.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_0()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.ij = function (decoder) {
    var tmp0_desc = this.t29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CreateCartMutation_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.u29 = function (encoder, value) {
    var tmp0_desc = this.t29_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_0(), value.v29_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer.prototype.hj = function (encoder, value) {
    return this.u29(encoder, value instanceof CreateCartMutation ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function CreateCartMutation_init_$Init$(seen1, createCart, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance().t29_1);
    $this.v29_1 = createCart;
    return $this;
  }
  function CreateCartMutation_init_$Create$(seen1, createCart, serializationConstructorMarker) {
    return CreateCartMutation_init_$Init$(seen1, createCart, serializationConstructorMarker, Object.create(CreateCartMutation.prototype));
  }
  function CreateCartMutation(createCart) {
    Companion_getInstance();
    this.v29_1 = createCart;
  }
  CreateCartMutation.prototype.toString = function () {
    return 'CreateCartMutation(createCart=' + this.v29_1 + ')';
  };
  CreateCartMutation.prototype.hashCode = function () {
    return this.v29_1.hashCode();
  };
  CreateCartMutation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateCartMutation))
      return false;
    var tmp0_other_with_cast = other instanceof CreateCartMutation ? other : THROW_CCE();
    if (!this.v29_1.equals(tmp0_other_with_cast.v29_1))
      return false;
    return true;
  };
  CreateCartMutation.$metadata$ = classMeta('CreateCartMutation', undefined, undefined, {0: $serializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CartQuery', this, 1);
    tmp0_serialDesc.ys('cart', false);
    this.w29_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.gj = function () {
    return this.w29_1;
  };
  $serializer_0.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_18()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_0.prototype.ij = function (decoder) {
    var tmp0_desc = this.w29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_18(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_18(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CartQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_0.prototype.x29 = function (encoder, value) {
    var tmp0_desc = this.w29_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_18(), value.y29_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_0.prototype.hj = function (encoder, value) {
    return this.x29(encoder, value instanceof CartQuery ? value : THROW_CCE());
  };
  $serializer_0.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function CartQuery_init_$Init$(seen1, cart, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().w29_1);
    $this.y29_1 = cart;
    return $this;
  }
  function CartQuery_init_$Create$(seen1, cart, serializationConstructorMarker) {
    return CartQuery_init_$Init$(seen1, cart, serializationConstructorMarker, Object.create(CartQuery.prototype));
  }
  function CartQuery(cart) {
    Companion_getInstance_0();
    this.y29_1 = cart;
  }
  CartQuery.prototype.toString = function () {
    return 'CartQuery(cart=' + this.y29_1 + ')';
  };
  CartQuery.prototype.hashCode = function () {
    return this.y29_1.hashCode();
  };
  CartQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CartQuery))
      return false;
    var tmp0_other_with_cast = other instanceof CartQuery ? other : THROW_CCE();
    if (!this.y29_1.equals(tmp0_other_with_cast.y29_1))
      return false;
    return true;
  };
  CartQuery.$metadata$ = classMeta('CartQuery', [GQLObject], undefined, {0: $serializer_getInstance_0});
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CreateCartItemMutation', this, 1);
    tmp0_serialDesc.ys('createCartItem', false);
    this.z29_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.gj = function () {
    return this.z29_1;
  };
  $serializer_1.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_2()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_1.prototype.ij = function (decoder) {
    var tmp0_desc = this.z29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CreateCartItemMutation_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.a2a = function (encoder, value) {
    var tmp0_desc = this.z29_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_2(), value.b2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_1.prototype.hj = function (encoder, value) {
    return this.a2a(encoder, value instanceof CreateCartItemMutation ? value : THROW_CCE());
  };
  $serializer_1.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function CreateCartItemMutation_init_$Init$(seen1, createCartItem, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().z29_1);
    $this.b2a_1 = createCartItem;
    return $this;
  }
  function CreateCartItemMutation_init_$Create$(seen1, createCartItem, serializationConstructorMarker) {
    return CreateCartItemMutation_init_$Init$(seen1, createCartItem, serializationConstructorMarker, Object.create(CreateCartItemMutation.prototype));
  }
  function CreateCartItemMutation(createCartItem) {
    Companion_getInstance_1();
    this.b2a_1 = createCartItem;
  }
  CreateCartItemMutation.prototype.toString = function () {
    return 'CreateCartItemMutation(createCartItem=' + this.b2a_1 + ')';
  };
  CreateCartItemMutation.prototype.hashCode = function () {
    return this.b2a_1.hashCode();
  };
  CreateCartItemMutation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateCartItemMutation))
      return false;
    var tmp0_other_with_cast = other instanceof CreateCartItemMutation ? other : THROW_CCE();
    if (!this.b2a_1.equals(tmp0_other_with_cast.b2a_1))
      return false;
    return true;
  };
  CreateCartItemMutation.$metadata$ = classMeta('CreateCartItemMutation', undefined, undefined, {0: $serializer_getInstance_1});
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CartItemQuery', this, 1);
    tmp0_serialDesc.ys('cartItem', false);
    this.c2a_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.gj = function () {
    return this.c2a_1;
  };
  $serializer_2.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_0()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_2.prototype.ij = function (decoder) {
    var tmp0_desc = this.c2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CartItemQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_2.prototype.d2a = function (encoder, value) {
    var tmp0_desc = this.c2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_0(), value.e2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_2.prototype.hj = function (encoder, value) {
    return this.d2a(encoder, value instanceof CartItemQuery ? value : THROW_CCE());
  };
  $serializer_2.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function CartItemQuery_init_$Init$(seen1, cartItem, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().c2a_1);
    $this.e2a_1 = cartItem;
    return $this;
  }
  function CartItemQuery_init_$Create$(seen1, cartItem, serializationConstructorMarker) {
    return CartItemQuery_init_$Init$(seen1, cartItem, serializationConstructorMarker, Object.create(CartItemQuery.prototype));
  }
  function CartItemQuery() {
  }
  CartItemQuery.prototype.toString = function () {
    return 'CartItemQuery(cartItem=' + this.e2a_1 + ')';
  };
  CartItemQuery.prototype.hashCode = function () {
    return this.e2a_1.hashCode();
  };
  CartItemQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CartItemQuery))
      return false;
    var tmp0_other_with_cast = other instanceof CartItemQuery ? other : THROW_CCE();
    if (!this.e2a_1.equals(tmp0_other_with_cast.e2a_1))
      return false;
    return true;
  };
  CartItemQuery.$metadata$ = classMeta('CartItemQuery', [GQLObject], undefined, {0: $serializer_getInstance_2});
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.UpdateCartItemMutation', this, 1);
    tmp0_serialDesc.ys('updateCartItem', false);
    this.f2a_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.gj = function () {
    return this.f2a_1;
  };
  $serializer_3.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_2()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_3.prototype.ij = function (decoder) {
    var tmp0_desc = this.f2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return UpdateCartItemMutation_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_3.prototype.g2a = function (encoder, value) {
    var tmp0_desc = this.f2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_2(), value.h2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_3.prototype.hj = function (encoder, value) {
    return this.g2a(encoder, value instanceof UpdateCartItemMutation ? value : THROW_CCE());
  };
  $serializer_3.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function UpdateCartItemMutation_init_$Init$(seen1, updateCartItem, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().f2a_1);
    $this.h2a_1 = updateCartItem;
    return $this;
  }
  function UpdateCartItemMutation_init_$Create$(seen1, updateCartItem, serializationConstructorMarker) {
    return UpdateCartItemMutation_init_$Init$(seen1, updateCartItem, serializationConstructorMarker, Object.create(UpdateCartItemMutation.prototype));
  }
  function UpdateCartItemMutation(updateCartItem) {
    Companion_getInstance_2();
    this.h2a_1 = updateCartItem;
  }
  UpdateCartItemMutation.prototype.toString = function () {
    return 'UpdateCartItemMutation(updateCartItem=' + this.h2a_1 + ')';
  };
  UpdateCartItemMutation.prototype.hashCode = function () {
    return this.h2a_1.hashCode();
  };
  UpdateCartItemMutation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateCartItemMutation))
      return false;
    var tmp0_other_with_cast = other instanceof UpdateCartItemMutation ? other : THROW_CCE();
    if (!this.h2a_1.equals(tmp0_other_with_cast.h2a_1))
      return false;
    return true;
  };
  UpdateCartItemMutation.$metadata$ = classMeta('UpdateCartItemMutation', undefined, undefined, {0: $serializer_getInstance_3});
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CartUserQuery.CartUser', this, 1);
    tmp0_serialDesc.ys('cart', true);
    this.i2a_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.gj = function () {
    return this.i2a_1;
  };
  $serializer_4.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [get_nullable($serializer_getInstance_18())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_4.prototype.ij = function (decoder) {
    var tmp0_desc = this.i2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_getInstance_18(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_getInstance_18(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CartUser_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_4.prototype.j2a = function (encoder, value) {
    var tmp0_desc = this.i2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    if (tmp1_output.un(tmp0_desc, 0) ? true : !(value.k2a_1 == null))
      tmp1_output.qn(tmp0_desc, 0, $serializer_getInstance_18(), value.k2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_4.prototype.hj = function (encoder, value) {
    return this.j2a(encoder, value instanceof CartUser ? value : THROW_CCE());
  };
  $serializer_4.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function CartUser_init_$Init$(seen1, cart, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1)))
      throwMissingFieldException(seen1, 0, $serializer_getInstance_4().i2a_1);
    if (0 === (seen1 & 1))
      $this.k2a_1 = null;
    else
      $this.k2a_1 = cart;
    return $this;
  }
  function CartUser_init_$Create$(seen1, cart, serializationConstructorMarker) {
    return CartUser_init_$Init$(seen1, cart, serializationConstructorMarker, Object.create(CartUser.prototype));
  }
  function CartUser() {
  }
  CartUser.prototype.toString = function () {
    return 'CartUser(cart=' + this.k2a_1 + ')';
  };
  CartUser.prototype.hashCode = function () {
    return this.k2a_1 == null ? 0 : this.k2a_1.hashCode();
  };
  CartUser.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CartUser))
      return false;
    var tmp0_other_with_cast = other instanceof CartUser ? other : THROW_CCE();
    if (!equals(this.k2a_1, tmp0_other_with_cast.k2a_1))
      return false;
    return true;
  };
  CartUser.$metadata$ = classMeta('CartUser', [GQLObject], undefined, {0: $serializer_getInstance_4});
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.CartUserQuery', this, 1);
    tmp0_serialDesc.ys('user', false);
    this.l2a_1 = tmp0_serialDesc;
  }
  $serializer_5.prototype.gj = function () {
    return this.l2a_1;
  };
  $serializer_5.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_4()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_5.prototype.ij = function (decoder) {
    var tmp0_desc = this.l2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_4(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_4(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CartUserQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_5.prototype.m2a = function (encoder, value) {
    var tmp0_desc = this.l2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_4(), value.n2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_5.prototype.hj = function (encoder, value) {
    return this.m2a(encoder, value instanceof CartUserQuery ? value : THROW_CCE());
  };
  $serializer_5.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function CartUserQuery_init_$Init$(seen1, user, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_5().l2a_1);
    $this.n2a_1 = user;
    return $this;
  }
  function CartUserQuery_init_$Create$(seen1, user, serializationConstructorMarker) {
    return CartUserQuery_init_$Init$(seen1, user, serializationConstructorMarker, Object.create(CartUserQuery.prototype));
  }
  function CartUserQuery() {
  }
  CartUserQuery.prototype.toString = function () {
    return 'CartUserQuery(user=' + this.n2a_1 + ')';
  };
  CartUserQuery.prototype.hashCode = function () {
    return this.n2a_1.hashCode();
  };
  CartUserQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CartUserQuery))
      return false;
    var tmp0_other_with_cast = other instanceof CartUserQuery ? other : THROW_CCE();
    if (!this.n2a_1.equals(tmp0_other_with_cast.n2a_1))
      return false;
    return true;
  };
  CartUserQuery.$metadata$ = classMeta('CartUserQuery', [GQLObject], undefined, {0: $serializer_getInstance_5});
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.SessionsQuery', this, 1);
    tmp0_serialDesc.ys('sessions', false);
    this.o2a_1 = tmp0_serialDesc;
  }
  $serializer_6.prototype.gj = function () {
    return this.o2a_1;
  };
  $serializer_6.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [get_nullable($serializer_init_$Create$_1($serializer_getInstance_5()))];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_6.prototype.ij = function (decoder) {
    var tmp0_desc = this.o2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_5()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_5()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return SessionsQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_6.prototype.p2a = function (encoder, value) {
    var tmp0_desc = this.o2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.qn(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_5()), value.q2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_6.prototype.hj = function (encoder, value) {
    return this.p2a(encoder, value instanceof SessionsQuery ? value : THROW_CCE());
  };
  $serializer_6.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function SessionsQuery_init_$Init$(seen1, sessions, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_6().o2a_1);
    $this.q2a_1 = sessions;
    return $this;
  }
  function SessionsQuery_init_$Create$(seen1, sessions, serializationConstructorMarker) {
    return SessionsQuery_init_$Init$(seen1, sessions, serializationConstructorMarker, Object.create(SessionsQuery.prototype));
  }
  function SessionsQuery(sessions) {
    Companion_getInstance_3();
    this.q2a_1 = sessions;
  }
  SessionsQuery.prototype.toString = function () {
    return 'SessionsQuery(sessions=' + this.q2a_1 + ')';
  };
  SessionsQuery.prototype.hashCode = function () {
    return this.q2a_1 == null ? 0 : this.q2a_1.hashCode();
  };
  SessionsQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SessionsQuery))
      return false;
    var tmp0_other_with_cast = other instanceof SessionsQuery ? other : THROW_CCE();
    if (!equals(this.q2a_1, tmp0_other_with_cast.q2a_1))
      return false;
    return true;
  };
  SessionsQuery.$metadata$ = classMeta('SessionsQuery', undefined, undefined, {0: $serializer_getInstance_6});
  function setUserCart(userId, cartId) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(mutation(setUserCart$lambda(userId, cartId)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_12(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_13(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function getUserId(token) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(query(getUserId$lambda(token)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_14(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_15(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function getUserId$default(token, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp0_elvis_lhs = get_config().r29_1;
      token = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    }
    return getUserId(token);
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.UpdateUserMutation', this, 1);
    tmp0_serialDesc.ys('updateUser', false);
    this.r2a_1 = tmp0_serialDesc;
  }
  $serializer_7.prototype.gj = function () {
    return this.r2a_1;
  };
  $serializer_7.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_5()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_7.prototype.ij = function (decoder) {
    var tmp0_desc = this.r2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return UpdateUserMutation_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_7.prototype.s2a = function (encoder, value) {
    var tmp0_desc = this.r2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_5(), value.t2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_7.prototype.hj = function (encoder, value) {
    return this.s2a(encoder, value instanceof UpdateUserMutation ? value : THROW_CCE());
  };
  $serializer_7.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function UpdateUserMutation_init_$Init$(seen1, updateUser, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_7().r2a_1);
    $this.t2a_1 = updateUser;
    return $this;
  }
  function UpdateUserMutation_init_$Create$(seen1, updateUser, serializationConstructorMarker) {
    return UpdateUserMutation_init_$Init$(seen1, updateUser, serializationConstructorMarker, Object.create(UpdateUserMutation.prototype));
  }
  function UpdateUserMutation(updateUser) {
    Companion_getInstance_4();
    this.t2a_1 = updateUser;
  }
  UpdateUserMutation.prototype.toString = function () {
    return 'UpdateUserMutation(updateUser=' + this.t2a_1 + ')';
  };
  UpdateUserMutation.prototype.hashCode = function () {
    return this.t2a_1.hashCode();
  };
  UpdateUserMutation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateUserMutation))
      return false;
    var tmp0_other_with_cast = other instanceof UpdateUserMutation ? other : THROW_CCE();
    if (!this.t2a_1.equals(tmp0_other_with_cast.t2a_1))
      return false;
    return true;
  };
  UpdateUserMutation.$metadata$ = classMeta('UpdateUserMutation', undefined, undefined, {0: $serializer_getInstance_7});
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.SessionsQuery2', this, 1);
    tmp0_serialDesc.ys('sessions', false);
    this.u2a_1 = tmp0_serialDesc;
  }
  $serializer_8.prototype.gj = function () {
    return this.u2a_1;
  };
  $serializer_8.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [get_nullable($serializer_init_$Create$_1($serializer_getInstance_10()))];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_8.prototype.ij = function (decoder) {
    var tmp0_desc = this.u2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_10()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_10()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return SessionsQuery2_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_8.prototype.v2a = function (encoder, value) {
    var tmp0_desc = this.u2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.qn(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_10()), value.w2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_8.prototype.hj = function (encoder, value) {
    return this.v2a(encoder, value instanceof SessionsQuery2 ? value : THROW_CCE());
  };
  $serializer_8.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function SessionsQuery2_init_$Init$(seen1, sessions, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_8().u2a_1);
    $this.w2a_1 = sessions;
    return $this;
  }
  function SessionsQuery2_init_$Create$(seen1, sessions, serializationConstructorMarker) {
    return SessionsQuery2_init_$Init$(seen1, sessions, serializationConstructorMarker, Object.create(SessionsQuery2.prototype));
  }
  function SessionsQuery2(sessions) {
    Companion_getInstance_5();
    this.w2a_1 = sessions;
  }
  SessionsQuery2.prototype.toString = function () {
    return 'SessionsQuery2(sessions=' + this.w2a_1 + ')';
  };
  SessionsQuery2.prototype.hashCode = function () {
    return this.w2a_1 == null ? 0 : this.w2a_1.hashCode();
  };
  SessionsQuery2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SessionsQuery2))
      return false;
    var tmp0_other_with_cast = other instanceof SessionsQuery2 ? other : THROW_CCE();
    if (!equals(this.w2a_1, tmp0_other_with_cast.w2a_1))
      return false;
    return true;
  };
  SessionsQuery2.$metadata$ = classMeta('SessionsQuery2', undefined, undefined, {0: $serializer_getInstance_8});
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.UserIdQuery.UserId', this, 1);
    tmp0_serialDesc.ys('objectId', false);
    this.x2a_1 = tmp0_serialDesc;
  }
  $serializer_9.prototype.gj = function () {
    return this.x2a_1;
  };
  $serializer_9.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_9.prototype.ij = function (decoder) {
    var tmp0_desc = this.x2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return UserId_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_9.prototype.y2a = function (encoder, value) {
    var tmp0_desc = this.x2a_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.z2a_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_9.prototype.hj = function (encoder, value) {
    return this.y2a(encoder, value instanceof UserId ? value : THROW_CCE());
  };
  $serializer_9.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function UserId_init_$Init$(seen1, objectId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_9().x2a_1);
    $this.z2a_1 = objectId;
    return $this;
  }
  function UserId_init_$Create$(seen1, objectId, serializationConstructorMarker) {
    return UserId_init_$Init$(seen1, objectId, serializationConstructorMarker, Object.create(UserId.prototype));
  }
  function UserId() {
  }
  UserId.prototype.toString = function () {
    return 'UserId(objectId=' + this.z2a_1 + ')';
  };
  UserId.prototype.hashCode = function () {
    return getStringHashCode(this.z2a_1);
  };
  UserId.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserId))
      return false;
    var tmp0_other_with_cast = other instanceof UserId ? other : THROW_CCE();
    if (!(this.z2a_1 === tmp0_other_with_cast.z2a_1))
      return false;
    return true;
  };
  UserId.$metadata$ = classMeta('UserId', [GQLObject], undefined, {0: $serializer_getInstance_9});
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.cart.UserIdQuery', this, 1);
    tmp0_serialDesc.ys('user', false);
    this.a2b_1 = tmp0_serialDesc;
  }
  $serializer_10.prototype.gj = function () {
    return this.a2b_1;
  };
  $serializer_10.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_9()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_10.prototype.ij = function (decoder) {
    var tmp0_desc = this.a2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_9(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_9(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return UserIdQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_10.prototype.b2b = function (encoder, value) {
    var tmp0_desc = this.a2b_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_9(), value.c2b_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_10.prototype.hj = function (encoder, value) {
    return this.b2b(encoder, value instanceof UserIdQuery ? value : THROW_CCE());
  };
  $serializer_10.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function UserIdQuery_init_$Init$(seen1, user, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_10().a2b_1);
    $this.c2b_1 = user;
    return $this;
  }
  function UserIdQuery_init_$Create$(seen1, user, serializationConstructorMarker) {
    return UserIdQuery_init_$Init$(seen1, user, serializationConstructorMarker, Object.create(UserIdQuery.prototype));
  }
  function UserIdQuery() {
  }
  UserIdQuery.prototype.toString = function () {
    return 'UserIdQuery(user=' + this.c2b_1 + ')';
  };
  UserIdQuery.prototype.hashCode = function () {
    return this.c2b_1.hashCode();
  };
  UserIdQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserIdQuery))
      return false;
    var tmp0_other_with_cast = other instanceof UserIdQuery ? other : THROW_CCE();
    if (!this.c2b_1.equals(tmp0_other_with_cast.c2b_1))
      return false;
    return true;
  };
  UserIdQuery.$metadata$ = classMeta('UserIdQuery', [GQLObject], undefined, {0: $serializer_getInstance_10});
  function createCart$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function createCart$lambda() {
    return function ($this$mutation) {
      var tmp = createCart$factory();
      var tmp_0 = [of('input', argsOf([]))];
      $this$mutation.i2b(tmp, tmp_0, createCart$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.j2b_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.w1q = function (value, $cont) {
    return this.j2b_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function createCart$o$collect$slambda($collector, resultContinuation) {
    this.s2b_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  createCart$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  createCart$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  createCart$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.u2b_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.v2b_1 = this.u2b_1.ak();
            var tmp_3 = this;
            tmp_3.w2b_1 = serializer(this.v2b_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CreateCartMutation), arrayOf([]), false))]), false));
            var tmp_4 = this.w2b_1;
            tmp_0.x2b_1 = this.u2b_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.t2b_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.x2b_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.y2b_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(CreateCartMutation).dd()) : tmp2_elvis_lhs;
            suspendResult = this.s2b_1.w1q(new DecodeResult(this.x2b_1.b2c_1, this.y2b_1), this);
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
  createCart$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new createCart$o$collect$slambda(this.s2b_1, completion);
    i.t2b_1 = value;
    return i;
  };
  createCart$o$collect$slambda.$metadata$ = classMeta('createCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function createCart$o$collect$slambda_0($collector, resultContinuation) {
    var i = new createCart$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2c_1 = _this__u8e3s4;
    this.m2c_1 = collector;
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
            var tmp_0 = createCart$o$collect$slambda_0(this.m2c_1, null);
            suspendResult = this.l2c_1.n2c_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function _no_name_provided__qut3iv($tmp0_decode) {
    this.n2c_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv.prototype.o2c = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$0(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv.prototype.j1q = function (collector, $cont) {
    return this.o2c(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function createCart$o$collect$slambda_1($collector, resultContinuation) {
    this.x2c_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  createCart$o$collect$slambda_1.prototype.z2c = function (value, $cont) {
    var tmp = this.a2d(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  createCart$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.z2c(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  createCart$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.y2c_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.v29_1.y29_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.y2c_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.x2c_1.w1q(tmp_1, this);
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
  createCart$o$collect$slambda_1.prototype.a2d = function (value, completion) {
    var i = new createCart$o$collect$slambda_1(this.x2c_1, completion);
    i.y2c_1 = value;
    return i;
  };
  createCart$o$collect$slambda_1.$metadata$ = classMeta('createCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function createCart$o$collect$slambda_2($collector, resultContinuation) {
    var i = new createCart$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2c(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2d_1 = _this__u8e3s4;
    this.m2d_1 = collector;
  }
  $collectCOROUTINE$1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = createCart$o$collect$slambda_2(this.m2d_1, null);
            suspendResult = this.l2d_1.n2d_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  $collectCOROUTINE$1.$metadata$ = classMeta('$collectCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_0($tmp1_tryMap) {
    this.n2d_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_0.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_0.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function addProduct$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory_0(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function addProduct$lambda$lambda() {
    return function ($this$field) {
      var tmp = cartItem$factory();
      $this$field.i2b(tmp, [], addProduct$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function addProduct$lambda($cartId, $productId, $qty) {
    return function ($this$mutation) {
      var tmp = createCartItem$factory();
      var tmp_0 = [of('input', argsOf([of('fields', argsOf([of('cart', argsOf([of('link', $cartId)])), of('product', argsOf([of('link', $productId)])), of('qty', $qty)]))]))];
      $this$mutation.i2b(tmp, tmp_0, addProduct$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.p2d_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.w1q = function (value, $cont) {
    return this.p2d_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function addProduct$o$collect$slambda($collector, resultContinuation) {
    this.y2d_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  addProduct$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  addProduct$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  addProduct$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.a2e_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.b2e_1 = this.a2e_1.ak();
            var tmp_3 = this;
            tmp_3.c2e_1 = serializer(this.b2e_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CreateCartItemMutation), arrayOf([]), false))]), false));
            var tmp_4 = this.c2e_1;
            tmp_0.d2e_1 = this.a2e_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.z2d_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.d2e_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.e2e_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(CreateCartItemMutation).dd()) : tmp2_elvis_lhs;
            suspendResult = this.y2d_1.w1q(new DecodeResult(this.d2e_1.b2c_1, this.e2e_1), this);
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
  addProduct$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new addProduct$o$collect$slambda(this.y2d_1, completion);
    i.z2d_1 = value;
    return i;
  };
  addProduct$o$collect$slambda.$metadata$ = classMeta('addProduct$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addProduct$o$collect$slambda_0($collector, resultContinuation) {
    var i = new addProduct$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2e_1 = _this__u8e3s4;
    this.o2e_1 = collector;
  }
  $collectCOROUTINE$2.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = addProduct$o$collect$slambda_0(this.o2e_1, null);
            suspendResult = this.n2e_1.p2e_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  $collectCOROUTINE$2.$metadata$ = classMeta('$collectCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_1($tmp0_decode) {
    this.p2e_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_1.prototype.q2e = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$2(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_1.prototype.j1q = function (collector, $cont) {
    return this.q2e(collector, $cont);
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Flow]);
  function addProduct$o$collect$slambda_1($collector, resultContinuation) {
    this.z2e_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  addProduct$o$collect$slambda_1.prototype.b2f = function (value, $cont) {
    var tmp = this.c2f(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  addProduct$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.b2f(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  addProduct$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.a2f_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.b2a_1.e2a_1.y29_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.a2f_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.z2e_1.w1q(tmp_1, this);
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
  addProduct$o$collect$slambda_1.prototype.c2f = function (value, completion) {
    var i = new addProduct$o$collect$slambda_1(this.z2e_1, completion);
    i.a2f_1 = value;
    return i;
  };
  addProduct$o$collect$slambda_1.$metadata$ = classMeta('addProduct$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addProduct$o$collect$slambda_2($collector, resultContinuation) {
    var i = new addProduct$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.b2f(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2f_1 = _this__u8e3s4;
    this.m2f_1 = collector;
  }
  $collectCOROUTINE$3.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = addProduct$o$collect$slambda_2(this.m2f_1, null);
            suspendResult = this.l2f_1.n2f_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  $collectCOROUTINE$3.$metadata$ = classMeta('$collectCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_2($tmp1_tryMap) {
    this.n2f_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_2.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$3(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_2.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [Flow]);
  function updateItem$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory_1(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function updateItem$lambda$lambda() {
    return function ($this$field) {
      var tmp = cartItem$factory_0();
      $this$field.i2b(tmp, [], updateItem$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function updateItem$lambda($itemId, $qty) {
    return function ($this$mutation) {
      var tmp = updateCartItem$factory();
      var tmp_0 = [of('input', argsOf([of('id', $itemId), of('fields', argsOf([of('qty', $qty)]))]))];
      $this$mutation.i2b(tmp, tmp_0, updateItem$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.o2f_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.w1q = function (value, $cont) {
    return this.o2f_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function updateItem$o$collect$slambda($collector, resultContinuation) {
    this.x2f_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  updateItem$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  updateItem$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  updateItem$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.z2f_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.a2g_1 = this.z2f_1.ak();
            var tmp_3 = this;
            tmp_3.b2g_1 = serializer(this.a2g_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UpdateCartItemMutation), arrayOf([]), false))]), false));
            var tmp_4 = this.b2g_1;
            tmp_0.c2g_1 = this.z2f_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.y2f_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.c2g_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.d2g_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(UpdateCartItemMutation).dd()) : tmp2_elvis_lhs;
            suspendResult = this.x2f_1.w1q(new DecodeResult(this.c2g_1.b2c_1, this.d2g_1), this);
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
  updateItem$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new updateItem$o$collect$slambda(this.x2f_1, completion);
    i.y2f_1 = value;
    return i;
  };
  updateItem$o$collect$slambda.$metadata$ = classMeta('updateItem$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function updateItem$o$collect$slambda_0($collector, resultContinuation) {
    var i = new updateItem$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2g_1 = _this__u8e3s4;
    this.n2g_1 = collector;
  }
  $collectCOROUTINE$4.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = updateItem$o$collect$slambda_0(this.n2g_1, null);
            suspendResult = this.m2g_1.o2g_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  $collectCOROUTINE$4.$metadata$ = classMeta('$collectCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_3($tmp0_decode) {
    this.o2g_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_3.prototype.p2g = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$4(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_3.prototype.j1q = function (collector, $cont) {
    return this.p2g(collector, $cont);
  };
  _no_name_provided__qut3iv_3.$metadata$ = classMeta(undefined, [Flow]);
  function updateItem$o$collect$slambda_1($collector, resultContinuation) {
    this.y2g_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  updateItem$o$collect$slambda_1.prototype.a2h = function (value, $cont) {
    var tmp = this.b2h(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  updateItem$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.a2h(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  updateItem$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.z2g_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.h2a_1.e2a_1.y29_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.z2g_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.y2g_1.w1q(tmp_1, this);
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
  updateItem$o$collect$slambda_1.prototype.b2h = function (value, completion) {
    var i = new updateItem$o$collect$slambda_1(this.y2g_1, completion);
    i.z2g_1 = value;
    return i;
  };
  updateItem$o$collect$slambda_1.$metadata$ = classMeta('updateItem$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function updateItem$o$collect$slambda_2($collector, resultContinuation) {
    var i = new updateItem$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.a2h(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2h_1 = _this__u8e3s4;
    this.l2h_1 = collector;
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
            var tmp_0 = updateItem$o$collect$slambda_2(this.l2h_1, null);
            suspendResult = this.k2h_1.m2h_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function _no_name_provided__qut3iv_4($tmp1_tryMap) {
    this.m2h_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_4.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_4.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_4.$metadata$ = classMeta(undefined, [Flow]);
  function removeItem$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory_2(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function removeItem$lambda$lambda() {
    return function ($this$field) {
      var tmp = cartItem$factory_1();
      $this$field.i2b(tmp, [], removeItem$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function removeItem$lambda($itemId) {
    return function ($this$mutation) {
      var tmp = updateCartItem$factory_0();
      var tmp_0 = [of('input', argsOf([of('id', $itemId), of('fields', argsOf([of('isRemove', true)]))]))];
      $this$mutation.i2b(tmp, tmp_0, removeItem$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.n2h_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.w1q = function (value, $cont) {
    return this.n2h_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function removeItem$o$collect$slambda($collector, resultContinuation) {
    this.w2h_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  removeItem$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  removeItem$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  removeItem$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.y2h_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.z2h_1 = this.y2h_1.ak();
            var tmp_3 = this;
            tmp_3.a2i_1 = serializer(this.z2h_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UpdateCartItemMutation), arrayOf([]), false))]), false));
            var tmp_4 = this.a2i_1;
            tmp_0.b2i_1 = this.y2h_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.x2h_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.b2i_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.c2i_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(UpdateCartItemMutation).dd()) : tmp2_elvis_lhs;
            suspendResult = this.w2h_1.w1q(new DecodeResult(this.b2i_1.b2c_1, this.c2i_1), this);
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
  removeItem$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new removeItem$o$collect$slambda(this.w2h_1, completion);
    i.x2h_1 = value;
    return i;
  };
  removeItem$o$collect$slambda.$metadata$ = classMeta('removeItem$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function removeItem$o$collect$slambda_0($collector, resultContinuation) {
    var i = new removeItem$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2i_1 = _this__u8e3s4;
    this.m2i_1 = collector;
  }
  $collectCOROUTINE$6.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = removeItem$o$collect$slambda_0(this.m2i_1, null);
            suspendResult = this.l2i_1.n2i_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  $collectCOROUTINE$6.$metadata$ = classMeta('$collectCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_5($tmp0_decode) {
    this.n2i_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_5.prototype.p2g = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_5.prototype.j1q = function (collector, $cont) {
    return this.p2g(collector, $cont);
  };
  _no_name_provided__qut3iv_5.$metadata$ = classMeta(undefined, [Flow]);
  function removeItem$o$collect$slambda_1($collector, resultContinuation) {
    this.w2i_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  removeItem$o$collect$slambda_1.prototype.a2h = function (value, $cont) {
    var tmp = this.b2h(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  removeItem$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.a2h(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  removeItem$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.x2i_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.h2a_1.e2a_1.y29_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.x2i_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.w2i_1.w1q(tmp_1, this);
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
  removeItem$o$collect$slambda_1.prototype.b2h = function (value, completion) {
    var i = new removeItem$o$collect$slambda_1(this.w2i_1, completion);
    i.x2i_1 = value;
    return i;
  };
  removeItem$o$collect$slambda_1.$metadata$ = classMeta('removeItem$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function removeItem$o$collect$slambda_2($collector, resultContinuation) {
    var i = new removeItem$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.a2h(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2j_1 = _this__u8e3s4;
    this.h2j_1 = collector;
  }
  $collectCOROUTINE$7.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = removeItem$o$collect$slambda_2(this.h2j_1, null);
            suspendResult = this.g2j_1.i2j_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  $collectCOROUTINE$7.$metadata$ = classMeta('$collectCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_6($tmp1_tryMap) {
    this.i2j_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_6.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_6.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_6.$metadata$ = classMeta(undefined, [Flow]);
  function cart$lambda($id) {
    return function ($this$query) {
      $this$query.h2b(cart$factory_3(), get_cartField(), [of('id', $id)]);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.j2j_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.prototype.w1q = function (value, $cont) {
    return this.j2j_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function cart$o$collect$slambda($collector, resultContinuation) {
    this.s2j_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  cart$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  cart$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  cart$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.u2j_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.v2j_1 = this.u2j_1.ak();
            var tmp_3 = this;
            tmp_3.w2j_1 = serializer(this.v2j_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CartQuery), arrayOf([]), false))]), false));
            var tmp_4 = this.w2j_1;
            tmp_0.x2j_1 = this.u2j_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.t2j_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.x2j_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.y2j_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(CartQuery).dd()) : tmp2_elvis_lhs;
            suspendResult = this.s2j_1.w1q(new DecodeResult(this.x2j_1.b2c_1, this.y2j_1), this);
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
  cart$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new cart$o$collect$slambda(this.s2j_1, completion);
    i.t2j_1 = value;
    return i;
  };
  cart$o$collect$slambda.$metadata$ = classMeta('cart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function cart$o$collect$slambda_0($collector, resultContinuation) {
    var i = new cart$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2k_1 = _this__u8e3s4;
    this.i2k_1 = collector;
  }
  $collectCOROUTINE$8.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = cart$o$collect$slambda_0(this.i2k_1, null);
            suspendResult = this.h2k_1.j2k_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  $collectCOROUTINE$8.$metadata$ = classMeta('$collectCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_7($tmp0_decode) {
    this.j2k_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_7.prototype.k2k = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$8(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_7.prototype.j1q = function (collector, $cont) {
    return this.k2k(collector, $cont);
  };
  _no_name_provided__qut3iv_7.$metadata$ = classMeta(undefined, [Flow]);
  function cart$o$collect$slambda_1($collector, resultContinuation) {
    this.t2k_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  cart$o$collect$slambda_1.prototype.v2k = function (value, $cont) {
    var tmp = this.w2k(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  cart$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.v2k(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  cart$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.u2k_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.y29_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.u2k_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.t2k_1.w1q(tmp_1, this);
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
  cart$o$collect$slambda_1.prototype.w2k = function (value, completion) {
    var i = new cart$o$collect$slambda_1(this.t2k_1, completion);
    i.u2k_1 = value;
    return i;
  };
  cart$o$collect$slambda_1.$metadata$ = classMeta('cart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function cart$o$collect$slambda_2($collector, resultContinuation) {
    var i = new cart$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.v2k(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2l_1 = _this__u8e3s4;
    this.g2l_1 = collector;
  }
  $collectCOROUTINE$9.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = cart$o$collect$slambda_2(this.g2l_1, null);
            suspendResult = this.f2l_1.h2l_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  $collectCOROUTINE$9.$metadata$ = classMeta('$collectCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_8($tmp1_tryMap) {
    this.h2l_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_8.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$9(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_8.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_8.$metadata$ = classMeta(undefined, [Flow]);
  function loadCustomerCart$lambda$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory_4(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function loadCustomerCart$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = user$factory();
      $this$field.i2b(tmp, [], loadCustomerCart$lambda$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function loadCustomerCart$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = node$factory();
      $this$field.i2b(tmp, [], loadCustomerCart$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function loadCustomerCart$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory();
      $this$field.i2l(tmp, [], loadCustomerCart$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function loadCustomerCart$lambda($token) {
    return function ($this$query) {
      var tmp = sessions$factory();
      var tmp_0 = [of('where', argsOf([of('sessionToken', argsOf([of('equalTo', $token)]))]))];
      $this$query.i2b(tmp, tmp_0, loadCustomerCart$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.j2l_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_4.prototype.w1q = function (value, $cont) {
    return this.j2l_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_4.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function loadCustomerCart$o$collect$slambda($collector, resultContinuation) {
    this.s2l_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  loadCustomerCart$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  loadCustomerCart$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  loadCustomerCart$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.u2l_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.v2l_1 = this.u2l_1.ak();
            var tmp_3 = this;
            tmp_3.w2l_1 = serializer(this.v2l_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(SessionsQuery), arrayOf([]), false))]), false));
            var tmp_4 = this.w2l_1;
            tmp_0.x2l_1 = this.u2l_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.t2l_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.x2l_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.y2l_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(SessionsQuery).dd()) : tmp2_elvis_lhs;
            suspendResult = this.s2l_1.w1q(new DecodeResult(this.x2l_1.b2c_1, this.y2l_1), this);
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
  loadCustomerCart$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new loadCustomerCart$o$collect$slambda(this.s2l_1, completion);
    i.t2l_1 = value;
    return i;
  };
  loadCustomerCart$o$collect$slambda.$metadata$ = classMeta('loadCustomerCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function loadCustomerCart$o$collect$slambda_0($collector, resultContinuation) {
    var i = new loadCustomerCart$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2m_1 = _this__u8e3s4;
    this.i2m_1 = collector;
  }
  $collectCOROUTINE$12.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = loadCustomerCart$o$collect$slambda_0(this.i2m_1, null);
            suspendResult = this.h2m_1.j2m_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  $collectCOROUTINE$12.$metadata$ = classMeta('$collectCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_9($tmp0_decode) {
    this.j2m_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_9.prototype.k2m = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$12(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_9.prototype.j1q = function (collector, $cont) {
    return this.k2m(collector, $cont);
  };
  _no_name_provided__qut3iv_9.$metadata$ = classMeta(undefined, [Flow]);
  function loadCustomerCart$o$collect$slambda_1($collector, resultContinuation) {
    this.t2m_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  loadCustomerCart$o$collect$slambda_1.prototype.v2m = function (value, $cont) {
    var tmp = this.w2m(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  loadCustomerCart$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.v2m(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  loadCustomerCart$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.u2m_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_safe_receiver_0 = tmp0_safe_receiver.q2a_1;
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x2m_1;
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y2m_1;
              tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.n2a_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.u2m_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.t2m_1.w1q(tmp_1, this);
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
  loadCustomerCart$o$collect$slambda_1.prototype.w2m = function (value, completion) {
    var i = new loadCustomerCart$o$collect$slambda_1(this.t2m_1, completion);
    i.u2m_1 = value;
    return i;
  };
  loadCustomerCart$o$collect$slambda_1.$metadata$ = classMeta('loadCustomerCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function loadCustomerCart$o$collect$slambda_2($collector, resultContinuation) {
    var i = new loadCustomerCart$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.v2m(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2n_1 = _this__u8e3s4;
    this.i2n_1 = collector;
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
            var tmp_0 = loadCustomerCart$o$collect$slambda_2(this.i2n_1, null);
            suspendResult = this.h2n_1.j2n_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  function _no_name_provided__qut3iv_10($tmp1_tryMap) {
    this.j2n_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_10.prototype.k2n = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$13(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_10.prototype.j1q = function (collector, $cont) {
    return this.k2n(collector, $cont);
  };
  _no_name_provided__qut3iv_10.$metadata$ = classMeta(undefined, [Flow]);
  function loadCustomerCart$o$collect$slambda_3($collector, resultContinuation) {
    this.t2n_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  loadCustomerCart$o$collect$slambda_3.prototype.v2n = function (value, $cont) {
    var tmp = this.w2n(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  loadCustomerCart$o$collect$slambda_3.prototype.ki = function (p1, $cont) {
    return this.v2n(p1 instanceof CartUser ? p1 : THROW_CCE(), $cont);
  };
  loadCustomerCart$o$collect$slambda_3.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            suspendResult = this.t2n_1.w1q(this.u2n_1.k2a_1, this);
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
  loadCustomerCart$o$collect$slambda_3.prototype.w2n = function (value, completion) {
    var i = new loadCustomerCart$o$collect$slambda_3(this.t2n_1, completion);
    i.u2n_1 = value;
    return i;
  };
  loadCustomerCart$o$collect$slambda_3.$metadata$ = classMeta('loadCustomerCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function loadCustomerCart$o$collect$slambda_4($collector, resultContinuation) {
    var i = new loadCustomerCart$o$collect$slambda_3($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.v2n(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2o_1 = _this__u8e3s4;
    this.g2o_1 = collector;
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
            var tmp_0 = loadCustomerCart$o$collect$slambda_4(this.g2o_1, null);
            suspendResult = this.f2o_1.h2o_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  function _no_name_provided__qut3iv_11($tmp2_map) {
    this.h2o_1 = $tmp2_map;
  }
  _no_name_provided__qut3iv_11.prototype.i2o = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$14(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_11.prototype.j1q = function (collector, $cont) {
    return this.i2o(collector, $cont);
  };
  _no_name_provided__qut3iv_11.$metadata$ = classMeta(undefined, [Flow]);
  function setCustomerCart$slambda($cartId, resultContinuation) {
    this.r2o_1 = $cartId;
    CoroutineImpl.call(this, resultContinuation);
  }
  setCustomerCart$slambda.prototype.t2o = function (it, $cont) {
    var tmp = this.a2c(it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  setCustomerCart$slambda.prototype.ki = function (p1, $cont) {
    return this.t2o((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  setCustomerCart$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        if (tmp === 0) {
          this.ai_1 = 1;
          return setUserCart(this.s2o_1, this.r2o_1);
        } else if (tmp === 1) {
          throw this.ci_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  setCustomerCart$slambda.prototype.a2c = function (it, completion) {
    var i = new setCustomerCart$slambda(this.r2o_1, completion);
    i.s2o_1 = it;
    return i;
  };
  setCustomerCart$slambda.$metadata$ = classMeta('setCustomerCart$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function setCustomerCart$slambda_0($cartId, resultContinuation) {
    var i = new setCustomerCart$slambda($cartId, resultContinuation);
    var l = function (it, $cont) {
      return i.t2o(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function setUserCart$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(cart$factory_5(), get_cartField(), []);
      return Unit_getInstance();
    };
  }
  function setUserCart$lambda$lambda() {
    return function ($this$field) {
      var tmp = user$factory_0();
      $this$field.i2b(tmp, [], setUserCart$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function setUserCart$lambda($userId, $cartId) {
    return function ($this$mutation) {
      var tmp = updateUser$factory();
      var tmp_0 = [of('input', argsOf([of('id', $userId), of('fields', argsOf([of('cart', argsOf([of('link', $cartId)]))]))]))];
      $this$mutation.i2b(tmp, tmp_0, setUserCart$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.u2o_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_5.prototype.w1q = function (value, $cont) {
    return this.u2o_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_5.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function setUserCart$o$collect$slambda($collector, resultContinuation) {
    this.d2p_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  setUserCart$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  setUserCart$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  setUserCart$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.f2p_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.g2p_1 = this.f2p_1.ak();
            var tmp_3 = this;
            tmp_3.h2p_1 = serializer(this.g2p_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UpdateUserMutation), arrayOf([]), false))]), false));
            var tmp_4 = this.h2p_1;
            tmp_0.i2p_1 = this.f2p_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.e2p_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.i2p_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.j2p_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(UpdateUserMutation).dd()) : tmp2_elvis_lhs;
            suspendResult = this.d2p_1.w1q(new DecodeResult(this.i2p_1.b2c_1, this.j2p_1), this);
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
  setUserCart$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new setUserCart$o$collect$slambda(this.d2p_1, completion);
    i.e2p_1 = value;
    return i;
  };
  setUserCart$o$collect$slambda.$metadata$ = classMeta('setUserCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function setUserCart$o$collect$slambda_0($collector, resultContinuation) {
    var i = new setUserCart$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$22(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2p_1 = _this__u8e3s4;
    this.t2p_1 = collector;
  }
  $collectCOROUTINE$22.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = setUserCart$o$collect$slambda_0(this.t2p_1, null);
            suspendResult = this.s2p_1.u2p_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_0), this);
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
  $collectCOROUTINE$22.$metadata$ = classMeta('$collectCOROUTINE$22', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_12($tmp0_decode) {
    this.u2p_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_12.prototype.v2p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$22(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_12.prototype.j1q = function (collector, $cont) {
    return this.v2p(collector, $cont);
  };
  _no_name_provided__qut3iv_12.$metadata$ = classMeta(undefined, [Flow]);
  function setUserCart$o$collect$slambda_1($collector, resultContinuation) {
    this.e2q_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  setUserCart$o$collect$slambda_1.prototype.g2q = function (value, $cont) {
    var tmp = this.h2q(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  setUserCart$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.g2q(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  setUserCart$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.f2q_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = tmp0_safe_receiver.t2a_1.n2a_1.k2a_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.f2q_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.e2q_1.w1q(tmp_1, this);
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
  setUserCart$o$collect$slambda_1.prototype.h2q = function (value, completion) {
    var i = new setUserCart$o$collect$slambda_1(this.e2q_1, completion);
    i.f2q_1 = value;
    return i;
  };
  setUserCart$o$collect$slambda_1.$metadata$ = classMeta('setUserCart$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function setUserCart$o$collect$slambda_2($collector, resultContinuation) {
    var i = new setUserCart$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.g2q(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$23(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2q_1 = _this__u8e3s4;
    this.r2q_1 = collector;
  }
  $collectCOROUTINE$23.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = setUserCart$o$collect$slambda_2(this.r2q_1, null);
            suspendResult = this.q2q_1.s2q_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_0), this);
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
  $collectCOROUTINE$23.$metadata$ = classMeta('$collectCOROUTINE$23', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_13($tmp1_tryMap) {
    this.s2q_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_13.prototype.o2d = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$23(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_13.prototype.j1q = function (collector, $cont) {
    return this.o2d(collector, $cont);
  };
  _no_name_provided__qut3iv_13.$metadata$ = classMeta(undefined, [Flow]);
  function getUserId$lambda$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory());
      return Unit_getInstance();
    };
  }
  function getUserId$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = user$factory_1();
      $this$field.i2b(tmp, [], getUserId$lambda$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function getUserId$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = node$factory_0();
      $this$field.i2b(tmp, [], getUserId$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function getUserId$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_0();
      $this$field.i2l(tmp, [], getUserId$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function getUserId$lambda($token) {
    return function ($this$query) {
      var tmp = sessions$factory_0();
      var tmp_0 = [of('where', argsOf([of('sessionToken', argsOf([of('equalTo', $token)]))]))];
      $this$query.i2b(tmp, tmp_0, getUserId$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_6(function_0) {
    this.u2q_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_6.prototype.w1q = function (value, $cont) {
    return this.u2q_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_6.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function getUserId$o$collect$slambda($collector, resultContinuation) {
    this.d2r_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  getUserId$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  getUserId$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  getUserId$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.f2r_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.g2r_1 = this.f2r_1.ak();
            var tmp_3 = this;
            tmp_3.h2r_1 = serializer(this.g2r_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(SessionsQuery2), arrayOf([]), false))]), false));
            var tmp_4 = this.h2r_1;
            tmp_0.i2r_1 = this.f2r_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.e2r_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.i2r_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.j2r_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(SessionsQuery2).dd()) : tmp2_elvis_lhs;
            suspendResult = this.d2r_1.w1q(new DecodeResult(this.i2r_1.b2c_1, this.j2r_1), this);
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
  getUserId$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new getUserId$o$collect$slambda(this.d2r_1, completion);
    i.e2r_1 = value;
    return i;
  };
  getUserId$o$collect$slambda.$metadata$ = classMeta('getUserId$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function getUserId$o$collect$slambda_0($collector, resultContinuation) {
    var i = new getUserId$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$24(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2r_1 = _this__u8e3s4;
    this.t2r_1 = collector;
  }
  $collectCOROUTINE$24.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = getUserId$o$collect$slambda_0(this.t2r_1, null);
            suspendResult = this.s2r_1.u2r_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_0), this);
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
  $collectCOROUTINE$24.$metadata$ = classMeta('$collectCOROUTINE$24', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_14($tmp0_decode) {
    this.u2r_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_14.prototype.v2r = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$24(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_14.prototype.j1q = function (collector, $cont) {
    return this.v2r(collector, $cont);
  };
  _no_name_provided__qut3iv_14.$metadata$ = classMeta(undefined, [Flow]);
  function getUserId$o$collect$slambda_1($collector, resultContinuation) {
    this.e2s_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  getUserId$o$collect$slambda_1.prototype.g2s = function (value, $cont) {
    var tmp = this.h2s(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  getUserId$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.g2s(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  getUserId$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.f2s_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_safe_receiver_0 = tmp0_safe_receiver.w2a_1;
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x2m_1;
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y2m_1;
              var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c2b_1;
              tmp_0 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z2a_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.f2s_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.e2s_1.w1q(tmp_1, this);
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
  getUserId$o$collect$slambda_1.prototype.h2s = function (value, completion) {
    var i = new getUserId$o$collect$slambda_1(this.e2s_1, completion);
    i.f2s_1 = value;
    return i;
  };
  getUserId$o$collect$slambda_1.$metadata$ = classMeta('getUserId$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function getUserId$o$collect$slambda_2($collector, resultContinuation) {
    var i = new getUserId$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.g2s(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$25(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2s_1 = _this__u8e3s4;
    this.r2s_1 = collector;
  }
  $collectCOROUTINE$25.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = getUserId$o$collect$slambda_2(this.r2s_1, null);
            suspendResult = this.q2s_1.s2s_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_0), this);
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
  $collectCOROUTINE$25.$metadata$ = classMeta('$collectCOROUTINE$25', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_15($tmp1_tryMap) {
    this.s2s_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_15.prototype.t2s = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$25(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_15.prototype.j1q = function (collector, $cont) {
    return this.t2s(collector, $cont);
  };
  _no_name_provided__qut3iv_15.$metadata$ = classMeta(undefined, [Flow]);
  function createCart$factory() {
    return getPropertyCallableRef('createCart', 1, KProperty1, function (receiver) {
      return receiver.v29_1;
    }, null);
  }
  function cart$factory() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.y29_1;
    }, null);
  }
  function createCartItem$factory() {
    return getPropertyCallableRef('createCartItem', 1, KProperty1, function (receiver) {
      return receiver.b2a_1;
    }, null);
  }
  function cartItem$factory() {
    return getPropertyCallableRef('cartItem', 1, KProperty1, function (receiver) {
      return receiver.e2a_1;
    }, null);
  }
  function cart$factory_0() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.y29_1;
    }, null);
  }
  function updateCartItem$factory() {
    return getPropertyCallableRef('updateCartItem', 1, KProperty1, function (receiver) {
      return receiver.h2a_1;
    }, null);
  }
  function cartItem$factory_0() {
    return getPropertyCallableRef('cartItem', 1, KProperty1, function (receiver) {
      return receiver.e2a_1;
    }, null);
  }
  function cart$factory_1() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.y29_1;
    }, null);
  }
  function updateCartItem$factory_0() {
    return getPropertyCallableRef('updateCartItem', 1, KProperty1, function (receiver) {
      return receiver.h2a_1;
    }, null);
  }
  function cartItem$factory_1() {
    return getPropertyCallableRef('cartItem', 1, KProperty1, function (receiver) {
      return receiver.e2a_1;
    }, null);
  }
  function cart$factory_2() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.y29_1;
    }, null);
  }
  function cart$factory_3() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.y29_1;
    }, null);
  }
  function sessions$factory() {
    return getPropertyCallableRef('sessions', 1, KProperty1, function (receiver) {
      return receiver.q2a_1;
    }, null);
  }
  function edges$factory() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function user$factory() {
    return getPropertyCallableRef('user', 1, KProperty1, function (receiver) {
      return receiver.n2a_1;
    }, null);
  }
  function cart$factory_4() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.k2a_1;
    }, null);
  }
  function updateUser$factory() {
    return getPropertyCallableRef('updateUser', 1, KProperty1, function (receiver) {
      return receiver.t2a_1;
    }, null);
  }
  function user$factory_0() {
    return getPropertyCallableRef('user', 1, KProperty1, function (receiver) {
      return receiver.n2a_1;
    }, null);
  }
  function cart$factory_5() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.k2a_1;
    }, null);
  }
  function sessions$factory_0() {
    return getPropertyCallableRef('sessions', 1, KProperty1, function (receiver) {
      return receiver.w2a_1;
    }, null);
  }
  function edges$factory_0() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_0() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function user$factory_1() {
    return getPropertyCallableRef('user', 1, KProperty1, function (receiver) {
      return receiver.c2b_1;
    }, null);
  }
  function objectId$factory() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.z2a_1;
    }, null);
  }
  function get_productsField() {
    init_properties_Catalog_kt_2t829x();
    return productsField;
  }
  var productsField;
  function categories() {
    init_properties_Catalog_kt_2t829x();
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(query(categories$lambda()));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_16(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_17(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function products(categoryIds) {
    init_properties_Catalog_kt_2t829x();
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(query(products$lambda(categoryIds)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_18(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_19(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.catalog.CategoriesQuery', this, 1);
    tmp0_serialDesc.ys('categories', false);
    this.u2s_1 = tmp0_serialDesc;
  }
  $serializer_11.prototype.gj = function () {
    return this.u2s_1;
  };
  $serializer_11.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_init_$Create$_1($serializer_getInstance_19())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_11.prototype.ij = function (decoder) {
    var tmp0_desc = this.u2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_19()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_19()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return CategoriesQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_11.prototype.v2s = function (encoder, value) {
    var tmp0_desc = this.u2s_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_19()), value.w2s_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_11.prototype.hj = function (encoder, value) {
    return this.v2s(encoder, value instanceof CategoriesQuery ? value : THROW_CCE());
  };
  $serializer_11.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function CategoriesQuery_init_$Init$(seen1, categories, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_11().u2s_1);
    $this.w2s_1 = categories;
    return $this;
  }
  function CategoriesQuery_init_$Create$(seen1, categories, serializationConstructorMarker) {
    return CategoriesQuery_init_$Init$(seen1, categories, serializationConstructorMarker, Object.create(CategoriesQuery.prototype));
  }
  function CategoriesQuery(categories) {
    Companion_getInstance_6();
    this.w2s_1 = categories;
  }
  CategoriesQuery.prototype.toString = function () {
    return 'CategoriesQuery(categories=' + this.w2s_1 + ')';
  };
  CategoriesQuery.prototype.hashCode = function () {
    return this.w2s_1.hashCode();
  };
  CategoriesQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CategoriesQuery))
      return false;
    var tmp0_other_with_cast = other instanceof CategoriesQuery ? other : THROW_CCE();
    if (!this.w2s_1.equals(tmp0_other_with_cast.w2s_1))
      return false;
    return true;
  };
  CategoriesQuery.$metadata$ = classMeta('CategoriesQuery', undefined, undefined, {0: $serializer_getInstance_11});
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.catalog.ProductsQuery', this, 1);
    tmp0_serialDesc.ys('products', false);
    this.x2s_1 = tmp0_serialDesc;
  }
  $serializer_12.prototype.gj = function () {
    return this.x2s_1;
  };
  $serializer_12.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_init_$Create$_1($serializer_getInstance_24())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_12.prototype.ij = function (decoder) {
    var tmp0_desc = this.x2s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_24()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_24()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return ProductsQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_12.prototype.y2s = function (encoder, value) {
    var tmp0_desc = this.x2s_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_24()), value.z2s_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_12.prototype.hj = function (encoder, value) {
    return this.y2s(encoder, value instanceof ProductsQuery ? value : THROW_CCE());
  };
  $serializer_12.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function ProductsQuery_init_$Init$(seen1, products, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_12().x2s_1);
    $this.z2s_1 = products;
    return $this;
  }
  function ProductsQuery_init_$Create$(seen1, products, serializationConstructorMarker) {
    return ProductsQuery_init_$Init$(seen1, products, serializationConstructorMarker, Object.create(ProductsQuery.prototype));
  }
  function ProductsQuery(products) {
    Companion_getInstance_7();
    this.z2s_1 = products;
  }
  ProductsQuery.prototype.toString = function () {
    return 'ProductsQuery(products=' + this.z2s_1 + ')';
  };
  ProductsQuery.prototype.hashCode = function () {
    return this.z2s_1.hashCode();
  };
  ProductsQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductsQuery))
      return false;
    var tmp0_other_with_cast = other instanceof ProductsQuery ? other : THROW_CCE();
    if (!this.z2s_1.equals(tmp0_other_with_cast.z2s_1))
      return false;
    return true;
  };
  ProductsQuery.$metadata$ = classMeta('ProductsQuery', undefined, undefined, {0: $serializer_getInstance_12});
  function productsField$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(node$factory_1(), get_productField(), []);
      return Unit_getInstance();
    };
  }
  function productsField$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_1();
      $this$field.i2l(tmp, [], productsField$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function categories$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(node$factory_2(), get_categoryField(), []);
      return Unit_getInstance();
    };
  }
  function categories$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_2();
      $this$field.i2l(tmp, [], categories$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function categories$lambda() {
    return function ($this$query) {
      var tmp = categories$factory();
      $this$query.i2b(tmp, [], categories$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_7(function_0) {
    this.a2t_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_7.prototype.w1q = function (value, $cont) {
    return this.a2t_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_7.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function categories$o$collect$slambda($collector, resultContinuation) {
    this.j2t_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  categories$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  categories$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  categories$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.l2t_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.m2t_1 = this.l2t_1.ak();
            var tmp_3 = this;
            tmp_3.n2t_1 = serializer(this.m2t_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CategoriesQuery), arrayOf([]), false))]), false));
            var tmp_4 = this.n2t_1;
            tmp_0.o2t_1 = this.l2t_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.k2t_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.o2t_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.p2t_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(CategoriesQuery).dd()) : tmp2_elvis_lhs;
            suspendResult = this.j2t_1.w1q(new DecodeResult(this.o2t_1.b2c_1, this.p2t_1), this);
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
  categories$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new categories$o$collect$slambda(this.j2t_1, completion);
    i.k2t_1 = value;
    return i;
  };
  categories$o$collect$slambda.$metadata$ = classMeta('categories$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function categories$o$collect$slambda_0($collector, resultContinuation) {
    var i = new categories$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$26(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y2t_1 = _this__u8e3s4;
    this.z2t_1 = collector;
  }
  $collectCOROUTINE$26.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = categories$o$collect$slambda_0(this.z2t_1, null);
            suspendResult = this.y2t_1.a2u_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_0), this);
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
  $collectCOROUTINE$26.$metadata$ = classMeta('$collectCOROUTINE$26', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_16($tmp0_decode) {
    this.a2u_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_16.prototype.b2u = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$26(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_16.prototype.j1q = function (collector, $cont) {
    return this.b2u(collector, $cont);
  };
  _no_name_provided__qut3iv_16.$metadata$ = classMeta(undefined, [Flow]);
  function categories$o$collect$slambda_1($collector, resultContinuation) {
    this.k2u_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  categories$o$collect$slambda_1.prototype.m2u = function (value, $cont) {
    var tmp = this.n2u(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  categories$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.m2u(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  categories$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.l2u_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_map = tmp0_safe_receiver.w2s_1.x2m_1;
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
              var tmp0_iterator = tmp0_map.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                tmp0_mapTo.b(item.y2m_1);
              }
              tmp_0 = tmp0_mapTo;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.l2u_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.k2u_1.w1q(tmp_1, this);
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
  categories$o$collect$slambda_1.prototype.n2u = function (value, completion) {
    var i = new categories$o$collect$slambda_1(this.k2u_1, completion);
    i.l2u_1 = value;
    return i;
  };
  categories$o$collect$slambda_1.$metadata$ = classMeta('categories$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function categories$o$collect$slambda_2($collector, resultContinuation) {
    var i = new categories$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.m2u(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$27(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2u_1 = _this__u8e3s4;
    this.x2u_1 = collector;
  }
  $collectCOROUTINE$27.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = categories$o$collect$slambda_2(this.x2u_1, null);
            suspendResult = this.w2u_1.y2u_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_0), this);
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
  $collectCOROUTINE$27.$metadata$ = classMeta('$collectCOROUTINE$27', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_17($tmp1_tryMap) {
    this.y2u_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_17.prototype.z2u = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$27(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_17.prototype.j1q = function (collector, $cont) {
    return this.z2u(collector, $cont);
  };
  _no_name_provided__qut3iv_17.$metadata$ = classMeta(undefined, [Flow]);
  function products$lambda($categoryIds) {
    return function ($this$query) {
      var tmp;
      if (!($categoryIds == null)) {
        tmp = $this$query.h2b(products$factory(), get_productsField(), [of('where', argsOf([of('categories', argsOf([of('have', argsOf([of('objectId', argsOf([of('in', $categoryIds)]))]))]))]))]);
      } else {
        tmp = $this$query.h2b(products$factory_0(), get_productsField(), []);
      }
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_8(function_0) {
    this.a2v_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_8.prototype.w1q = function (value, $cont) {
    return this.a2v_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_8.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function products$o$collect$slambda($collector, resultContinuation) {
    this.j2v_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  products$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  products$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  products$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.l2v_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.m2v_1 = this.l2v_1.ak();
            var tmp_3 = this;
            tmp_3.n2v_1 = serializer(this.m2v_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProductsQuery), arrayOf([]), false))]), false));
            var tmp_4 = this.n2v_1;
            tmp_0.o2v_1 = this.l2v_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.k2v_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.o2v_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.p2v_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(ProductsQuery).dd()) : tmp2_elvis_lhs;
            suspendResult = this.j2v_1.w1q(new DecodeResult(this.o2v_1.b2c_1, this.p2v_1), this);
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
  products$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new products$o$collect$slambda(this.j2v_1, completion);
    i.k2v_1 = value;
    return i;
  };
  products$o$collect$slambda.$metadata$ = classMeta('products$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function products$o$collect$slambda_0($collector, resultContinuation) {
    var i = new products$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$28(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y2v_1 = _this__u8e3s4;
    this.z2v_1 = collector;
  }
  $collectCOROUTINE$28.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = products$o$collect$slambda_0(this.z2v_1, null);
            suspendResult = this.y2v_1.a2w_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_0), this);
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
  $collectCOROUTINE$28.$metadata$ = classMeta('$collectCOROUTINE$28', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_18($tmp0_decode) {
    this.a2w_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_18.prototype.b2w = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$28(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_18.prototype.j1q = function (collector, $cont) {
    return this.b2w(collector, $cont);
  };
  _no_name_provided__qut3iv_18.$metadata$ = classMeta(undefined, [Flow]);
  function products$o$collect$slambda_1($collector, resultContinuation) {
    this.k2w_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  products$o$collect$slambda_1.prototype.m2w = function (value, $cont) {
    var tmp = this.n2w(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  products$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.m2w(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  products$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.l2w_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_map = tmp0_safe_receiver.z2s_1.x2m_1;
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
              var tmp0_iterator = tmp0_map.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                tmp0_mapTo.b(item.y2m_1);
              }
              tmp_0 = tmp0_mapTo;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.l2w_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.k2w_1.w1q(tmp_1, this);
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
  products$o$collect$slambda_1.prototype.n2w = function (value, completion) {
    var i = new products$o$collect$slambda_1(this.k2w_1, completion);
    i.l2w_1 = value;
    return i;
  };
  products$o$collect$slambda_1.$metadata$ = classMeta('products$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function products$o$collect$slambda_2($collector, resultContinuation) {
    var i = new products$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.m2w(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$29(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2w_1 = _this__u8e3s4;
    this.x2w_1 = collector;
  }
  $collectCOROUTINE$29.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = products$o$collect$slambda_2(this.x2w_1, null);
            suspendResult = this.w2w_1.y2w_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_0), this);
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
  $collectCOROUTINE$29.$metadata$ = classMeta('$collectCOROUTINE$29', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_19($tmp1_tryMap) {
    this.y2w_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_19.prototype.z2w = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$29(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_19.prototype.j1q = function (collector, $cont) {
    return this.z2w(collector, $cont);
  };
  _no_name_provided__qut3iv_19.$metadata$ = classMeta(undefined, [Flow]);
  function edges$factory_1() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_1() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function categories$factory() {
    return getPropertyCallableRef('categories', 1, KProperty1, function (receiver) {
      return receiver.w2s_1;
    }, null);
  }
  function edges$factory_2() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_2() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function products$factory() {
    return getPropertyCallableRef('products', 1, KProperty1, function (receiver) {
      return receiver.z2s_1;
    }, null);
  }
  function products$factory_0() {
    return getPropertyCallableRef('products', 1, KProperty1, function (receiver) {
      return receiver.z2s_1;
    }, null);
  }
  var properties_initialized_Catalog_kt_k9lot3;
  function init_properties_Catalog_kt_2t829x() {
    if (properties_initialized_Catalog_kt_k9lot3) {
    } else {
      properties_initialized_Catalog_kt_k9lot3 = true;
      productsField = field(productsField$lambda());
    }
  }
  function Arg(key, value) {
    this.a2x_1 = key;
    this.b2x_1 = value;
  }
  Arg.prototype.toString = function () {
    return this.a2x_1 + ': ' + mapValue$default(this.b2x_1, false, 2, null);
  };
  Arg.prototype.hashCode = function () {
    var result = getStringHashCode(this.a2x_1);
    result = imul(result, 31) + hashCode(this.b2x_1) | 0;
    return result;
  };
  Arg.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Arg))
      return false;
    var tmp0_other_with_cast = other instanceof Arg ? other : THROW_CCE();
    if (!(this.a2x_1 === tmp0_other_with_cast.a2x_1))
      return false;
    if (!equals(this.b2x_1, tmp0_other_with_cast.b2x_1))
      return false;
    return true;
  };
  Arg.$metadata$ = classMeta('Arg');
  function mapValue(value, includeArg) {
    var tmp;
    if (typeof value === 'string') {
      tmp = '"' + toString(value) + '"';
    } else {
      var tmp_0;
      if (value instanceof Arg) {
        tmp_0 = includeArg;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = '{' + toString(value) + '}';
      } else {
        if (value instanceof ArgsList) {
          tmp = '{' + joinToString$default(value.c2x_1, ', ', null, null, 0, null, mapValue$lambda(), 30, null) + '}';
        } else {
          if (isInterface(value, List)) {
            tmp = '[' + joinToString$default(value, ', ', null, null, 0, null, mapValue$lambda_0(), 30, null) + ']';
          } else {
            tmp = toString(value);
          }
        }
      }
    }
    return tmp;
  }
  function mapValue$default(value, includeArg, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      includeArg = true;
    return mapValue(value, includeArg);
  }
  function ArgsList(list) {
    this.c2x_1 = list;
  }
  ArgsList.prototype.toString = function () {
    return 'ArgsList(list=' + this.c2x_1 + ')';
  };
  ArgsList.prototype.hashCode = function () {
    return hashCode(this.c2x_1);
  };
  ArgsList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArgsList))
      return false;
    var tmp0_other_with_cast = other instanceof ArgsList ? other : THROW_CCE();
    if (!equals(this.c2x_1, tmp0_other_with_cast.c2x_1))
      return false;
    return true;
  };
  ArgsList.$metadata$ = classMeta('ArgsList');
  function of(_this__u8e3s4, value) {
    return new Arg(_this__u8e3s4, value);
  }
  function argsOf(args) {
    return new ArgsList(toList(args));
  }
  function mapValue$lambda() {
    return function (it) {
      return mapValue(it, false);
    };
  }
  function mapValue$lambda_0() {
    return function (it) {
      var tmp = ensureNotNull(it);
      return mapValue$default(tmp, false, 2, null);
    };
  }
  function camelToSnakeCase(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Regex_init_$Create$('(?<=[a-zA-Z])[A-Z]');
    }
    var tmp = tmp$ret$0;
    return tmp.vf(_this__u8e3s4, camelToSnakeCase$lambda());
  }
  function camelToSnakeCase$lambda() {
    return function (it) {
      var tmp$ret$6;
      {
        var tmp0_replaceFirstChar = it.l1();
        var tmp;
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(tmp0_replaceFirstChar) > 0;
        }
        if (tmp$ret$0) {
          var tmp$ret$3;
          {
            var tmp1_lowercase = charSequenceGet(tmp0_replaceFirstChar, 0);
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_asDynamic = toString_0(tmp1_lowercase);
                tmp$ret$1 = tmp0_asDynamic;
              }
              var tmp1_unsafeCast = tmp$ret$1.toLowerCase();
              tmp$ret$2 = tmp1_unsafeCast;
            }
            tmp$ret$3 = tmp$ret$2;
          }
          var tmp_0 = toString(tmp$ret$3);
          var tmp$ret$5;
          {
            var tmp$ret$4;
            {
              tmp$ret$4 = tmp0_replaceFirstChar;
            }
            tmp$ret$5 = tmp$ret$4.substring(1);
          }
          tmp = tmp_0 + tmp$ret$5;
        } else {
          tmp = tmp0_replaceFirstChar;
        }
        tmp$ret$6 = tmp;
      }
      return '_' + tmp$ret$6;
    };
  }
  function tryMap(_this__u8e3s4, transform) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = new _no_name_provided__qut3iv_20(_this__u8e3s4, transform);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function DecodeResult(value, error) {
    this.b2d_1 = value;
    this.c2d_1 = error;
  }
  DecodeResult.prototype.toString = function () {
    return 'DecodeResult(value=' + this.b2d_1 + ', error=' + this.c2d_1 + ')';
  };
  DecodeResult.prototype.hashCode = function () {
    var result = this.b2d_1 == null ? 0 : hashCode(this.b2d_1);
    result = imul(result, 31) + (this.c2d_1 == null ? 0 : getStringHashCode(this.c2d_1)) | 0;
    return result;
  };
  DecodeResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeResult ? other : THROW_CCE();
    if (!equals(this.b2d_1, tmp0_other_with_cast.b2d_1))
      return false;
    if (!(this.c2d_1 == tmp0_other_with_cast.c2d_1))
      return false;
    return true;
  };
  DecodeResult.$metadata$ = classMeta('DecodeResult');
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_13.call($this);
    $this.e2x_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer_13.prototype));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.core.DataContainer', null, 2);
    tmp0_serialDesc.ys('data', true);
    tmp0_serialDesc.ys('errors', true);
    Companion_getInstance_8().f2x_1 = tmp0_serialDesc;
  }
  Companion_8.prototype.g2x = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_8.prototype.it = function (typeParamsSerializers) {
    return this.g2x(typeParamsSerializers[0]);
  };
  Companion_8.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_13() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.core.DataContainer', this, 2);
    tmp0_serialDesc.ys('data', true);
    tmp0_serialDesc.ys('errors', true);
    this.d2x_1 = tmp0_serialDesc;
  }
  $serializer_13.prototype.gj = function () {
    return this.d2x_1;
  };
  $serializer_13.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [get_nullable(this.e2x_1), get_nullable(new ArrayListSerializer(JsonObjectSerializer_getInstance()))];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_13.prototype.ij = function (decoder) {
    var tmp0_desc = this.d2x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.om(tmp0_desc, 0, this.e2x_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.om(tmp0_desc, 1, new ArrayListSerializer(JsonObjectSerializer_getInstance()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.om(tmp0_desc, 0, this.e2x_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.om(tmp0_desc, 1, new ArrayListSerializer(JsonObjectSerializer_getInstance()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return DataContainer_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_13.prototype.h2x = function (encoder, value) {
    var tmp0_desc = this.d2x_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    if (tmp1_output.un(tmp0_desc, 0) ? true : !(value.b2c_1 == null))
      tmp1_output.qn(tmp0_desc, 0, this.e2x_1, value.b2c_1);
    if (tmp1_output.un(tmp0_desc, 1) ? true : !(value.c2c_1 == null))
      tmp1_output.qn(tmp0_desc, 1, new ArrayListSerializer(JsonObjectSerializer_getInstance()), value.c2c_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_13.prototype.hj = function (encoder, value) {
    return this.h2x(encoder, value instanceof DataContainer ? value : THROW_CCE());
  };
  $serializer_13.prototype.bt = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.e2x_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_13.$metadata$ = classMeta('$serializer', [GeneratedSerializer]);
  function DataContainer_init_$Init$(seen1, data, errors, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1)))
      throwMissingFieldException(seen1, 0, Companion_getInstance_8().f2x_1);
    if (0 === (seen1 & 1))
      $this.b2c_1 = null;
    else
      $this.b2c_1 = data;
    if (0 === (seen1 & 2))
      $this.c2c_1 = null;
    else
      $this.c2c_1 = errors;
    return $this;
  }
  function DataContainer_init_$Create$(seen1, data, errors, serializationConstructorMarker) {
    return DataContainer_init_$Init$(seen1, data, errors, serializationConstructorMarker, Object.create(DataContainer.prototype));
  }
  function DataContainer(data, errors) {
    Companion_getInstance_8();
    this.b2c_1 = data;
    this.c2c_1 = errors;
  }
  DataContainer.prototype.i2x = function () {
    return this.b2c_1;
  };
  DataContainer.prototype.j2x = function () {
    return this.c2c_1;
  };
  DataContainer.prototype.toString = function () {
    return 'DataContainer(data=' + this.b2c_1 + ', errors=' + this.c2c_1 + ')';
  };
  DataContainer.prototype.hashCode = function () {
    var result = this.b2c_1 == null ? 0 : hashCode(this.b2c_1);
    result = imul(result, 31) + (this.c2c_1 == null ? 0 : hashCode(this.c2c_1)) | 0;
    return result;
  };
  DataContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataContainer))
      return false;
    var tmp0_other_with_cast = other instanceof DataContainer ? other : THROW_CCE();
    if (!equals(this.b2c_1, tmp0_other_with_cast.b2c_1))
      return false;
    if (!equals(this.c2c_1, tmp0_other_with_cast.c2c_1))
      return false;
    return true;
  };
  DataContainer.$metadata$ = classMeta('DataContainer', undefined, undefined, {0: Companion_getInstance_8});
  function sam$kotlinx_coroutines_flow_FlowCollector$0_9(function_0) {
    this.k2x_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_9.prototype.w1q = function (value, $cont) {
    return this.k2x_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_9.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function tryMap$o$collect$slambda($collector, $transform, resultContinuation) {
    this.t2x_1 = $collector;
    this.u2x_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  tryMap$o$collect$slambda.prototype.w2x = function (value, $cont) {
    var tmp = this.x2x(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  tryMap$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.w2x(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  tryMap$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.v2x_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = this.u2x_1(tmp0_safe_receiver);
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.v2x_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.t2x_1.w1q(tmp_1, this);
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
  tryMap$o$collect$slambda.prototype.x2x = function (value, completion) {
    var i = new tryMap$o$collect$slambda(this.t2x_1, this.u2x_1, completion);
    i.v2x_1 = value;
    return i;
  };
  tryMap$o$collect$slambda.$metadata$ = classMeta('tryMap$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function tryMap$o$collect$slambda_0($collector, $transform, resultContinuation) {
    var i = new tryMap$o$collect$slambda($collector, $transform, resultContinuation);
    var l = function (value, $cont) {
      return i.w2x(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2y_1 = _this__u8e3s4;
    this.h2y_1 = collector;
  }
  $collectCOROUTINE$30.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = tryMap$o$collect$slambda_0(this.h2y_1, this.g2y_1.j2y_1, null);
            suspendResult = this.g2y_1.i2y_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_9(tmp_0), this);
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
  $collectCOROUTINE$30.$metadata$ = classMeta('$collectCOROUTINE$30', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_20($this_tryMap, $transform) {
    this.i2y_1 = $this_tryMap;
    this.j2y_1 = $transform;
  }
  _no_name_provided__qut3iv_20.prototype.k2y = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$30(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_20.prototype.j1q = function (collector, $cont) {
    return this.k2y(collector, $cont);
  };
  _no_name_provided__qut3iv_20.$metadata$ = classMeta(undefined, [Flow]);
  function Field() {
    this.d2b_1 = null;
    this.e2b_1 = null;
    this.f2b_1 = 0;
    this.g2b_1 = KeyEncodingStrategy_None_getInstance();
  }
  Field.prototype.l2y = function (_set____db54di) {
    this.d2b_1 = _set____db54di;
  };
  Field.prototype.m2y = function (_set____db54di) {
    this.f2b_1 = _set____db54di;
  };
  Field.prototype.n2y = function (_set____db54di) {
    this.g2b_1 = _set____db54di;
  };
  Field.prototype.t2q = function (p) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, null, null, null, 112, null);
  };
  Field.prototype.o2y = function (p) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, null, null, null, 112, null);
  };
  Field.prototype.p2y = function (p) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, null, null, null, 112, null);
  };
  Field.prototype.i2b = function (p, args, builder) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, args, null, builder, 32, null);
  };
  Field.prototype.h2b = function (p, field, args) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, args, field, null, 64, null);
  };
  Field.prototype.i2l = function (p, args, builder) {
    var tmp = ensureNotNull(this.d2b_1);
    var tmp_0 = p.callableName;
    var tmp_1 = this.f2b_1;
    var tmp_2 = this.g2b_1;
    field$default(tmp, tmp_0, tmp_1, tmp_2, args, null, builder, 32, null);
  };
  Field.$metadata$ = classMeta('Field');
  function field(builder) {
    var field = new Field();
    var tmp = field;
    tmp.e2b_1 = field$lambda(builder, field);
    return field;
  }
  var KeyEncodingStrategy_None_instance;
  var KeyEncodingStrategy_FromCamelCase_instance;
  var KeyEncodingStrategy_entriesInitialized;
  function KeyEncodingStrategy_initEntries() {
    if (KeyEncodingStrategy_entriesInitialized)
      return Unit_getInstance();
    KeyEncodingStrategy_entriesInitialized = true;
    KeyEncodingStrategy_None_instance = new KeyEncodingStrategy('None', 0);
    KeyEncodingStrategy_FromCamelCase_instance = new KeyEncodingStrategy('FromCamelCase', 1);
  }
  function KeyEncodingStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KeyEncodingStrategy.$metadata$ = classMeta('KeyEncodingStrategy', undefined, undefined, undefined, undefined, Enum.prototype);
  function field_0(stringBuilder, name, spacer, keyEncodingStrategy, args, field, builder) {
    var tmp = numberRangeToNumber(0, spacer);
    var space = joinToString$default(tmp, '  ', null, null, 0, null, field$lambda_0(), 30, null);
    var _name = name;
    if (keyEncodingStrategy.equals(KeyEncodingStrategy_FromCamelCase_getInstance())) {
      _name = camelToSnakeCase(_name);
    }
    stringBuilder.s5(space + _name);
    var tmp_0;
    if (!(args == null)) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = args.length === 0;
        }
        tmp$ret$1 = !tmp$ret$0;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      stringBuilder.s5('(' + joinToString$default_0(args, ', ', null, null, 0, null, null, 62, null) + ')');
    }
    if (builder == null ? field == null : false) {
      stringBuilder.s5('\n');
      return Unit_getInstance();
    }
    stringBuilder.s5(' {\n');
    var tmp0_elvis_lhs = field;
    var newField = tmp0_elvis_lhs == null ? new Field() : tmp0_elvis_lhs;
    newField.d2b_1 = stringBuilder;
    newField.f2b_1 = spacer + 1 | 0;
    if (!(builder == null)) {
      builder(newField);
    } else {
      var tmp1_safe_receiver = newField.e2b_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver();
    }
    stringBuilder.s5('\n' + space + '}\n');
  }
  function field$default(stringBuilder, name, spacer, keyEncodingStrategy, args, field, builder, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      args = null;
    if (!(($mask0 & 32) === 0))
      field = null;
    if (!(($mask0 & 64) === 0))
      builder = null;
    return field_0(stringBuilder, name, spacer, keyEncodingStrategy, args, field, builder);
  }
  function field$lambda($builder, $field) {
    return function () {
      $builder($field);
      return Unit_getInstance();
    };
  }
  function field$lambda_0() {
    return function (it) {
      return '';
    };
  }
  function KeyEncodingStrategy_None_getInstance() {
    KeyEncodingStrategy_initEntries();
    return KeyEncodingStrategy_None_instance;
  }
  function KeyEncodingStrategy_FromCamelCase_getInstance() {
    KeyEncodingStrategy_initEntries();
    return KeyEncodingStrategy_FromCamelCase_instance;
  }
  function GQLObject() {
  }
  GQLObject.$metadata$ = interfaceMeta('GQLObject');
  function Companion_9() {
    Companion_instance_9 = this;
  }
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_14() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.core.GQLResult.QueryContainer', this, 1);
    tmp0_serialDesc.ys('query', false);
    this.q2y_1 = tmp0_serialDesc;
  }
  $serializer_14.prototype.gj = function () {
    return this.q2y_1;
  };
  $serializer_14.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_14.prototype.ij = function (decoder) {
    var tmp0_desc = this.q2y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return QueryContainer_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_14.prototype.r2y = function (encoder, value) {
    var tmp0_desc = this.q2y_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.s2y_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_14.prototype.hj = function (encoder, value) {
    return this.r2y(encoder, value instanceof QueryContainer ? value : THROW_CCE());
  };
  $serializer_14.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_14();
    return $serializer_instance_13;
  }
  function QueryContainer_init_$Init$(seen1, query, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_13().q2y_1);
    $this.s2y_1 = query;
    return $this;
  }
  function QueryContainer_init_$Create$(seen1, query, serializationConstructorMarker) {
    return QueryContainer_init_$Init$(seen1, query, serializationConstructorMarker, Object.create(QueryContainer.prototype));
  }
  function QueryContainer(query) {
    Companion_getInstance_9();
    this.s2y_1 = query;
  }
  QueryContainer.prototype.toString = function () {
    return 'QueryContainer(query=' + this.s2y_1 + ')';
  };
  QueryContainer.prototype.hashCode = function () {
    return getStringHashCode(this.s2y_1);
  };
  QueryContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QueryContainer))
      return false;
    var tmp0_other_with_cast = other instanceof QueryContainer ? other : THROW_CCE();
    if (!(this.s2y_1 === tmp0_other_with_cast.s2y_1))
      return false;
    return true;
  };
  QueryContainer.$metadata$ = classMeta('QueryContainer', undefined, undefined, {0: $serializer_getInstance_13});
  function GQLResult() {
    this.t2y_1 = StringBuilder_init_$Create$();
  }
  GQLResult.prototype.u2y = function () {
    return this.t2y_1;
  };
  GQLResult.prototype.v2y = function () {
    var tmp = this.t2y_1.toString();
    return replace$default(tmp, '\n\n', '\n', false, 4, null);
  };
  GQLResult.prototype.w2y = function () {
    var tmp$ret$2;
    {
      var tmp0_encodeToString = Default_getInstance();
      var tmp1_encodeToString = new QueryContainer(this.v2y());
      var tmp$ret$1;
      {
        var tmp1_serializer = tmp0_encodeToString.ak();
        var tmp$ret$0;
        {
          var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(QueryContainer), arrayOf([]), false));
          tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp0_encodeToString.yj(tmp$ret$1, tmp1_encodeToString);
    }
    return tmp$ret$2;
  };
  GQLResult.$metadata$ = classMeta('GQLResult');
  function query(builder) {
    return resultWithType('query', builder);
  }
  function mutation(builder) {
    return resultWithType('mutation', builder);
  }
  function resultWithType(type, builder) {
    var tmp$ret$0;
    {
      var tmp0_apply = new GQLResult();
      {
      }
      {
        tmp0_apply.t2y_1.s5(type + ' {\n');
        var field = new Field();
        field.f2b_1 = 1;
        field.d2b_1 = tmp0_apply.t2y_1;
        field.g2b_1 = KeyEncodingStrategy_None_getInstance();
        builder(field);
        tmp0_apply.t2y_1.s5('}\n');
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function http(gql) {
    return http_0(new GraphQL(gql), get_config().o29_1, get_config().p29_1, get_config().q29_1, get_config().r29_1, '', null, get_config().s29_1);
  }
  function GraphQL(gql) {
    this.x2y_1 = gql;
  }
  GraphQL.$metadata$ = classMeta('GraphQL', [HTTPType]);
  function HTTPType() {
  }
  HTTPType.$metadata$ = interfaceMeta('HTTPType');
  function Rest() {
  }
  Rest.$metadata$ = classMeta('Rest', [HTTPType]);
  function InternalServerException(code, mess) {
    Exception_init_$Init$('code: ' + code + ' - ' + mess, this);
    this.y2y_1 = code;
    this.z2y_1 = mess;
    captureStack(this, InternalServerException);
  }
  InternalServerException.$metadata$ = classMeta('InternalServerException', undefined, undefined, undefined, undefined, Exception.prototype);
  function user(token) {
    var tmp$ret$7;
    {
      var tmp$ret$3;
      {
        var tmp0_decode = http(query(user$lambda(token)));
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = new _no_name_provided__qut3iv_21(tmp0_decode);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      var tmp1_tryMap = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = new _no_name_provided__qut3iv_22(tmp1_tryMap);
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
    }
    return tmp$ret$7;
  }
  function user$default(token, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp0_elvis_lhs = get_config().r29_1;
      token = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    }
    return user(token);
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer_15() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.customer.SessionsQuery', this, 1);
    tmp0_serialDesc.ys('sessions', false);
    this.a2z_1 = tmp0_serialDesc;
  }
  $serializer_15.prototype.gj = function () {
    return this.a2z_1;
  };
  $serializer_15.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [get_nullable($serializer_init_$Create$_1($serializer_getInstance_15()))];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_15.prototype.ij = function (decoder) {
    var tmp0_desc = this.a2z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_15()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.om(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_15()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return SessionsQuery_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_15.prototype.b2z = function (encoder, value) {
    var tmp0_desc = this.a2z_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.qn(tmp0_desc, 0, $serializer_init_$Create$_1($serializer_getInstance_15()), value.c2z_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_15.prototype.hj = function (encoder, value) {
    return this.b2z(encoder, value instanceof SessionsQuery_0 ? value : THROW_CCE());
  };
  $serializer_15.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_15();
    return $serializer_instance_14;
  }
  function SessionsQuery_init_$Init$_0(seen1, sessions, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_14().a2z_1);
    $this.c2z_1 = sessions;
    return $this;
  }
  function SessionsQuery_init_$Create$_0(seen1, sessions, serializationConstructorMarker) {
    return SessionsQuery_init_$Init$_0(seen1, sessions, serializationConstructorMarker, Object.create(SessionsQuery_0.prototype));
  }
  function SessionsQuery_0(sessions) {
    Companion_getInstance_10();
    this.c2z_1 = sessions;
  }
  SessionsQuery_0.prototype.toString = function () {
    return 'SessionsQuery(sessions=' + this.c2z_1 + ')';
  };
  SessionsQuery_0.prototype.hashCode = function () {
    return this.c2z_1 == null ? 0 : this.c2z_1.hashCode();
  };
  SessionsQuery_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SessionsQuery_0))
      return false;
    var tmp0_other_with_cast = other instanceof SessionsQuery_0 ? other : THROW_CCE();
    if (!equals(this.c2z_1, tmp0_other_with_cast.c2z_1))
      return false;
    return true;
  };
  SessionsQuery_0.$metadata$ = classMeta('SessionsQuery', undefined, undefined, {0: $serializer_getInstance_14});
  function $serializer_16() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.customer.UserQuery', this, 1);
    tmp0_serialDesc.ys('user', false);
    this.d2z_1 = tmp0_serialDesc;
  }
  $serializer_16.prototype.gj = function () {
    return this.d2z_1;
  };
  $serializer_16.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [$serializer_getInstance_27()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_16.prototype.ij = function (decoder) {
    var tmp0_desc = this.d2z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_27(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, $serializer_getInstance_27(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return UserQuery_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_16.prototype.e2z = function (encoder, value) {
    var tmp0_desc = this.d2z_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, $serializer_getInstance_27(), value.f2z_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_16.prototype.hj = function (encoder, value) {
    return this.e2z(encoder, value instanceof UserQuery ? value : THROW_CCE());
  };
  $serializer_16.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_16();
    return $serializer_instance_15;
  }
  function UserQuery_init_$Init$(seen1, user, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_15().d2z_1);
    $this.f2z_1 = user;
    return $this;
  }
  function UserQuery_init_$Create$(seen1, user, serializationConstructorMarker) {
    return UserQuery_init_$Init$(seen1, user, serializationConstructorMarker, Object.create(UserQuery.prototype));
  }
  function UserQuery() {
  }
  UserQuery.prototype.toString = function () {
    return 'UserQuery(user=' + this.f2z_1 + ')';
  };
  UserQuery.prototype.hashCode = function () {
    return this.f2z_1.hashCode();
  };
  UserQuery.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserQuery))
      return false;
    var tmp0_other_with_cast = other instanceof UserQuery ? other : THROW_CCE();
    if (!this.f2z_1.equals(tmp0_other_with_cast.f2z_1))
      return false;
    return true;
  };
  UserQuery.$metadata$ = classMeta('UserQuery', [GQLObject], undefined, {0: $serializer_getInstance_15});
  function user$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(user$factory_2(), get_userField(), []);
      return Unit_getInstance();
    };
  }
  function user$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = node$factory_3();
      $this$field.i2b(tmp, [], user$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function user$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_3();
      $this$field.i2l(tmp, [], user$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function user$lambda($token) {
    return function ($this$query) {
      var tmp = sessions$factory_1();
      var tmp_0 = [of('where', argsOf([of('sessionToken', argsOf([of('equalTo', $token)]))]))];
      $this$query.i2b(tmp, tmp_0, user$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_10(function_0) {
    this.g2z_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_10.prototype.w1q = function (value, $cont) {
    return this.g2z_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_10.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function user$o$collect$slambda($collector, resultContinuation) {
    this.p2z_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  user$o$collect$slambda.prototype.z2b = function (value, $cont) {
    var tmp = this.a2c(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  user$o$collect$slambda.prototype.ki = function (p1, $cont) {
    return this.z2b((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  user$o$collect$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.r2z_1 = Default_getInstance();
            var tmp_2 = this;
            tmp_2.s2z_1 = this.r2z_1.ak();
            var tmp_3 = this;
            tmp_3.t2z_1 = serializer(this.s2z_1, createKType(getKClass(DataContainer), arrayOf([createInvariantKTypeProjection(createKType(getKClass(SessionsQuery_0), arrayOf([]), false))]), false));
            var tmp_4 = this.t2z_1;
            tmp_0.u2z_1 = this.r2z_1.zj(isInterface(tmp_4, KSerializer) ? tmp_4 : THROW_CCE(), this.q2z_1);
            var tmp_5 = this;
            var tmp0_safe_receiver = this.u2z_1.c2c_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
              var tmp0_iterator = tmp0_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = item.x11('message');
                tmp0_mapTo.b(tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0));
              }
              tmp_6 = tmp0_mapTo;
            }

            var tmp1_safe_receiver = tmp_6;
            var tmp_7;
            if (tmp1_safe_receiver == null) {
              tmp_7 = null;
            } else {
              tmp_7 = joinToString$default(tmp1_safe_receiver, '\n\n', null, null, 0, null, null, 62, null);
            }

            var tmp2_elvis_lhs = tmp_7;
            tmp_5.v2z_1 = tmp2_elvis_lhs == null ? 'invalid ' + ensureNotNull(getKClass(SessionsQuery_0).dd()) : tmp2_elvis_lhs;
            suspendResult = this.p2z_1.w1q(new DecodeResult(this.u2z_1.b2c_1, this.v2z_1), this);
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
  user$o$collect$slambda.prototype.a2c = function (value, completion) {
    var i = new user$o$collect$slambda(this.p2z_1, completion);
    i.q2z_1 = value;
    return i;
  };
  user$o$collect$slambda.$metadata$ = classMeta('user$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function user$o$collect$slambda_0($collector, resultContinuation) {
    var i = new user$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.z2b(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$37(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e30_1 = _this__u8e3s4;
    this.f30_1 = collector;
  }
  $collectCOROUTINE$37.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = user$o$collect$slambda_0(this.f30_1, null);
            suspendResult = this.e30_1.g30_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_10(tmp_0), this);
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
  $collectCOROUTINE$37.$metadata$ = classMeta('$collectCOROUTINE$37', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_21($tmp0_decode) {
    this.g30_1 = $tmp0_decode;
  }
  _no_name_provided__qut3iv_21.prototype.h30 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$37(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_21.prototype.j1q = function (collector, $cont) {
    return this.h30(collector, $cont);
  };
  _no_name_provided__qut3iv_21.$metadata$ = classMeta(undefined, [Flow]);
  function user$o$collect$slambda_1($collector, resultContinuation) {
    this.q30_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  user$o$collect$slambda_1.prototype.s30 = function (value, $cont) {
    var tmp = this.t30(value, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  user$o$collect$slambda_1.prototype.ki = function (p1, $cont) {
    return this.s30(p1 instanceof DecodeResult ? p1 : THROW_CCE(), $cont);
  };
  user$o$collect$slambda_1.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp0_safe_receiver = this.r30_1.b2d_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_safe_receiver_0 = tmp0_safe_receiver.c2z_1;
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x2m_1;
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y2m_1;
              tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.f2z_1;
            }

            var tmp1_elvis_lhs = tmp_0;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw Exception_init_$Create$(this.r30_1.c2d_1);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            suspendResult = this.q30_1.w1q(tmp_1, this);
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
  user$o$collect$slambda_1.prototype.t30 = function (value, completion) {
    var i = new user$o$collect$slambda_1(this.q30_1, completion);
    i.r30_1 = value;
    return i;
  };
  user$o$collect$slambda_1.$metadata$ = classMeta('user$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function user$o$collect$slambda_2($collector, resultContinuation) {
    var i = new user$o$collect$slambda_1($collector, resultContinuation);
    var l = function (value, $cont) {
      return i.s30(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$38(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c31_1 = _this__u8e3s4;
    this.d31_1 = collector;
  }
  $collectCOROUTINE$38.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.zh_1 = 1;
            var tmp_0 = user$o$collect$slambda_2(this.d31_1, null);
            suspendResult = this.c31_1.e31_1.j1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_10(tmp_0), this);
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
  $collectCOROUTINE$38.$metadata$ = classMeta('$collectCOROUTINE$38', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_22($tmp1_tryMap) {
    this.e31_1 = $tmp1_tryMap;
  }
  _no_name_provided__qut3iv_22.prototype.f31 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$38(this, collector, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  _no_name_provided__qut3iv_22.prototype.j1q = function (collector, $cont) {
    return this.f31(collector, $cont);
  };
  _no_name_provided__qut3iv_22.$metadata$ = classMeta(undefined, [Flow]);
  function sessions$factory_1() {
    return getPropertyCallableRef('sessions', 1, KProperty1, function (receiver) {
      return receiver.c2z_1;
    }, null);
  }
  function edges$factory_3() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_3() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function user$factory_2() {
    return getPropertyCallableRef('user', 1, KProperty1, function (receiver) {
      return receiver.f2z_1;
    }, null);
  }
  function get_addressField() {
    init_properties_Address_kt_gr98w0();
    return addressField;
  }
  var addressField;
  function $serializer_17() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Address', this, 6);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('firstName', false);
    tmp0_serialDesc.ys('lastName', false);
    tmp0_serialDesc.ys('city', false);
    tmp0_serialDesc.ys('street', false);
    tmp0_serialDesc.ys('postcode', false);
    this.g31_1 = tmp0_serialDesc;
  }
  $serializer_17.prototype.gj = function () {
    return this.g31_1;
  };
  $serializer_17.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_17.prototype.ij = function (decoder) {
    var tmp0_desc = this.g31_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.bm(tmp0_desc);
    if (tmp10_input.pm()) {
      tmp4_local0 = tmp10_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.lm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.lm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.lm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.lm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.lm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.lm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.lm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.lm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.cm(tmp0_desc);
    return Address_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  $serializer_17.prototype.h31 = function (encoder, value) {
    var tmp0_desc = this.g31_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.i31_1);
    tmp1_output.nn(tmp0_desc, 1, value.j31_1);
    tmp1_output.nn(tmp0_desc, 2, value.k31_1);
    tmp1_output.nn(tmp0_desc, 3, value.l31_1);
    tmp1_output.nn(tmp0_desc, 4, value.m31_1);
    tmp1_output.nn(tmp0_desc, 5, value.n31_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_17.prototype.hj = function (encoder, value) {
    return this.h31(encoder, value instanceof Address ? value : THROW_CCE());
  };
  $serializer_17.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_17();
    return $serializer_instance_16;
  }
  function Address_init_$Init$(seen1, objectId, firstName, lastName, city, street, postcode, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1)))
      throwMissingFieldException(seen1, 63, $serializer_getInstance_16().g31_1);
    $this.i31_1 = objectId;
    $this.j31_1 = firstName;
    $this.k31_1 = lastName;
    $this.l31_1 = city;
    $this.m31_1 = street;
    $this.n31_1 = postcode;
    return $this;
  }
  function Address_init_$Create$(seen1, objectId, firstName, lastName, city, street, postcode, serializationConstructorMarker) {
    return Address_init_$Init$(seen1, objectId, firstName, lastName, city, street, postcode, serializationConstructorMarker, Object.create(Address.prototype));
  }
  function Address() {
  }
  Address.prototype.toString = function () {
    return 'Address(objectId=' + this.i31_1 + ', firstName=' + this.j31_1 + ', lastName=' + this.k31_1 + ', city=' + this.l31_1 + ', street=' + this.m31_1 + ', postcode=' + this.n31_1 + ')';
  };
  Address.prototype.hashCode = function () {
    var result = getStringHashCode(this.i31_1);
    result = imul(result, 31) + getStringHashCode(this.j31_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k31_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l31_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m31_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n31_1) | 0;
    return result;
  };
  Address.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Address))
      return false;
    var tmp0_other_with_cast = other instanceof Address ? other : THROW_CCE();
    if (!(this.i31_1 === tmp0_other_with_cast.i31_1))
      return false;
    if (!(this.j31_1 === tmp0_other_with_cast.j31_1))
      return false;
    if (!(this.k31_1 === tmp0_other_with_cast.k31_1))
      return false;
    if (!(this.l31_1 === tmp0_other_with_cast.l31_1))
      return false;
    if (!(this.m31_1 === tmp0_other_with_cast.m31_1))
      return false;
    if (!(this.n31_1 === tmp0_other_with_cast.n31_1))
      return false;
    return true;
  };
  Address.$metadata$ = classMeta('Address', [GQLObject], undefined, {0: $serializer_getInstance_16});
  function addressField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_0());
      $this$field.t2q(firstName$factory());
      $this$field.t2q(lastName$factory());
      $this$field.t2q(city$factory());
      $this$field.t2q(street$factory());
      $this$field.t2q(postcode$factory());
      return Unit_getInstance();
    };
  }
  function objectId$factory_0() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.i31_1;
    }, null);
  }
  function firstName$factory() {
    return getPropertyCallableRef('firstName', 1, KProperty1, function (receiver) {
      return receiver.j31_1;
    }, null);
  }
  function lastName$factory() {
    return getPropertyCallableRef('lastName', 1, KProperty1, function (receiver) {
      return receiver.k31_1;
    }, null);
  }
  function city$factory() {
    return getPropertyCallableRef('city', 1, KProperty1, function (receiver) {
      return receiver.l31_1;
    }, null);
  }
  function street$factory() {
    return getPropertyCallableRef('street', 1, KProperty1, function (receiver) {
      return receiver.m31_1;
    }, null);
  }
  function postcode$factory() {
    return getPropertyCallableRef('postcode', 1, KProperty1, function (receiver) {
      return receiver.n31_1;
    }, null);
  }
  var properties_initialized_Address_kt_6bki70;
  function init_properties_Address_kt_gr98w0() {
    if (properties_initialized_Address_kt_6bki70) {
    } else {
      properties_initialized_Address_kt_6bki70 = true;
      addressField = field(addressField$lambda());
    }
  }
  function get_cartField() {
    init_properties_Cart_kt_xc7apm();
    return cartField;
  }
  var cartField;
  function $serializer_18() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Cart.Item', this, 3);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('qty', false);
    tmp0_serialDesc.ys('product', false);
    this.o31_1 = tmp0_serialDesc;
  }
  $serializer_18.prototype.gj = function () {
    return this.o31_1;
  };
  $serializer_18.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), IntSerializer_getInstance(), $serializer_getInstance_24()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_18.prototype.ij = function (decoder) {
    var tmp0_desc = this.o31_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.bm(tmp0_desc);
    if (tmp7_input.pm()) {
      tmp4_local0 = tmp7_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.gm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.mm(tmp0_desc, 2, $serializer_getInstance_24(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.gm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.mm(tmp0_desc, 2, $serializer_getInstance_24(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.cm(tmp0_desc);
    return Item_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_18.prototype.p31 = function (encoder, value) {
    var tmp0_desc = this.o31_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.q31_1);
    tmp1_output.in(tmp0_desc, 1, value.r31_1);
    tmp1_output.on(tmp0_desc, 2, $serializer_getInstance_24(), value.s31_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_18.prototype.hj = function (encoder, value) {
    return this.p31(encoder, value instanceof Item ? value : THROW_CCE());
  };
  $serializer_18.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_18();
    return $serializer_instance_17;
  }
  function Item_init_$Init$(seen1, objectId, qty, product, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1)))
      throwMissingFieldException(seen1, 7, $serializer_getInstance_17().o31_1);
    $this.q31_1 = objectId;
    $this.r31_1 = qty;
    $this.s31_1 = product;
    return $this;
  }
  function Item_init_$Create$(seen1, objectId, qty, product, serializationConstructorMarker) {
    return Item_init_$Init$(seen1, objectId, qty, product, serializationConstructorMarker, Object.create(Item.prototype));
  }
  function Item() {
  }
  Item.prototype.t31 = function () {
    return this.r31_1;
  };
  Item.prototype.u31 = function () {
    return this.s31_1;
  };
  Item.prototype.toString = function () {
    return 'Item(objectId=' + this.q31_1 + ', qty=' + this.r31_1 + ', product=' + this.s31_1 + ')';
  };
  Item.prototype.hashCode = function () {
    var result = getStringHashCode(this.q31_1);
    result = imul(result, 31) + this.r31_1 | 0;
    result = imul(result, 31) + this.s31_1.hashCode() | 0;
    return result;
  };
  Item.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Item))
      return false;
    var tmp0_other_with_cast = other instanceof Item ? other : THROW_CCE();
    if (!(this.q31_1 === tmp0_other_with_cast.q31_1))
      return false;
    if (!(this.r31_1 === tmp0_other_with_cast.r31_1))
      return false;
    if (!this.s31_1.equals(tmp0_other_with_cast.s31_1))
      return false;
    return true;
  };
  Item.$metadata$ = classMeta('Item', [GQLObject], undefined, {0: $serializer_getInstance_17});
  function $serializer_19() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Cart', this, 6);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('totalPrice', false);
    tmp0_serialDesc.ys('items', false);
    tmp0_serialDesc.ys('address', false);
    tmp0_serialDesc.ys('shippingMethods', false);
    tmp0_serialDesc.ys('paymentMethods', false);
    this.v31_1 = tmp0_serialDesc;
  }
  $serializer_19.prototype.gj = function () {
    return this.v31_1;
  };
  $serializer_19.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable($serializer_getInstance_23()), $serializer_init_$Create$_1($serializer_getInstance_17()), get_nullable($serializer_getInstance_16()), $serializer_init_$Create$_1($serializer_getInstance_26()), $serializer_init_$Create$_1($serializer_getInstance_22())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_19.prototype.ij = function (decoder) {
    var tmp0_desc = this.v31_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.bm(tmp0_desc);
    if (tmp10_input.pm()) {
      tmp4_local0 = tmp10_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.om(tmp0_desc, 1, $serializer_getInstance_23(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.mm(tmp0_desc, 2, $serializer_init_$Create$_1($serializer_getInstance_17()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.om(tmp0_desc, 3, $serializer_getInstance_16(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.mm(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_26()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.mm(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_22()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.om(tmp0_desc, 1, $serializer_getInstance_23(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.mm(tmp0_desc, 2, $serializer_init_$Create$_1($serializer_getInstance_17()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.om(tmp0_desc, 3, $serializer_getInstance_16(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.mm(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_26()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.mm(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_22()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.cm(tmp0_desc);
    return Cart_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  $serializer_19.prototype.w31 = function (encoder, value) {
    var tmp0_desc = this.v31_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.x31_1);
    tmp1_output.qn(tmp0_desc, 1, $serializer_getInstance_23(), value.y31_1);
    tmp1_output.on(tmp0_desc, 2, $serializer_init_$Create$_1($serializer_getInstance_17()), value.z31_1);
    tmp1_output.qn(tmp0_desc, 3, $serializer_getInstance_16(), value.a32_1);
    tmp1_output.on(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_26()), value.b32_1);
    tmp1_output.on(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_22()), value.c32_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_19.prototype.hj = function (encoder, value) {
    return this.w31(encoder, value instanceof Cart ? value : THROW_CCE());
  };
  $serializer_19.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_19();
    return $serializer_instance_18;
  }
  function Cart_init_$Init$(seen1, objectId, totalPrice, items, address, shippingMethods, paymentMethods, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1)))
      throwMissingFieldException(seen1, 63, $serializer_getInstance_18().v31_1);
    $this.x31_1 = objectId;
    $this.y31_1 = totalPrice;
    $this.z31_1 = items;
    $this.a32_1 = address;
    $this.b32_1 = shippingMethods;
    $this.c32_1 = paymentMethods;
    return $this;
  }
  function Cart_init_$Create$(seen1, objectId, totalPrice, items, address, shippingMethods, paymentMethods, serializationConstructorMarker) {
    return Cart_init_$Init$(seen1, objectId, totalPrice, items, address, shippingMethods, paymentMethods, serializationConstructorMarker, Object.create(Cart.prototype));
  }
  function Cart() {
  }
  Cart.prototype.toString = function () {
    return 'Cart(objectId=' + this.x31_1 + ', totalPrice=' + this.y31_1 + ', items=' + this.z31_1 + ', address=' + this.a32_1 + ', shippingMethods=' + this.b32_1 + ', paymentMethods=' + this.c32_1 + ')';
  };
  Cart.prototype.hashCode = function () {
    var result = getStringHashCode(this.x31_1);
    result = imul(result, 31) + (this.y31_1 == null ? 0 : this.y31_1.hashCode()) | 0;
    result = imul(result, 31) + this.z31_1.hashCode() | 0;
    result = imul(result, 31) + (this.a32_1 == null ? 0 : this.a32_1.hashCode()) | 0;
    result = imul(result, 31) + this.b32_1.hashCode() | 0;
    result = imul(result, 31) + this.c32_1.hashCode() | 0;
    return result;
  };
  Cart.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Cart))
      return false;
    var tmp0_other_with_cast = other instanceof Cart ? other : THROW_CCE();
    if (!(this.x31_1 === tmp0_other_with_cast.x31_1))
      return false;
    if (!equals(this.y31_1, tmp0_other_with_cast.y31_1))
      return false;
    if (!this.z31_1.equals(tmp0_other_with_cast.z31_1))
      return false;
    if (!equals(this.a32_1, tmp0_other_with_cast.a32_1))
      return false;
    if (!this.b32_1.equals(tmp0_other_with_cast.b32_1))
      return false;
    if (!this.c32_1.equals(tmp0_other_with_cast.c32_1))
      return false;
    return true;
  };
  Cart.$metadata$ = classMeta('Cart', [GQLObject], undefined, {0: $serializer_getInstance_18});
  function cartField$lambda$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_2());
      $this$field.o2y(qty$factory());
      $this$field.h2b(product$factory(), get_productField(), []);
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda$lambda() {
    return function ($this$field) {
      var tmp = node$factory_4();
      $this$field.i2b(tmp, [], cartField$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_4();
      $this$field.i2l(tmp, [], cartField$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda$lambda_0() {
    return function ($this$field) {
      $this$field.h2b(node$factory_5(), get_shippingField(), []);
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda_0() {
    return function ($this$field) {
      var tmp = edges$factory_5();
      $this$field.i2l(tmp, [], cartField$lambda$lambda$lambda_0());
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda$lambda_1() {
    return function ($this$field) {
      $this$field.h2b(node$factory_6(), get_paymentField(), []);
      return Unit_getInstance();
    };
  }
  function cartField$lambda$lambda_1() {
    return function ($this$field) {
      var tmp = edges$factory_6();
      $this$field.i2l(tmp, [], cartField$lambda$lambda$lambda_1());
      return Unit_getInstance();
    };
  }
  function cartField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_1());
      $this$field.p2y(totalPrice$factory());
      var tmp = items$factory();
      $this$field.i2b(tmp, [], cartField$lambda$lambda());
      $this$field.h2b(address$factory(), get_addressField(), []);
      var tmp_0 = shippingMethods$factory();
      $this$field.i2b(tmp_0, [], cartField$lambda$lambda_0());
      var tmp_1 = paymentMethods$factory();
      $this$field.i2b(tmp_1, [], cartField$lambda$lambda_1());
      return Unit_getInstance();
    };
  }
  function objectId$factory_1() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.x31_1;
    }, null);
  }
  function totalPrice$factory() {
    return getPropertyCallableRef('totalPrice', 1, KProperty1, function (receiver) {
      return receiver.y31_1;
    }, null);
  }
  function items$factory() {
    return getPropertyCallableRef('items', 1, KProperty1, function (receiver) {
      return receiver.z31_1;
    }, null);
  }
  function address$factory() {
    return getPropertyCallableRef('address', 1, KProperty1, function (receiver) {
      return receiver.a32_1;
    }, null);
  }
  function shippingMethods$factory() {
    return getPropertyCallableRef('shippingMethods', 1, KProperty1, function (receiver) {
      return receiver.b32_1;
    }, null);
  }
  function paymentMethods$factory() {
    return getPropertyCallableRef('paymentMethods', 1, KProperty1, function (receiver) {
      return receiver.c32_1;
    }, null);
  }
  function edges$factory_4() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_4() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function objectId$factory_2() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.q31_1;
    }, null);
  }
  function qty$factory() {
    return getPropertyCallableRef('qty', 1, KProperty1, function (receiver) {
      return receiver.r31_1;
    }, null);
  }
  function product$factory() {
    return getPropertyCallableRef('product', 1, KProperty1, function (receiver) {
      return receiver.s31_1;
    }, null);
  }
  function edges$factory_5() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_5() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function edges$factory_6() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_6() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  var properties_initialized_Cart_kt_c5ud5q;
  function init_properties_Cart_kt_xc7apm() {
    if (properties_initialized_Cart_kt_c5ud5q) {
    } else {
      properties_initialized_Cart_kt_c5ud5q = true;
      cartField = field(cartField$lambda());
    }
  }
  function get_categoryField() {
    init_properties_Category_kt_pz0xr0();
    return categoryField;
  }
  var categoryField;
  function $serializer_20() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Category', this, 2);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('name', false);
    this.d32_1 = tmp0_serialDesc;
  }
  $serializer_20.prototype.gj = function () {
    return this.d32_1;
  };
  $serializer_20.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_20.prototype.ij = function (decoder) {
    var tmp0_desc = this.d32_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return Category_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_20.prototype.e32 = function (encoder, value) {
    var tmp0_desc = this.d32_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.f32_1);
    tmp1_output.nn(tmp0_desc, 1, value.g32_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_20.prototype.hj = function (encoder, value) {
    return this.e32(encoder, value instanceof Category ? value : THROW_CCE());
  };
  $serializer_20.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_20();
    return $serializer_instance_19;
  }
  function Category_init_$Init$(seen1, objectId, name, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance_19().d32_1);
    $this.f32_1 = objectId;
    $this.g32_1 = name;
    return $this;
  }
  function Category_init_$Create$(seen1, objectId, name, serializationConstructorMarker) {
    return Category_init_$Init$(seen1, objectId, name, serializationConstructorMarker, Object.create(Category.prototype));
  }
  function Category() {
  }
  Category.prototype.h32 = function () {
    return this.f32_1;
  };
  Category.prototype.toString = function () {
    return 'Category(objectId=' + this.f32_1 + ', name=' + this.g32_1 + ')';
  };
  Category.prototype.hashCode = function () {
    var result = getStringHashCode(this.f32_1);
    result = imul(result, 31) + getStringHashCode(this.g32_1) | 0;
    return result;
  };
  Category.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Category))
      return false;
    var tmp0_other_with_cast = other instanceof Category ? other : THROW_CCE();
    if (!(this.f32_1 === tmp0_other_with_cast.f32_1))
      return false;
    if (!(this.g32_1 === tmp0_other_with_cast.g32_1))
      return false;
    return true;
  };
  Category.$metadata$ = classMeta('Category', [GQLObject], undefined, {0: $serializer_getInstance_19});
  function categoryField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_3());
      $this$field.t2q(name$factory());
      return Unit_getInstance();
    };
  }
  function objectId$factory_3() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.f32_1;
    }, null);
  }
  function name$factory() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.g32_1;
    }, null);
  }
  var properties_initialized_Category_kt_v3ipkw;
  function init_properties_Category_kt_pz0xr0() {
    if (properties_initialized_Category_kt_v3ipkw) {
    } else {
      properties_initialized_Category_kt_v3ipkw = true;
      categoryField = field(categoryField$lambda());
    }
  }
  function get_fileField() {
    init_properties_File_kt_a12q72();
    return fileField;
  }
  var fileField;
  function $serializer_21() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.File', this, 2);
    tmp0_serialDesc.ys('name', false);
    tmp0_serialDesc.ys('url', false);
    this.i32_1 = tmp0_serialDesc;
  }
  $serializer_21.prototype.gj = function () {
    return this.i32_1;
  };
  $serializer_21.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_21.prototype.ij = function (decoder) {
    var tmp0_desc = this.i32_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return File_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_21.prototype.j32 = function (encoder, value) {
    var tmp0_desc = this.i32_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.k32_1);
    tmp1_output.nn(tmp0_desc, 1, value.l32_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_21.prototype.hj = function (encoder, value) {
    return this.j32(encoder, value instanceof File ? value : THROW_CCE());
  };
  $serializer_21.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_21();
    return $serializer_instance_20;
  }
  function File_init_$Init$(seen1, name, url, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance_20().i32_1);
    $this.k32_1 = name;
    $this.l32_1 = url;
    return $this;
  }
  function File_init_$Create$(seen1, name, url, serializationConstructorMarker) {
    return File_init_$Init$(seen1, name, url, serializationConstructorMarker, Object.create(File.prototype));
  }
  function File() {
  }
  File.prototype.toString = function () {
    return 'File(name=' + this.k32_1 + ', url=' + this.l32_1 + ')';
  };
  File.prototype.hashCode = function () {
    var result = getStringHashCode(this.k32_1);
    result = imul(result, 31) + getStringHashCode(this.l32_1) | 0;
    return result;
  };
  File.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof File))
      return false;
    var tmp0_other_with_cast = other instanceof File ? other : THROW_CCE();
    if (!(this.k32_1 === tmp0_other_with_cast.k32_1))
      return false;
    if (!(this.l32_1 === tmp0_other_with_cast.l32_1))
      return false;
    return true;
  };
  File.$metadata$ = classMeta('File', [GQLObject], undefined, {0: $serializer_getInstance_20});
  function fileField$lambda() {
    return function ($this$field) {
      $this$field.t2q(name$factory_0());
      $this$field.t2q(url$factory());
      return Unit_getInstance();
    };
  }
  function name$factory_0() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.k32_1;
    }, null);
  }
  function url$factory() {
    return getPropertyCallableRef('url', 1, KProperty1, function (receiver) {
      return receiver.l32_1;
    }, null);
  }
  var properties_initialized_File_kt_b5a7cu;
  function init_properties_File_kt_a12q72() {
    if (properties_initialized_File_kt_b5a7cu) {
    } else {
      properties_initialized_File_kt_b5a7cu = true;
      fileField = field(fileField$lambda());
    }
  }
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_22.call($this);
    $this.n32_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, Object.create($serializer_22.prototype));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.NodeContainer.Node', null, 1);
    tmp0_serialDesc.ys('node', false);
    Companion_getInstance_11().o32_1 = tmp0_serialDesc;
  }
  Companion_11.prototype.g2x = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  Companion_11.prototype.it = function (typeParamsSerializers) {
    return this.g2x(typeParamsSerializers[0]);
  };
  Companion_11.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_22() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.NodeContainer.Node', this, 1);
    tmp0_serialDesc.ys('node', false);
    this.m32_1 = tmp0_serialDesc;
  }
  $serializer_22.prototype.gj = function () {
    return this.m32_1;
  };
  $serializer_22.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.n32_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_22.prototype.ij = function (decoder) {
    var tmp0_desc = this.m32_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, this.n32_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, this.n32_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return Node_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_22.prototype.p32 = function (encoder, value) {
    var tmp0_desc = this.m32_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, this.n32_1, value.y2m_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_22.prototype.hj = function (encoder, value) {
    return this.p32(encoder, value instanceof Node ? value : THROW_CCE());
  };
  $serializer_22.prototype.bt = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.n32_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_22.$metadata$ = classMeta('$serializer', [GeneratedSerializer]);
  function Node_init_$Init$(seen1, node, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, Companion_getInstance_11().o32_1);
    $this.y2m_1 = node;
    return $this;
  }
  function Node_init_$Create$(seen1, node, serializationConstructorMarker) {
    return Node_init_$Init$(seen1, node, serializationConstructorMarker, Object.create(Node.prototype));
  }
  function $serializer_init_$Init$_1(typeSerial0, $this) {
    $serializer_23.call($this);
    $this.r32_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_1(typeSerial0) {
    return $serializer_init_$Init$_1(typeSerial0, Object.create($serializer_23.prototype));
  }
  function Node() {
  }
  Node.prototype.s32 = function () {
    return this.y2m_1;
  };
  Node.prototype.toString = function () {
    return 'Node(node=' + this.y2m_1 + ')';
  };
  Node.prototype.hashCode = function () {
    return this.y2m_1 == null ? 0 : hashCode(this.y2m_1);
  };
  Node.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Node))
      return false;
    var tmp0_other_with_cast = other instanceof Node ? other : THROW_CCE();
    if (!equals(this.y2m_1, tmp0_other_with_cast.y2m_1))
      return false;
    return true;
  };
  Node.$metadata$ = classMeta('Node', [GQLObject], undefined, {0: Companion_getInstance_11});
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.NodeContainer', null, 1);
    tmp0_serialDesc.ys('edges', false);
    Companion_getInstance_12().t32_1 = tmp0_serialDesc;
  }
  Companion_12.prototype.g2x = function (typeSerial0) {
    return $serializer_init_$Create$_1(typeSerial0);
  };
  Companion_12.prototype.it = function (typeParamsSerializers) {
    return this.g2x(typeParamsSerializers[0]);
  };
  Companion_12.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_23() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.NodeContainer', this, 1);
    tmp0_serialDesc.ys('edges', false);
    this.q32_1 = tmp0_serialDesc;
  }
  $serializer_23.prototype.gj = function () {
    return this.q32_1;
  };
  $serializer_23.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [new ArrayListSerializer($serializer_init_$Create$_0(this.r32_1))];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_23.prototype.ij = function (decoder) {
    var tmp0_desc = this.q32_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bm(tmp0_desc);
    if (tmp5_input.pm()) {
      tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, new ArrayListSerializer($serializer_init_$Create$_0(this.r32_1)), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.mm(tmp0_desc, 0, new ArrayListSerializer($serializer_init_$Create$_0(this.r32_1)), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.cm(tmp0_desc);
    return NodeContainer_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_23.prototype.u32 = function (encoder, value) {
    var tmp0_desc = this.q32_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.on(tmp0_desc, 0, new ArrayListSerializer($serializer_init_$Create$_0(this.r32_1)), value.x2m_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_23.prototype.hj = function (encoder, value) {
    return this.u32(encoder, value instanceof NodeContainer ? value : THROW_CCE());
  };
  $serializer_23.prototype.bt = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.r32_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_23.$metadata$ = classMeta('$serializer', [GeneratedSerializer]);
  function NodeContainer_init_$Init$(seen1, edges, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, Companion_getInstance_12().t32_1);
    $this.x2m_1 = edges;
    return $this;
  }
  function NodeContainer_init_$Create$(seen1, edges, serializationConstructorMarker) {
    return NodeContainer_init_$Init$(seen1, edges, serializationConstructorMarker, Object.create(NodeContainer.prototype));
  }
  function NodeContainer() {
  }
  NodeContainer.prototype.toString = function () {
    return 'NodeContainer(edges=' + this.x2m_1 + ')';
  };
  NodeContainer.prototype.hashCode = function () {
    return hashCode(this.x2m_1);
  };
  NodeContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NodeContainer))
      return false;
    var tmp0_other_with_cast = other instanceof NodeContainer ? other : THROW_CCE();
    if (!equals(this.x2m_1, tmp0_other_with_cast.x2m_1))
      return false;
    return true;
  };
  NodeContainer.$metadata$ = classMeta('NodeContainer', [GQLObject], undefined, {0: Companion_getInstance_12});
  function get_orderField() {
    init_properties_Order_kt_bmrziy();
    return orderField;
  }
  var orderField;
  function $serializer_24() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Order', this, 5);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('paymentMethod', false);
    tmp0_serialDesc.ys('shippingMethod', false);
    tmp0_serialDesc.ys('cart', false);
    tmp0_serialDesc.ys('createdAt', false);
    this.v32_1 = tmp0_serialDesc;
  }
  $serializer_24.prototype.gj = function () {
    return this.v32_1;
  };
  $serializer_24.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), $serializer_getInstance_22(), $serializer_getInstance_26(), $serializer_getInstance_18(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_24.prototype.ij = function (decoder) {
    var tmp0_desc = this.v32_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.bm(tmp0_desc);
    if (tmp9_input.pm()) {
      tmp4_local0 = tmp9_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.mm(tmp0_desc, 1, $serializer_getInstance_22(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.mm(tmp0_desc, 2, $serializer_getInstance_26(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.mm(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.mm(tmp0_desc, 1, $serializer_getInstance_22(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.mm(tmp0_desc, 2, $serializer_getInstance_26(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.mm(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.cm(tmp0_desc);
    return Order_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_24.prototype.w32 = function (encoder, value) {
    var tmp0_desc = this.v32_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.x32_1);
    tmp1_output.on(tmp0_desc, 1, $serializer_getInstance_22(), value.y32_1);
    tmp1_output.on(tmp0_desc, 2, $serializer_getInstance_26(), value.z32_1);
    tmp1_output.on(tmp0_desc, 3, $serializer_getInstance_18(), value.a33_1);
    tmp1_output.nn(tmp0_desc, 4, value.b33_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_24.prototype.hj = function (encoder, value) {
    return this.w32(encoder, value instanceof Order ? value : THROW_CCE());
  };
  $serializer_24.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_24();
    return $serializer_instance_21;
  }
  function Order_init_$Init$(seen1, objectId, paymentMethod, shippingMethod, cart, createdAt, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1)))
      throwMissingFieldException(seen1, 31, $serializer_getInstance_21().v32_1);
    $this.x32_1 = objectId;
    $this.y32_1 = paymentMethod;
    $this.z32_1 = shippingMethod;
    $this.a33_1 = cart;
    $this.b33_1 = createdAt;
    return $this;
  }
  function Order_init_$Create$(seen1, objectId, paymentMethod, shippingMethod, cart, createdAt, serializationConstructorMarker) {
    return Order_init_$Init$(seen1, objectId, paymentMethod, shippingMethod, cart, createdAt, serializationConstructorMarker, Object.create(Order.prototype));
  }
  function Order() {
  }
  Order.prototype.toString = function () {
    return 'Order(objectId=' + this.x32_1 + ', paymentMethod=' + this.y32_1 + ', shippingMethod=' + this.z32_1 + ', cart=' + this.a33_1 + ', createdAt=' + this.b33_1 + ')';
  };
  Order.prototype.hashCode = function () {
    var result = getStringHashCode(this.x32_1);
    result = imul(result, 31) + this.y32_1.hashCode() | 0;
    result = imul(result, 31) + this.z32_1.hashCode() | 0;
    result = imul(result, 31) + this.a33_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.b33_1) | 0;
    return result;
  };
  Order.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Order))
      return false;
    var tmp0_other_with_cast = other instanceof Order ? other : THROW_CCE();
    if (!(this.x32_1 === tmp0_other_with_cast.x32_1))
      return false;
    if (!this.y32_1.equals(tmp0_other_with_cast.y32_1))
      return false;
    if (!this.z32_1.equals(tmp0_other_with_cast.z32_1))
      return false;
    if (!this.a33_1.equals(tmp0_other_with_cast.a33_1))
      return false;
    if (!(this.b33_1 === tmp0_other_with_cast.b33_1))
      return false;
    return true;
  };
  Order.$metadata$ = classMeta('Order', [GQLObject], undefined, {0: $serializer_getInstance_21});
  function orderField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_4());
      $this$field.h2b(paymentMethod$factory(), get_paymentField(), []);
      $this$field.h2b(shippingMethod$factory(), get_shippingField(), []);
      $this$field.h2b(cart$factory_6(), get_cartField(), []);
      $this$field.t2q(createdAt$factory());
      return Unit_getInstance();
    };
  }
  function objectId$factory_4() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.x32_1;
    }, null);
  }
  function paymentMethod$factory() {
    return getPropertyCallableRef('paymentMethod', 1, KProperty1, function (receiver) {
      return receiver.y32_1;
    }, null);
  }
  function shippingMethod$factory() {
    return getPropertyCallableRef('shippingMethod', 1, KProperty1, function (receiver) {
      return receiver.z32_1;
    }, null);
  }
  function cart$factory_6() {
    return getPropertyCallableRef('cart', 1, KProperty1, function (receiver) {
      return receiver.a33_1;
    }, null);
  }
  function createdAt$factory() {
    return getPropertyCallableRef('createdAt', 1, KProperty1, function (receiver) {
      return receiver.b33_1;
    }, null);
  }
  var properties_initialized_Order_kt_stwdvi;
  function init_properties_Order_kt_bmrziy() {
    if (properties_initialized_Order_kt_stwdvi) {
    } else {
      properties_initialized_Order_kt_stwdvi = true;
      orderField = field(orderField$lambda());
    }
  }
  function get_paymentField() {
    init_properties_PaymentMethod_kt_oxx5yr();
    return paymentField;
  }
  var paymentField;
  function $serializer_25() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.PaymentMethod', this, 2);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('title', false);
    this.c33_1 = tmp0_serialDesc;
  }
  $serializer_25.prototype.gj = function () {
    return this.c33_1;
  };
  $serializer_25.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_25.prototype.ij = function (decoder) {
    var tmp0_desc = this.c33_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return PaymentMethod_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_25.prototype.d33 = function (encoder, value) {
    var tmp0_desc = this.c33_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.e33_1);
    tmp1_output.nn(tmp0_desc, 1, value.f33_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_25.prototype.hj = function (encoder, value) {
    return this.d33(encoder, value instanceof PaymentMethod ? value : THROW_CCE());
  };
  $serializer_25.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_25();
    return $serializer_instance_22;
  }
  function PaymentMethod_init_$Init$(seen1, objectId, title, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance_22().c33_1);
    $this.e33_1 = objectId;
    $this.f33_1 = title;
    return $this;
  }
  function PaymentMethod_init_$Create$(seen1, objectId, title, serializationConstructorMarker) {
    return PaymentMethod_init_$Init$(seen1, objectId, title, serializationConstructorMarker, Object.create(PaymentMethod.prototype));
  }
  function PaymentMethod() {
  }
  PaymentMethod.prototype.toString = function () {
    return 'PaymentMethod(objectId=' + this.e33_1 + ', title=' + this.f33_1 + ')';
  };
  PaymentMethod.prototype.hashCode = function () {
    var result = getStringHashCode(this.e33_1);
    result = imul(result, 31) + getStringHashCode(this.f33_1) | 0;
    return result;
  };
  PaymentMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentMethod))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentMethod ? other : THROW_CCE();
    if (!(this.e33_1 === tmp0_other_with_cast.e33_1))
      return false;
    if (!(this.f33_1 === tmp0_other_with_cast.f33_1))
      return false;
    return true;
  };
  PaymentMethod.$metadata$ = classMeta('PaymentMethod', [GQLObject], undefined, {0: $serializer_getInstance_22});
  function paymentField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_5());
      $this$field.t2q(title$factory());
      return Unit_getInstance();
    };
  }
  function objectId$factory_5() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.e33_1;
    }, null);
  }
  function title$factory() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.f33_1;
    }, null);
  }
  var properties_initialized_PaymentMethod_kt_jumsyf;
  function init_properties_PaymentMethod_kt_oxx5yr() {
    if (properties_initialized_PaymentMethod_kt_jumsyf) {
    } else {
      properties_initialized_PaymentMethod_kt_jumsyf = true;
      paymentField = field(paymentField$lambda());
    }
  }
  function $serializer_26() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Price', this, 2);
    tmp0_serialDesc.ys('value', false);
    tmp0_serialDesc.ys('currency', true);
    this.g33_1 = tmp0_serialDesc;
  }
  $serializer_26.prototype.gj = function () {
    return this.g33_1;
  };
  $serializer_26.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [DoubleSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_26.prototype.ij = function (decoder) {
    var tmp0_desc = this.g33_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.jm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return Price_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_26.prototype.h33 = function (encoder, value) {
    var tmp0_desc = this.g33_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.ln(tmp0_desc, 0, value.i33_1);
    if (tmp1_output.un(tmp0_desc, 1) ? true : !(value.j33_1 === ''))
      tmp1_output.nn(tmp0_desc, 1, value.j33_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_26.prototype.hj = function (encoder, value) {
    return this.h33(encoder, value instanceof Price ? value : THROW_CCE());
  };
  $serializer_26.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_26();
    return $serializer_instance_23;
  }
  function Price_init_$Init$(seen1, value, currency, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance_23().g33_1);
    $this.i33_1 = value;
    if (0 === (seen1 & 2))
      $this.j33_1 = '';
    else
      $this.j33_1 = currency;
    return $this;
  }
  function Price_init_$Create$(seen1, value, currency, serializationConstructorMarker) {
    return Price_init_$Init$(seen1, value, currency, serializationConstructorMarker, Object.create(Price.prototype));
  }
  function Price() {
  }
  Price.prototype.toString = function () {
    return 'Price(value=' + this.i33_1 + ', currency=' + this.j33_1 + ')';
  };
  Price.prototype.hashCode = function () {
    var result = getNumberHashCode(this.i33_1);
    result = imul(result, 31) + getStringHashCode(this.j33_1) | 0;
    return result;
  };
  Price.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Price))
      return false;
    var tmp0_other_with_cast = other instanceof Price ? other : THROW_CCE();
    if (!equals(this.i33_1, tmp0_other_with_cast.i33_1))
      return false;
    if (!(this.j33_1 === tmp0_other_with_cast.j33_1))
      return false;
    return true;
  };
  Price.$metadata$ = classMeta('Price', [GQLObject], undefined, {0: $serializer_getInstance_23});
  function get_productField() {
    init_properties_Product_kt_9xznkr();
    return productField;
  }
  var productField;
  function $serializer_27() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Product', this, 10);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('body', false);
    tmp0_serialDesc.ys('roast', false);
    tmp0_serialDesc.ys('name', false);
    tmp0_serialDesc.ys('acidity', false);
    tmp0_serialDesc.ys('region', false);
    tmp0_serialDesc.ys('description', false);
    tmp0_serialDesc.ys('thumbnail', false);
    tmp0_serialDesc.ys('price', false);
    tmp0_serialDesc.ys('categories', false);
    this.k33_1 = tmp0_serialDesc;
  }
  $serializer_27.prototype.gj = function () {
    return this.k33_1;
  };
  $serializer_27.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), $serializer_getInstance_25(), StringSerializer_getInstance(), $serializer_getInstance_20(), $serializer_getInstance_23(), $serializer_init_$Create$_1($serializer_getInstance_19())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_27.prototype.ij = function (decoder) {
    var tmp0_desc = this.k33_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.bm(tmp0_desc);
    if (tmp14_input.pm()) {
      tmp4_local0 = tmp14_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.gm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.gm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.lm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.gm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.mm(tmp0_desc, 5, $serializer_getInstance_25(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.lm(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.mm(tmp0_desc, 7, $serializer_getInstance_20(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.mm(tmp0_desc, 8, $serializer_getInstance_23(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.mm(tmp0_desc, 9, $serializer_init_$Create$_1($serializer_getInstance_19()), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.gm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.gm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.lm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.gm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.mm(tmp0_desc, 5, $serializer_getInstance_25(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.lm(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.mm(tmp0_desc, 7, $serializer_getInstance_20(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.mm(tmp0_desc, 8, $serializer_getInstance_23(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.mm(tmp0_desc, 9, $serializer_init_$Create$_1($serializer_getInstance_19()), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.cm(tmp0_desc);
    return Product_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  $serializer_27.prototype.l33 = function (encoder, value) {
    var tmp0_desc = this.k33_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.m33_1);
    tmp1_output.in(tmp0_desc, 1, value.n33_1);
    tmp1_output.in(tmp0_desc, 2, value.o33_1);
    tmp1_output.nn(tmp0_desc, 3, value.p33_1);
    tmp1_output.in(tmp0_desc, 4, value.q33_1);
    tmp1_output.on(tmp0_desc, 5, $serializer_getInstance_25(), value.r33_1);
    tmp1_output.nn(tmp0_desc, 6, value.s33_1);
    tmp1_output.on(tmp0_desc, 7, $serializer_getInstance_20(), value.t33_1);
    tmp1_output.on(tmp0_desc, 8, $serializer_getInstance_23(), value.u33_1);
    tmp1_output.on(tmp0_desc, 9, $serializer_init_$Create$_1($serializer_getInstance_19()), value.v33_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_27.prototype.hj = function (encoder, value) {
    return this.l33(encoder, value instanceof Product ? value : THROW_CCE());
  };
  $serializer_27.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_27();
    return $serializer_instance_24;
  }
  function Product_init_$Init$(seen1, objectId, body, roast, name, acidity, region, description, thumbnail, price, categories, serializationConstructorMarker, $this) {
    if (!(1023 === (1023 & seen1)))
      throwMissingFieldException(seen1, 1023, $serializer_getInstance_24().k33_1);
    $this.m33_1 = objectId;
    $this.n33_1 = body;
    $this.o33_1 = roast;
    $this.p33_1 = name;
    $this.q33_1 = acidity;
    $this.r33_1 = region;
    $this.s33_1 = description;
    $this.t33_1 = thumbnail;
    $this.u33_1 = price;
    $this.v33_1 = categories;
    return $this;
  }
  function Product_init_$Create$(seen1, objectId, body, roast, name, acidity, region, description, thumbnail, price, categories, serializationConstructorMarker) {
    return Product_init_$Init$(seen1, objectId, body, roast, name, acidity, region, description, thumbnail, price, categories, serializationConstructorMarker, Object.create(Product.prototype));
  }
  function Product() {
  }
  Product.prototype.toString = function () {
    return 'Product(objectId=' + this.m33_1 + ', body=' + this.n33_1 + ', roast=' + this.o33_1 + ', name=' + this.p33_1 + ', acidity=' + this.q33_1 + ', region=' + this.r33_1 + ', description=' + this.s33_1 + ', thumbnail=' + this.t33_1 + ', price=' + this.u33_1 + ', categories=' + this.v33_1 + ')';
  };
  Product.prototype.hashCode = function () {
    var result = getStringHashCode(this.m33_1);
    result = imul(result, 31) + this.n33_1 | 0;
    result = imul(result, 31) + this.o33_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.p33_1) | 0;
    result = imul(result, 31) + this.q33_1 | 0;
    result = imul(result, 31) + this.r33_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.s33_1) | 0;
    result = imul(result, 31) + this.t33_1.hashCode() | 0;
    result = imul(result, 31) + this.u33_1.hashCode() | 0;
    result = imul(result, 31) + this.v33_1.hashCode() | 0;
    return result;
  };
  Product.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Product))
      return false;
    var tmp0_other_with_cast = other instanceof Product ? other : THROW_CCE();
    if (!(this.m33_1 === tmp0_other_with_cast.m33_1))
      return false;
    if (!(this.n33_1 === tmp0_other_with_cast.n33_1))
      return false;
    if (!(this.o33_1 === tmp0_other_with_cast.o33_1))
      return false;
    if (!(this.p33_1 === tmp0_other_with_cast.p33_1))
      return false;
    if (!(this.q33_1 === tmp0_other_with_cast.q33_1))
      return false;
    if (!this.r33_1.equals(tmp0_other_with_cast.r33_1))
      return false;
    if (!(this.s33_1 === tmp0_other_with_cast.s33_1))
      return false;
    if (!this.t33_1.equals(tmp0_other_with_cast.t33_1))
      return false;
    if (!this.u33_1.equals(tmp0_other_with_cast.u33_1))
      return false;
    if (!this.v33_1.equals(tmp0_other_with_cast.v33_1))
      return false;
    return true;
  };
  Product.$metadata$ = classMeta('Product', [GQLObject], undefined, {0: $serializer_getInstance_24});
  function productField$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(node$factory_7(), get_categoryField(), []);
      return Unit_getInstance();
    };
  }
  function productField$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_7();
      $this$field.i2l(tmp, [], productField$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function productField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_6());
      $this$field.o2y(body$factory());
      $this$field.o2y(roast$factory());
      $this$field.t2q(name$factory_1());
      $this$field.o2y(acidity$factory());
      $this$field.h2b(region$factory(), get_regionField(), []);
      $this$field.t2q(description$factory());
      $this$field.h2b(thumbnail$factory(), get_fileField(), []);
      $this$field.p2y(price$factory());
      var tmp = categories$factory_0();
      $this$field.i2b(tmp, [], productField$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function objectId$factory_6() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.m33_1;
    }, null);
  }
  function body$factory() {
    return getPropertyCallableRef('body', 1, KProperty1, function (receiver) {
      return receiver.n33_1;
    }, null);
  }
  function roast$factory() {
    return getPropertyCallableRef('roast', 1, KProperty1, function (receiver) {
      return receiver.o33_1;
    }, null);
  }
  function name$factory_1() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.p33_1;
    }, null);
  }
  function acidity$factory() {
    return getPropertyCallableRef('acidity', 1, KProperty1, function (receiver) {
      return receiver.q33_1;
    }, null);
  }
  function region$factory() {
    return getPropertyCallableRef('region', 1, KMutableProperty1, function (receiver) {
      return receiver.r33_1;
    }, function (receiver, value) {
      receiver.r33_1 = value;
      return Unit_getInstance();
    });
  }
  function description$factory() {
    return getPropertyCallableRef('description', 1, KProperty1, function (receiver) {
      return receiver.s33_1;
    }, null);
  }
  function thumbnail$factory() {
    return getPropertyCallableRef('thumbnail', 1, KProperty1, function (receiver) {
      return receiver.t33_1;
    }, null);
  }
  function price$factory() {
    return getPropertyCallableRef('price', 1, KProperty1, function (receiver) {
      return receiver.u33_1;
    }, null);
  }
  function categories$factory_0() {
    return getPropertyCallableRef('categories', 1, KProperty1, function (receiver) {
      return receiver.v33_1;
    }, null);
  }
  function edges$factory_7() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_7() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  var properties_initialized_Product_kt_d4u3i9;
  function init_properties_Product_kt_9xznkr() {
    if (properties_initialized_Product_kt_d4u3i9) {
    } else {
      properties_initialized_Product_kt_d4u3i9 = true;
      productField = field(productField$lambda());
    }
  }
  function get_regionField() {
    init_properties_Region_kt_29iciu();
    return regionField;
  }
  var regionField;
  function $serializer_28() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.Region', this, 2);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('name', false);
    this.w33_1 = tmp0_serialDesc;
  }
  $serializer_28.prototype.gj = function () {
    return this.w33_1;
  };
  $serializer_28.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_28.prototype.ij = function (decoder) {
    var tmp0_desc = this.w33_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return Region_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_28.prototype.x33 = function (encoder, value) {
    var tmp0_desc = this.w33_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.y33_1);
    tmp1_output.nn(tmp0_desc, 1, value.z33_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_28.prototype.hj = function (encoder, value) {
    return this.x33(encoder, value instanceof Region ? value : THROW_CCE());
  };
  $serializer_28.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_28();
    return $serializer_instance_25;
  }
  function Region_init_$Init$(seen1, objectId, name, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance_25().w33_1);
    $this.y33_1 = objectId;
    $this.z33_1 = name;
    return $this;
  }
  function Region_init_$Create$(seen1, objectId, name, serializationConstructorMarker) {
    return Region_init_$Init$(seen1, objectId, name, serializationConstructorMarker, Object.create(Region.prototype));
  }
  function Region() {
  }
  Region.prototype.toString = function () {
    return 'Region(objectId=' + this.y33_1 + ', name=' + this.z33_1 + ')';
  };
  Region.prototype.hashCode = function () {
    var result = getStringHashCode(this.y33_1);
    result = imul(result, 31) + getStringHashCode(this.z33_1) | 0;
    return result;
  };
  Region.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Region))
      return false;
    var tmp0_other_with_cast = other instanceof Region ? other : THROW_CCE();
    if (!(this.y33_1 === tmp0_other_with_cast.y33_1))
      return false;
    if (!(this.z33_1 === tmp0_other_with_cast.z33_1))
      return false;
    return true;
  };
  Region.$metadata$ = classMeta('Region', [GQLObject], undefined, {0: $serializer_getInstance_25});
  function regionField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_7());
      $this$field.t2q(name$factory_2());
      return Unit_getInstance();
    };
  }
  function objectId$factory_7() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.y33_1;
    }, null);
  }
  function name$factory_2() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.z33_1;
    }, null);
  }
  var properties_initialized_Region_kt_xnhmgm;
  function init_properties_Region_kt_29iciu() {
    if (properties_initialized_Region_kt_xnhmgm) {
    } else {
      properties_initialized_Region_kt_xnhmgm = true;
      regionField = field(regionField$lambda());
    }
  }
  function get_shippingField() {
    init_properties_ShippingMethod_kt_8z8mh7();
    return shippingField;
  }
  var shippingField;
  function $serializer_29() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.ShippingMethod', this, 2);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('title', false);
    this.a34_1 = tmp0_serialDesc;
  }
  $serializer_29.prototype.gj = function () {
    return this.a34_1;
  };
  $serializer_29.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_29.prototype.ij = function (decoder) {
    var tmp0_desc = this.a34_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bm(tmp0_desc);
    if (tmp6_input.pm()) {
      tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.cm(tmp0_desc);
    return ShippingMethod_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_29.prototype.b34 = function (encoder, value) {
    var tmp0_desc = this.a34_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.c34_1);
    tmp1_output.nn(tmp0_desc, 1, value.d34_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_29.prototype.hj = function (encoder, value) {
    return this.b34(encoder, value instanceof ShippingMethod ? value : THROW_CCE());
  };
  $serializer_29.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_29();
    return $serializer_instance_26;
  }
  function ShippingMethod_init_$Init$(seen1, objectId, title, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance_26().a34_1);
    $this.c34_1 = objectId;
    $this.d34_1 = title;
    return $this;
  }
  function ShippingMethod_init_$Create$(seen1, objectId, title, serializationConstructorMarker) {
    return ShippingMethod_init_$Init$(seen1, objectId, title, serializationConstructorMarker, Object.create(ShippingMethod.prototype));
  }
  function ShippingMethod() {
  }
  ShippingMethod.prototype.toString = function () {
    return 'ShippingMethod(objectId=' + this.c34_1 + ', title=' + this.d34_1 + ')';
  };
  ShippingMethod.prototype.hashCode = function () {
    var result = getStringHashCode(this.c34_1);
    result = imul(result, 31) + getStringHashCode(this.d34_1) | 0;
    return result;
  };
  ShippingMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ShippingMethod))
      return false;
    var tmp0_other_with_cast = other instanceof ShippingMethod ? other : THROW_CCE();
    if (!(this.c34_1 === tmp0_other_with_cast.c34_1))
      return false;
    if (!(this.d34_1 === tmp0_other_with_cast.d34_1))
      return false;
    return true;
  };
  ShippingMethod.$metadata$ = classMeta('ShippingMethod', [GQLObject], undefined, {0: $serializer_getInstance_26});
  function shippingField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_8());
      $this$field.t2q(title$factory_0());
      return Unit_getInstance();
    };
  }
  function objectId$factory_8() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.c34_1;
    }, null);
  }
  function title$factory_0() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.d34_1;
    }, null);
  }
  var properties_initialized_ShippingMethod_kt_oqxptb;
  function init_properties_ShippingMethod_kt_8z8mh7() {
    if (properties_initialized_ShippingMethod_kt_oqxptb) {
    } else {
      properties_initialized_ShippingMethod_kt_oqxptb = true;
      shippingField = field(shippingField$lambda());
    }
  }
  function get_userField() {
    init_properties_User_kt_lqis8f();
    return userField;
  }
  var userField;
  function $serializer_30() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.haymob.coffeeshopsdk.entities.User', this, 7);
    tmp0_serialDesc.ys('objectId', false);
    tmp0_serialDesc.ys('firstName', false);
    tmp0_serialDesc.ys('lastName', false);
    tmp0_serialDesc.ys('email', false);
    tmp0_serialDesc.ys('addresses', false);
    tmp0_serialDesc.ys('wishlist', false);
    tmp0_serialDesc.ys('orders', false);
    this.e34_1 = tmp0_serialDesc;
  }
  $serializer_30.prototype.gj = function () {
    return this.e34_1;
  };
  $serializer_30.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_init_$Create$_1($serializer_getInstance_16()), $serializer_init_$Create$_1($serializer_getInstance_24()), $serializer_init_$Create$_1($serializer_getInstance_21())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_30.prototype.ij = function (decoder) {
    var tmp0_desc = this.e34_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.bm(tmp0_desc);
    if (tmp11_input.pm()) {
      tmp4_local0 = tmp11_input.lm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.lm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.lm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.mm(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_16()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.mm(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_24()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.mm(tmp0_desc, 6, $serializer_init_$Create$_1($serializer_getInstance_21()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.qm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.lm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.lm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.lm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.mm(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_16()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.mm(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_24()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.mm(tmp0_desc, 6, $serializer_init_$Create$_1($serializer_getInstance_21()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.cm(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  $serializer_30.prototype.f34 = function (encoder, value) {
    var tmp0_desc = this.e34_1;
    var tmp1_output = encoder.bm(tmp0_desc);
    tmp1_output.nn(tmp0_desc, 0, value.g34_1);
    tmp1_output.nn(tmp0_desc, 1, value.h34_1);
    tmp1_output.nn(tmp0_desc, 2, value.i34_1);
    tmp1_output.nn(tmp0_desc, 3, value.j34_1);
    tmp1_output.on(tmp0_desc, 4, $serializer_init_$Create$_1($serializer_getInstance_16()), value.k34_1);
    tmp1_output.on(tmp0_desc, 5, $serializer_init_$Create$_1($serializer_getInstance_24()), value.l34_1);
    tmp1_output.on(tmp0_desc, 6, $serializer_init_$Create$_1($serializer_getInstance_21()), value.m34_1);
    tmp1_output.cm(tmp0_desc);
  };
  $serializer_30.prototype.hj = function (encoder, value) {
    return this.f34(encoder, value instanceof User ? value : THROW_CCE());
  };
  $serializer_30.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_30();
    return $serializer_instance_27;
  }
  function User_init_$Init$(seen1, objectId, firstName, lastName, email, addresses, wishlist, orders, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen1)))
      throwMissingFieldException(seen1, 127, $serializer_getInstance_27().e34_1);
    $this.g34_1 = objectId;
    $this.h34_1 = firstName;
    $this.i34_1 = lastName;
    $this.j34_1 = email;
    $this.k34_1 = addresses;
    $this.l34_1 = wishlist;
    $this.m34_1 = orders;
    return $this;
  }
  function User_init_$Create$(seen1, objectId, firstName, lastName, email, addresses, wishlist, orders, serializationConstructorMarker) {
    return User_init_$Init$(seen1, objectId, firstName, lastName, email, addresses, wishlist, orders, serializationConstructorMarker, Object.create(User.prototype));
  }
  function User() {
  }
  User.prototype.toString = function () {
    return 'User(objectId=' + this.g34_1 + ', firstName=' + this.h34_1 + ', lastName=' + this.i34_1 + ', email=' + this.j34_1 + ', addresses=' + this.k34_1 + ', wishlist=' + this.l34_1 + ', orders=' + this.m34_1 + ')';
  };
  User.prototype.hashCode = function () {
    var result = getStringHashCode(this.g34_1);
    result = imul(result, 31) + getStringHashCode(this.h34_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i34_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j34_1) | 0;
    result = imul(result, 31) + this.k34_1.hashCode() | 0;
    result = imul(result, 31) + this.l34_1.hashCode() | 0;
    result = imul(result, 31) + this.m34_1.hashCode() | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.g34_1 === tmp0_other_with_cast.g34_1))
      return false;
    if (!(this.h34_1 === tmp0_other_with_cast.h34_1))
      return false;
    if (!(this.i34_1 === tmp0_other_with_cast.i34_1))
      return false;
    if (!(this.j34_1 === tmp0_other_with_cast.j34_1))
      return false;
    if (!this.k34_1.equals(tmp0_other_with_cast.k34_1))
      return false;
    if (!this.l34_1.equals(tmp0_other_with_cast.l34_1))
      return false;
    if (!this.m34_1.equals(tmp0_other_with_cast.m34_1))
      return false;
    return true;
  };
  User.$metadata$ = classMeta('User', [GQLObject], undefined, {0: $serializer_getInstance_27});
  function userField$lambda$lambda$lambda() {
    return function ($this$field) {
      $this$field.h2b(node$factory_8(), get_addressField(), []);
      return Unit_getInstance();
    };
  }
  function userField$lambda$lambda() {
    return function ($this$field) {
      var tmp = edges$factory_8();
      $this$field.i2l(tmp, [], userField$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function userField$lambda$lambda$lambda_0() {
    return function ($this$field) {
      $this$field.h2b(node$factory_9(), get_productField(), []);
      return Unit_getInstance();
    };
  }
  function userField$lambda$lambda_0() {
    return function ($this$field) {
      var tmp = edges$factory_9();
      $this$field.i2l(tmp, [], userField$lambda$lambda$lambda_0());
      return Unit_getInstance();
    };
  }
  function userField$lambda$lambda$lambda_1() {
    return function ($this$field) {
      $this$field.h2b(node$factory_10(), get_orderField(), []);
      return Unit_getInstance();
    };
  }
  function userField$lambda$lambda_1() {
    return function ($this$field) {
      var tmp = edges$factory_10();
      $this$field.i2l(tmp, [], userField$lambda$lambda$lambda_1());
      return Unit_getInstance();
    };
  }
  function userField$lambda() {
    return function ($this$field) {
      $this$field.t2q(objectId$factory_9());
      $this$field.t2q(firstName$factory_0());
      $this$field.t2q(lastName$factory_0());
      $this$field.t2q(email$factory());
      var tmp = addresses$factory();
      $this$field.i2b(tmp, [], userField$lambda$lambda());
      var tmp_0 = wishlist$factory();
      $this$field.i2b(tmp_0, [], userField$lambda$lambda_0());
      var tmp_1 = orders$factory();
      $this$field.i2b(tmp_1, [], userField$lambda$lambda_1());
      return Unit_getInstance();
    };
  }
  function objectId$factory_9() {
    return getPropertyCallableRef('objectId', 1, KProperty1, function (receiver) {
      return receiver.g34_1;
    }, null);
  }
  function firstName$factory_0() {
    return getPropertyCallableRef('firstName', 1, KProperty1, function (receiver) {
      return receiver.h34_1;
    }, null);
  }
  function lastName$factory_0() {
    return getPropertyCallableRef('lastName', 1, KProperty1, function (receiver) {
      return receiver.i34_1;
    }, null);
  }
  function email$factory() {
    return getPropertyCallableRef('email', 1, KProperty1, function (receiver) {
      return receiver.j34_1;
    }, null);
  }
  function addresses$factory() {
    return getPropertyCallableRef('addresses', 1, KProperty1, function (receiver) {
      return receiver.k34_1;
    }, null);
  }
  function wishlist$factory() {
    return getPropertyCallableRef('wishlist', 1, KMutableProperty1, function (receiver) {
      return receiver.l34_1;
    }, function (receiver, value) {
      receiver.l34_1 = value;
      return Unit_getInstance();
    });
  }
  function orders$factory() {
    return getPropertyCallableRef('orders', 1, KProperty1, function (receiver) {
      return receiver.m34_1;
    }, null);
  }
  function edges$factory_8() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_8() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function edges$factory_9() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_9() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  function edges$factory_10() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return receiver.x2m_1;
    }, null);
  }
  function node$factory_10() {
    return getPropertyCallableRef('node', 1, KProperty1, function (receiver) {
      return receiver.y2m_1;
    }, null);
  }
  var properties_initialized_User_kt_k5uoj;
  function init_properties_User_kt_lqis8f() {
    if (properties_initialized_User_kt_k5uoj) {
    } else {
      properties_initialized_User_kt_k5uoj = true;
      userField = field(userField$lambda());
    }
  }
  function http_0(type, url, appId, masterKey, sessionToken, path, body, isLoggingEnabled) {
    var _url = {_v: url};
    var tmp;
    if (equals(new Char(last(_url._v)), new Char(_Char___init__impl__6a9atx(47)))) {
      var tmp$ret$0;
      {
        var tmp0_isNotEmpty = _url._v;
        tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp)
      _url._v = dropLast(_url._v, 1);
    return callbackFlow(http$slambda_0(appId, masterKey, sessionToken, type, isLoggingEnabled, _url, path, body, null));
  }
  function Req(method, url, body) {
    this.n34_1 = method;
    this.o34_1 = url;
    this.p34_1 = body;
  }
  Req.prototype.toString = function () {
    return 'Req(method=' + this.n34_1 + ', url=' + this.o34_1 + ', body=' + this.p34_1 + ')';
  };
  Req.prototype.hashCode = function () {
    var result = getStringHashCode(this.n34_1);
    result = imul(result, 31) + getStringHashCode(this.o34_1) | 0;
    result = imul(result, 31) + (this.p34_1 == null ? 0 : getStringHashCode(this.p34_1)) | 0;
    return result;
  };
  Req.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Req))
      return false;
    var tmp0_other_with_cast = other instanceof Req ? other : THROW_CCE();
    if (!(this.n34_1 === tmp0_other_with_cast.n34_1))
      return false;
    if (!(this.o34_1 === tmp0_other_with_cast.o34_1))
      return false;
    if (!(this.p34_1 == tmp0_other_with_cast.p34_1))
      return false;
    return true;
  };
  Req.$metadata$ = classMeta('Req');
  function http$slambda$lambda$lambda($resp) {
    return function (it) {
      return new Pair(it, $resp.status);
    };
  }
  function http$slambda$lambda() {
    return function (resp) {
      var tmp = resp.text();
      return tmp.then(http$slambda$lambda$lambda(resp));
    };
  }
  function http$slambda$lambda$lambda_0() {
    return function ($this$Json) {
      $this$Json.w10_1 = true;
      return Unit_getInstance();
    };
  }
  function http$slambda$lambda_0($isCanceled, $this_callbackFlow, $isLoggingEnabled) {
    return function (it) {
      var tmp0_container = it;
      var text = tmp0_container.b3();
      var code = tmp0_container.c3();
      var tmp;
      if (!$isCanceled._v ? code === 200 : false) {
        $this_callbackFlow.k1m(text);
        var tmp_0;
        if ($isLoggingEnabled) {
          var tmp$ret$7;
          {
            var tmp$ret$2;
            {
              var tmp0_decodeFromString = Default_getInstance();
              var tmp$ret$1;
              {
                var tmp1_serializer = tmp0_decodeFromString.ak();
                var tmp$ret$0;
                {
                  var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
                }
                tmp$ret$1 = tmp$ret$0;
              }
              tmp$ret$2 = tmp0_decodeFromString.zj(tmp$ret$1, text);
            }
            var tmp1_run = tmp$ret$2;
            {
            }
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                var tmp0_encodeToString = Json$default(null, http$slambda$lambda$lambda_0(), 1, null);
                var tmp$ret$4;
                {
                  var tmp1_serializer_0 = tmp0_encodeToString.ak();
                  var tmp$ret$3;
                  {
                    var tmp0_cast_0 = serializer(tmp1_serializer_0, createKType(getKClass(JsonObject), arrayOf([]), false));
                    tmp$ret$3 = isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE();
                  }
                  tmp$ret$4 = tmp$ret$3;
                }
                tmp$ret$5 = tmp0_encodeToString.yj(tmp$ret$4, tmp1_run);
              }
              tmp$ret$6 = tmp$ret$5;
            }
            tmp$ret$7 = tmp$ret$6;
          }
          var printedResp = tmp$ret$7;
          tmp_0 = println(printedResp);
        }
        tmp = tmp_0;
      } else if (!$isCanceled._v) {
        var tmp$ret$10;
        {
          var tmp2_decodeFromString = Default_getInstance();
          var tmp$ret$9;
          {
            var tmp1_serializer_1 = tmp2_decodeFromString.ak();
            var tmp$ret$8;
            {
              var tmp0_cast_1 = serializer(tmp1_serializer_1, createKType(getKClass(JsonObject), arrayOf([]), false));
              tmp$ret$8 = isInterface(tmp0_cast_1, KSerializer) ? tmp0_cast_1 : THROW_CCE();
            }
            tmp$ret$9 = tmp$ret$8;
          }
          tmp$ret$10 = tmp2_decodeFromString.zj(tmp$ret$9, text);
        }
        var json = tmp$ret$10;
        var tmp1_safe_receiver = json.x11('errors');
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonArray(tmp1_safe_receiver);
        var tmp_1;
        if (tmp2_safe_receiver == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$13;
          {
            var tmp$ret$12;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
              var tmp0_iterator = tmp2_safe_receiver.d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp$ret$11;
                {
                  var tmp0_safe_receiver = get_jsonObject(item).x11('message');
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
                  tmp$ret$11 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
                }
                tmp0_mapTo.b(tmp$ret$11);
              }
              tmp$ret$12 = tmp0_mapTo;
            }
            tmp$ret$13 = tmp$ret$12;
          }
          tmp_1 = tmp$ret$13;
        }
        var tmp3_elvis_lhs = tmp_1;
        var tmp_2 = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
        var error = joinToString$default(tmp_2, '\n\n', null, null, 0, null, null, 62, null);
        throw new InternalServerException(code, error);
      }
      return Unit_getInstance();
    };
  }
  function http$slambda$lambda_1($isCanceled, $this_callbackFlow) {
    return function (it) {
      var tmp;
      if (!$isCanceled._v) {
        $this_callbackFlow.z1l(it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function http$slambda$lambda_2($isCanceled, $this_callbackFlow) {
    return function () {
      $isCanceled._v = true;
      cancel$default($this_callbackFlow, null, 1, null);
      return Unit_getInstance();
    };
  }
  function http$slambda($appId, $masterKey, $sessionToken, $type, $isLoggingEnabled, $_url, $path, $body, resultContinuation) {
    this.y34_1 = $appId;
    this.z34_1 = $masterKey;
    this.a35_1 = $sessionToken;
    this.b35_1 = $type;
    this.c35_1 = $isLoggingEnabled;
    this.d35_1 = $_url;
    this.e35_1 = $path;
    this.f35_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  http$slambda.prototype.m35 = function ($this$callbackFlow, $cont) {
    var tmp = this.n35($this$callbackFlow, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  http$slambda.prototype.ki = function (p1, $cont) {
    return this.m35((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  http$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 2;
            this.h35_1 = {};
            this.h35_1['Content-Type'] = 'application/json';
            this.h35_1['X-Parse-Application-Id'] = this.y34_1;
            this.h35_1['X-Parse-Master-Key'] = this.z34_1;
            if (!(this.a35_1 == null)) {
              this.h35_1['X-Parse-Session-Token'] = this.a35_1;
            }

            var tmp_0 = this;
            var tmp0_subject = this.b35_1;
            var tmp_1;
            if (tmp0_subject instanceof GraphQL) {
              if (this.c35_1)
                println('request: ' + this.b35_1.x2y_1.v2y());
              tmp_1 = new Req('POST', this.d35_1._v + '/graphql/', this.b35_1.x2y_1.w2y());
            } else {
              if (tmp0_subject instanceof Rest) {
                if (this.c35_1)
                  println('request: ' + this.e35_1);
                var tmp0_uppercase = '' + this.b35_1.o35_1;
                tmp_1 = new Req(tmp0_uppercase.toUpperCase(), this.d35_1._v + '/' + this.e35_1, this.f35_1);
              } else {
                noWhenBranchMatchedException();
              }
            }

            tmp_0.i35_1 = tmp_1;
            this.j35_1 = {_v: false};
            var tmp_2 = this;
            var tmp_3 = window;
            var tmp1_method = this.i35_1.n34_1;
            var tmp2_body = this.i35_1.p34_1;
            var tmp1__get_OMIT__a1z29z = null;
            var tmp0_unsafeCast = 'omit';
            var tmp3_credentials = tmp0_unsafeCast;
            var tmp2_RequestInit = undefined;
            var tmp3_RequestInit = undefined;
            var tmp4_RequestInit = undefined;
            var tmp5_RequestInit = undefined;
            var tmp6_RequestInit = undefined;
            var tmp7_RequestInit = undefined;
            var tmp8_RequestInit = undefined;
            var tmp9_RequestInit = undefined;
            var o = {};
            o['method'] = tmp1_method;
            o['headers'] = this.h35_1;
            o['body'] = tmp2_body;
            o['referrer'] = tmp2_RequestInit;
            o['referrerPolicy'] = tmp3_RequestInit;
            o['mode'] = tmp4_RequestInit;
            o['credentials'] = tmp3_credentials;
            o['cache'] = tmp5_RequestInit;
            o['redirect'] = tmp6_RequestInit;
            o['integrity'] = tmp7_RequestInit;
            o['keepalive'] = tmp8_RequestInit;
            o['window'] = tmp9_RequestInit;
            var tmp_4 = tmp_3.fetch(this.i35_1.o34_1, o);
            tmp_2.k35_1 = tmp_4.then(http$slambda$lambda());
            var tmp_5 = this;
            tmp_5.l35_1 = http$slambda$lambda_0(this.j35_1, this.g35_1, this.c35_1);
            var tmp_6 = this.k35_1.then(this.l35_1);
            tmp_6.catch(http$slambda$lambda_1(this.j35_1, this.g35_1));
            ;
            this.zh_1 = 1;
            suspendResult = awaitClose(this.g35_1, http$slambda$lambda_2(this.j35_1, this.g35_1), this);
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
  http$slambda.prototype.n35 = function ($this$callbackFlow, completion) {
    var i = new http$slambda(this.y34_1, this.z34_1, this.a35_1, this.b35_1, this.c35_1, this.d35_1, this.e35_1, this.f35_1, completion);
    i.g35_1 = $this$callbackFlow;
    return i;
  };
  http$slambda.$metadata$ = classMeta('http$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function http$slambda_0($appId, $masterKey, $sessionToken, $type, $isLoggingEnabled, $_url, $path, $body, resultContinuation) {
    var i = new http$slambda($appId, $masterKey, $sessionToken, $type, $isLoggingEnabled, $_url, $path, $body, resultContinuation);
    var l = function ($this$callbackFlow, $cont) {
      return i.m35($this$callbackFlow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  //region block: post-declaration
  $serializer.prototype.bt = typeParametersSerializers;
  $serializer_0.prototype.bt = typeParametersSerializers;
  $serializer_1.prototype.bt = typeParametersSerializers;
  $serializer_2.prototype.bt = typeParametersSerializers;
  $serializer_3.prototype.bt = typeParametersSerializers;
  $serializer_4.prototype.bt = typeParametersSerializers;
  $serializer_5.prototype.bt = typeParametersSerializers;
  $serializer_6.prototype.bt = typeParametersSerializers;
  $serializer_7.prototype.bt = typeParametersSerializers;
  $serializer_8.prototype.bt = typeParametersSerializers;
  $serializer_9.prototype.bt = typeParametersSerializers;
  $serializer_10.prototype.bt = typeParametersSerializers;
  $serializer_11.prototype.bt = typeParametersSerializers;
  $serializer_12.prototype.bt = typeParametersSerializers;
  $serializer_14.prototype.bt = typeParametersSerializers;
  $serializer_15.prototype.bt = typeParametersSerializers;
  $serializer_16.prototype.bt = typeParametersSerializers;
  $serializer_17.prototype.bt = typeParametersSerializers;
  $serializer_18.prototype.bt = typeParametersSerializers;
  $serializer_19.prototype.bt = typeParametersSerializers;
  $serializer_20.prototype.bt = typeParametersSerializers;
  $serializer_21.prototype.bt = typeParametersSerializers;
  $serializer_24.prototype.bt = typeParametersSerializers;
  $serializer_25.prototype.bt = typeParametersSerializers;
  $serializer_26.prototype.bt = typeParametersSerializers;
  $serializer_27.prototype.bt = typeParametersSerializers;
  $serializer_28.prototype.bt = typeParametersSerializers;
  $serializer_29.prototype.bt = typeParametersSerializers;
  $serializer_30.prototype.bt = typeParametersSerializers;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Cart;
  //endregion
  return _;
}));

//# sourceMappingURL=CoffeeShop-CoffeeShopSDK.js.map