'use strict';

const colors = require(`colors`);

module.exports = {
  name: `help`,
  description: `Shows list of commands`,
  execute(modules) {
    console.log(`Доступные команды:\n${modules.map(({name, description}) =>
      `--${colors.grey(name)} - ${colors.green(description)}`).join(`\n`)}`);
  },
};
