(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CoffeeShop-Preferences'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'CoffeeShop-Preferences'.");
    }
    root['CoffeeShop-Preferences'] = factory(typeof this['CoffeeShop-Preferences'] === 'undefined' ? {} : this['CoffeeShop-Preferences'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.k3;
  var objectMeta = kotlin_kotlin.$_$.m7;
  //endregion
  //region block: pre-declaration
  //endregion
  function Preferences() {
    Preferences_instance = this;
  }
  Preferences.prototype.p35 = function (key, value) {
    {
      var tmp0_set = localStorage;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_set;
      }
      tmp$ret$0[key] = value;
    }
  };
  Preferences.prototype.n1g = function (key) {
    return localStorage.getItem(key);
  };
  Preferences.prototype.q35 = function (key) {
    localStorage.removeItem(key);
  };
  Preferences.$metadata$ = objectMeta('Preferences');
  var Preferences_instance;
  function Preferences_getInstance() {
    if (Preferences_instance == null)
      new Preferences();
    return Preferences_instance;
  }
  return _;
}));

//# sourceMappingURL=CoffeeShop-Preferences.js.map