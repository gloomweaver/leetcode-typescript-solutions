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

export function listToArray(list: List): number[] {
  if (list === null) return [];
  const result: number[] = [];
  let cur: List = list;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
}

export function arrayToList(array: number[]): List {
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
  let pointers: List[] = [l1, l2];
  let carry = false;
  let result: List = null;
  let head: List = null;

  while (pointers.some((pointer) => !!pointer)) {
    const sum: number = pointers.reduce(
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

  if (carry && result !== null) {
    result.next = new ListNode(1);
  }

  return head;
}
