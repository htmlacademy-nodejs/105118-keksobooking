'use strict';
const colors = require(`colors`);
const {version} = require(`../../package.json`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    const versionColored = version.split(`.`);
    versionColored[0] = colors.red(versionColored[0]);
    versionColored[1] = colors.green(versionColored[1]);
    versionColored[2] = colors.blue(versionColored[2]);
    console.log(`v${versionColored.join(`.`)}`);
  }
};
