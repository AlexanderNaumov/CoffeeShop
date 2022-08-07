(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['CoffeeShop-MultiplatformAnnotations'] = factory(typeof this['CoffeeShop-MultiplatformAnnotations'] === 'undefined' ? {} : this['CoffeeShop-MultiplatformAnnotations']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=CoffeeShop-MultiplatformAnnotations.js.map