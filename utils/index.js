'use strict';

const util = require(`util`);
const fs = require(`fs`);
const YES_NO_REGEXP = /^yes$|^no$/i;

const open = util.promisify(fs.open);
const write = util.promisify(fs.writeFile);

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

  isYesOrNo: (value) =>
    YES_NO_REGEXP.test(value),

  isNonNegativeInteger: (value) =>
    !isNaN(value)
    && value > 0
    && value < 100,

  isValid: (
      value,
      fn,
  ) => {
    return fn(value);
  },

  isFileExist: async (path) => {
    try {
      await open(path, `wx`);
    } catch (error) {
      return true;
    }
    return false;
  },

  writeToFile: async (name, data) => {
    await write(name, data, (error) => {
      if (error) {
        throw error;
      }
    });
  },

  asyncMiddleware: (fn) =>
    (req, res, next) =>
      fn(req, res, next).catch(next),
};

module.exports = utils;
