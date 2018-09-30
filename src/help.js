'use strict';

const modules = [
  require(`./license`),
  require(`./version`),
  require(`./description`),
  require(`./author`),
];

const NAME = `help`;
const DESCRIPTION = `Shows list of commands`;
const INITIAL_ACCAMULATOR = `Доступные команды:\n--${NAME} - ${DESCRIPTION}`;

module.exports = {
  name: NAME,
  description: DESCRIPTION,
  execute() {
    const reducer = (
        accumulator,
        {
          name,
          description,
        },
    ) => ``.concat(accumulator, `\n--${name}`, ` - ${description}`);
    const helpText = modules.reduce(reducer, INITIAL_ACCAMULATOR);
    console.log(helpText);
  },
};
