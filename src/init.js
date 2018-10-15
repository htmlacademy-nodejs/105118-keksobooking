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
  await ask({
    question: `Generate data (yes/no)?\n`,
    validator: utils.isYesOrNo,
  }).then((value) => {
    if (/^no$/.test(value)) {
      process.exit(0);
      return;
    }
  });

  const numberOfElements = await ask({
    question: `How much elements?\n`,
    validator: utils.isNonNegativeInteger,
  });

  const path = await ask({
    question: `Specify path to file\n`,
    validator: () => true,
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
}

module.exports = init;
