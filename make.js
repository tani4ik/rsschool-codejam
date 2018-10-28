module.exports = function make(...makeArgs) {
  return function f(...args) {
    if (typeof args[0] === 'function') {
      return makeArgs.reduce(args[0], 0);
    }
    return make(...makeArgs, ...args);
  };
};
