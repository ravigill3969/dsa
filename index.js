function dbs(arr, k) {
  let sum = 0;
  let res = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    mod = ((sum % k) + k) % k;

    if (map.has(mod)) {
      res += map.get(mod);
      map.set(mod, map.get(mod) + 1);
    } else {
      map.set(mod, 1);
    }
  }

  console.log(res);
}

dbs([5, 0, 0, 1, -9, 3, 2], 5);
