// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type Maybe<T> = T | null;
type List = Maybe<ListNode>;

export function listToArray(list: List) {
  if (list === null) return [];
  const result: number[] = [];
  let cur: List = list;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
}

export function arrayToList(array: number[]) {
  if (array === []) return null;
  let head: List = null;
  let cur: List = null;
  array.forEach((value) => {
    if (cur === null) {
      head = new ListNode(value);
      cur = head;
    } else {
      cur.next = new ListNode(value);
      cur = cur.next;
    }
  });
  return head;
}

export function addTwoNumbers(l1: List, l2: List): List {
  function sum(
    pointers: List[],
    result: List = null,
    head: List = null,
    carry = false
  ): List {
    if (pointers.length === 0) {
      if (carry && result !== null) {
        result.next = new ListNode(1);
      }
      return head;
    }
    while (pointers.every((pointer) => !!pointer)) {
      const sum = pointers.reduce(
        (acc, pointer) => acc + (pointer?.val ?? 0),
        carry ? 1 : 0
      );
      const val = sum % 10;
      if (result === null) {
        result = new ListNode(val);
        head = result;
      } else {
        result.next = new ListNode(val);
        result = result.next;
      }
      carry = !!Math.floor(sum / 10);
      pointers = pointers.map((pointer) => pointer?.next ?? null);
    }
    return sum(
      pointers.filter((pointer) => !!pointer),
      result,
      head,
      carry
    );
  }

  const head = sum([l1, l2]);

  return head;
}
