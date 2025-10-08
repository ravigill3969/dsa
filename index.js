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

let l1 = arrayToList([1, 2, 3, 4]);
let l2 = arrayToList([5, 6, 4]);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0, head);
  let r = dummy;

  while (r.next && r.next.next) {
    let firstNode = r.next;
    let secondNode = r.next.next;
    let restOfList = secondNode.next;

    r.next = secondNode;
    secondNode.next = firstNode;
    firstNode.next = restOfList;

    r = firstNode;
  }

  console.log(JSON.stringify(dummy));
  return dummy.next;
};

swapPairs(l1);
