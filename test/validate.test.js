'use strict';

const validate = require(`../src/offers/validate`);
const {generateEntity} = require(`../src/generateEntity`);

describe(`Test offers validate middleware`, () => {
  it(`Should not throw errors`, () => {
    const entuty = generateEntity();
    console.log(entuty);
    validate(entuty.offer);
  });
});
