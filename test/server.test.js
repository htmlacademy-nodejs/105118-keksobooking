'use strict';

const assert = require(`assert`);
const {extname} = require(`path`);
const fs = require(`fs`);
const {promisify} = require(`util`);
const {randomChoice} = require(`../utils`);

const currentPath = `./static/favicon.ico`;

const getFileExtension = (pathName) => extname(pathName);

const EXTENSION_CONTENT_TYPE = {
  '.css': `text/css`,
  '.html': `text/html; charset=UTF-8`,
  '.jpg': `image/jpeg`,
  '.ico': `image/x-icon`,
  '.png': `image/png`,
  '.gif': `image/gif`,
};

const extensionToContentType = (extension) => {
  if (EXTENSION_CONTENT_TYPE.hasOwnProperty(extension)) {
    return EXTENSION_CONTENT_TYPE[extension];
  }
  return null;
};

const stat = promisify(fs.stat);
const readDir = promisify(fs.readDir);
const readFile = promisify(fs.readFile);

describe(`Check that server start and properly answer for requests`, () => {
  it(`should return file extension name`, () => {
    assert(
        Object.keys(EXTENSION_CONTENT_TYPE)
            .includes(getFileExtension(currentPath)),
        `wrong extension`,
    );
  });

  it(`Should return content-type`, () => {
    assert(
        extensionToContentType(randomChoice(Object.keys(EXTENSION_CONTENT_TYPE))),
        `wrong content-type`,
    );
  });
  it(`Should return stat`, async () => {
    assert(
        await stat(currentPath),
        `where is no file or directory`,
    );
  });
  it(`Should return file if it exist or error if not`, () => {

  });
});
