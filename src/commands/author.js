'use strict';
const {author} = require(`../../package`);

module.exports = {
  name: `author`,
  description: `Shows program author`,
  execute() {
    console.log(`${author}`);
  }
};
