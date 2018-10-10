'use strict';

const utils = {
  randomRange: (
      from,
      to,
  ) => Math.floor(Math.random() * (to - from)) + from,

  getUniqArray: (value) =>
    Array.from(new Set(value)),

  isRandomEven: () =>
    Math.floor(Math.random() * 10) % 2 === 0,

  randomChoice: (arr) =>
    arr[utils.randomRange(0, arr.length)],
};

module.exports = utils;
