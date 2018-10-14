'use strict';

const readline = require(`readline`);
const utils = require(`../utils`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = async ({
  question,
  validator,
  fn,
}) =>
  new Promise((resolve) => {
    rl.question(`${question}`, async (answer) => {
      answer = answer.trim();
      if (!utils.isValid(answer, validator)) {
        ask({
          question,
          validator,
          fn,
        });
      }
      fn(answer);
      resolve();
    });
  });

module.exports = ask;
