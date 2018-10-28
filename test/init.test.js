'use strict';

const assert = require(`assert`);
const utils = require(`../utils`);

describe(`Check that init - initialize data properly`, () => {
  it(`isYesOrNo function should return boolean`, () => {
    assert(typeof utils.isYesOrNo(`Yes`) === `boolean`, `return value is not boolean`);
  });
  it(`isValid function should return boolean`, () => {
    assert(typeof utils.isValid(`no`, utils.isYesOrNo) === `boolean`, `return value is not boolean`);
  });

  it(`isNonNegativeInteger function should return boolean`, () => {
    assert(typeof utils.isNonNegativeInteger(`10`, utils.isYesOrNo) === `boolean`, `return value is not boolean`);
  });
  it(`is file exist`, async () => {
    const res = await utils.isFileExist(`../file.txt`);
    assert(typeof res === `boolean`, `return value is not boolean`);
  });
});
