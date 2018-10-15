'use strict';

const modules = [
  require(`./src/help`),
  require(`./src/license`),
  require(`./src/version`),
  require(`./src/description`),
  require(`./src/author`),
];
const init = require(`./src/init`);

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
  console.error(`Unknown command "${command}"`);
  handleHelp.execute(modules);
  process.exit(FAILURE_EXIT_CODE);
};

const findModule = () =>
  modules.find((module) =>
    `--${module.name}` === commandName,
  );

const run = async () => {
  const result = findModule();
  if (!commandName) {
    await init();
    process.exit(0);
  }
  if (result === undefined) {
    handleFailure(commandName);
  } else {
    handleSuccess(result);
  }
};

run();
