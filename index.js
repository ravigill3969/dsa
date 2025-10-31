/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let res = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    while (map.has(s[i])) {
      map.set(s[l], map.get(s[l]) - 1);

      if (map.get(s[l]) == 0) {
        map.delete(s[l]);
      }
      l++;
    }

    map.set(s[i], (map.get(s[i]) || 0) + 1);

    res = Math.max(i - l + 1, res);
  }

  console.log(res)
  return res
};

let res = lengthOfLongestSubstring("bbbbbbbb");
console.log(res);
