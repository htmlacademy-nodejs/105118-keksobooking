'use strict';

const modules = [
  require(`./src/help`),
  require(`./src/license`),
  require(`./src/version`),
  require(`./src/description`),
  require(`./src/author`),
];

const {
  name,
  author,
} = require(`./package`);

const commandName = process.argv[2];

const handleHelp = require(`./src/help`);

const SUCCESS_EXIT_CODE = 0;
const FAILURE_EXIT_CODE = 1;

const handleSuccess = (module) => {
  switch (module.name) {
    case `help`:
      module.execute(modules);
      break;
    default:
      module.execute();
  }
  process.exit(SUCCESS_EXIT_CODE);
};

const handleFailure = (command) => {
  if (command === undefined) {
    console.log(`Привет пользователь!\nЭта программа будет запускать сервер ${name}.\nАвтор: ${author}.`);
    process.exit(SUCCESS_EXIT_CODE);
  } else {
    console.error(`Неизвестная команда "${command}"`);
    handleHelp.execute(modules);
    process.exit(FAILURE_EXIT_CODE);
  }
};

const findModule = () =>
  modules.find((module) =>
    `--${module.name}` === commandName,
  );

const run = () => {
  const result = findModule();
  if (result === undefined) {
    handleFailure(commandName);
  } else {
    handleSuccess(result);
  }
};

run();
