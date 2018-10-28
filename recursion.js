module.exports = function recursion(tree) {
  const arr = [];

  (function realRecursion(node, level) {
    if (!node || Object.keys(node).length === 0) {
      return arr;
    }

    if (typeof arr[level] === 'undefined') {
      arr[level] = [node.value];
    } else {
      arr[level].push(node.value);
    }

    realRecursion(node.left, level + 1);
    realRecursion(node.right, level + 1);

    return node.value;
  }(tree, 0));

  return arr;
};
