'use strict';
const {license} = require(`../../package.json`);

module.exports = {
  name: `license`,
  description: `Shows program license`,
  execute() {
    console.log(`${license}`);
  }
};
