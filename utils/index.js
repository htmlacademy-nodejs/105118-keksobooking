'use strict';

class utils {
  static randomRange(
      from,
      to,
  ) {
    return Math.floor(Math.random() * (to - from)) + from;
  }
  static getUniqArray(value) {
    return Array.from(new Set(value));
  }
  static isRandomEven() {
    return Math.floor(Math.random() * 10) % 2 === 0;
  }
}

module.exports = utils;
