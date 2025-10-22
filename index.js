/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let total = 0;

  for (let n of cardPoints) {
    total += n;
  }

  let l = 0;
  let windowLength = cardPoints.length - k;

  let res = -Infinity;
  let sum = 0;
  for (let r = 0; r < cardPoints.length; r++) {
    sum += cardPoints[r];

    if (r - l + 1 > windowLength) {
      sum -= cardPoints[l];
      l++;
    }

    if (r - l + 1 === windowLength) {
      res = Math.max(res, total - sum);
    }
  }

  return res;
};

let res = maxScore((cardPoints = [1, 2, 3, 4, 5, 6, 1]), (k = 3));
console.log(res);
