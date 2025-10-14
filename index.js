/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let f = 0;
  let s = 1;
  let t = 1;

  n = n - 2;
  while (n > 0) {
    let sum = f + s + t;
    f = s;
    s = t;
    t = sum;
    n--;
  }

  console.log(t);
};

let res = tribonacci((n = 4));
console.log(res);
