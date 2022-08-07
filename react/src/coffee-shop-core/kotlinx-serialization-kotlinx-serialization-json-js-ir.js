(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var classMeta = kotlin_kotlin.$_$.p6;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var toString = kotlin_kotlin.$_$.q7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charSequenceGet = kotlin_kotlin.$_$.m6;
  var Char = kotlin_kotlin.$_$.v8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x1;
  var equals = kotlin_kotlin.$_$.q6;
  var Annotation = kotlin_kotlin.$_$.u8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var hashCode = kotlin_kotlin.$_$.v6;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var Map = kotlin_kotlin.$_$.v3;
  var List = kotlin_kotlin.$_$.t3;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.u6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.z9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var toLongOrNull = kotlin_kotlin.$_$.l8;
  var toDoubleOrNull = kotlin_kotlin.$_$.h8;
  var toInt = kotlin_kotlin.$_$.k8;
  var toLong = kotlin_kotlin.$_$.m8;
  var toDouble = kotlin_kotlin.$_$.i8;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.a3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toULongOrNull = kotlin_kotlin.$_$.p8;
  var Companion_getInstance = kotlin_kotlin.$_$.i3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n2;
  var ULong = kotlin_kotlin.$_$.n9;
  var isInterface = kotlin_kotlin.$_$.e7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var lazy_0 = kotlin_kotlin.$_$.aa;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.y7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t6;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toLong_0 = kotlin_kotlin.$_$.o7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.l2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.o2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.i2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.p2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.r2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.k6;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.n6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.o6;
  var coerceAtLeast = kotlin_kotlin.$_$.s7;
  var coerceAtMost = kotlin_kotlin.$_$.t7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var singleOrNull = kotlin_kotlin.$_$.f5;
  var arrayIterator = kotlin_kotlin.$_$.i6;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var getValue = kotlin_kotlin.$_$.u4;
  var copyOf = kotlin_kotlin.$_$.m4;
  var copyOf_0 = kotlin_kotlin.$_$.n4;
  var fillArrayVal = kotlin_kotlin.$_$.r6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.w8;
  var invoke = kotlin_kotlin.$_$.w9;
  var CoroutineImpl = kotlin_kotlin.$_$.c6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.x8;
  var Unit = kotlin_kotlin.$_$.p9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n5;
  var SuspendFunction2 = kotlin_kotlin.$_$.e6;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var isObject = kotlin_kotlin.$_$.g7;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var plus = kotlin_kotlin.$_$.ca;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.b9;
  var isFinite = kotlin_kotlin.$_$.y9;
  var isFinite_0 = kotlin_kotlin.$_$.x9;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toUInt = kotlin_kotlin.$_$.o8;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k2;
  var toULong = kotlin_kotlin.$_$.q8;
  var toUByte = kotlin_kotlin.$_$.n8;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h2;
  var toUShort = kotlin_kotlin.$_$.r8;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.q2;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toString_0 = kotlin_kotlin.$_$.a2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.j3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.e5;
  var numberToChar = kotlin_kotlin.$_$.l7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z1;
  var equals_0 = kotlin_kotlin.$_$.b8;
  var toByte = kotlin_kotlin.$_$.n7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.j1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.z2;
  var toShort = kotlin_kotlin.$_$.p7;
  var single = kotlin_kotlin.$_$.f8;
  var emptySet = kotlin_kotlin.$_$.r4;
  var plus_0 = kotlin_kotlin.$_$.c5;
  var toList = kotlin_kotlin.$_$.i5;
  var Enum = kotlin_kotlin.$_$.y8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var last = kotlin_kotlin.$_$.a5;
  var removeLast = kotlin_kotlin.$_$.d5;
  var lastIndexOf$default = kotlin_kotlin.$_$.l;
  var Long = kotlin_kotlin.$_$.d9;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.y1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.e3;
  var charArray = kotlin_kotlin.$_$.l6;
  var indexOf$default = kotlin_kotlin.$_$.k;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.yz_1 = configuration;
    this.zz_1 = serializersModule;
    this.a10_1 = new DescriptorSchemaCache();
  }
  Json.prototype.b10 = function () {
    return this.yz_1;
  };
  Json.prototype.ak = function () {
    return this.zz_1;
  };
  Json.prototype.yj = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.d10();
    }
  };
  Json.prototype.zj = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.gj(), null);
    var result = input.am(deserializer);
    lexer.q10();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.zo();
    return new JsonImpl(conf, builder.d11_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.r10_1 = json.yz_1.e11_1;
    this.s10_1 = json.yz_1.j11_1;
    this.t10_1 = json.yz_1.f11_1;
    this.u10_1 = json.yz_1.g11_1;
    this.v10_1 = json.yz_1.h11_1;
    this.w10_1 = json.yz_1.i11_1;
    this.x10_1 = json.yz_1.k11_1;
    this.y10_1 = json.yz_1.l11_1;
    this.z10_1 = json.yz_1.m11_1;
    this.a11_1 = json.yz_1.n11_1;
    this.b11_1 = json.yz_1.o11_1;
    this.c11_1 = json.yz_1.p11_1;
    this.d11_1 = json.ak();
  }
  JsonBuilder.prototype.q11 = function (_set____db54di) {
    this.w10_1 = _set____db54di;
  };
  JsonBuilder.prototype.r11 = function () {
    return this.x10_1;
  };
  JsonBuilder.prototype.zo = function () {
    if (this.z10_1) {
      var tmp0_require = this.a11_1 === 'type';
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.w10_1) {
      {
        var tmp1_require = this.x10_1 === '    ';
        {
        }
        if (!tmp1_require) {
          var tmp$ret$1;
          {
            tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
          }
          var message_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
    } else if (!(this.x10_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        var tmp2_all = this.x10_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          {
            tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          }
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      {
        {
        }
        if (!allWhitespaces) {
          var tmp$ret$4;
          {
            tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.x10_1;
          }
          var message_1 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        }
      }
    }
    return new JsonConfiguration(this.r10_1, this.t10_1, this.u10_1, this.v10_1, this.w10_1, this.s10_1, this.x10_1, this.y10_1, this.z10_1, this.a11_1, this.b11_1, this.c11_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.ak(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.b10().m11_1, $this.b10().n11_1);
    $this.ak().hz(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.e11_1 = encodeDefaults;
    this.f11_1 = ignoreUnknownKeys;
    this.g11_1 = isLenient;
    this.h11_1 = allowStructuredMapKeys;
    this.i11_1 = prettyPrint;
    this.j11_1 = explicitNulls;
    this.k11_1 = prettyPrintIndent;
    this.l11_1 = coerceInputValues;
    this.m11_1 = useArrayPolymorphism;
    this.n11_1 = classDiscriminator;
    this.o11_1 = allowSpecialFloatingPointValues;
    this.p11_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.s11 = function () {
    return this.g11_1;
  };
  JsonConfiguration.prototype.r11 = function () {
    return this.k11_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.e11_1 + ', ignoreUnknownKeys=' + this.f11_1 + ', isLenient=' + this.g11_1 + ', ' + ('allowStructuredMapKeys=' + this.h11_1 + ', prettyPrint=' + this.i11_1 + ', explicitNulls=' + this.j11_1 + ', ') + ("prettyPrintIndent='" + this.k11_1 + "', coerceInputValues=" + this.l11_1 + ', useArrayPolymorphism=' + this.m11_1 + ', ') + ("classDiscriminator='" + this.n11_1 + "', allowSpecialFloatingPointValues=" + this.o11_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonObject$toString$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.j1();
      }
      var k = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.l1();
      }
      var v = tmp$ret$1;
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp0_apply = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply, k);
            tmp0_apply.l4(_Char___init__impl__6a9atx(58));
            tmp0_apply.r5(v);
          }
          tmp$ret$2 = tmp0_apply;
        }
        tmp$ret$3 = tmp$ret$2.toString();
      }
      return tmp$ret$3;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_5();
    JsonElement.call(this);
    this.v11_1 = content;
  }
  JsonObject.prototype.j = function () {
    return this.v11_1.j();
  };
  JsonObject.prototype.w1 = function () {
    return this.v11_1.w1();
  };
  JsonObject.prototype.c = function () {
    return this.v11_1.c();
  };
  JsonObject.prototype.w11 = function (key) {
    return this.v11_1.s1(key);
  };
  JsonObject.prototype.s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.w11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.x11 = function (key) {
    return this.v11_1.v1(key);
  };
  JsonObject.prototype.v1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.x11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.h = function () {
    return this.v11_1.h();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.v11_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.v11_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.v11_1.j();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda(), 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonElement() {
    Companion_getInstance_6();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonArray(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.y11_1 = content;
  }
  JsonArray.prototype.c = function () {
    return this.y11_1.c();
  };
  JsonArray.prototype.z11 = function (elements) {
    return this.y11_1.b1(elements);
  };
  JsonArray.prototype.b1 = function (elements) {
    return this.z11(elements);
  };
  JsonArray.prototype.g = function (index) {
    return this.y11_1.g(index);
  };
  JsonArray.prototype.h = function () {
    return this.y11_1.h();
  };
  JsonArray.prototype.d = function () {
    return this.y11_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.y11_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.y11_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.y11_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function get_jsonArray(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_jsonObject(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.a12();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.b12_1 = isString;
    this.c12_1 = toString(body);
  }
  JsonLiteral.prototype.a12 = function () {
    return this.c12_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.b12_1) {
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
            printQuoted(tmp0_apply, this.c12_1);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.toString();
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.c12_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.b12_1 === other.b12_1))
      return false;
    if (!(this.c12_1 === other.c12_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.b12_1 | 0;
    result = imul(31, result) + getStringHashCode(this.c12_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return function () {
      return JsonNullSerializer_getInstance();
    };
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.d12_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.e12_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1());
  }
  JsonNull.prototype.a12 = function () {
    return this.d12_1;
  };
  JsonNull.prototype.f12 = function () {
    return this.e12_1.l1();
  };
  JsonNull.prototype.it = function (typeParamsSerializers) {
    return this.f12();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.a12());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.a12());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.a12());
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.a12());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.a12());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp0_toFloat = _this__u8e3s4.a12();
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = toDouble(tmp0_toFloat);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_unsafeCast;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.a12());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.a12();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.g12_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).gj();
    this.h12_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.jk = function () {
    return this.g12_1.jk();
  };
  JsonObjectDescriptor.prototype.kk = function () {
    return this.g12_1.kk();
  };
  JsonObjectDescriptor.prototype.lk = function () {
    return this.g12_1.lk();
  };
  JsonObjectDescriptor.prototype.ek = function () {
    return this.g12_1.ek();
  };
  JsonObjectDescriptor.prototype.mk = function () {
    return this.g12_1.mk();
  };
  JsonObjectDescriptor.prototype.nk = function (index) {
    return this.g12_1.nk(index);
  };
  JsonObjectDescriptor.prototype.ok = function (index) {
    return this.g12_1.ok(index);
  };
  JsonObjectDescriptor.prototype.pk = function (name) {
    return this.g12_1.pk(name);
  };
  JsonObjectDescriptor.prototype.qk = function (index) {
    return this.g12_1.qk(index);
  };
  JsonObjectDescriptor.prototype.rk = function (index) {
    return this.g12_1.rk(index);
  };
  JsonObjectDescriptor.prototype.ik = function () {
    return this.h12_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.i12_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.gj = function () {
    return this.i12_1;
  };
  JsonObjectSerializer.prototype.j12 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).hj(encoder, value);
  };
  JsonObjectSerializer.prototype.hj = function (encoder, value) {
    return this.j12(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.ij = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).ij(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return function () {
      return JsonPrimitiveSerializer_getInstance().k12_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().l12_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().m12_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().i12_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().n12_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.rj('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.rj('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.rj('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.rj('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.rj('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.o12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype.gj = function () {
    return this.o12_1;
  };
  JsonElementSerializer.prototype.p12 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.pn(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.pn(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.pn(JsonArraySerializer_getInstance(), value);
      }
    }
  };
  JsonElementSerializer.prototype.hj = function (encoder, value) {
    return this.p12(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.ij = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.u11();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.q12_1 = ListSerializer(JsonElementSerializer_getInstance()).gj();
    this.r12_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.jk = function () {
    return this.q12_1.jk();
  };
  JsonArrayDescriptor.prototype.kk = function () {
    return this.q12_1.kk();
  };
  JsonArrayDescriptor.prototype.lk = function () {
    return this.q12_1.lk();
  };
  JsonArrayDescriptor.prototype.ek = function () {
    return this.q12_1.ek();
  };
  JsonArrayDescriptor.prototype.mk = function () {
    return this.q12_1.mk();
  };
  JsonArrayDescriptor.prototype.nk = function (index) {
    return this.q12_1.nk(index);
  };
  JsonArrayDescriptor.prototype.ok = function (index) {
    return this.q12_1.ok(index);
  };
  JsonArrayDescriptor.prototype.pk = function (name) {
    return this.q12_1.pk(name);
  };
  JsonArrayDescriptor.prototype.qk = function (index) {
    return this.q12_1.qk(index);
  };
  JsonArrayDescriptor.prototype.rk = function (index) {
    return this.q12_1.rk(index);
  };
  JsonArrayDescriptor.prototype.ik = function () {
    return this.r12_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.n12_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.gj = function () {
    return this.n12_1;
  };
  JsonArraySerializer.prototype.s12 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).hj(encoder, value);
  };
  JsonArraySerializer.prototype.hj = function (encoder, value) {
    return this.s12(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.ij = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ij(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.k12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.gj = function () {
    return this.k12_1;
  };
  JsonPrimitiveSerializer.prototype.t12 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.pn(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      tmp = encoder.pn(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.hj = function (encoder, value) {
    return this.t12(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.ij = function (decoder) {
    var result = asJsonDecoder(decoder).u11();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.l12_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.gj = function () {
    return this.l12_1;
  };
  JsonNullSerializer.prototype.u12 = function (encoder, value) {
    verify(encoder);
    encoder.um();
  };
  JsonNullSerializer.prototype.hj = function (encoder, value) {
    return this.u12(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.ij = function (decoder) {
    verify_0(decoder);
    if (decoder.nl()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.ol();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.m12_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.gj = function () {
    return this.m12_1;
  };
  JsonLiteralSerializer.prototype.v12 = function (encoder, value) {
    verify(encoder);
    if (value.b12_1) {
      return encoder.dn(value.c12_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return encoder.zm(tmp0_safe_receiver);
      }
    }
    var tmp1_safe_receiver = toULongOrNull(value.c12_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        var tmp_0 = encoder.en(serializer_0(Companion_getInstance()).gj());
        var tmp$ret$1;
        {
          tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
        }
        tmp_0.zm(tmp$ret$1);
        return Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      {
        {
        }
        return encoder.bn(tmp2_safe_receiver);
      }
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        return encoder.vm(tmp3_safe_receiver);
      }
    }
    encoder.dn(value.c12_1);
  };
  JsonLiteralSerializer.prototype.hj = function (encoder, value) {
    return this.v12(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.ij = function (decoder) {
    var result = asJsonDecoder(decoder).u11();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = original$factory();
      tmp$ret$0 = $this.w12_1.l1();
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.w12_1 = lazy_0($deferred);
  }
  defer$1.prototype.ik = function () {
    return _get_original__l7ku1m(this).ik();
  };
  defer$1.prototype.mk = function () {
    return _get_original__l7ku1m(this).mk();
  };
  defer$1.prototype.kk = function () {
    return _get_original__l7ku1m(this).kk();
  };
  defer$1.prototype.qk = function (index) {
    return _get_original__l7ku1m(this).qk(index);
  };
  defer$1.prototype.pk = function (name) {
    return _get_original__l7ku1m(this).pk(name);
  };
  defer$1.prototype.nk = function (index) {
    return _get_original__l7ku1m(this).nk(index);
  };
  defer$1.prototype.ok = function (index) {
    return _get_original__l7ku1m(this).ok(index);
  };
  defer$1.prototype.rk = function (index) {
    return _get_original__l7ku1m(this).rk(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(writer) {
    this.x12_1 = writer;
    this.y12_1 = true;
  }
  Composer.prototype.z12 = function (_set____db54di) {
    this.y12_1 = _set____db54di;
  };
  Composer.prototype.a13 = function () {
    this.y12_1 = true;
  };
  Composer.prototype.b13 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.c13 = function () {
    this.y12_1 = false;
  };
  Composer.prototype.d13 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.e13 = function (v) {
    return this.x12_1.f13(v);
  };
  Composer.prototype.g13 = function (v) {
    return this.x12_1.h13(v);
  };
  Composer.prototype.i13 = function (v) {
    return this.x12_1.h13(v.toString());
  };
  Composer.prototype.j13 = function (v) {
    return this.x12_1.h13(v.toString());
  };
  Composer.prototype.k13 = function (v) {
    return this.x12_1.l13(toLong_0(v));
  };
  Composer.prototype.m13 = function (v) {
    return this.x12_1.l13(toLong_0(v));
  };
  Composer.prototype.n13 = function (v) {
    return this.x12_1.l13(toLong_0(v));
  };
  Composer.prototype.o13 = function (v) {
    return this.x12_1.l13(v);
  };
  Composer.prototype.p13 = function (v) {
    return this.x12_1.h13(v.toString());
  };
  Composer.prototype.q13 = function (value) {
    return this.x12_1.r13(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.yz_1.i11_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.u13_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.n13 = function (v) {
    if (this.u13_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      }
      this.q13(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      }
      this.g13(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.o13 = function (v) {
    if (this.u13_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      }
      this.q13(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      }
      this.g13(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.k13 = function (v) {
    if (this.u13_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      }
      this.q13(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      }
      this.g13(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.m13 = function (v) {
    if (this.u13_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UShort___init__impl__jigrne(v);
      }
      this.q13(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UShort___init__impl__jigrne(v);
      }
      this.g13(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.x13_1 = json;
    this.y13_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.a13 = function () {
    this.z12(true);
    var tmp0_this = this;
    var tmp1 = tmp0_this.y13_1;
    tmp0_this.y13_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.b13 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.y13_1;
    tmp0_this.y13_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.c13 = function () {
    this.z12(false);
    this.g13('\n');
    {
      var tmp0_repeat = this.y13_1;
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            this.g13(this.x13_1.yz_1.k11_1);
          }
        }
         while (inductionVariable < tmp0_repeat);
    }
  };
  ComposerWithPrettyPrint.prototype.d13 = function () {
    this.e13(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.a14_1 = !descriptor.rk(index) ? descriptor.ok(index).ek() : false;
    return $this.a14_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.z13_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.a14_1 = false;
  }
  JsonElementMarker.prototype.wr = function (index) {
    this.z13_1.wr(index);
  };
  JsonElementMarker.prototype.xr = function () {
    return this.z13_1.xr();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.b14(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ik() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.mk() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      {
        var tmp0_substring = charSequenceLength(_this__u8e3s4);
        tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      }
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    {
      var tmp1_substring = coerceAtLeast(start_0, 0);
      var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
      tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    }
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.ek() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.mk(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.pk(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.yz_1.p11_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.d14(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.v1(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.kk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        {
          var tmp0_filterIsInstance = _this__u8e3s4.nk(i);
          var tmp$ret$0;
          {
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filterIsInstance.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              if (element instanceof JsonNames) {
                tmp0_filterIsInstanceTo.b(element);
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e14_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_0.e()) {
              var element_0 = tmp0_iterator_0.f();
              {
                if (builder == null)
                  builder = createMapForCache(_this__u8e3s4.kk());
                buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
              }
            }
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).s1(name);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.qk(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.qk(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    {
      _this__u8e3s4.v2(name, index);
    }
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.h14_1, 2);
    $this.f14_1 = copyOf($this.f14_1, newSize);
    $this.g14_1 = copyOf_0($this.g14_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(8), null);
    }
    tmp.f14_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = -1;
      }
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.g14_1 = tmp_3;
    this.h14_1 = -1;
  }
  JsonPath.prototype.i14 = function (sd) {
    var tmp0_this = this;
    tmp0_this.h14_1 = tmp0_this.h14_1 + 1 | 0;
    var depth = tmp0_this.h14_1;
    if (depth === this.f14_1.length) {
      resize(this);
    }
    this.f14_1[depth] = sd;
  };
  JsonPath.prototype.j14 = function (index) {
    this.g14_1[this.h14_1] = index;
  };
  JsonPath.prototype.k14 = function (key) {
    var tmp;
    if (!(this.g14_1[this.h14_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.h14_1 = tmp0_this.h14_1 + 1 | 0;
      tmp = tmp0_this.h14_1 === this.f14_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.f14_1[this.h14_1] = key;
    this.g14_1[this.h14_1] = -2;
  };
  JsonPath.prototype.l14 = function () {
    if (this.g14_1[this.h14_1] === -2) {
      this.f14_1[this.h14_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.m14 = function () {
    var depth = this.h14_1;
    if (this.g14_1[depth] === -2) {
      this.g14_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.h14_1;
      tmp0_this.h14_1 = tmp1 - 1 | 0;
    }
    if (!(this.h14_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.h14_1;
      tmp2_this.h14_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.n14 = function () {
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
          tmp0_apply.s5('$');
          {
            var tmp0_repeat = this.h14_1 + 1 | 0;
            {
            }
            var inductionVariable = 0;
            if (inductionVariable < tmp0_repeat)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                {
                  var element = this.f14_1[index];
                  if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
                    if (equals(element.mk(), LIST_getInstance())) {
                      if (!(this.g14_1[index] === -1)) {
                        tmp0_apply.s5('[');
                        tmp0_apply.r5(this.g14_1[index]);
                        tmp0_apply.s5(']');
                      }
                    } else {
                      var idx = this.g14_1[index];
                      if (idx >= 0) {
                        tmp0_apply.s5('.');
                        tmp0_apply.s5(element.qk(idx));
                      }
                    }
                  } else {
                    if (!(element === Tombstone_getInstance())) {
                      tmp0_apply.s5('[');
                      tmp0_apply.s5("'");
                      tmp0_apply.r5(element);
                      tmp0_apply.s5("'");
                      tmp0_apply.s5(']');
                    }
                  }
                }
              }
               while (inductionVariable < tmp0_repeat);
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.n14();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    {
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.pn(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    {
      var lastToken = $this.w14_1.z14(get_TC_BEGIN_OBJ());
      if ($this.w14_1.a15() === get_TC_COMMA()) {
        $this.w14_1.b14('Unexpected leading comma', 0, null, 6, null);
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      var result = tmp$ret$0;
      $l$loop: while ($this.w14_1.b15()) {
        var key = $this.x14_1 ? $this.w14_1.d15() : $this.w14_1.c15();
        $this.w14_1.z14(get_TC_COLON());
        var tmp$ret$1;
        {
          tmp$ret$1 = $this.e15();
        }
        var element = tmp$ret$1;
        {
          result.v2(key, element);
        }
        lastToken = $this.w14_1.f15();
        var tmp0_subject = lastToken;
        if (tmp0_subject === get_TC_COMMA())
        ;
        else if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.w14_1.b14('Expected end of the object or comma', 0, null, 6, null);
        }
      }
      if (lastToken === get_TC_BEGIN_OBJ()) {
        $this.w14_1.z14(get_TC_END_OBJ());
      } else if (lastToken === get_TC_COMMA()) {
        $this.w14_1.b14('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp$ret$2 = new JsonObject(result);
    }
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  }
  function readArray($this) {
    var lastToken = $this.w14_1.f15();
    if ($this.w14_1.a15() === get_TC_COMMA()) {
      $this.w14_1.b14('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var result = tmp$ret$0;
    while ($this.w14_1.b15()) {
      var element = $this.e15();
      result.b(element);
      lastToken = $this.w14_1.f15();
      if (!(lastToken === get_TC_COMMA())) {
        {
          var tmp0_require = $this.w14_1;
          var tmp1_require = lastToken === get_TC_END_LIST();
          var tmp2_require = tmp0_require.m10_1;
          if (!tmp1_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected end of the array or comma';
            }
            var tmp = tmp$ret$1;
            tmp0_require.b14(tmp, tmp2_require, null, 4, null);
          }
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.w14_1.z14(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.w14_1.b14('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.x14_1 ? true : !isString) {
      tmp = $this.w14_1.d15();
    } else {
      tmp = $this.w14_1.c15();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.b16_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.g16 = function ($this$$receiver, it, $cont) {
    var tmp = this.h16($this$$receiver, it, $cont);
    tmp.bi_1 = Unit_getInstance();
    tmp.ci_1 = null;
    return tmp.ji();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.i6 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.g16(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 3;
            this.e16_1 = this.b16_1.w14_1.a15();
            if (this.e16_1 === get_TC_STRING()) {
              this.f16_1 = readValue(this.b16_1, true);
              this.zh_1 = 2;
              continue $sm;
            } else {
              if (this.e16_1 === get_TC_OTHER()) {
                this.f16_1 = readValue(this.b16_1, false);
                this.zh_1 = 2;
                continue $sm;
              } else {
                if (this.e16_1 === get_TC_BEGIN_OBJ()) {
                  this.zh_1 = 1;
                  suspendResult = readObject_0(this.c16_1, this.b16_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.e16_1 === get_TC_BEGIN_LIST()) {
                    this.f16_1 = readArray(this.b16_1);
                    this.zh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.b16_1.w14_1.b14("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.f16_1 = suspendResult;
            this.zh_1 = 2;
            continue $sm;
          case 2:
            return this.f16_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.h16 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.b16_1, completion);
    i.c16_1 = $this$$receiver;
    i.d16_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.g16($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o15_1 = _this__u8e3s4;
    this.p15_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.ji = function () {
    var suspendResult = this.bi_1;
    $sm: do
      try {
        var tmp = this.zh_1;
        switch (tmp) {
          case 0:
            this.ai_1 = 5;
            this.q15_1 = this.o15_1.w14_1.z14(get_TC_BEGIN_OBJ());
            if (this.o15_1.w14_1.a15() === get_TC_COMMA()) {
              this.o15_1.w14_1.b14('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.r15_1 = LinkedHashMap_init_$Create$();
            this.zh_1 = 1;
            continue $sm;
          case 1:
            if (!this.o15_1.w14_1.b15()) {
              this.zh_1 = 4;
              continue $sm;
            }

            this.s15_1 = this.o15_1.x14_1 ? this.o15_1.w14_1.d15() : this.o15_1.w14_1.c15();
            this.o15_1.w14_1.z14(get_TC_COLON());
            ;
            this.zh_1 = 2;
            suspendResult = this.p15_1.a6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.r15_1.v2(this.s15_1, element);
            ;
            this.q15_1 = this.o15_1.w14_1.f15();
            var tmp0_subject = this.q15_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.zh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.zh_1 = 4;
                continue $sm;
              } else {
                this.o15_1.w14_1.b14('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.zh_1 = 1;
            continue $sm;
          case 4:
            if (this.q15_1 === get_TC_BEGIN_OBJ()) {
              this.o15_1.w14_1.z14(get_TC_END_OBJ());
            } else if (this.q15_1 === get_TC_COMMA()) {
              this.o15_1.w14_1.b14('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.r15_1);
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
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.w14_1 = lexer;
    this.x14_1 = configuration.g11_1;
    this.y14_1 = 0;
  }
  JsonTreeReader.prototype.e15 = function () {
    var token = this.w14_1.a15();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.y14_1 = tmp0_this.y14_1 + 1 | 0;
      if (tmp0_this.y14_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.y14_1 = tmp1_this.y14_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.w14_1.b14(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.jk().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.i16_1;
    }
    return json.yz_1.n11_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.t11().yz_1.m11_1;
    }
    if (tmp) {
      return deserializer.ij(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.gj(), _this__u8e3s4.t11());
    var tmp$ret$0;
    {
      var tmp0_cast = _this__u8e3s4.u11();
      var tmp1_cast = deserializer.gj();
      if (!(tmp0_cast instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.ik() + ', but had ' + getKClassFromExpression(tmp0_cast));
      }
      tmp$ret$0 = tmp0_cast;
    }
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.x11(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a12();
    var tmp2_elvis_lhs = deserializer.wj(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.t11();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.t11().yz_1.m11_1;
    }
    if (tmp) {
      serializer.hj(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.gj(), _this__u8e3s4.t11());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.gj().mk());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.hj(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.gj()).a1(classDiscriminator)) {
      var baseName = serializer.gj().ik();
      var actualName = actualSerializer.gj().ik();
      {
        var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.mk();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.dd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.j16_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.dd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.kk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.qk(i);
        if (name === $this.k16_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.j16_1 = useArrayPolymorphism;
    this.k16_1 = discriminator;
  }
  PolymorphismValidator.prototype.pz = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.sz = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.gj();
    checkKind_0(this, descriptor, actualClass);
    if (!this.j16_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.tz = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.uz = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.c14_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.l16 = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      {
        var tmp0_getOrPut = this.c14_1;
        var value_0 = tmp0_getOrPut.v1(descriptor);
        var tmp;
        if (value_0 == null) {
          var tmp$ret$0;
          {
            tmp$ret$0 = createMapForCache(1);
          }
          var answer = tmp$ret$0;
          tmp0_getOrPut.v2(descriptor, answer);
          tmp = answer;
        } else {
          tmp = value_0;
        }
        tmp$ret$1 = tmp;
      }
      var tmp1_set = tmp$ret$1;
      var tmp2_set = key instanceof Key ? key : THROW_CCE();
      var tmp3_set = isObject(value) ? value : THROW_CCE();
      tmp1_set.v2(tmp2_set, tmp3_set);
    }
  };
  DescriptorSchemaCache.prototype.d14 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.m16(descriptor, key);
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
    var value = defaultValue();
    this.l16(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.m16 = function (descriptor, key) {
    var tmp0_safe_receiver = this.c14_1.v1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.v1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function DiscriminatorHolder(discriminatorToSkip) {
    this.n16_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.n16_1 === unknownKey) {
      _this__u8e3s4.n16_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.qm(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.g10_1.a15() === get_TC_COMMA()) {
      $this.g10_1.b14('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i10_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i10_1 === -1)) {
        hasComma = $this.g10_1.p16();
      }
    } else {
      $this.g10_1.o16(get_COLON());
    }
    var tmp;
    if ($this.g10_1.b15()) {
      if (decodingKey) {
        if ($this.i10_1 === -1) {
          var tmp0_require = $this.g10_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.m10_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'Unexpected trailing comma';
            }
            var tmp_0 = tmp$ret$0;
            tmp0_require.b14(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          var tmp3_require = $this.g10_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.m10_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected comma after the key-value pair';
            }
            var tmp_1 = tmp$ret$1;
            tmp3_require.b14(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.i10_1 = tmp0_this.i10_1 + 1 | 0;
      tmp = tmp0_this.i10_1;
    } else {
      if (hasComma) {
        $this.g10_1.b14("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.e10_1;
      var tmp1_tryCoerceValue = descriptor.ok(index);
      var tmp;
      if (!tmp1_tryCoerceValue.ek()) {
        var tmp$ret$0;
        {
          tmp$ret$0 = !$this.g10_1.q16();
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.mk(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          tmp$ret$2 = $this.g10_1.r16($this.k10_1.g11_1);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          {
            $this.g10_1.c15();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g10_1.p16();
    while ($this.g10_1.b15()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g10_1.o16(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.e10_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k10_1.l11_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.g10_1.p16();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l10_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.wr(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.g10_1.b14('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.l10_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xr();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.k10_1.f11_1 ? true : trySkip($this.j10_1, $this, key)) {
      $this.g10_1.t16($this.k10_1.g11_1);
    } else {
      $this.g10_1.s16(key);
    }
    return $this.g10_1.p16();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g10_1.p16();
    var tmp;
    if ($this.g10_1.b15()) {
      if (!($this.i10_1 === -1) ? !hasComma : false) {
        $this.g10_1.b14('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.i10_1 = tmp0_this.i10_1 + 1 | 0;
      tmp = tmp0_this.i10_1;
    } else {
      if (hasComma) {
        $this.g10_1.b14('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k10_1.g11_1) {
      tmp = $this.g10_1.v16();
    } else {
      tmp = $this.g10_1.u16();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.e10_1 = json;
    this.f10_1 = mode;
    this.g10_1 = lexer;
    this.h10_1 = this.e10_1.ak();
    this.i10_1 = -1;
    this.j10_1 = discriminatorHolder;
    this.k10_1 = this.e10_1.yz_1;
    this.l10_1 = this.k10_1.j11_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.t11 = function () {
    return this.e10_1;
  };
  StreamingJsonDecoder.prototype.w16 = function () {
    return this.g10_1;
  };
  StreamingJsonDecoder.prototype.ak = function () {
    return this.h10_1;
  };
  StreamingJsonDecoder.prototype.u11 = function () {
    return (new JsonTreeReader(this.e10_1.yz_1, this.g10_1)).e15();
  };
  StreamingJsonDecoder.prototype.am = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e10_1.yz_1.m11_1;
      }
      if (tmp) {
        return deserializer.ij(this);
      }
      var discriminator = classDiscriminator(deserializer.gj(), this.e10_1);
      var type = this.g10_1.x16(discriminator, this.k10_1.g11_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.wj(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.j10_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.ij(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.bk_1, plus($p.message, ' at path: ') + this.g10_1.n10_1.n14(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.bm = function (descriptor) {
    var newMode = switchMode(this.e10_1, descriptor);
    this.g10_1.n10_1.i14(descriptor);
    this.g10_1.o16(newMode.a17_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.k4();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e10_1, newMode, this.g10_1, descriptor, this.j10_1);
        break;
      default:
        var tmp_0;
        if (this.f10_1.equals(newMode) ? this.e10_1.yz_1.j11_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e10_1, newMode, this.g10_1, descriptor, this.j10_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.cm = function (descriptor) {
    if (this.e10_1.yz_1.f11_1 ? descriptor.kk() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.g10_1.o16(this.f10_1.b17_1);
    this.g10_1.n10_1.m14();
  };
  StreamingJsonDecoder.prototype.nl = function () {
    var tmp;
    var tmp0_safe_receiver = this.l10_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a14_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.g10_1.q16();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.ol = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.mm = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.f10_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.g10_1.n10_1.l14();
    }
    var value = AbstractDecoder.prototype.mm.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.g10_1.n10_1.k14(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.qm = function (descriptor) {
    var tmp0_subject = this.f10_1;
    var tmp0 = tmp0_subject.k4();
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.f10_1.equals(WriteMode_MAP_getInstance())) {
      this.g10_1.n10_1.j14(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.pl = function () {
    var tmp;
    if (this.k10_1.g11_1) {
      tmp = this.g10_1.d17();
    } else {
      tmp = this.g10_1.c17();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.ql = function () {
    var value = this.g10_1.e17();
    if (!value.equals(toLong_0(value.qh()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.g10_1.b14(tmp, 0, null, 6, null);
    }
    return value.qh();
  };
  StreamingJsonDecoder.prototype.rl = function () {
    var value = this.g10_1.e17();
    if (!value.equals(toLong_0(value.rh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.g10_1.b14(tmp, 0, null, 6, null);
    }
    return value.rh();
  };
  StreamingJsonDecoder.prototype.sl = function () {
    var value = this.g10_1.e17();
    if (!value.equals(toLong_0(value.j5()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.g10_1.b14(tmp, 0, null, 6, null);
    }
    return value.j5();
  };
  StreamingJsonDecoder.prototype.tl = function () {
    return this.g10_1.e17();
  };
  StreamingJsonDecoder.prototype.ul = function () {
    var tmp$ret$4;
    $l$block: {
      var tmp0_parseString = this.g10_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_unsafeCast = toDouble(input);
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0_unsafeCast;
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e10_1.yz_1.o11_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g10_1, result);
  };
  StreamingJsonDecoder.prototype.vl = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_parseString = this.g10_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = toDouble(input);
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.e10_1.yz_1.o11_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g10_1, result);
  };
  StreamingJsonDecoder.prototype.wl = function () {
    var string = this.g10_1.d15();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.g10_1.b14(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.xl = function () {
    var tmp;
    if (this.k10_1.g11_1) {
      tmp = this.g10_1.v16();
    } else {
      tmp = this.g10_1.c15();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.yl = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.g10_1, this.e10_1) : AbstractDecoder.prototype.yl.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.d15();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.b14(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.f17_1 = lexer;
    this.g17_1 = json.ak();
  }
  JsonDecoderForUnsignedTypes.prototype.ak = function () {
    return this.g17_1;
  };
  JsonDecoderForUnsignedTypes.prototype.qm = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.sl = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.f17_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toInt = toUInt(input);
            tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.tl = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.f17_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toLong = toULong(input);
            tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.ql = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.f17_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toByte = toUByte(input);
            tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.rl = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.f17_1;
      var input = tmp0_parseString.d15();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toShort = toUShort(input);
            tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.b14(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.o14_1.c13();
    $this.dn(ensureNotNull($this.v14_1));
    $this.o14_1.e13(get_COLON());
    $this.o14_1.d13();
    $this.dn(descriptor.ik());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.o14_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.o14_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.o14_1.x12_1, $this.u14_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.o14_1 = composer;
    this.p14_1 = json;
    this.q14_1 = mode;
    this.r14_1 = modeReuseCache;
    this.s14_1 = this.p14_1.ak();
    this.t14_1 = this.p14_1.yz_1;
    this.u14_1 = false;
    this.v14_1 = null;
    var i = this.q14_1.k4();
    if (!(this.r14_1 == null)) {
      if (!(this.r14_1[i] === null) ? true : !(this.r14_1[i] === this))
        this.r14_1[i] = this;
    }
  }
  StreamingJsonEncoder.prototype.t11 = function () {
    return this.p14_1;
  };
  StreamingJsonEncoder.prototype.ak = function () {
    return this.s14_1;
  };
  StreamingJsonEncoder.prototype.un = function (descriptor, index) {
    return this.t14_1.e11_1;
  };
  StreamingJsonEncoder.prototype.pn = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t11().yz_1.m11_1;
      }
      if (tmp) {
        serializer.hj(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.gj(), this.t11());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.gj().mk());
      {
        this.v14_1 = baseClassDiscriminator;
      }
      actualSerializer.hj(this, value);
    }
  };
  StreamingJsonEncoder.prototype.bm = function (descriptor) {
    var newMode = switchMode(this.p14_1, descriptor);
    if (!equals(new Char(newMode.a17_1), new Char(get_INVALID()))) {
      this.o14_1.e13(newMode.a17_1);
      this.o14_1.a13();
    }
    if (!(this.v14_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.v14_1 = null;
    }
    if (this.q14_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.r14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.k4()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.o14_1, this.p14_1, newMode, this.r14_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.cm = function (descriptor) {
    if (!equals(new Char(this.q14_1.b17_1), new Char(get_INVALID()))) {
      this.o14_1.b13();
      this.o14_1.c13();
      this.o14_1.e13(this.q14_1.b17_1);
    }
  };
  StreamingJsonEncoder.prototype.sm = function (descriptor, index) {
    var tmp0_subject = this.q14_1;
    var tmp0 = tmp0_subject.k4();
    switch (tmp0) {
      case 1:
        if (!this.o14_1.y12_1)
          this.o14_1.e13(get_COMMA());
        this.o14_1.c13();
        break;
      case 2:
        if (!this.o14_1.y12_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.o14_1.e13(get_COMMA());
            this.o14_1.c13();
            tmp_0 = true;
          } else {
            this.o14_1.e13(get_COLON());
            this.o14_1.d13();
            tmp_0 = false;
          }
          tmp.u14_1 = tmp_0;
        } else {
          this.u14_1 = true;
          this.o14_1.c13();
        }

        break;
      case 3:
        if (index === 0)
          this.u14_1 = true;
        if (index === 1) {
          this.o14_1.e13(get_COMMA());
          this.o14_1.d13();
          this.u14_1 = false;
        }

        break;
      default:
        if (!this.o14_1.y12_1)
          this.o14_1.e13(get_COMMA());
        this.o14_1.c13();
        this.dn(descriptor.qk(index));
        this.o14_1.e13(get_COLON());
        this.o14_1.d13();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.qn = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.t14_1.j11_1) {
      AbstractEncoder.prototype.qn.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.en = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.p14_1, this.q14_1, null) : AbstractEncoder.prototype.en.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.um = function () {
    this.o14_1.g13(get_NULL());
  };
  StreamingJsonEncoder.prototype.vm = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.p13(value);
  };
  StreamingJsonEncoder.prototype.wm = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.k13(value);
  };
  StreamingJsonEncoder.prototype.xm = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.m13(value);
  };
  StreamingJsonEncoder.prototype.ym = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.n13(value);
  };
  StreamingJsonEncoder.prototype.zm = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.o13(value);
  };
  StreamingJsonEncoder.prototype.an = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.i13(value);
    if (!this.t14_1.o11_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.o14_1.x12_1));
    }
  };
  StreamingJsonEncoder.prototype.bn = function (value) {
    if (this.u14_1)
      this.dn(value.toString());
    else
      this.o14_1.j13(value);
    if (!this.t14_1.o11_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.o14_1.x12_1));
    }
  };
  StreamingJsonEncoder.prototype.cn = function (value) {
    this.dn(toString_0(value));
  };
  StreamingJsonEncoder.prototype.dn = function (value) {
    return this.o14_1.q13(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.lk() ? get_unsignedNumberDescriptors().a1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).gj(), serializer_0(Companion_getInstance()).gj(), serializer_2(Companion_getInstance_2()).gj(), serializer_3(Companion_getInstance_3()).gj()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      {
        tmp$ret$0 = 48;
      }
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 97;
      }
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.l4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          var tmp0__get_code__88qj9g = charSequenceGet(value, i);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        }
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.gf(value, lastPos, i);
          _this__u8e3s4.s5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.gf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.s5(value);
    }
    _this__u8e3s4.l4(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = fillArrayVal(Array(93), null);
        }
        var tmp0_apply = tmp$ret$0;
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 31)
            do {
              var c = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var c1 = toHexChar(c >> 12);
              var c2 = toHexChar(c >> 8);
              var c3 = toHexChar(c >> 4);
              var c4 = toHexChar(c);
              tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
            }
             while (inductionVariable <= 31);
          var tmp$ret$1;
          {
            tmp$ret$1 = 34;
          }
          tmp0_apply[tmp$ret$1] = '\\"';
          var tmp$ret$2;
          {
            tmp$ret$2 = 92;
          }
          tmp0_apply[tmp$ret$2] = '\\\\';
          var tmp$ret$3;
          {
            tmp$ret$3 = 9;
          }
          tmp0_apply[tmp$ret$3] = '\\t';
          var tmp$ret$4;
          {
            tmp$ret$4 = 8;
          }
          tmp0_apply[tmp$ret$4] = '\\b';
          var tmp$ret$5;
          {
            tmp$ret$5 = 10;
          }
          tmp0_apply[tmp$ret$5] = '\\n';
          var tmp$ret$6;
          {
            tmp$ret$6 = 13;
          }
          tmp0_apply[tmp$ret$6] = '\\r';
          tmp0_apply[12] = '\\f';
        }
        tmp$ret$7 = tmp0_apply;
      }
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      {
        var tmp0_apply_0 = new Int8Array(93);
        {
        }
        {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 <= 31)
            do {
              var c_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0[c_0] = 1;
            }
             while (inductionVariable_0 <= 31);
          var tmp$ret$0_0;
          {
            tmp$ret$0_0 = 34;
          }
          var tmp = tmp$ret$0_0;
          var tmp$ret$1_0;
          {
            tmp$ret$1_0 = 34;
          }
          tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
          var tmp$ret$2_0;
          {
            tmp$ret$2_0 = 92;
          }
          var tmp_0 = tmp$ret$2_0;
          var tmp$ret$3_0;
          {
            tmp$ret$3_0 = 92;
          }
          tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
          var tmp$ret$4_0;
          {
            tmp$ret$4_0 = 9;
          }
          var tmp_1 = tmp$ret$4_0;
          var tmp$ret$5_0;
          {
            tmp$ret$5_0 = 116;
          }
          tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
          var tmp$ret$6_0;
          {
            tmp$ret$6_0 = 8;
          }
          var tmp_2 = tmp$ret$6_0;
          var tmp$ret$7_0;
          {
            tmp$ret$7_0 = 98;
          }
          tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
          var tmp$ret$8;
          {
            tmp$ret$8 = 10;
          }
          var tmp_3 = tmp$ret$8;
          var tmp$ret$9;
          {
            tmp$ret$9 = 110;
          }
          tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
          var tmp$ret$10;
          {
            tmp$ret$10 = 13;
          }
          var tmp_4 = tmp$ret$10;
          var tmp$ret$11;
          {
            tmp$ret$11 = 114;
          }
          tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
          var tmp$ret$12;
          {
            tmp$ret$12 = 102;
          }
          tmp0_apply_0[12] = toByte(tmp$ret$12);
        }
        tmp$ret$13 = tmp0_apply_0;
      }
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.ix();
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
          tmp$ret$0 = $this.m17(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.l1() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.j17_1 = json;
    this.k17_1 = value;
    this.l17_1 = this.t11().yz_1;
  }
  AbstractJsonTreeDecoder.prototype.t11 = function () {
    return this.j17_1;
  };
  AbstractJsonTreeDecoder.prototype.l1 = function () {
    return this.k17_1;
  };
  AbstractJsonTreeDecoder.prototype.ak = function () {
    return this.t11().ak();
  };
  AbstractJsonTreeDecoder.prototype.b10 = function () {
    return this.l17_1;
  };
  AbstractJsonTreeDecoder.prototype.u11 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.am = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.jx = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.bm = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.mk();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.t11();
      var tmp$ret$0;
      {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.ik() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$0 = currentObject_0;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        {
          var tmp0_selectMapMode = this.t11();
          var keyDescriptor = carrierDescriptor(descriptor.ok(0), tmp0_selectMapMode.ak());
          var keyKind = keyDescriptor.mk();
          var tmp_2;
          var tmp_3;
          if (keyKind instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            tmp_3 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_3) {
            var tmp$ret$2;
            {
              var tmp_4 = this.t11();
              var tmp$ret$1;
              {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.ik() + ', but had ' + getKClassFromExpression(currentObject_0));
                }
                tmp$ret$1 = currentObject_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode.yz_1.h11_1) {
              var tmp$ret$4;
              {
                var tmp_5 = this.t11();
                var tmp$ret$3;
                {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.ik() + ', but had ' + getKClassFromExpression(currentObject_0));
                  }
                  tmp$ret$3 = currentObject_0;
                }
                tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
              }
              tmp_2 = tmp$ret$4;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$5 = tmp_2;
        }
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.t11();
        var tmp$ret$6;
        {
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.ik() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$6 = currentObject_0;
        }
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.cm = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.nl = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.n17 = function (tag) {
    var currentElement = this.m17(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.o17 = function (tag) {
    return !(this.m17(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.lx = function (tag) {
    return this.o17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.p17 = function (tag) {
    var value = this.n17(tag);
    if (!this.t11().yz_1.g11_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.b12_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      try {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = get_booleanOrNull(value);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$_0();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.mx = function (tag) {
    return this.p17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.q17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance().t8_1;
          if (result <= ByteCompanionObject_getInstance().u8_1 ? containsLower <= result : false) {
            tmp = toByte(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.nx = function (tag) {
    return this.q17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.r17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance().b9_1;
          if (result <= ShortCompanionObject_getInstance().c9_1 ? containsLower <= result : false) {
            tmp = toShort(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.ox = function (tag) {
    return this.r17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.s17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_int(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.px = function (tag) {
    return this.s17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.t17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_long(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.qx = function (tag) {
    return this.t17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.u17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_float(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t11().yz_1.o11_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.rx = function (tag) {
    return this.u17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.v17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_double(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t11().yz_1.o11_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.sx = function (tag) {
    return this.v17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.w17 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.n17(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = single(tmp0_primitive.a12());
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.tx = function (tag) {
    return this.w17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.x17 = function (tag) {
    var value = this.n17(tag);
    if (!this.t11().yz_1.g11_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.b12_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.a12();
  };
  AbstractJsonTreeDecoder.prototype.ux = function (tag) {
    return this.x17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.y17 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.n17(tag).a12()), this.t11()) : NamedValueDecoder.prototype.vx.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.vx = function (tag, inlineDescriptor) {
    return this.y17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.t11();
      var tmp1_tryCoerceValue = descriptor.ok(index);
      var tmp;
      if (!tmp1_tryCoerceValue.ek()) {
        var tmp$ret$0;
        {
          var tmp_0 = $this.m17(tag);
          tmp$ret$0 = tmp_0 instanceof JsonNull;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.mk(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          var tmp_1 = $this.m17(tag);
          var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
          tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          {
            tmp$ret$3 = Unit_getInstance();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.i18_1 = (!$this.t11().yz_1.j11_1 ? !descriptor.rk(index) : false) ? descriptor.ok(index).ek() : false;
    return $this.i18_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e18_1 = value;
    this.f18_1 = polyDiscriminator;
    this.g18_1 = polyDescriptor;
    this.h18_1 = 0;
    this.i18_1 = false;
  }
  JsonTreeDecoder.prototype.l1 = function () {
    return this.e18_1;
  };
  JsonTreeDecoder.prototype.qm = function (descriptor) {
    while (this.h18_1 < descriptor.kk()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.h18_1;
      tmp0_this.h18_1 = tmp1 + 1 | 0;
      var name = this.dx(descriptor, tmp1);
      var index = this.h18_1 - 1 | 0;
      this.i18_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      {
        var tmp0_contains = this.l1();
        var tmp$ret$0;
        {
          tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).s1(name);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.b10().l11_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.nl = function () {
    return !this.i18_1 ? AbstractJsonTreeDecoder.prototype.nl.call(this) : false;
  };
  JsonTreeDecoder.prototype.ex = function (desc, index) {
    var mainName = desc.qk(index);
    if (!this.b10().p11_1)
      return mainName;
    if (this.l1().w1().a1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.t11());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.d14(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    {
      var tmp0_find = this.l1().w1();
      var tmp$ret$1;
      $l$block: {
        var tmp0_iterator = tmp0_find.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = alternativeNamesMap.v1(element) === index;
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
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.m17 = function (tag) {
    return getValue(this.l1(), tag);
  };
  JsonTreeDecoder.prototype.bm = function (descriptor) {
    if (descriptor === this.g18_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.bm.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.cm = function (descriptor) {
    var tmp;
    if (this.b10().f11_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.mk();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.b10().p11_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      {
        var tmp0_safe_receiver = get_schemaCache(this.t11()).m16(descriptor, get_JsonAlternativeNamesKey());
        var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      }
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.l1().w1().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.a1(key) ? !(key === this.f18_1) : false) {
        throw UnknownKeyException(key, this.l1().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o18_1 = value;
    this.p18_1 = this.o18_1.c();
    this.q18_1 = -1;
  }
  JsonTreeListDecoder.prototype.l1 = function () {
    return this.o18_1;
  };
  JsonTreeListDecoder.prototype.ex = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.m17 = function (tag) {
    return this.o18_1.g(toInt(tag));
  };
  JsonTreeListDecoder.prototype.qm = function (descriptor) {
    while (this.q18_1 < (this.p18_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.q18_1;
      tmp0_this.q18_1 = tmp1 + 1 | 0;
      return this.q18_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.b19_1 = value;
    this.c19_1 = toList(this.b19_1.w1());
    this.d19_1 = imul(this.c19_1.c(), 2);
    this.e19_1 = -1;
  }
  JsonTreeMapDecoder.prototype.l1 = function () {
    return this.b19_1;
  };
  JsonTreeMapDecoder.prototype.ex = function (desc, index) {
    var i = index / 2 | 0;
    return this.c19_1.g(i);
  };
  JsonTreeMapDecoder.prototype.qm = function (descriptor) {
    while (this.e19_1 < (this.d19_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.e19_1;
      tmp0_this.e19_1 = tmp1 + 1 | 0;
      return this.e19_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.m17 = function (tag) {
    return (this.e19_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.b19_1, tag);
  };
  JsonTreeMapDecoder.prototype.cm = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.gj())).am(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.a17_1 = begin;
    this.b17_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.mk();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          {
            var keyDescriptor = carrierDescriptor(desc.ok(0), _this__u8e3s4.ak());
            var keyKind = keyDescriptor.mk();
            var tmp_0;
            var tmp_1;
            if (keyKind instanceof PrimitiveKind) {
              tmp_1 = true;
            } else {
              tmp_1 = equals(keyKind, ENUM_getInstance());
            }
            if (tmp_1) {
              var tmp$ret$0;
              {
                tmp$ret$0 = WriteMode_MAP_getInstance();
              }
              tmp_0 = tmp$ret$0;
            } else {
              if (_this__u8e3s4.yz_1.h11_1) {
                var tmp$ret$1;
                {
                  tmp$ret$1 = WriteMode_LIST_getInstance();
                }
                tmp_0 = tmp$ret$1;
              } else {
                throw InvalidKeyKindException(keyDescriptor);
              }
            }
            tmp$ret$2 = tmp_0;
          }
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.ok(0), _this__u8e3s4.ak());
    var keyKind = keyDescriptor.mk();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.yz_1.h11_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.mk(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.lk()) {
      tmp = carrierDescriptor(_this__u8e3s4.ok(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.f19(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.f19(lastPosition, currentPosition);
    var result = $this.p10_1.toString();
    $this.p10_1.hf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    {
      var tmp0_also = ensureNotNull($this.o10_1);
      {
      }
      {
        $this.o10_1 = null;
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.g19(), $this.m10_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.h19(currentPosition);
    if (currentPosition === -1) {
      $this.b14('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.g19();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.g19(), currentPosition);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.b14(tmp_0, 0, null, 6, null);
    }
    $this.p10_1.l4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.m10_1 = startPos;
      $this.i19();
      if (($this.m10_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.b14('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.m10_1);
    }
    $this.p10_1.l4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 48;
      }
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      {
        tmp$ret$2 = Char__toInt_impl_vasixd(character);
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = 97;
      }
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      {
        tmp$ret$4 = Char__toInt_impl_vasixd(character);
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      {
        tmp$ret$5 = 65;
      }
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.b14(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.h19(start);
    if (current >= charSequenceLength($this.g19()) ? true : current === -1) {
      $this.b14('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      var tmp = $this.g19();
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    {
      tmp$ret$1 = 116;
    }
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      {
        tmp$ret$2 = 102;
      }
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.d15() + "'";
        $this.b14(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.g19()) - current | 0) < literalSuffix.length) {
      $this.b14('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.g19(), current + i | 0);
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        }
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.d15() + "'";
          $this.b14(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.m10_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.m10_1 = 0;
    this.n10_1 = new JsonPath();
    this.o10_1 = null;
    this.p10_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.j19 = function (_set____db54di) {
    this.m10_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.k19 = function () {
    return this.m10_1;
  };
  AbstractJsonLexer.prototype.i19 = function () {
  };
  AbstractJsonLexer.prototype.l19 = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.q10 = function () {
    var nextToken = this.f15();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.g19(), this.m10_1 - 1 | 0)) + ' instead';
      this.b14(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.z14 = function (expected) {
    var token = this.f15();
    if (!(token === expected)) {
      this.m19(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.o16 = function (expected) {
    this.i19();
    var source = this.g19();
    var cpos = this.m10_1;
    $l$loop_0: while (true) {
      cpos = this.h19(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.m10_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.n19(expected);
    }
    this.m10_1 = cpos;
    this.n19(expected);
  };
  AbstractJsonLexer.prototype.n19 = function (expected) {
    var tmp0_this = this;
    tmp0_this.m10_1 = tmp0_this.m10_1 - 1 | 0;
    if ((this.m10_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.d15() === 'null' : false) {
      this.o19("Expected string literal but 'null' literal was found", this.m10_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.m19(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.m19 = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.m10_1 === charSequenceLength(this.g19()) ? true : this.m10_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.g19(), this.m10_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.m10_1 - 1 | 0;
    this.b14(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.a15 = function () {
    var source = this.g19();
    var cpos = this.m10_1;
    $l$loop_0: while (true) {
      cpos = this.h19(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.m10_1 = cpos;
      return charToTokenClass(ch);
    }
    this.m10_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.q16 = function () {
    var current = this.p19();
    current = this.h19(current);
    var len = charSequenceLength(this.g19()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.g19(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.g19(), current + 4 | 0)) === 0 : false)
      return true;
    this.m10_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.p19 = function () {
    var current = this.m10_1;
    $l$loop_0: while (true) {
      current = this.h19(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.g19(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.m10_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.r16 = function (isLenient) {
    var token = this.a15();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.d15();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.c15();
    }
    var string = tmp;
    this.o10_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.q19 = function (startPos, endPos) {
    var tmp$ret$0;
    {
      var tmp0_substring = this.g19();
      tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    }
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.c15 = function () {
    if (!(this.o10_1 == null)) {
      return takePeeked(this);
    }
    return this.u16();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.h19(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.b14('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.f19(lastPosition, currentPosition);
          currentPosition = this.h19(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.b14('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.q19(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.m10_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.v16 = function () {
    var result = this.d15();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.b14("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.d15 = function () {
    if (!(this.o10_1 == null)) {
      return takePeeked(this);
    }
    var current = this.p19();
    if (current >= charSequenceLength(this.g19()) ? true : current === -1) {
      var tmp = current;
      this.b14('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.g19(), current));
    if (token === 1) {
      return this.c15();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.g19(), current));
      this.b14(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.g19(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.g19())) {
        usedAppend = true;
        this.f19(this.m10_1, current);
        var eof = this.h19(current);
        if (eof === -1) {
          this.m10_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.q19(this.m10_1, current);
    } else {
      tmp_1 = decodedString(this, this.m10_1, current);
    }
    var result = tmp_1;
    this.m10_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.f19 = function (fromIndex, toIndex) {
    this.p10_1.gf(this.g19(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.r19 = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.b14(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.t16 = function (allowLenientStrings) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.a15();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.d15();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.a15();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.d15();
        } else {
          this.u16();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.m10_1, 'found ] instead of } at path: ' + this.n10_1, this.g19());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.m10_1, 'found } instead of ] at path: ' + this.n10_1, this.g19());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.b14('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.f15();
      if (tokenStack.c() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.g19() + "', currentPosition=" + this.m10_1 + ')';
  };
  AbstractJsonLexer.prototype.s16 = function (key) {
    var processed = this.q19(0, this.m10_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.o19("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.o19 = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(hint) === 0;
    }
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.n10_1.n14() + hintMessage, this.g19());
  };
  AbstractJsonLexer.prototype.b14 = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.m10_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.o19(message, position, hint);
  };
  AbstractJsonLexer.prototype.e17 = function () {
    var current = this.p19();
    current = this.h19(current);
    if (current >= charSequenceLength(this.g19()) ? true : current === -1) {
      this.b14('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.g19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.g19())) {
        this.b14('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.g19(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.b14("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.g19()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.b14(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_times = accumulator;
          tmp$ret$0 = tmp0_times.o4(new Long(10, 0));
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp1_minus.q4(toLong_0(digit));
      }
      accumulator = tmp$ret$1;
      if (accumulator.v(new Long(0, 0)) > 0) {
        this.b14('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.b14('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.b14('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.g19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.b14('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.m10_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.m4();
      } else {
        this.b14('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.c17 = function () {
    return consumeBoolean(this, this.p19());
  };
  AbstractJsonLexer.prototype.d17 = function () {
    var current = this.p19();
    if (current === charSequenceLength(this.g19())) {
      this.b14('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.g19(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.m10_1 === charSequenceLength(this.g19())) {
        this.b14('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.g19(), this.m10_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.b14('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.m10_1 = tmp0_this.m10_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().t19_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = Char__toInt_impl_vasixd(c);
      }
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().s19_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      }
      $this.s19_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.t19_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.s19_1 = charArray(117);
    this.t19_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.y19_1 = source;
  }
  StringJsonLexer.prototype.g19 = function () {
    return this.y19_1;
  };
  StringJsonLexer.prototype.h19 = function (position) {
    return position < this.y19_1.length ? position : -1;
  };
  StringJsonLexer.prototype.f15 = function () {
    var source = this.y19_1;
    $l$loop: while (!(this.k19() === -1) ? this.k19() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.k19();
      tmp0_this.j19(tmp1 + 1 | 0);
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.p16 = function () {
    var current = this.p19();
    if (current === this.y19_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.y19_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.j19(tmp0_this.k19() + 1 | 0);
      tmp0_this.k19();
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.b15 = function () {
    var current = this.k19();
    if (current === -1)
      return false;
    $l$loop: while (current < this.y19_1.length) {
      var c = charSequenceGet(this.y19_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.j19(current);
      return this.l19(c);
    }
    this.j19(current);
    return false;
  };
  StringJsonLexer.prototype.p19 = function () {
    var current = this.k19();
    if (current === -1)
      return current;
    $l$loop: while (current < this.y19_1.length) {
      var c = charSequenceGet(this.y19_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.j19(current);
    return current;
  };
  StringJsonLexer.prototype.o16 = function (expected) {
    if (this.k19() === -1)
      this.n19(expected);
    var source = this.y19_1;
    $l$loop: while (this.k19() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.k19();
      tmp0_this.j19(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.n19(expected);
    }
    this.n19(expected);
  };
  StringJsonLexer.prototype.u16 = function () {
    this.o16(get_STRING());
    var current = this.k19();
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.y19_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.m19(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.y19_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.y19_1, this.k19(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this.j19(closingQuote + 1 | 0);
    var tmp$ret$1;
    {
      var tmp0_substring = this.y19_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_substring;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    }
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.x16 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.k19();
    try {
      if (!(this.f15() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.u16() : this.v16();
      if (firstKey === keyToMatch) {
        if (!(this.f15() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.c15() : this.v16();
        return result;
      }
      return null;
    }finally {
      this.j19(positionSnapshot);
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.a10_1;
  }
  function JsonToStringWriter() {
    this.c10_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.l13 = function (value) {
    this.c10_1.r5(value);
  };
  JsonToStringWriter.prototype.f13 = function (char) {
    this.c10_1.l4(char);
  };
  JsonToStringWriter.prototype.h13 = function (text) {
    this.c10_1.s5(text);
  };
  JsonToStringWriter.prototype.r13 = function (text) {
    printQuoted(this.c10_1, text);
  };
  JsonToStringWriter.prototype.d10 = function () {
    this.c10_1.if();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.c10_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.ek = get_isNullable;
  defer$1.prototype.lk = get_isInline;
  defer$1.prototype.jk = get_annotations;
  PolymorphismValidator.prototype.rz = contextual;
  StreamingJsonDecoder.prototype.nm = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.pm = decodeSequentially;
  StreamingJsonDecoder.prototype.rm = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.am = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.nm = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.pm = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.rm = decodeCollectionSize;
  StreamingJsonEncoder.prototype.sn = encodeNotNullMark;
  StreamingJsonEncoder.prototype.tn = beginCollection;
  StreamingJsonEncoder.prototype.rn = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.nm = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.pm = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.rm = decodeCollectionSize;
  JsonTreeDecoder.prototype.nm = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.pm = decodeSequentially;
  JsonTreeDecoder.prototype.rm = decodeCollectionSize;
  JsonTreeListDecoder.prototype.nm = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.pm = decodeSequentially;
  JsonTreeListDecoder.prototype.rm = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.nm = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.pm = decodeSequentially;
  JsonTreeMapDecoder.prototype.rm = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  _.$_$.b = Default_getInstance;
  _.$_$.c = JsonObjectSerializer_getInstance;
  _.$_$.d = JsonObject;
  _.$_$.e = get_jsonArray;
  _.$_$.f = get_jsonObject;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map