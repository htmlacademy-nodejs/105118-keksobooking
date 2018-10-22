'use strict';

const modules = [
  require(`./src/commands/help`),
  require(`./src/commands/license`),
  require(`./src/commands/version`),
  require(`./src/commands/description`),
  require(`./src/commands/author`),
  require(`./src/commands/server`),
];
const init = require(`./src/init`);

const commandName = process.argv[2];

const handleHelp = require(`./src/commands/help`);

const SUCCESS_EXIT_CODE = 0;
const FAILURE_EXIT_CODE = 1;

const handleSuccess = (module) => {
  switch (module.name) {
    case `help`:
      module.execute(modules);
      process.exit(SUCCESS_EXIT_CODE);
      break;
    case `server`:
      module.execute(process.argv[3]);
      break;
    default:
      module.execute();
      process.exit(SUCCESS_EXIT_CODE);
  }
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
