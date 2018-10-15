'use strict';

const utils = require(`../utils`);
const ask = require(`./ask`);
const {generateEntity} = require(`./generateEntity`);

const generateEntities = (number) => {
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(generateEntity());
  }
  return JSON.stringify(result);
};
async function init() {
  let numberOfElements = 0;
  let path = ``;

  await ask({
    question: `Generate data (yes/no)?\n`,
    validator: utils.isYesOrNo,
  }).then((value) => {
    if (/^no$/.test(value)) {
      process.exit(0);
      return;
    }
  });

  await ask({
    question: `How much elements?\n`,
    validator: utils.isNonNegativeInteger,
  }).then((value) => {
    numberOfElements = value;
  });

  await ask({
    question: `Specify path to file\n`,
    validator: () => true,
  }).then((value) => {
    path = value;
  });

  if (await utils.isFileExist(path)) {
    await ask({
      question: `File with that name exist, rewrite?\n`,
      validator: utils.isYesOrNo,
    }).then(async (value) => {
      if (/^no$/.test(value)) {
        process.exit(0);
        return;
      }
      await utils.writeToFile(path, generateEntities(numberOfElements));
    });
  } else {
    await utils.writeToFile(path, generateEntities(numberOfElements));
  }
  process.exit(0);
}

module.exports = init;
