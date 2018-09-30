'use strict';
const {description} = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `Shows program description`,
  execute() {
    console.log(`${description}`);
  }
};
