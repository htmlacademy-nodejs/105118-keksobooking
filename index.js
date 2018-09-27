(() => {
  const projectName = 'Keksobooking';
  const authorName = 'Svyatoslav Nesteruk';
  let currentAnswer = 'default';

  const commandsList = {
    '--help': () => console.log('Доступные команды:\n--help — печатает этот текст; \n--version — печатает версию приложения;'),
    '--version': () => console.log('v0.0.1'),
  };

  const msgList = {
    default: '',
    empty: () => `Привет пользователь!\nЭта программа будет запускать сервер ${projectName}.\nАвтор: ${authorName}.`,
    unknown: (commandName) => (
      `Неизвестная команда "${commandName}"\nЧтобы прочитать правила использования приложения, наберите "--help"`
    ),
  }

  const SUCCESS_EXIT_CODE = 0;

  function run(code) {
    if (commandsList.hasOwnProperty(currentCommand)) {
      commandsList[currentCommand]();
    } else {
      console.error(msgList[currentAnswer](currentCommand));
    }
  }

  function getCommand() {
    const result = [...process.argv].splice(2);
    return result.length ? result[0] : null;
  }

  function analizeCommand(commandName = null) {
    if (!commandName) {
      currentAnswer = 'empty';
      process.exit(0);
    }
    if (isCommandIncludes(commandName)) {
      currentAnswer = commandName;
      process.exit(0);
    } else {
      currentAnswer = 'unknown';
      process.exit(1);
    }
  }

  function isCommandIncludes() {

  }

  function msgFromCode(code) {
    return codesList.hasOwnProperty(code) ? codesList[code] : '';
  }

  process.on('exit', (code) => run(code));

  const currentCommand = getCommand();
  analizeCommand(currentCommand);
})();
