class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type Nullable<T> = T | null;

type Node = Nullable<ListNode>;

function recursiveMerge(list1: Node, list2: Node): Node {
  if (!list1 || !list2) return list1 || list2;
  if (list1.val <= list2.val) {
    list1.next = recursiveMerge(list1.next, list2);
    return list1;
  } else {
    list2.next = recursiveMerge(list1, list2.next);
    return list2;
  }
}

function mergeTwoLists(
  list1: Node,
  list2: Node,
): Node {
  return recursiveMerge(list1, list2);
}
