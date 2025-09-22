/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let s = "";
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      if (count == 1) {
        s += chars[i];
      } else {
        s += chars[i] + count;
      }
      count = 1;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (i >= s.length - 1) {
      chars.pop();
    }
    chars[i] = s[i];
  }

  return chars.length
};

compress((chars = ["a", "a", "b", "b", "c", "c", "c"]));
