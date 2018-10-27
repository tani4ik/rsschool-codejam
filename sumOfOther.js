module.exports = function sumOfOther(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return arr.map(elem => sum - elem);
}
