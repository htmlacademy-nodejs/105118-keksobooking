'use strict';

const {generateEntity} = require(`../../src/generateEntity`);

const generatedEntitys = () => {
  const result = [];
  for (let i = 0; i < 19; i++) {
    result.push(generateEntity());
  }
  result.push(generateEntity(`3.11.1971`));
  return result;
};

module.exports = generatedEntitys;
