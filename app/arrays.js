exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((acc, item) => acc + item, 0);
  },

  remove: function (arr, item) {
    return arr.filter((a) => a !== item);
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.filter((a) => a === item).length;
  },

  duplicates: function (arr) {
    const counts = {};
    const duplicates = new Set();

    arr.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] === 2) {
        duplicates.add(num); // Add to set when count reaches 2
      }
    });

    return Array.from(duplicates);
  },

  square: function (arr) {
    return arr.map((a) => a * a);
  },

  findAllOccurrences: function (arr, target) {
    const positions = [];
    arr.forEach((a, index) => {
      if (a === target) positions.push(index);
    });
    return positions;
  }
};
