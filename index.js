(() => {
  const commands = {
    '--help': 'Доступные команды:\n--help — печатает этот текст; \n--version — печатает версию приложения;',
    '--version': 'v0.0.1',
  };

  const errors = {
    withoutNoCommand: (
      projectName,
      authorName,
    ) => `Привет пользователь!\nЭта программа будет запускать сервер ${projectName}.\nАвтор: ${authorName}.`,
    incorrectCommand: (commandName) => (
      `Неизвестная команда ${commandName}\nЧтобы прочитать правила использования приложения, наберите "--help"`
    ),
  }

  function renderer(msg, error) {
    if (error) {
      console.err(msg);
    } else {
      console.log(msg);
    }
  }

  function getCommands() {
    return [...process.argv].splice(2);
  }

  function msgFromCommand(commandName) {
    if (!commandName) {
      return errors.withoutNoCommand('Keksobooking', 'Svyatoslav Nesteruk');
    }
    return commands.hasOwnProperty(commandName)
    ? commands[commandName]
    : errors.incorrectCommand(commandName);
  }

  console.error(msgFromCommand(getCommands()[0]));
})();
