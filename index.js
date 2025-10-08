var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let res = [];

  let s = 0;
  while (s < spells.length) {
    let currentSpell = spells[s];
    let l = 0;
    let r = potions.length - 1;
    let index = potions.length; // default: no valid potion

    // binary search for first potion that succeeds
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      let product = currentSpell * potions[mid];

      if (product >= success) {
        index = mid;
        r = mid - 1; // try to find an earlier one
      } else {
        l = mid + 1;
      }
    }

    // all potions from 'index' to end are successful
    res.push(potions.length - index);
    s++;
  }

  return res;
};
