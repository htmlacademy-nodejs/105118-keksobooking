'use strict';

module.exports = {
  name: `help`,
  description: `Shows list of commands`,
  execute(modules) {
    console.log(`Доступные команды:\n${modules.map(({name, description}) =>
      `--${name} - ${description}`).join(`\n`)}`);
  },
};
