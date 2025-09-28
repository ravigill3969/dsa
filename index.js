class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  if (arr.length === 0) return null;

  let dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next; // head of the linked list
}

// Example
let head = arrayToList([
  47, 22, 81, 46, 94, 95, 90, 22, 55, 91, 6, 83, 49, 65, 10, 32, 41, 26, 83, 99,
  14, 85, 42, 99, 89, 69, 30, 92, 32, 74, 9, 81, 5, 9,
]);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let cur = slow;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  let max = 0;
  let p1 = head,
    p2 = prev;

  while (p2) {
    max = Math.max(p1.val + p2.val, max);
    p2 = p2.next;
    p1 = p1.next;
  }

  console.log(max);
  return max
};

pairSum(head);
