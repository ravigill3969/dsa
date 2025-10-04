/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let map = new Map();
  let max = 0;

  let i = 0;
  let j = 0;

  while (i < fruits.length) {
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[j], map.get(fruits[j]) - 1);

      if (map.get(fruits[j]) <= 0) {
        map.delete(fruits[j]);
      }
      j++;
    }

    max = Math.max(max, i - j + 1);

    i++;
  }

  return max;
};

let res = totalFruit((fruits = [1, 2, 3, 2, 2]));
console.log(res);
