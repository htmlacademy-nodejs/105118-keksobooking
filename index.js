'use strict';
const PROJECT_NAME = `Keksobooking`;
const AUTHORS_NAME = `Svyatoslav Nesteruk`;
const SUCCESS_EXIT_CODE = 0;
const FAILURE_EXIT_CODE = 1;

function checkCommand(command) {
  switch (command) {
    case undefined:
      console.error(`Привет пользователь!\nЭта программа будет запускать сервер ${PROJECT_NAME}.\nАвтор: ${AUTHORS_NAME}.`);
      process.exit(FAILURE_EXIT_CODE);
      break;
    case `--help`:
      console.log(`Доступные команды:\n--help — печатает этот текст; \n--version — печатает версию приложения;`);
      process.exit(SUCCESS_EXIT_CODE);
      break;
    case `--version`:
      console.log(`v0.0.1`);
      process.exit(SUCCESS_EXIT_CODE);
      break;
    default:
      console.log(`Неизвестная команда "${command}"\nЧтобы прочитать правила использования приложения, наберите "--help"`);
      process.exit(SUCCESS_EXIT_CODE);
  }
}

checkCommand(process.argv[2]);
