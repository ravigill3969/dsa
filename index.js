class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let i = 0;

    while (i < intervals.length - 1) {
      if (intervals[i].end > intervals[i + 1].start) {
        return false;
      }
    }

    return true;
  }
}

let intervals = [
  new Interval(0, 30),
  new Interval(5, 10),
  new Interval(15, 20),
];

let sol = new Solution();

let res = sol.canAttendMeetings(intervals);

console.log(res);
