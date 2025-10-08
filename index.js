// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let carry = 0;

  let list = new ListNode(null);

  let r = list;

  while (l1 != null || l2 != null) {
    let l1val = 0;
    let l2val = 0;

    if (l1) {
      l1val = l1.val;
    }

    if (l2) {
      l2val = l2.val;
    }

    let sum = l1val + l2val + carry;

    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    r.next = new ListNode(sum % 10);
    r = r.next;
    l1 = l1 && l1.next ? l1.next : null;
    l2 = l2 && l2.next ? l2.next : null;
  }

  if (carry > 0) {
    r.next = new ListNode(carry);
  }

  return list.next;
};

addTwoNumbers(l1, l2);
