class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function arrayToBinaryTree(array: (number | null)[]): TreeNode {
  const recursiveBulid = (node: TreeNode, index: number) => {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const leftValue = array[leftIndex];
    if (leftValue) {
      node.left = new TreeNode(leftValue);
      recursiveBulid(node.left, leftIndex);
    }
    const rightValue = array[rightIndex];
    if (rightValue) {
      node.right = new TreeNode(rightValue);
      recursiveBulid(node.right, rightIndex);
    }
  };

  const root: TreeNode = new TreeNode(array[0] ? array[0] : 0);
  recursiveBulid(root, 0);
  return root;
}

export function findTarget(root: TreeNode | null, k: number): boolean {
  const seen = new Map<number, boolean>();
  const traverse = (tree: TreeNode | null): boolean => {
    if (!tree) return false;
    if (seen.has(k - tree.val)) return true;
    seen.set(tree.val, true);
    return traverse(tree.left) || traverse(tree.right);
  };
  return traverse(root);
}
