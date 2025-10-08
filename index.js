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

let l1 = arrayToList([1, 2, 3, 4, 5]);
let l2 = arrayToList([5, 6, 4]);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0;

  let list = head;

  while (list) {
    len++;

    list = list.next;
  }

  if (n === len) {
    return head.next;
  }

  let target = len - n - 1;

  let m = head;

  while (m && target > 0) {
    target--;
    m = m.next;
  }

  if (m && m.next) {
    m.next = m.next.next;
  }
  
  console.log(JSON.stringify(head));

  return head;
};

removeNthFromEnd(l1, 2);
