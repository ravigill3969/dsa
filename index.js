/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  let map = new Map();
  let res = [];

  for (let i = 0; i < strs.length; i++) {
    let sortedString = strs[i].split("").sort().join("");

    if (!map.has(sortedString)) {
      map.set(sortedString, []);
    }

    map.get(sortedString).push(strs[i]);
  }

  for (let v of map.values()) {
    res.push(v);
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]
