exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    return num.toString(2).padStart(8, "0");
  },

  multiply: function (a, b) {
    const aDecimals = (a.toString().split(".")[1] || "").length;
    const bDecimals = (b.toString().split(".")[1] || "").length;
    const scale = 10 ** (aDecimals + bDecimals);

    const intA = Number(a.toString().replace(".", ""));
    const intB = Number(b.toString().replace(".", ""));

    return (intA * intB) / scale;
  }
};
