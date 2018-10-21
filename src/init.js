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
  const anwser = await ask({
    question: `Generate data (yes/no)?\n`,
    validator: utils.isYesOrNo,
  });

  if (/^no$/.test(anwser)) {
    return;
  }

  const numberOfElements = await ask({
    question: `How much elements?\n`,
    validator: utils.isNonNegativeInteger,
  });

  const path = await ask({
    question: `Specify path to file\n`,
    validator: () => true,
  });

  if (await utils.isFileExist(path)) {
    const answer = await ask({
      question: `File with that name exist, rewrite?\n`,
      validator: utils.isYesOrNo,
    });

    if (/^no$/.test(answer)) {
      return;
    }
    await utils.writeToFile(path, generateEntities(numberOfElements));
  } else {
    await utils.writeToFile(path, generateEntities(numberOfElements));
  }
}

module.exports = init;
