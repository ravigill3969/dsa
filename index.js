function ListNode(val, next) {
  this.val = val ?? 0;
  this.next = next ?? null;
}

function arrayToList(arr) {
  let dummy = new ListNode();
  let curr = dummy;
  for (let v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
}

let head = arrayToList([1, 2, 2]);

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
var deleteDuplicates = function (head) {
  let map = new Map();

  let c = head;

  while (c) {
    map.set(c.val, (map.get(c.val) || 0) + 1);

    c = c.next;
  }

  let res = new ListNode(0);
  let attacher = res;
  c = head;

  while (c) {
    if (map.get(c.val) != 1) {
      c = c.next;
      continue;
    }

    attacher.next = new ListNode(c.val);
    attacher = attacher.next;
    c = c.next;
  }

  console.log(JSON.stringify(res));
  return res.next;
};

deleteDuplicates(head);
