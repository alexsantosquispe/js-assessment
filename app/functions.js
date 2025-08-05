exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (str2) {
      return str + ", " + str2;
    };
  },

  makeClosures: function (arr, fn) {
    var closure = function (val) {
      return function () {
        return fn(val);
      };
    };
    return arr.map((item) => closure(item));
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function () {
    let args = arguments;
    return [...args].reduce((a, b) => a + b, 0);
  },

  callIt: function (fn) {
    let args = [...arguments].slice(1);
    return fn(...args);
  },

  partialUsingArguments: function (fn) {
    let rest = [...arguments].slice(1);

    return function () {
      let args = [...rest, ...arguments];
      return fn(...args);
    };
  },

  curryIt: function (fn) {
    let carried = function (...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      }

      return function (arg) {
        return carried(...args, arg);
      };
    };

    return function (arg) {
      return carried(arg);
    };
  }
};
