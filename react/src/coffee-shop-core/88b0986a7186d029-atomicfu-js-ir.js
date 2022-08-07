(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var fillArrayVal = kotlin_kotlin.$_$.r6;
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var classMeta = kotlin_kotlin.$_$.p6;
  var objectMeta = kotlin_kotlin.$_$.m7;
  var toString = kotlin_kotlin.$_$.fa;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.z19_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.a1a_1);
    }
  }
  function atomicfu$AtomicRefArray$ref(size) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = size;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = atomic$ref$1(null);
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.b1a_1 = tmp_2;
  }
  atomicfu$AtomicRefArray$ref.prototype.c1a = function () {
    return this.b1a_1.length;
  };
  atomicfu$AtomicRefArray$ref.prototype.atomicfu$get = function (index) {
    return this.b1a_1[index];
  };
  atomicfu$AtomicRefArray$ref.$metadata$ = classMeta('AtomicArray');
  Object.defineProperty(atomicfu$AtomicRefArray$ref.prototype, 'atomicfu$size', {
    configurable: true,
    get: atomicfu$AtomicRefArray$ref.prototype.c1a
  });
  function atomicfu$AtomicRefArray$ofNulls(size) {
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function getAndUpdate(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.a1a_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return cur;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function AtomicRef(value) {
    this.z19_1 = value;
  }
  AtomicRef.prototype.d1a = function (_set____db54di) {
    this.z19_1 = _set____db54di;
  };
  AtomicRef.prototype.e1a = function () {
    return this.z19_1;
  };
  AtomicRef.prototype.f1a = function (value) {
    this.z19_1 = value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.z19_1 === expect))
      return false;
    this.z19_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.z19_1;
    this.z19_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.z19_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.e1a,
    set: AtomicRef.prototype.d1a
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.g1a_1 = value;
  }
  AtomicBoolean.prototype.h1a = function (_set____db54di) {
    this.g1a_1 = _set____db54di;
  };
  AtomicBoolean.prototype.e1a = function () {
    return this.g1a_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.g1a_1 === expect))
      return false;
    this.g1a_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.g1a_1;
    this.g1a_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.g1a_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.e1a,
    set: AtomicBoolean.prototype.h1a
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.a1a_1 = value;
  }
  AtomicInt.prototype.i1a = function (_set____db54di) {
    this.a1a_1 = _set____db54di;
  };
  AtomicInt.prototype.e1a = function () {
    return this.a1a_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.a1a_1 === expect))
      return false;
    this.a1a_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.a1a_1;
    this.a1a_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.a1a_1;
    tmp0_this.a1a_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.a1a_1;
    tmp0_this.a1a_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.a1a_1;
    var tmp0_this = this;
    tmp0_this.a1a_1 = tmp0_this.a1a_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.a1a_1 = tmp0_this.a1a_1 + delta | 0;
    return this.a1a_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.a1a_1 = tmp0_this.a1a_1 + 1 | 0;
    return tmp0_this.a1a_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.a1a_1 = tmp0_this.a1a_1 - 1 | 0;
    return tmp0_this.a1a_1;
  };
  AtomicInt.prototype.toString = function () {
    return this.a1a_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.e1a,
    set: AtomicInt.prototype.i1a
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.j1a_1 = value;
  }
  AtomicLong.prototype.k1a = function (_set____db54di) {
    this.j1a_1 = _set____db54di;
  };
  AtomicLong.prototype.e1a = function () {
    return this.j1a_1;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this.j1a_1.equals(expect))
      return false;
    this.j1a_1 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.j1a_1;
    this.j1a_1 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.j1a_1;
    tmp0_this.j1a_1 = tmp1.mh();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.j1a_1;
    tmp0_this.j1a_1 = tmp1.nh();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.j1a_1;
    var tmp0_this = this;
    tmp0_this.j1a_1 = tmp0_this.j1a_1.p4(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.j1a_1 = tmp0_this.j1a_1.p4(delta);
    return this.j1a_1;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.j1a_1 = tmp0_this.j1a_1.mh();
    return tmp0_this.j1a_1;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.j1a_1 = tmp0_this.j1a_1.nh();
    return tmp0_this.j1a_1;
  };
  AtomicLong.prototype.toString = function () {
    return this.j1a_1.toString();
  };
  AtomicLong.$metadata$ = classMeta('AtomicLong');
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype.e1a,
    set: AtomicLong.prototype.k1a
  });
  function atomic$long$1(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_2(initial, trace) {
    return new AtomicLong(initial);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomicfu$AtomicRefArray$ofNulls;
  _.$_$.b = atomic$boolean$1;
  _.$_$.c = atomic$long$1;
  _.$_$.d = atomic$ref$1;
  _.$_$.e = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map