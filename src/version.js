'use strict';
const {version} = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`v${version}`);
  }
};
