const PROJECT_NAME = `Keksobooking`;
const AUTHORS_NAME = `Svyatoslav Nesteruk`;

function checkCommand(command) {
  switch (command) {
    case undefined:
      console.error(`Привет пользователь!\nЭта программа будет запускать сервер ${PROJECT_NAME}.\nАвтор: ${AUTHORS_NAME}.`);
      process.exit(1);
      break;
    case `--help`:
      console.log(`Доступные команды:\n--help — печатает этот текст; \n--version — печатает версию приложения;`);
      process.exit(0);
      break;
    case `--version`:
      console.log('v0.0.1');
      process.exit(0);
      break;
    default:
      console.log(`Неизвестная команда "${command}"\nЧтобы прочитать правила использования приложения, наберите "--help"`);
      process.exit(0);
  }
}

checkCommand(process.argv[2]);
