exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    if (dirName) {
      if (data.dir === dirName) {
        return this.listFiles(data);
      }
      return data.files.flatMap((file) => {
        if (typeof file === "string") return [];
        return this.listFiles(file, dirName);
      });
    }
    return data.files.flatMap((file) => {
      if (typeof file === "string") return file;
      return this.listFiles(file);
    });
  },

  permute: function (arr) {},

  fibonacci: function (n) {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function (n) {}
};
