const fs = require('fs');
const sleep = require('./sleep');

function configureChain(client) {
  if (fs.existsSync('.configured')) return Promise.resolve();

  return client.config.configure({ isGenerator: true }).then(() => {
    fs.writeFileSync('.configured');
    return sleep(1000);
  });
}

module.exports = configureChain;
