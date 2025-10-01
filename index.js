/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;
  let q = Math.floor(numBottles / numExchange);
  let r = Math.floor(numBottles % numExchange);

  while (q > 0) {
    res += q;
    let empty = q + r;
    q = empty / numExchange;
    r = Math.floor(empty % numExchange);
  }

  console.log(res);
};

numWaterBottles((numBottles = 15), (numExchange = 4));
