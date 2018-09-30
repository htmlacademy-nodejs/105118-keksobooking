'use strict';

const colors = require(`colors`);
const NAME = `help`;
const DESCRIPTION = `Shows list of commands`;
const INITIAL_ACCAMULATOR = `Доступные команды:\n--${colors.grey(NAME)} - ${colors.green(DESCRIPTION)}`;

module.exports = {
  name: NAME,
  description: DESCRIPTION,
  execute(modules) {
    const reducer = (
        accumulator,
        {
          name,
          description,
        },
    ) => ``.concat(accumulator, `\n--${colors.grey(name)}`, ` - ${colors.green(description)}`);
    const helpText = modules.reduce(reducer, INITIAL_ACCAMULATOR);
    console.log(helpText);
  },
};
