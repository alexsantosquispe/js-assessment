exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  /**
   * Returns the string with the limited(amount) characters
   * @param {string} str
   * @param {number} amount
   */
  reduceString: function (str, amount) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += str[i].repeat(Math.min(count, amount));
        count = 1;
      }
    }

    return result;
  },

  wordWrap: function (str, cols) {},

  reverseString: function (str) {
    return str.split("").reverse().join("");
  }
};
