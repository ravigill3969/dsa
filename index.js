/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  let res = [];

  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);

    i++;
  }

  res.push(newInterval);

  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}

let intervals = [
  [1, 2], // before newInterval
  [3, 5], // overlaps newInterval
  [6, 7], // overlaps newInterval
  [8, 10], // after newInterval
];

let newInterval = [4, 6];

let res = insert(intervals, newInterval);
console.log(res);
// Expected output: [[1, 2], [3, 7], [8, 10]]
