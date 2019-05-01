const chalk = require('chalk');
const container = require('../container');
const app = container.resolve('app');

app
  .start()
  .then(() => {
    console.log(`
    application started
    ${chalk.green(`Press ${chalk.green('CTRL-C')} to stop`)}
  `);
  })
  .catch(error => {
    console.log(`
    ${chalk.red(`Error: ${error.message}`)}
  `);
    process.exit();
  });
