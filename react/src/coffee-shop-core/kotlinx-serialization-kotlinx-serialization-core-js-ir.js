(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.a3;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var emptyList = kotlin_kotlin.$_$.p4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.z9;
  var classMeta = kotlin_kotlin.$_$.p6;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.y7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t6;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var captureStack = kotlin_kotlin.$_$.k6;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException = kotlin_kotlin.$_$.b9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.q7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var isInterface = kotlin_kotlin.$_$.e7;
  var KClass = kotlin_kotlin.$_$.w7;
  var copyToArray = kotlin_kotlin.$_$.o4;
  var Triple = kotlin_kotlin.$_$.k9;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.f9;
  var Entry = kotlin_kotlin.$_$.u3;
  var LinkedHashMap = kotlin_kotlin.$_$.r3;
  var MutableMap = kotlin_kotlin.$_$.x3;
  var Map = kotlin_kotlin.$_$.v3;
  var HashMap = kotlin_kotlin.$_$.n3;
  var LinkedHashSet = kotlin_kotlin.$_$.s3;
  var MutableSet = kotlin_kotlin.$_$.y3;
  var Set = kotlin_kotlin.$_$.z3;
  var HashSet = kotlin_kotlin.$_$.o3;
  var ArrayList = kotlin_kotlin.$_$.l3;
  var MutableList = kotlin_kotlin.$_$.w3;
  var List = kotlin_kotlin.$_$.t3;
  var Collection = kotlin_kotlin.$_$.m3;
  var equals = kotlin_kotlin.$_$.q6;
  var getStringHashCode = kotlin_kotlin.$_$.u6;
  var Iterator = kotlin_kotlin.$_$.q3;
  var Iterable = kotlin_kotlin.$_$.p3;
  var isBlank = kotlin_kotlin.$_$.c8;
  var toList = kotlin_kotlin.$_$.j5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var toHashSet = kotlin_kotlin.$_$.h5;
  var toBooleanArray = kotlin_kotlin.$_$.g5;
  var withIndex = kotlin_kotlin.$_$.l5;
  var to = kotlin_kotlin.$_$.ga;
  var toMap = kotlin_kotlin.$_$.k5;
  var lazy_0 = kotlin_kotlin.$_$.aa;
  var contentEquals = kotlin_kotlin.$_$.d4;
  var until = kotlin_kotlin.$_$.v7;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var Long = kotlin_kotlin.$_$.d9;
  var Char = kotlin_kotlin.$_$.v8;
  var isObject = kotlin_kotlin.$_$.g7;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.w1;
  var Duration = kotlin_kotlin.$_$.t8;
  var Companion_getInstance = kotlin_kotlin.$_$.c3;
  var toIntOrNull = kotlin_kotlin.$_$.j8;
  var hashCode = kotlin_kotlin.$_$.v6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isArray = kotlin_kotlin.$_$.x6;
  var arrayIterator = kotlin_kotlin.$_$.i6;
  var asList = kotlin_kotlin.$_$.b4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.p;
  var step = kotlin_kotlin.$_$.u7;
  var getValue = kotlin_kotlin.$_$.u4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var longArray = kotlin_kotlin.$_$.j7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e3;
  var get_lastIndex = kotlin_kotlin.$_$.x4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.t9;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var KTypeParameter = kotlin_kotlin.$_$.z7;
  var contentHashCode = kotlin_kotlin.$_$.e4;
  var fillArrayVal = kotlin_kotlin.$_$.r6;
  var booleanArray = kotlin_kotlin.$_$.j6;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d3;
  var isCharArray = kotlin_kotlin.$_$.a7;
  var charArray = kotlin_kotlin.$_$.l6;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var isDoubleArray = kotlin_kotlin.$_$.b7;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var isFloatArray = kotlin_kotlin.$_$.c7;
  var isLongArray = kotlin_kotlin.$_$.f7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.y2;
  var isIntArray = kotlin_kotlin.$_$.d7;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.z2;
  var isShortArray = kotlin_kotlin.$_$.h7;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var isByteArray = kotlin_kotlin.$_$.z6;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var isBooleanArray = kotlin_kotlin.$_$.y6;
  var coerceAtLeast = kotlin_kotlin.$_$.s7;
  var copyOf = kotlin_kotlin.$_$.i4;
  var copyOf_0 = kotlin_kotlin.$_$.k4;
  var copyOf_1 = kotlin_kotlin.$_$.l4;
  var copyOf_2 = kotlin_kotlin.$_$.g4;
  var copyOf_3 = kotlin_kotlin.$_$.n4;
  var copyOf_4 = kotlin_kotlin.$_$.f4;
  var copyOf_5 = kotlin_kotlin.$_$.j4;
  var copyOf_6 = kotlin_kotlin.$_$.h4;
  var Unit = kotlin_kotlin.$_$.p9;
  var trimIndent = kotlin_kotlin.$_$.s8;
  var equals_0 = kotlin_kotlin.$_$.b8;
  var charSequenceLength = kotlin_kotlin.$_$.n6;
  var charSequenceGet = kotlin_kotlin.$_$.m6;
  var toString_0 = kotlin_kotlin.$_$.a2;
  var titlecase = kotlin_kotlin.$_$.g8;
  var isLowerCase = kotlin_kotlin.$_$.d8;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b3;
  var mapOf = kotlin_kotlin.$_$.b5;
  var lastOrNull = kotlin_kotlin.$_$.z4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k2;
  var UInt = kotlin_kotlin.$_$.m9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n2;
  var ULong = kotlin_kotlin.$_$.n9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h2;
  var UByte = kotlin_kotlin.$_$.l9;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g2;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.q2;
  var UShort = kotlin_kotlin.$_$.o9;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.p2;
  var Annotation = kotlin_kotlin.$_$.u8;
  var get_indices = kotlin_kotlin.$_$.w4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var get_indices_0 = kotlin_kotlin.$_$.v4;
  var get_js = kotlin_kotlin.$_$.i7;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  function decodeSerializableValue(deserializer) {
    return deserializer.ij(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.mm(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.bm(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.hj(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.gj().ek();
    if (isNullabilitySupported) {
      return this.pn(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.um();
    } else {
      this.sn();
      this.pn(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.pz(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).gj();
      $this$buildSerialDescriptor.rj('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.sj_1.dd() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.rj('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.lj_1 = this$0.tj_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.sj_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.sj_1 = baseClass;
    this.tj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.uj_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.vj = function () {
    return this.sj_1;
  };
  PolymorphicSerializer.prototype.gj = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.uj_1.l1();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.sj_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.xj(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.vj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.wj(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.vj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.gj();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.c() === 1 ? "Field '" + missingFields.g(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.bk_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.od();
    var tmp$ret$4;
    {
      var tmp0_map = type.nd();
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$2;
          {
            var tmp$ret$1;
            $l$block: {
              var tmp0_requireNotNull = item.h4_1;
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$0;
                {
                  tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
                }
                var message = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$1 = tmp0_requireNotNull;
                break $l$block;
              }
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.h()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.ck(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      {
        tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      }
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator = typeArguments.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            tmp0_mapTo.b(serializer(_this__u8e3s4, item));
          }
          tmp$ret$0 = tmp0_mapTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator_0 = typeArguments.d();
          while (tmp0_iterator_0.e()) {
            var item_0 = tmp0_iterator_0.f();
            var tmp$ret$2;
            {
              var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
              var tmp_0;
              if (tmp0_elvis_lhs == null) {
                return null;
              } else {
                tmp_0 = tmp0_elvis_lhs;
              }
              tmp$ret$2 = tmp_0;
            }
            tmp0_mapTo_0.b(tmp$ret$2);
          }
          tmp$ret$3 = tmp0_mapTo_0;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.g(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.g(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.g(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.g(0), serializers.g(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.g(0), serializers.g(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.g(0), serializers.g(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.g(0), serializers.g(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.g(0), serializers.g(1), serializers.g(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        {
          var tmp_2 = typeArguments.g(0).md();
          var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.g(0));
          tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        return tmp$ret$5;
      }
      var tmp$ret$6;
      {
        tmp$ret$6 = copyToArray(serializers);
      }
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.dk(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.gj().ek()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.fk_1 = original;
    this.gk_1 = kClass;
    this.hk_1 = this.fk_1.ik() + '<' + this.gk_1.dd() + '>';
  }
  ContextDescriptor.prototype.jk = function () {
    return this.fk_1.jk();
  };
  ContextDescriptor.prototype.kk = function () {
    return this.fk_1.kk();
  };
  ContextDescriptor.prototype.lk = function () {
    return this.fk_1.lk();
  };
  ContextDescriptor.prototype.ek = function () {
    return this.fk_1.ek();
  };
  ContextDescriptor.prototype.mk = function () {
    return this.fk_1.mk();
  };
  ContextDescriptor.prototype.nk = function (index) {
    return this.fk_1.nk(index);
  };
  ContextDescriptor.prototype.ok = function (index) {
    return this.fk_1.ok(index);
  };
  ContextDescriptor.prototype.pk = function (name) {
    return this.fk_1.pk(name);
  };
  ContextDescriptor.prototype.qk = function (index) {
    return this.fk_1.qk(index);
  };
  ContextDescriptor.prototype.rk = function (index) {
    return this.fk_1.rk(index);
  };
  ContextDescriptor.prototype.ik = function () {
    return this.hk_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.fk_1, another.fk_1) ? another.gk_1.equals(this.gk_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.gk_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.hk_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.gk_1 + ', original: ' + this.fk_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
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
          var tmp0_safe_receiver_0 = _this__u8e3s4.ck(tmp0_safe_receiver, null, 2, null);
          tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.gj();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.gk_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.sk_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.wk_1 = $this_elementDescriptors;
    this.vk_1 = $this_elementDescriptors.kk();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.vk_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.wk_1.kk();
    var tmp0_this = this;
    var tmp1 = tmp0_this.vk_1;
    tmp0_this.vk_1 = tmp1 - 1 | 0;
    return this.wk_1.ok(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.xk_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.xk_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.mj_1.c(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.jj_1 = serialName;
    this.kj_1 = false;
    this.lj_1 = emptyList();
    this.mj_1 = ArrayList_init_$Create$_0();
    this.nj_1 = HashSet_init_$Create$();
    this.oj_1 = ArrayList_init_$Create$_0();
    this.pj_1 = ArrayList_init_$Create$_0();
    this.qj_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.yk = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.nj_1.b(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.mj_1;
      tmp1_plusAssign.b(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.oj_1;
      tmp2_plusAssign.b(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.pj_1;
      tmp3_plusAssign.b(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.qj_1;
      tmp4_plusAssign.b(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.rj = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.yk(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this.kl_1.l1();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.jl_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.qk(it) + ': ' + this$0.ok(it).ik();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.zk_1 = serialName;
    this.al_1 = kind;
    this.bl_1 = elementsCount;
    this.cl_1 = builder.lj_1;
    this.dl_1 = toHashSet(builder.mj_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.mj_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.el_1 = tmp$ret$0;
    this.fl_1 = compactArray(builder.oj_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.pj_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.gl_1 = tmp$ret$1;
    this.hl_1 = toBooleanArray(builder.qj_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.el_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.o2_1, item.n2_1);
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.il_1 = toMap(tmp$ret$4);
    this.jl_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.kl_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.ik = function () {
    return this.zk_1;
  };
  SerialDescriptorImpl.prototype.mk = function () {
    return this.al_1;
  };
  SerialDescriptorImpl.prototype.kk = function () {
    return this.bl_1;
  };
  SerialDescriptorImpl.prototype.jk = function () {
    return this.cl_1;
  };
  SerialDescriptorImpl.prototype.ll = function () {
    return this.dl_1;
  };
  SerialDescriptorImpl.prototype.qk = function (index) {
    return getChecked(this.el_1, index);
  };
  SerialDescriptorImpl.prototype.pk = function (name) {
    var tmp0_elvis_lhs = this.il_1.v1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.nk = function (index) {
    return getChecked(this.gl_1, index);
  };
  SerialDescriptorImpl.prototype.ok = function (index) {
    return getChecked(this.fl_1, index);
  };
  SerialDescriptorImpl.prototype.rk = function (index) {
    return getChecked_0(this.hl_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ik() === other.ik())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.jl_1, tmp0__anonymous__q1qw7t.jl_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.kk() === other.kk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.kk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ok(index).ik() === other.ok(index).ik())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ok(index).mk(), other.ok(index).mk())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.bl_1);
    var tmp_0 = this.zk_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.mj_1.c(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda();
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function buildClassSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).dd());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.ml = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.nl = function () {
    return true;
  };
  AbstractDecoder.prototype.ol = function () {
    return null;
  };
  AbstractDecoder.prototype.pl = function () {
    var tmp = this.ml();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.ql = function () {
    var tmp = this.ml();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.rl = function () {
    var tmp = this.ml();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.sl = function () {
    var tmp = this.ml();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.tl = function () {
    var tmp = this.ml();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.ul = function () {
    var tmp = this.ml();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.vl = function () {
    var tmp = this.ml();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.wl = function () {
    var tmp = this.ml();
    return tmp instanceof Char ? tmp.x_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.xl = function () {
    var tmp = this.ml();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.yl = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.zl = function (deserializer, previousValue) {
    return this.am(deserializer);
  };
  AbstractDecoder.prototype.bm = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.cm = function (descriptor) {
  };
  AbstractDecoder.prototype.dm = function (descriptor, index) {
    return this.pl();
  };
  AbstractDecoder.prototype.em = function (descriptor, index) {
    return this.ql();
  };
  AbstractDecoder.prototype.fm = function (descriptor, index) {
    return this.rl();
  };
  AbstractDecoder.prototype.gm = function (descriptor, index) {
    return this.sl();
  };
  AbstractDecoder.prototype.hm = function (descriptor, index) {
    return this.tl();
  };
  AbstractDecoder.prototype.im = function (descriptor, index) {
    return this.ul();
  };
  AbstractDecoder.prototype.jm = function (descriptor, index) {
    return this.vl();
  };
  AbstractDecoder.prototype.km = function (descriptor, index) {
    return this.wl();
  };
  AbstractDecoder.prototype.lm = function (descriptor, index) {
    return this.xl();
  };
  AbstractDecoder.prototype.mm = function (descriptor, index, deserializer, previousValue) {
    return this.zl(deserializer, previousValue);
  };
  AbstractDecoder.prototype.om = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.gj().ek();
    return (isNullabilitySupported ? true : this.nl()) ? this.zl(deserializer, previousValue) : this.ol();
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.bm = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.cm = function (descriptor) {
  };
  AbstractEncoder.prototype.sm = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.tm = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.um = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.vm = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.wm = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.xm = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.ym = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.zm = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.an = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.bn = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.cn = function (value) {
    return this.tm(new Char(value));
  };
  AbstractEncoder.prototype.dn = function (value) {
    return this.tm(value);
  };
  AbstractEncoder.prototype.en = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.fn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.vm(value);
  };
  AbstractEncoder.prototype.gn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.wm(value);
  };
  AbstractEncoder.prototype.hn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.xm(value);
  };
  AbstractEncoder.prototype.in = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.ym(value);
  };
  AbstractEncoder.prototype.jn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.zm(value);
  };
  AbstractEncoder.prototype.kn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.an(value);
  };
  AbstractEncoder.prototype.ln = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.bn(value);
  };
  AbstractEncoder.prototype.mn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.cn(value);
  };
  AbstractEncoder.prototype.nn = function (descriptor, index, value) {
    if (this.sm(descriptor, index))
      this.dn(value);
  };
  AbstractEncoder.prototype.on = function (descriptor, index, serializer, value) {
    if (this.sm(descriptor, index))
      this.pn(serializer, value);
  };
  AbstractEncoder.prototype.qn = function (descriptor, index, serializer, value) {
    if (this.sm(descriptor, index))
      this.rn(serializer, value);
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.vn_1 = -1;
    this.wn_1 = -3;
  }
  Companion.prototype.xn = function () {
    return this.vn_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.bm(descriptor);
    var result = block(composite);
    composite.cm(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.tn(descriptor, collectionSize);
    block(composite);
    composite.cm(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.bm(descriptor);
    block(composite);
    composite.cm(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.lm($this.gj(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.gj();
    return compositeDecoder.nm(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.hj = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure = this.gj();
      var composite = encoder.bm(tmp0_encodeStructure);
      {
        composite.nn(this.gj(), 0, actualSerializer.gj().ik());
        var tmp = this.gj();
        var tmp$ret$0;
        {
          tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
        }
        composite.on(tmp, 1, tmp$ret$0, value);
      }
      composite.cm(tmp0_encodeStructure);
    }
  };
  AbstractPolymorphicSerializer.prototype.ij = function (decoder) {
    var tmp$ret$5;
    {
      var tmp0_decodeStructure = this.gj();
      var composite = decoder.bm(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.pm()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.qm(this.gj());
          Companion_getInstance_2();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.lm(this.gj(), index);
            } else {
              if (index === 1) {
                var tmp$ret$2;
                $l$block_0: {
                  var tmp0_requireNotNull = klassName;
                  {
                  }
                  if (tmp0_requireNotNull == null) {
                    var tmp$ret$1;
                    {
                      tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                    }
                    var message = tmp$ret$1;
                    throw IllegalArgumentException_init_$Create$(toString(message));
                  } else {
                    tmp$ret$2 = tmp0_requireNotNull;
                    break $l$block_0;
                  }
                }
                klassName = tmp$ret$2;
                var serializer = findPolymorphicSerializer_0(this, composite, klassName);
                var tmp = this.gj();
                value = composite.nm(tmp, index, serializer, null, 8, null);
              } else {
                var tmp0_elvis_lhs = klassName;
                throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
              }
            }
          }
        }
        var tmp$ret$4;
        $l$block_1: {
          var tmp1_requireNotNull = value;
          {
          }
          if (tmp1_requireNotNull == null) {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
            }
            var message_0 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = tmp1_requireNotNull;
            break $l$block_1;
          }
        }
        var tmp_0 = tmp$ret$4;
        tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      }
      var result = tmp$ret$0;
      composite.cm(tmp0_decodeStructure);
      tmp$ret$5 = result;
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.wj = function (decoder, klassName) {
    return decoder.ak().yn(this.vj(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.xj = function (encoder, value) {
    return encoder.ak().zn(this.vj(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.dd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.dd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ao_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.gj = function () {
    return this.ao_1;
  };
  DurationSerializer.prototype.bo = function (encoder, value) {
    encoder.dn(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.hj = function (encoder, value) {
    return this.bo(encoder, value instanceof Duration ? value.p5_1 : THROW_CCE());
  };
  DurationSerializer.prototype.co = function (decoder) {
    return Companion_getInstance().n5(decoder.xl());
  };
  DurationSerializer.prototype.ij = function (decoder) {
    return new Duration(this.co(decoder));
  };
  DurationSerializer.$metadata$ = objectMeta('DurationSerializer', [KSerializer]);
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.fo_1 = primitive.ik() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.ik = function () {
    return this.fo_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.ik = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.go_1 = elementDescriptor;
    this.ho_1 = 1;
  }
  ListLikeDescriptor.prototype.mk = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.kk = function () {
    return this.ho_1;
  };
  ListLikeDescriptor.prototype.qk = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.pk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.rk = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.nk = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.ok = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.go_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.go_1, other.go_1) ? this.ik() === other.ik() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.go_1), 31) + getStringHashCode(this.ik()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.ik() + '(' + this.go_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ko_1 = serialName;
    this.lo_1 = keyDescriptor;
    this.mo_1 = valueDescriptor;
    this.no_1 = 2;
  }
  MapLikeDescriptor.prototype.ik = function () {
    return this.ko_1;
  };
  MapLikeDescriptor.prototype.mk = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.kk = function () {
    return this.no_1;
  };
  MapLikeDescriptor.prototype.qk = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.pk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.rk = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.nk = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.ok = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.ik() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.lo_1;
        break;
      case 1:
        tmp = this.mo_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.ik() === other.ik()))
      return false;
    if (!equals(this.lo_1, other.lo_1))
      return false;
    if (!equals(this.mo_1, other.mo_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.ik());
    result = imul(31, result) + hashCode(this.lo_1) | 0;
    result = imul(31, result) + hashCode(this.mo_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.ik() + '(' + this.lo_1 + ', ' + this.mo_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.ik = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.ik = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.ik = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.vo_1 = new PrimitiveArrayDescriptor(primitiveSerializer.gj());
  }
  PrimitiveArraySerializer.prototype.gj = function () {
    return this.vo_1;
  };
  PrimitiveArraySerializer.prototype.wo = function (_this__u8e3s4) {
    return _this__u8e3s4.xo();
  };
  PrimitiveArraySerializer.prototype.yo = function (_this__u8e3s4) {
    return _this__u8e3s4.zo();
  };
  PrimitiveArraySerializer.prototype.ap = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ua(size);
  };
  PrimitiveArraySerializer.prototype.bp = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.cp = function (_this__u8e3s4) {
    return this.bp((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.dp = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.ep = function () {
    return this.gp(this.fp());
  };
  PrimitiveArraySerializer.prototype.kp = function (encoder, value) {
    var size = this.lp(value);
    {
      var tmp0_encodeCollection = this.vo_1;
      var composite = encoder.tn(tmp0_encodeCollection, size);
      {
        this.jp(composite, value, size);
      }
      composite.cm(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.hj = function (encoder, value) {
    return this.kp(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.mp = function (encoder, value) {
    return this.kp(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.ij = function (decoder) {
    return this.np(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.qp = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.xo() + 1 | 0;
    return $handler == null ? this.ua(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.op_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.mp = function (encoder, value) {
    var size = this.lp(value);
    {
      var tmp0_encodeCollection = this.gj();
      var composite = encoder.tn(tmp0_encodeCollection, size);
      {
        var iterator = this.cp(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.on(this.gj(), index, this.op_1, iterator.f());
          }
           while (inductionVariable < size);
      }
      composite.cm(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.hj = function (encoder, value) {
    return this.mp(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.pp = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.hp(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.hp = function (decoder, index, builder, checkIndex) {
    var tmp = this.gj();
    this.dp(builder, index, decoder.nm(tmp, index, this.op_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.rm($this.gj());
    $this.ap(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.np = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.gp(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.ep() : tmp1_elvis_lhs;
    var startIndex = this.wo(builder);
    var compositeDecoder = decoder.bm(this.gj());
    if (compositeDecoder.pm()) {
      this.pp(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.qm(this.gj());
        Companion_getInstance_2();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.ip(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.cm(this.gj());
    return this.yo(builder);
  };
  AbstractCollectionSerializer.prototype.ij = function (decoder) {
    return this.np(decoder, null);
  };
  AbstractCollectionSerializer.prototype.ip = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.hp(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.sp = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  CollectionSerializer.prototype.lp = function (_this__u8e3s4) {
    return this.sp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.tp = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.tp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.vp_1 = kClass;
    this.wp_1 = new ArrayClassDesc(eSerializer.gj());
  }
  ReferenceArraySerializer.prototype.gj = function () {
    return this.wp_1;
  };
  ReferenceArraySerializer.prototype.xp = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.lp = function (_this__u8e3s4) {
    return this.xp((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.yp = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.cp = function (_this__u8e3s4) {
    return this.yp((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.ep = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.zp = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  ReferenceArraySerializer.prototype.wo = function (_this__u8e3s4) {
    return this.zp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.aq = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.vp_1);
  };
  ReferenceArraySerializer.prototype.yo = function (_this__u8e3s4) {
    return this.aq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.bq = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.gp = function (_this__u8e3s4) {
    return this.bq((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.cq = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ua(size);
  };
  ReferenceArraySerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.cq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.dq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ReferenceArraySerializer.prototype.dp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.dq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.eq_1 = keySerializer;
    this.fq_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.gq = function () {
    return this.eq_1;
  };
  MapLikeSerializer.prototype.hq = function () {
    return this.fq_1;
  };
  MapLikeSerializer.prototype.pp = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.hp(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.hp = function (decoder, index, builder, checkIndex) {
    var tmp = this.gj();
    var key = decoder.nm(tmp, index, this.eq_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.qm(this.gj());
        {
        }
        {
          {
            var tmp0_require = tmp0_also === (index + 1 | 0);
            {
            }
            if (!tmp0_require) {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
              }
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.s1(key)) {
      var tmp_3 = this.fq_1.gj().mk();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.mm(this.gj(), vIndex, this.fq_1, getValue(builder, key));
    } else {
      var tmp_4 = this.gj();
      tmp_1 = decoder.nm(tmp_4, vIndex, this.fq_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.v2(key, value);
    }
  };
  MapLikeSerializer.prototype.mp = function (encoder, value) {
    var size = this.lp(value);
    {
      var tmp0_encodeCollection = this.gj();
      var composite = encoder.tn(tmp0_encodeCollection, size);
      {
        var iterator = this.cp(value);
        var index = 0;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = iterator;
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              var tmp$ret$1;
              {
                tmp$ret$1 = element.j1();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.l1();
              }
              var v = tmp$ret$2;
              var tmp = this.gj();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.on(tmp, tmp0, this.eq_1, k);
              var tmp_0 = this.gj();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.on(tmp_0, tmp1, this.fq_1, v);
            }
          }
        }
      }
      composite.cm(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.hj = function (encoder, value) {
    return this.mp(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.kq_1 = new HashMapClassDesc(kSerializer.gj(), vSerializer.gj());
  }
  HashMapSerializer.prototype.gj = function () {
    return this.kq_1;
  };
  HashMapSerializer.prototype.lq = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  HashMapSerializer.prototype.lp = function (_this__u8e3s4) {
    return this.lq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.mq = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.j().d();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.mq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.ep = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.nq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.c(), 2);
  };
  HashMapSerializer.prototype.wo = function (_this__u8e3s4) {
    return this.nq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.oq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.yo = function (_this__u8e3s4) {
    return this.oq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.pq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.gp = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.qq = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.qq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.tq_1 = new LinkedHashMapClassDesc(kSerializer.gj(), vSerializer.gj());
  }
  LinkedHashMapSerializer.prototype.gj = function () {
    return this.tq_1;
  };
  LinkedHashMapSerializer.prototype.lq = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  LinkedHashMapSerializer.prototype.lp = function (_this__u8e3s4) {
    return this.lq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.mq = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.j().d();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.cp = function (_this__u8e3s4) {
    return this.mq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.ep = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.uq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.c(), 2);
  };
  LinkedHashMapSerializer.prototype.wo = function (_this__u8e3s4) {
    return this.uq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.vq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.yo = function (_this__u8e3s4) {
    return this.vq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.pq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.gp = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.wq = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.wq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.yq_1 = new ArrayListClassDesc(element.gj());
  }
  ArrayListSerializer.prototype.gj = function () {
    return this.yq_1;
  };
  ArrayListSerializer.prototype.ep = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.zq = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  ArrayListSerializer.prototype.wo = function (_this__u8e3s4) {
    return this.zq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.ar = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.yo = function (_this__u8e3s4) {
    return this.ar(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.br = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.gp = function (_this__u8e3s4) {
    return this.br((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.cr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ua(size);
  };
  ArrayListSerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.cr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.dr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ArrayListSerializer.prototype.dp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.dr(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.fr_1 = new HashSetClassDesc(eSerializer.gj());
  }
  HashSetSerializer.prototype.gj = function () {
    return this.fr_1;
  };
  HashSetSerializer.prototype.ep = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.gr = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  HashSetSerializer.prototype.wo = function (_this__u8e3s4) {
    return this.gr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.hr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.yo = function (_this__u8e3s4) {
    return this.hr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.ir = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.gp = function (_this__u8e3s4) {
    return this.ir((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.jr = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.jr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.kr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.dp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.kr(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.mr_1 = new LinkedHashSetClassDesc(eSerializer.gj());
  }
  LinkedHashSetSerializer.prototype.gj = function () {
    return this.mr_1;
  };
  LinkedHashSetSerializer.prototype.ep = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.nr = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  LinkedHashSetSerializer.prototype.wo = function (_this__u8e3s4) {
    return this.nr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.or = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.yo = function (_this__u8e3s4) {
    return this.or(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.ir = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.gp = function (_this__u8e3s4) {
    return this.ir((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.pr = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.ap = function (_this__u8e3s4, size) {
    return this.pr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.qr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.dp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.qr(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.rr_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).x5(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.vr_1[slot] = $this.vr_1[slot].ph((new Long(1, 0)).x5(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.vr_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.vr_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.oh());
          slotMarks = slotMarks.ph((new Long(1, 0)).x5(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.tr_1($this.sr_1, index)) {
            $this.vr_1[slot] = slotMarks;
            return index;
          }
        }
        $this.vr_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_2();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_3();
    this.sr_1 = descriptor;
    this.tr_1 = readIfAbsent;
    var elementsCount = this.sr_1.kk();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).x5(elementsCount);
      }
      tmp.ur_1 = tmp_0;
      this.vr_1 = Companion_getInstance_3().rr_1;
    } else {
      this.ur_1 = new Long(0, 0);
      this.vr_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.wr = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.ur_1 = this.ur_1.ph((new Long(1, 0)).x5(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.xr = function () {
    var elementsCount = this.sr_1.kk();
    while (!this.ur_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.ur_1.oh());
      this.ur_1 = this.ur_1.ph((new Long(1, 0)).x5(index));
      if (this.tr_1(this.sr_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_2();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ks_1 = true;
  }
  InlineClassDescriptor.prototype.lk = function () {
    return this.ks_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ik() === other.ik())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = tmp0__anonymous__q1qw7t.ks_1 ? contentEquals(this.xs(), tmp0__anonymous__q1qw7t.xs()) : false;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.kk() === other.kk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.kk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ok(index).ik() === other.ok(index).ik())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ok(index).mk(), other.ok(index).mk())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.zs_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.at = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.zs_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.gj = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.hj = function (encoder, value) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.prototype.ij = function (decoder) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.ct_1 = serializer;
    this.dt_1 = new SerialDescriptorForNullable(this.ct_1.gj());
  }
  NullableSerializer.prototype.gj = function () {
    return this.dt_1;
  };
  NullableSerializer.prototype.et = function (encoder, value) {
    if (!(value == null)) {
      encoder.sn();
      encoder.pn(this.ct_1, value);
    } else {
      encoder.um();
    }
  };
  NullableSerializer.prototype.hj = function (encoder, value) {
    return this.et(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.ij = function (decoder) {
    return decoder.nl() ? decoder.am(this.ct_1) : decoder.ol();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.ct_1, other.ct_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.ct_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.sk_1 = original;
    this.tk_1 = this.sk_1.ik() + '?';
    this.uk_1 = cachedSerialNames(this.sk_1);
  }
  SerialDescriptorForNullable.prototype.jk = function () {
    return this.sk_1.jk();
  };
  SerialDescriptorForNullable.prototype.kk = function () {
    return this.sk_1.kk();
  };
  SerialDescriptorForNullable.prototype.lk = function () {
    return this.sk_1.lk();
  };
  SerialDescriptorForNullable.prototype.mk = function () {
    return this.sk_1.mk();
  };
  SerialDescriptorForNullable.prototype.nk = function (index) {
    return this.sk_1.nk(index);
  };
  SerialDescriptorForNullable.prototype.ok = function (index) {
    return this.sk_1.ok(index);
  };
  SerialDescriptorForNullable.prototype.pk = function (name) {
    return this.sk_1.pk(name);
  };
  SerialDescriptorForNullable.prototype.qk = function (index) {
    return this.sk_1.qk(index);
  };
  SerialDescriptorForNullable.prototype.rk = function (index) {
    return this.sk_1.rk(index);
  };
  SerialDescriptorForNullable.prototype.ik = function () {
    return this.tk_1;
  };
  SerialDescriptorForNullable.prototype.ll = function () {
    return this.uk_1;
  };
  SerialDescriptorForNullable.prototype.ek = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.sk_1, other.sk_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.sk_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.sk_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.lj_1 = this$0.gt_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.ft_1 = objectInstance;
    this.gt_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ht_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.gj = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.ht_1.l1();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.hj = function (encoder, value) {
    encoder.bm(this.gj()).cm(this.gj());
  };
  ObjectSerializer.prototype.ij = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.gj();
      var composite = decoder.bm(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.qm(this.gj());
        Companion_getInstance_2();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.cm(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.ft_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.gj();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.h();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ll();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.kk());
    var inductionVariable = 0;
    var last = _this__u8e3s4.kk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.qk(i);
          result.b(tmp0_plusAssign);
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.md();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          {
            var tmp0_plusAssign = descriptor.qk(i);
            missingFields.b(tmp0_plusAssign);
          }
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ik());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ik());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.ik();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.mk();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = childSerializers$factory();
      tmp$ret$0 = $this.us_1.l1();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this.ws_1.l1();
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ps_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set = $this.ps_1[i];
          indices.v2(tmp0_set, i);
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ms_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.at();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ms_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bt();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
            var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$0;
              {
                tmp$ret$0 = item.gj();
              }
              tmp0_mapTo.b(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.xs());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.qk(i) + ': ' + this$0.ok(i).ik();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.ls_1 = serialName;
    this.ms_1 = generatedSerializer;
    this.ns_1 = elementsCount;
    this.os_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ns_1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = '[UNINITIALIZED]';
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ps_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.ns_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.qs_1 = tmp$ret$2;
    this.rs_1 = null;
    this.ss_1 = booleanArray(this.ns_1);
    this.ts_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.us_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.vs_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.ws_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.ik = function () {
    return this.ls_1;
  };
  PluginGeneratedSerialDescriptor.prototype.kk = function () {
    return this.ns_1;
  };
  PluginGeneratedSerialDescriptor.prototype.mk = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.jk = function () {
    var tmp0_elvis_lhs = this.rs_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.ll = function () {
    return this.ts_1.w1();
  };
  PluginGeneratedSerialDescriptor.prototype.xs = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.vs_1.l1();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.ys = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.os_1 = tmp0_this.os_1 + 1 | 0;
    this.ps_1[tmp0_this.os_1] = name;
    this.ss_1[this.os_1] = isOptional;
    this.qs_1[this.os_1] = null;
    if (this.os_1 === (this.ns_1 - 1 | 0)) {
      this.ts_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.ok = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).gj();
  };
  PluginGeneratedSerialDescriptor.prototype.rk = function (index) {
    return getChecked_0(this.ss_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.nk = function (index) {
    var tmp0_elvis_lhs = getChecked(this.qs_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.qk = function (index) {
    return getChecked(this.ps_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.pk = function (name) {
    var tmp0_elvis_lhs = this.ts_1.v1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ik() === other.ik())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.xs(), tmp0__anonymous__q1qw7t.xs());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.kk() === other.kk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.kk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ok(index).ik() === other.ok(index).ik())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ok(index).mk(), other.ok(index).mk())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.ns_1);
    var tmp_0 = this.ik() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.xs();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  CharArraySerializer_0.prototype.lt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.lt((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.mt = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.mt((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.fp = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.nt = function (decoder, index, builder, checkIndex) {
    builder.qt(decoder.km(this.gj(), index));
  };
  CharArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.nt(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.rt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.rt(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.ut = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.vt = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.vt((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.fp = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.wt = function (decoder, index, builder, checkIndex) {
    builder.zt(decoder.jm(this.gj(), index));
  };
  DoubleArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.wt(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.au = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ln(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.au(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.du = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.du((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.eu = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.fp = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.fu = function (decoder, index, builder, checkIndex) {
    builder.iu(decoder.im(this.gj(), index));
  };
  FloatArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.fu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.ju = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.ju(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.mu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.mu((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.nu = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.fp = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.ou = function (decoder, index, builder, checkIndex) {
    builder.ru(decoder.hm(this.gj(), index));
  };
  LongArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.ou(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.su = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.su(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.vu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.vu((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.wu = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.fp = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.xu = function (decoder, index, builder, checkIndex) {
    builder.av(decoder.gm(this.gj(), index));
  };
  IntArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.xu(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.bv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.in(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.bv(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.ev = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.ev((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.fv = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.fv((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.fp = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.gv = function (decoder, index, builder, checkIndex) {
    builder.jv(decoder.fm(this.gj(), index));
  };
  ShortArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.kv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.kv(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.nv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.nv((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.ov = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.fp = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.pv = function (decoder, index, builder, checkIndex) {
    builder.sv(decoder.em(this.gj(), index));
  };
  ByteArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.pv(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.tv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.tv(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.wv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.lp = function (_this__u8e3s4) {
    return this.wv((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.xv = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.gp = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.fp = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.yv = function (decoder, index, builder, checkIndex) {
    builder.bw(decoder.dm(this.gj(), index));
  };
  BooleanArraySerializer_0.prototype.hp = function (decoder, index, builder, checkIndex) {
    return this.yv(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.cw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fn(this.gj(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.jp = function (encoder, content, size) {
    return this.cw(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ot_1 = bufferWithData;
    this.pt_1 = bufferWithData.length;
    this.ua(10);
  }
  CharArrayBuilder.prototype.xo = function () {
    return this.pt_1;
  };
  CharArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.ot_1.length < requiredCapacity)
      this.ot_1 = copyOf(this.ot_1, coerceAtLeast(requiredCapacity, imul(this.ot_1.length, 2)));
  };
  CharArrayBuilder.prototype.qt = function (c) {
    this.qp(0, 1, null);
    var tmp = this.ot_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.pt_1;
    tmp0_this.pt_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.zo = function () {
    return copyOf(this.ot_1, this.pt_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xt_1 = bufferWithData;
    this.yt_1 = bufferWithData.length;
    this.ua(10);
  }
  DoubleArrayBuilder.prototype.xo = function () {
    return this.yt_1;
  };
  DoubleArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.xt_1.length < requiredCapacity)
      this.xt_1 = copyOf_0(this.xt_1, coerceAtLeast(requiredCapacity, imul(this.xt_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.zt = function (c) {
    this.qp(0, 1, null);
    var tmp = this.xt_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.yt_1;
    tmp0_this.yt_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.zo = function () {
    return copyOf_0(this.xt_1, this.yt_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gu_1 = bufferWithData;
    this.hu_1 = bufferWithData.length;
    this.ua(10);
  }
  FloatArrayBuilder.prototype.xo = function () {
    return this.hu_1;
  };
  FloatArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.gu_1.length < requiredCapacity)
      this.gu_1 = copyOf_1(this.gu_1, coerceAtLeast(requiredCapacity, imul(this.gu_1.length, 2)));
  };
  FloatArrayBuilder.prototype.iu = function (c) {
    this.qp(0, 1, null);
    var tmp = this.gu_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.hu_1;
    tmp0_this.hu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.zo = function () {
    return copyOf_1(this.gu_1, this.hu_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.pu_1 = bufferWithData;
    this.qu_1 = bufferWithData.length;
    this.ua(10);
  }
  LongArrayBuilder.prototype.xo = function () {
    return this.qu_1;
  };
  LongArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.pu_1.length < requiredCapacity)
      this.pu_1 = copyOf_2(this.pu_1, coerceAtLeast(requiredCapacity, imul(this.pu_1.length, 2)));
  };
  LongArrayBuilder.prototype.ru = function (c) {
    this.qp(0, 1, null);
    var tmp = this.pu_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.qu_1;
    tmp0_this.qu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.zo = function () {
    return copyOf_2(this.pu_1, this.qu_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yu_1 = bufferWithData;
    this.zu_1 = bufferWithData.length;
    this.ua(10);
  }
  IntArrayBuilder.prototype.xo = function () {
    return this.zu_1;
  };
  IntArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.yu_1.length < requiredCapacity)
      this.yu_1 = copyOf_3(this.yu_1, coerceAtLeast(requiredCapacity, imul(this.yu_1.length, 2)));
  };
  IntArrayBuilder.prototype.av = function (c) {
    this.qp(0, 1, null);
    var tmp = this.yu_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.zu_1;
    tmp0_this.zu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.zo = function () {
    return copyOf_3(this.yu_1, this.zu_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hv_1 = bufferWithData;
    this.iv_1 = bufferWithData.length;
    this.ua(10);
  }
  ShortArrayBuilder.prototype.xo = function () {
    return this.iv_1;
  };
  ShortArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.hv_1.length < requiredCapacity)
      this.hv_1 = copyOf_4(this.hv_1, coerceAtLeast(requiredCapacity, imul(this.hv_1.length, 2)));
  };
  ShortArrayBuilder.prototype.jv = function (c) {
    this.qp(0, 1, null);
    var tmp = this.hv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.iv_1;
    tmp0_this.iv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.zo = function () {
    return copyOf_4(this.hv_1, this.iv_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qv_1 = bufferWithData;
    this.rv_1 = bufferWithData.length;
    this.ua(10);
  }
  ByteArrayBuilder.prototype.xo = function () {
    return this.rv_1;
  };
  ByteArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.qv_1.length < requiredCapacity)
      this.qv_1 = copyOf_5(this.qv_1, coerceAtLeast(requiredCapacity, imul(this.qv_1.length, 2)));
  };
  ByteArrayBuilder.prototype.sv = function (c) {
    this.qp(0, 1, null);
    var tmp = this.qv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.rv_1;
    tmp0_this.rv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.zo = function () {
    return copyOf_5(this.qv_1, this.rv_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zv_1 = bufferWithData;
    this.aw_1 = bufferWithData.length;
    this.ua(10);
  }
  BooleanArrayBuilder.prototype.xo = function () {
    return this.aw_1;
  };
  BooleanArrayBuilder.prototype.ua = function (requiredCapacity) {
    if (this.zv_1.length < requiredCapacity)
      this.zv_1 = copyOf_6(this.zv_1, coerceAtLeast(requiredCapacity, imul(this.zv_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.bw = function (c) {
    this.qp(0, 1, null);
    var tmp = this.zv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.aw_1;
    tmp0_this.aw_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.zo = function () {
    return copyOf_6(this.zv_1, this.aw_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.dw_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.gj = function () {
    return this.dw_1;
  };
  StringSerializer.prototype.ew = function (encoder, value) {
    return encoder.dn(value);
  };
  StringSerializer.prototype.hj = function (encoder, value) {
    return this.ew(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.ij = function (decoder) {
    return decoder.xl();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.fw_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.gj = function () {
    return this.fw_1;
  };
  CharSerializer.prototype.gw = function (encoder, value) {
    return encoder.cn(value);
  };
  CharSerializer.prototype.hj = function (encoder, value) {
    return this.gw(encoder, value instanceof Char ? value.x_1 : THROW_CCE());
  };
  CharSerializer.prototype.hw = function (decoder) {
    return decoder.wl();
  };
  CharSerializer.prototype.ij = function (decoder) {
    return new Char(this.hw(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.iw_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.gj = function () {
    return this.iw_1;
  };
  DoubleSerializer.prototype.jw = function (encoder, value) {
    return encoder.bn(value);
  };
  DoubleSerializer.prototype.hj = function (encoder, value) {
    return this.jw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.ij = function (decoder) {
    return decoder.vl();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.kw_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.gj = function () {
    return this.kw_1;
  };
  FloatSerializer.prototype.lw = function (encoder, value) {
    return encoder.an(value);
  };
  FloatSerializer.prototype.hj = function (encoder, value) {
    return this.lw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.ij = function (decoder) {
    return decoder.ul();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.mw_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.gj = function () {
    return this.mw_1;
  };
  LongSerializer.prototype.nw = function (encoder, value) {
    return encoder.zm(value);
  };
  LongSerializer.prototype.hj = function (encoder, value) {
    return this.nw(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.ij = function (decoder) {
    return decoder.tl();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.ow_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.gj = function () {
    return this.ow_1;
  };
  IntSerializer.prototype.pw = function (encoder, value) {
    return encoder.ym(value);
  };
  IntSerializer.prototype.hj = function (encoder, value) {
    return this.pw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.ij = function (decoder) {
    return decoder.sl();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.qw_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.gj = function () {
    return this.qw_1;
  };
  ShortSerializer.prototype.rw = function (encoder, value) {
    return encoder.xm(value);
  };
  ShortSerializer.prototype.hj = function (encoder, value) {
    return this.rw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.ij = function (decoder) {
    return decoder.rl();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.sw_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.gj = function () {
    return this.sw_1;
  };
  ByteSerializer.prototype.tw = function (encoder, value) {
    return encoder.wm(value);
  };
  ByteSerializer.prototype.hj = function (encoder, value) {
    return this.tw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.ij = function (decoder) {
    return decoder.ql();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.uw_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.gj = function () {
    return this.uw_1;
  };
  BooleanSerializer.prototype.vw = function (encoder, value) {
    return encoder.vm(value);
  };
  BooleanSerializer.prototype.hj = function (encoder, value) {
    return this.vw(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.ij = function (decoder) {
    return decoder.pl();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.ww_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.gj = function () {
    return this.ww_1.gj();
  };
  UnitSerializer.prototype.xw = function (decoder) {
    this.ww_1.ij(decoder);
  };
  UnitSerializer.prototype.ij = function (decoder) {
    this.xw(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.yw = function (encoder, value) {
    this.ww_1.hj(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.hj = function (encoder, value) {
    return this.yw(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.zw_1 = serialName;
    this.ax_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.ik = function () {
    return this.zw_1;
  };
  PrimitiveSerialDescriptor_0.prototype.mk = function () {
    return this.ax_1;
  };
  PrimitiveSerialDescriptor_0.prototype.kk = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.qk = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.pk = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.rk = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.ok = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.nk = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.zw_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().v1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().w1();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.dd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    {
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
      }
      if (tmp$ret$0) {
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
          tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
        }
        var tmp_0 = toString(tmp$ret$1);
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = _this__u8e3s4;
          }
          tmp$ret$3 = tmp$ret$2.substring(1);
        }
        tmp = tmp_0 + tmp$ret$3;
      } else {
        tmp = _this__u8e3s4;
      }
      tmp$ret$4 = tmp;
    }
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().we(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().ze(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ue(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ff(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().te(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ef(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().df(), LongArraySerializer()), to(PrimitiveClasses_getInstance().se(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().cf(), IntArraySerializer()), to(PrimitiveClasses_getInstance().re(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().bf(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().qe(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().af(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().pe(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ye(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance())), to(getKClass(Duration), serializer_10(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.dx = function (_this__u8e3s4, index) {
    return this.fx(this.ex(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.fx = function (nestedName) {
    var tmp0_elvis_lhs = this.ix();
    return this.jx(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.ex = function (desc, index) {
    return desc.qk(index);
  };
  NamedValueDecoder.prototype.jx = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.wx(tag);
    var r = block();
    if (!$this.hx_1) {
      $this.xx();
    }
    $this.hx_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.zl($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.nl() ? this$0.zl($deserializer, $previousValue) : this$0.ol();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.gx_1 = tmp$ret$0;
    this.hx_1 = false;
  }
  TaggedDecoder.prototype.ak = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.kx = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.lx = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.mx = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.nx = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.ox = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.px = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.qx = function (tag) {
    var tmp = this.kx(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.rx = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.sx = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.tx = function (tag) {
    var tmp = this.kx(tag);
    return tmp instanceof Char ? tmp.x_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.ux = function (tag) {
    var tmp = this.kx(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.vx = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.wx(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.zl = function (deserializer, previousValue) {
    return this.am(deserializer);
  };
  TaggedDecoder.prototype.yl = function (descriptor) {
    return this.vx(this.xx(), descriptor);
  };
  TaggedDecoder.prototype.nl = function () {
    var tmp0_elvis_lhs = this.ix();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.lx(currentTag);
  };
  TaggedDecoder.prototype.ol = function () {
    return null;
  };
  TaggedDecoder.prototype.pl = function () {
    return this.mx(this.xx());
  };
  TaggedDecoder.prototype.ql = function () {
    return this.nx(this.xx());
  };
  TaggedDecoder.prototype.rl = function () {
    return this.ox(this.xx());
  };
  TaggedDecoder.prototype.sl = function () {
    return this.px(this.xx());
  };
  TaggedDecoder.prototype.tl = function () {
    return this.qx(this.xx());
  };
  TaggedDecoder.prototype.ul = function () {
    return this.rx(this.xx());
  };
  TaggedDecoder.prototype.vl = function () {
    return this.sx(this.xx());
  };
  TaggedDecoder.prototype.wl = function () {
    return this.tx(this.xx());
  };
  TaggedDecoder.prototype.xl = function () {
    return this.ux(this.xx());
  };
  TaggedDecoder.prototype.bm = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.cm = function (descriptor) {
  };
  TaggedDecoder.prototype.dm = function (descriptor, index) {
    return this.mx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.em = function (descriptor, index) {
    return this.nx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.fm = function (descriptor, index) {
    return this.ox(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.gm = function (descriptor, index) {
    return this.px(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.hm = function (descriptor, index) {
    return this.qx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.im = function (descriptor, index) {
    return this.rx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.jm = function (descriptor, index) {
    return this.sx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.km = function (descriptor, index) {
    return this.tx(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.lm = function (descriptor, index) {
    return this.ux(this.dx(descriptor, index));
  };
  TaggedDecoder.prototype.mm = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dx(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.om = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dx(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.ix = function () {
    return lastOrNull(this.gx_1);
  };
  TaggedDecoder.prototype.wx = function (name) {
    this.gx_1.b(name);
  };
  TaggedDecoder.prototype.xx = function () {
    var r = this.gx_1.d3(get_lastIndex_0(this.gx_1));
    this.hx_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.yx_1 = key;
    this.zx_1 = value;
  }
  MapEntry.prototype.j1 = function () {
    return this.yx_1;
  };
  MapEntry.prototype.l1 = function () {
    return this.zx_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.yx_1 + ', value=' + this.zx_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.yx_1 == null ? 0 : hashCode(this.yx_1);
    result = imul(result, 31) + (this.zx_1 == null ? 0 : hashCode(this.zx_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.yx_1, tmp0_other_with_cast.yx_1))
      return false;
    if (!equals(this.zx_1, tmp0_other_with_cast.zx_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.gj();
      $this$buildSerialDescriptor.rj('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.gj();
      $this$buildSerialDescriptor.rj('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.cy_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.gj = function () {
    return this.cy_1;
  };
  MapEntrySerializer_0.prototype.dy = function (_this__u8e3s4) {
    return _this__u8e3s4.j1();
  };
  MapEntrySerializer_0.prototype.ey = function (_this__u8e3s4) {
    return this.dy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.fy = function (_this__u8e3s4) {
    return _this__u8e3s4.l1();
  };
  MapEntrySerializer_0.prototype.gy = function (_this__u8e3s4) {
    return this.fy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.hy = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.gj();
      $this$buildClassSerialDescriptor.rj('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.gj();
      $this$buildClassSerialDescriptor.rj('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.ny_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.gj = function () {
    return this.ny_1;
  };
  PairSerializer_0.prototype.oy = function (_this__u8e3s4) {
    return _this__u8e3s4.z2_1;
  };
  PairSerializer_0.prototype.ey = function (_this__u8e3s4) {
    return this.oy(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.py = function (_this__u8e3s4) {
    return _this__u8e3s4.a3_1;
  };
  PairSerializer_0.prototype.gy = function (_this__u8e3s4) {
    return this.py(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.hy = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.nm($this.ty_1, 0, $this.qy_1, null, 8, null);
    var b = composite.nm($this.ty_1, 1, $this.ry_1, null, 8, null);
    var c = composite.nm($this.ty_1, 2, $this.sy_1, null, 8, null);
    composite.cm($this.ty_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.qm($this.ty_1);
      Companion_getInstance_2();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.nm($this.ty_1, 0, $this.qy_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.nm($this.ty_1, 1, $this.ry_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.nm($this.ty_1, 2, $this.sy_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.cm($this.ty_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.qy_1.gj();
      $this$buildClassSerialDescriptor.rj('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.ry_1.gj();
      $this$buildClassSerialDescriptor.rj('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.sy_1.gj();
      $this$buildClassSerialDescriptor.rj('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.qy_1 = aSerializer;
    this.ry_1 = bSerializer;
    this.sy_1 = cSerializer;
    var tmp = this;
    tmp.ty_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.gj = function () {
    return this.ty_1;
  };
  TripleSerializer_0.prototype.uy = function (encoder, value) {
    var structuredEncoder = encoder.bm(this.ty_1);
    structuredEncoder.on(this.ty_1, 0, this.qy_1, value.r6_1);
    structuredEncoder.on(this.ty_1, 1, this.ry_1, value.s6_1);
    structuredEncoder.on(this.ty_1, 2, this.sy_1, value.t6_1);
    structuredEncoder.cm(this.ty_1);
  };
  TripleSerializer_0.prototype.hj = function (encoder, value) {
    return this.uy(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.ij = function (decoder) {
    var composite = decoder.bm(this.ty_1);
    if (composite.pm()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.iy_1 = keySerializer;
    this.jy_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.ky = function (encoder, value) {
    var structuredEncoder = encoder.bm(this.gj());
    structuredEncoder.on(this.gj(), 0, this.iy_1, this.ey(value));
    structuredEncoder.on(this.gj(), 1, this.jy_1, this.gy(value));
    structuredEncoder.cm(this.gj());
  };
  KeyValueSerializer.prototype.hj = function (encoder, value) {
    return this.ky(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.ij = function (decoder) {
    var composite = decoder.bm(this.gj());
    if (composite.pm()) {
      var tmp = this.gj();
      var key = composite.nm(tmp, 0, this.iy_1, null, 8, null);
      var tmp_0 = this.gj();
      var value = composite.nm(tmp_0, 1, this.jy_1, null, 8, null);
      return this.hy(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.qm(this.gj());
      Companion_getInstance_2();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.gj();
          key_0 = composite.nm(tmp_1, 0, this.iy_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.gj();
            value_0 = composite.nm(tmp_2, 1, this.jy_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.cm(this.gj());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.hy(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.vy_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.gj = function () {
    return this.vy_1;
  };
  UIntSerializer.prototype.wy = function (encoder, value) {
    var tmp = encoder.en(this.vy_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    }
    tmp.ym(tmp$ret$0);
  };
  UIntSerializer.prototype.hj = function (encoder, value) {
    return this.wy(encoder, value instanceof UInt ? value.e7_1 : THROW_CCE());
  };
  UIntSerializer.prototype.xy = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUInt = decoder.yl(this.vy_1).sl();
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    }
    return tmp$ret$0;
  };
  UIntSerializer.prototype.ij = function (decoder) {
    return new UInt(this.xy(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.yy_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.gj = function () {
    return this.yy_1;
  };
  ULongSerializer.prototype.zy = function (encoder, value) {
    var tmp = encoder.en(this.yy_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    }
    tmp.zm(tmp$ret$0);
  };
  ULongSerializer.prototype.hj = function (encoder, value) {
    return this.zy(encoder, value instanceof ULong ? value.l7_1 : THROW_CCE());
  };
  ULongSerializer.prototype.az = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toULong = decoder.yl(this.yy_1).tl();
      tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    }
    return tmp$ret$0;
  };
  ULongSerializer.prototype.ij = function (decoder) {
    return new ULong(this.az(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.bz_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.gj = function () {
    return this.bz_1;
  };
  UByteSerializer.prototype.cz = function (encoder, value) {
    var tmp = encoder.en(this.bz_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    }
    tmp.wm(tmp$ret$0);
  };
  UByteSerializer.prototype.hj = function (encoder, value) {
    return this.cz(encoder, value instanceof UByte ? value.y6_1 : THROW_CCE());
  };
  UByteSerializer.prototype.dz = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUByte = decoder.yl(this.bz_1).ql();
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    }
    return tmp$ret$0;
  };
  UByteSerializer.prototype.ij = function (decoder) {
    return new UByte(this.dz(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.ez_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.gj = function () {
    return this.ez_1;
  };
  UShortSerializer.prototype.fz = function (encoder, value) {
    var tmp = encoder.en(this.ez_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    }
    tmp.xm(tmp$ret$0);
  };
  UShortSerializer.prototype.hj = function (encoder, value) {
    return this.fz(encoder, value instanceof UShort ? value.r7_1 : THROW_CCE());
  };
  UShortSerializer.prototype.gz = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUShort = decoder.yl(this.ez_1).rl();
      tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    }
    return tmp$ret$0;
  };
  UShortSerializer.prototype.ij = function (decoder) {
    return new UShort(this.gz(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.ck = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.dk(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.iz_1 = class2ContextualFactory;
    this.jz_1 = polyBase2Serializers;
    this.kz_1 = polyBase2DefaultSerializerProvider;
    this.lz_1 = polyBase2NamedSerializers;
    this.mz_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.zn = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.jz_1.v1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.kz_1.v1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.yn = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.lz_1.v1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).v1(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.mz_1.v1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.dk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.iz_1.v1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nz(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.hz = function (collector) {
    {
      var tmp0_forEach = this.iz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_forEach.j().d();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = element.j1();
          }
          var kclass = tmp$ret$1;
          var tmp$ret$2;
          {
            tmp$ret$2 = element.l1();
          }
          var serial = tmp$ret$2;
          var tmp0_subject = serial;
          if (tmp0_subject instanceof Argless) {
            var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
            var tmp_0 = serial.qz_1;
            collector.rz(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
          } else {
            if (tmp0_subject instanceof WithTypeArguments)
              collector.pz(kclass, serial.oz_1);
          }
        }
      }
    }
    {
      var tmp1_forEach = this.jz_1;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_forEach.j().d();
      }
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = element_0.j1();
          }
          var baseClass = tmp$ret$4;
          var tmp$ret$5;
          {
            tmp$ret$5 = element_0.l1();
          }
          var classMap = tmp$ret$5;
          {
            var tmp$ret$6;
            {
              tmp$ret$6 = classMap.j().d();
            }
            var tmp0_iterator_1 = tmp$ret$6;
            while (tmp0_iterator_1.e()) {
              var element_1 = tmp0_iterator_1.f();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = element_1.j1();
                }
                var actualClass = tmp$ret$7;
                var tmp$ret$8;
                {
                  tmp$ret$8 = element_1.l1();
                }
                var serializer = tmp$ret$8;
                var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
                var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
                var tmp$ret$9;
                {
                  tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
                }
                collector.sz(tmp_1, tmp_2, tmp$ret$9);
              }
            }
          }
        }
      }
    }
    {
      var tmp2_forEach = this.kz_1;
      var tmp$ret$10;
      {
        tmp$ret$10 = tmp2_forEach.j().d();
      }
      var tmp0_iterator_2 = tmp$ret$10;
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        {
          var tmp$ret$11;
          {
            tmp$ret$11 = element_2.j1();
          }
          var baseClass_0 = tmp$ret$11;
          var tmp$ret$12;
          {
            tmp$ret$12 = element_2.l1();
          }
          var provider = tmp$ret$12;
          var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
          collector.tz(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
        }
      }
    }
    {
      var tmp3_forEach = this.mz_1;
      var tmp$ret$13;
      {
        tmp$ret$13 = tmp3_forEach.j().d();
      }
      var tmp0_iterator_3 = tmp$ret$13;
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        {
          var tmp$ret$14;
          {
            tmp$ret$14 = element_3.j1();
          }
          var baseClass_1 = tmp$ret$14;
          var tmp$ret$15;
          {
            tmp$ret$15 = element_3.l1();
          }
          var provider_0 = tmp$ret$15;
          var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
          collector.uz(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
        }
      }
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.vz = function () {
    return this.qz_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.wz = function () {
    return this.oz_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.xz_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.xz_1.equals(tmp0_other_with_cast.xz_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.xz_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.xz_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.ed(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    {
      tmp$ret$0 = copyToArray(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.dd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_asDynamic = get_js(_this__u8e3s4);
        tmp$ret$0 = tmp0_asDynamic;
      }
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ve());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      {
        tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      }
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.it(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
    }
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.ek = get_isNullable;
  SerialDescriptorImpl.prototype.lk = get_isInline;
  AbstractDecoder.prototype.nm = decodeSerializableElement$default;
  AbstractDecoder.prototype.am = decodeSerializableValue;
  AbstractDecoder.prototype.pm = decodeSequentially;
  AbstractDecoder.prototype.rm = decodeCollectionSize;
  AbstractEncoder.prototype.sn = encodeNotNullMark;
  AbstractEncoder.prototype.tn = beginCollection;
  AbstractEncoder.prototype.pn = encodeSerializableValue;
  AbstractEncoder.prototype.rn = encodeNullableSerializableValue;
  AbstractEncoder.prototype.un = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.ek = get_isNullable;
  ListLikeDescriptor.prototype.lk = get_isInline;
  ListLikeDescriptor.prototype.jk = get_annotations;
  PrimitiveArrayDescriptor.prototype.ek = get_isNullable;
  PrimitiveArrayDescriptor.prototype.lk = get_isInline;
  PrimitiveArrayDescriptor.prototype.jk = get_annotations;
  ArrayClassDesc.prototype.ek = get_isNullable;
  ArrayClassDesc.prototype.lk = get_isInline;
  ArrayClassDesc.prototype.jk = get_annotations;
  MapLikeDescriptor.prototype.ek = get_isNullable;
  MapLikeDescriptor.prototype.lk = get_isInline;
  MapLikeDescriptor.prototype.jk = get_annotations;
  HashMapClassDesc.prototype.ek = get_isNullable;
  HashMapClassDesc.prototype.lk = get_isInline;
  HashMapClassDesc.prototype.jk = get_annotations;
  LinkedHashMapClassDesc.prototype.ek = get_isNullable;
  LinkedHashMapClassDesc.prototype.lk = get_isInline;
  LinkedHashMapClassDesc.prototype.jk = get_annotations;
  ArrayListClassDesc.prototype.ek = get_isNullable;
  ArrayListClassDesc.prototype.lk = get_isInline;
  ArrayListClassDesc.prototype.jk = get_annotations;
  HashSetClassDesc.prototype.ek = get_isNullable;
  HashSetClassDesc.prototype.lk = get_isInline;
  HashSetClassDesc.prototype.jk = get_annotations;
  LinkedHashSetClassDesc.prototype.ek = get_isNullable;
  LinkedHashSetClassDesc.prototype.lk = get_isInline;
  LinkedHashSetClassDesc.prototype.jk = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.ek = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.lk = get_isInline;
  InlineClassDescriptor.prototype.ek = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.bt = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.ek = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.lk = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.jk = get_annotations;
  TaggedDecoder.prototype.nm = decodeSerializableElement$default;
  TaggedDecoder.prototype.am = decodeSerializableValue;
  TaggedDecoder.prototype.pm = decodeSequentially;
  TaggedDecoder.prototype.rm = decodeCollectionSize;
  NamedValueDecoder.prototype.am = decodeSerializableValue;
  NamedValueDecoder.prototype.nm = decodeSerializableElement$default;
  NamedValueDecoder.prototype.pm = decodeSequentially;
  NamedValueDecoder.prototype.rm = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_getInstance_2;
  _.$_$.l = DoubleSerializer_getInstance;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_14;
  _.$_$.t = serializer_11;
  _.$_$.u = serializer_13;
  _.$_$.v = serializer_12;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = decodeCollectionSize;
  _.$_$.i1 = decodeSequentially;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = CompositeEncoder;
  _.$_$.l1 = decodeSerializableValue;
  _.$_$.m1 = Decoder;
  _.$_$.n1 = beginCollection;
  _.$_$.o1 = encodeNotNullMark;
  _.$_$.p1 = encodeNullableSerializableValue;
  _.$_$.q1 = Encoder;
  _.$_$.r1 = AbstractPolymorphicSerializer;
  _.$_$.s1 = ArrayListSerializer;
  _.$_$.t1 = ElementMarker;
  _.$_$.u1 = typeParametersSerializers;
  _.$_$.v1 = GeneratedSerializer;
  _.$_$.w1 = NamedValueDecoder;
  _.$_$.x1 = PluginGeneratedSerialDescriptor;
  _.$_$.y1 = SerializerFactory;
  _.$_$.z1 = jsonCachedSerialNames;
  _.$_$.a2 = throwMissingFieldException;
  _.$_$.b2 = EmptySerializersModule_0;
  _.$_$.c2 = contextual;
  _.$_$.d2 = SerializersModuleCollector;
  _.$_$.e2 = DeserializationStrategy;
  _.$_$.f2 = KSerializer;
  _.$_$.g2 = MissingFieldException;
  _.$_$.h2 = SealedClassSerializer;
  _.$_$.i2 = SerializationException;
  _.$_$.j2 = StringFormat;
  _.$_$.k2 = findPolymorphicSerializer;
  _.$_$.l2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map