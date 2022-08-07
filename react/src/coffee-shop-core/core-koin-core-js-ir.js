(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'core-koin-core-js-ir'.");
    }
    root['core-koin-core-js-ir'] = factory(typeof this['core-koin-core-js-ir'] === 'undefined' ? {} : this['core-koin-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.a9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.k6;
  var classMeta = kotlin_kotlin.$_$.p6;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var Enum = kotlin_kotlin.$_$.y8;
  var isObject = kotlin_kotlin.$_$.g7;
  var Pair = kotlin_kotlin.$_$.f9;
  var interfaceMeta = kotlin_kotlin.$_$.w6;
  var THROW_CCE = kotlin_kotlin.$_$.i9;
  var isArray = kotlin_kotlin.$_$.x6;
  var roundToLong = kotlin_kotlin.$_$.r7;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  ClosedScopeException.prototype = Object.create(Exception.prototype);
  ClosedScopeException.prototype.constructor = ClosedScopeException;
  NoBeanDefFoundException.prototype = Object.create(Exception.prototype);
  NoBeanDefFoundException.prototype.constructor = NoBeanDefFoundException;
  Level.prototype = Object.create(Enum.prototype);
  Level.prototype.constructor = Level;
  //endregion
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp0_safe_receiver = typeQualifier;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  ClosedScopeException.$metadata$ = classMeta('ClosedScopeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  NoBeanDefFoundException.$metadata$ = classMeta('NoBeanDefFoundException', undefined, undefined, undefined, undefined, Exception.prototype);
  function InstanceContext(koin, scope, parameters) {
    this.r35_1 = koin;
    this.s35_1 = scope;
    this.t35_1 = parameters;
  }
  InstanceContext.$metadata$ = classMeta('InstanceContext');
  function canLog($this, level) {
    return $this.u35_1.d4(level) <= 0;
  }
  function doLog($this, level, msg) {
    if (canLog($this, level)) {
      $this.v35(level, msg);
    }
  }
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_ERROR_instance = new Level('ERROR', 2);
    Level_NONE_instance = new Level('NONE', 3);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Level.$metadata$ = classMeta('Level', undefined, undefined, undefined, undefined, Enum.prototype);
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this.e36_1) {
      throw new ClosedScopeException("Scope '" + $this.x35_1 + "' is closed");
    }
    var tmp0_safe_receiver = parameterDef;
    var parameters = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
    if (!(parameters == null)) {
      var tmp = $this.z35_1.i36_1;
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.j36(tmp_0, Scope$resolveInstance$lambda(parameters));
      $this.d36_1.k36(parameters);
    }
    var instanceContext = new InstanceContext($this.z35_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(parameters == null)) {
      var tmp_1 = $this.z35_1.i36_1;
      var tmp_2 = Level_DEBUG_getInstance();
      tmp_1.j36(tmp_2, Scope$resolveInstance$lambda_0());
      $this.d36_1.t1f();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this.z35_1.g36_1.o36(qualifier, clazz, $this.w35_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp_0 = $this.z35_1.i36_1;
          var tmp_1 = Level_DEBUG_getInstance();
          tmp_0.j36(tmp_1, Scope$resolveValue$lambda(clazz, qualifier));
          var tmp0_safe_receiver = $this.d36_1.p36();
          tmp$ret$0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r36(clazz);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$5;
      {
        {
        }
        var tmp$ret$4;
        {
          var tmp_3 = $this.z35_1.i36_1;
          var tmp_4 = Level_DEBUG_getInstance();
          tmp_3.j36(tmp_4, Scope$resolveValue$lambda_0(clazz, qualifier));
          var tmp0_safe_receiver_0 = $this.b36_1;
          var tmp_5;
          if (tmp0_safe_receiver_0 == null) {
            tmp_5 = null;
          } else {
            var tmp$ret$3;
            {
              {
              }
              var tmp$ret$2;
              {
                var tmp_6;
                if (clazz.ed(tmp0_safe_receiver_0)) {
                  var tmp_7 = $this.b36_1;
                  tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : null;
                } else {
                  tmp_6 = null;
                }
                tmp$ret$2 = tmp_6;
              }
              tmp$ret$3 = tmp$ret$2;
            }
            tmp_5 = tmp$ret$3;
          }
          tmp$ret$4 = tmp_5;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      tmp_2 = tmp$ret$5;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_2;
    var tmp_8;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$7;
      {
        {
        }
        var tmp$ret$6;
        {
          var tmp_9 = $this.z35_1.i36_1;
          var tmp_10 = Level_DEBUG_getInstance();
          tmp_9.j36(tmp_10, Scope$resolveValue$lambda_1(clazz, qualifier));
          tmp$ret$6 = findInOtherScope($this, clazz, qualifier, parameterDef);
        }
        tmp$ret$7 = tmp$ret$6;
      }
      tmp_8 = tmp$ret$7;
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_8;
    var tmp_11;
    if (tmp3_elvis_lhs == null) {
      var tmp$ret$9;
      {
        {
        }
        var tmp$ret$8;
        {
          $this.d36_1.s36();
          var tmp_12 = $this.z35_1.i36_1;
          var tmp_13 = Level_DEBUG_getInstance();
          tmp_12.j36(tmp_13, Scope$resolveValue$lambda_2());
          throwDefinitionNotFound($this, qualifier, clazz);
        }
        tmp$ret$9 = tmp$ret$8;
      }
      tmp_11 = tmp$ret$9;
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    return tmp_11;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.a36_1.d();
    $l$loop: while (tmp0_iterator.e()) {
      var scope = tmp0_iterator.f();
      instance = scope.t36(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp0_safe_receiver = qualifier;
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
          tmp$ret$0 = " & qualifier:'" + qualifier + "'";
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("|- No definition found for class:'" + getFullName(clazz) + "'" + qualifierString + '. Check your definitions!');
  }
  function Scope$get$lambda(this$0, $qualifier, $clazz, $parameters) {
    return function () {
      return resolveInstance(this$0, $qualifier, $clazz, $parameters);
    };
  }
  function Scope$resolveInstance$lambda($parameters) {
    return function () {
      return '| put parameters on stack ' + $parameters + ' ';
    };
  }
  function Scope$resolveInstance$lambda_0() {
    return function () {
      return '| remove parameters from stack';
    };
  }
  function Scope$resolveValue$lambda($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look in injected parameters";
    };
  }
  function Scope$resolveValue$lambda_0($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look at scope source";
    };
  }
  function Scope$resolveValue$lambda_1($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look in other scopes";
    };
  }
  function Scope$resolveValue$lambda_2() {
    return function () {
      return '| clear parameter stack';
    };
  }
  function measureDurationForResult(code) {
    var tmp0_container = measureTimedValue(code);
    var value = tmp0_container.b3();
    var duration = tmp0_container.c3();
    return new Pair(value, duration);
  }
  function measureTimedValue(code) {
    var start = KoinPlatformTimeTools_getInstance().u36();
    var value = code();
    var end = KoinPlatformTimeTools_getInstance().u36();
    var tmp$ret$0;
    {
      var tmp0_div = end.q4(start);
      tmp$ret$0 = tmp0_div.ad() / 1000000.0;
    }
    return new Pair(value, tmp$ret$0);
  }
  function get_classNames() {
    init_properties_KClassExt_kt_uc2ra8();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    init_properties_KClassExt_kt_uc2ra8();
    var tmp0_elvis_lhs = get_classNames().v1(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    init_properties_KClassExt_kt_uc2ra8();
    var name = KoinPlatformTools_getInstance().v36(_this__u8e3s4);
    {
      var tmp0_set = get_classNames();
      tmp0_set.v2(_this__u8e3s4, name);
    }
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function init_properties_KClassExt_kt_uc2ra8() {
    if (properties_initialized_KClassExt_kt_dizwhw) {
    } else {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_getInstance().w36();
    }
  }
  function TimeSource() {
  }
  TimeSource.$metadata$ = interfaceMeta('TimeSource');
  function getTimeSource() {
    var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (isNode) {
      tmp_0 = new NodeJsHrTimeSource();
    } else {
      var tmp_1 = self.performance && !!self.performance.now;
      var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2;
      if (isPerformanceNowSupported) {
        tmp_2 = new PerformanceNowTimeSource();
      } else {
        tmp_2 = new DateNowTimeSource();
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function NodeJsHrTimeSource() {
  }
  NodeJsHrTimeSource.prototype.x36 = function () {
    var tmp = process.hrtime();
    var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    {
      tmp$ret$0 = tmp0_container[0];
    }
    var seconds = tmp$ret$0;
    var tmp$ret$1;
    {
      tmp$ret$1 = tmp0_container[1];
    }
    var nanos = tmp$ret$1;
    return roundToLong(seconds * 1000000000 + nanos);
  };
  NodeJsHrTimeSource.$metadata$ = classMeta('NodeJsHrTimeSource', [TimeSource]);
  function PerformanceNowTimeSource() {
  }
  PerformanceNowTimeSource.prototype.x36 = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  PerformanceNowTimeSource.$metadata$ = classMeta('PerformanceNowTimeSource', [TimeSource]);
  function DateNowTimeSource() {
  }
  DateNowTimeSource.prototype.x36 = function () {
    return roundToLong(Date.now() * 1000000);
  };
  DateNowTimeSource.$metadata$ = classMeta('DateNowTimeSource', [TimeSource]);
  function KoinPlatformTimeTools() {
    KoinPlatformTimeTools_instance = this;
  }
  KoinPlatformTimeTools.prototype.u36 = function () {
    return getTimeSource().x36();
  };
  KoinPlatformTimeTools.$metadata$ = objectMeta('KoinPlatformTimeTools');
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    if (KoinPlatformTimeTools_instance == null)
      new KoinPlatformTimeTools();
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  KoinPlatformTools.prototype.v36 = function (kClass) {
    var tmp0_elvis_lhs = kClass.dd();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  KoinPlatformTools.prototype.w36 = function () {
    return HashMap_init_$Create$();
  };
  KoinPlatformTools.$metadata$ = objectMeta('KoinPlatformTools');
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance == null)
      new KoinPlatformTools();
    return KoinPlatformTools_instance;
  }
  return _;
}));

//# sourceMappingURL=core-koin-core-js-ir.js.map