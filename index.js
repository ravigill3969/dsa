/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;
  for (let coin of coins) {
    for (let a = 0; a <= amount; a++) {
      let diff = a - coin;
      if (diff > 0) {
        arr[a] = Math.min(arr[a], arr[a - coin] + 1);
      }
    }
  }

  return arr[amount] === Infinity ? -1 : arr[amount];
};

coinChange((coins = [1, 2, 5]), (amount = 11));
