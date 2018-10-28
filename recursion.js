module.exports = function recursion(tree, arr = [], level = 0) {
    if (!tree || Object.keys(tree).length === 0) {
        return arr;
    }

    if (typeof arr[level] === 'undefined') {
        arr[level] = [ tree.value ];
    } else {
        arr[level].push(tree.value);
    }

    recursion(tree.left, arr, level + 1);
    recursion(tree.right, arr, level + 1);
    return arr;
}