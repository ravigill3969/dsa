/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }

  // If total sum is odd, can't split evenly
  if (total % 2 !== 0) return false;

  const target = total / 2;

  let map = new Map();

  function dfs(i, cs) {
    if (cs === target) return true;

    if (i >= nums.length || cs > target) return false;

    let key = `${i}-${cs}`;

    if (map.has(key)) return map.get(key);

    const addCurrentNumberFromAdding = dfs(i + 1, cs + nums[i]);
    const skipCurrentNumberFromAdding = dfs(i + 1, cs);

    let res = addCurrentNumberFromAdding || skipCurrentNumberFromAdding;
    console.log(key, res);
    map.set(key, res);

    return res;
  }

  return dfs(0, 0);
};

let res = canPartition([1, 5, 11, 5]);
console.log(res);
res = canPartition([1, 2, 3, 5]);
console.log(res);
