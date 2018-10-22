'use strict';

const EXTENSION_CONTENT_TYPE = {
  '.css': `text/css`,
  '.jpg': `image/jpeg`,
  '.ico': `image/x-icon`,
  '.png': `image/png`,
  '.gif': `image/gif`,
  '.html': `text/html; charset=UTF-8`,
};

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

  extensionToContentType: (extension) => {
    if (EXTENSION_CONTENT_TYPE.hasOwnProperty(extension)) {
      return EXTENSION_CONTENT_TYPE[extension];
    }
    return null;
  },
};

module.exports = utils;
