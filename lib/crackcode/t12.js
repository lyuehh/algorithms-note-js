function reverse(str) {
  var b = [];
  for (var i = 0; i < str.length; i += 1) {
    b[i] = str[str.length - i - 1];
  }
  return b.join('');
}
exports.reverse = reverse;
