require('dotenv').config();

const chain = require('chain-sdk');

if (!process.env.CHAIN_TOKEN) {
  throw new Error('CHAIN_TOKEN is required');
}

const client = new chain.Client(process.env.CHAIN_URL, process.env.CHAIN_TOKEN);

const sleep = require('./src/sleep');
const configureChain = require('./src/configureChain');
const createKey = require('./src/createKey');
const createSigner = require('./src/createSigner');
const createFeed = require('./src/createFeed');
const createAccount = require('./src/createAccount');
const createAsset = require('./src/createAsset');
const createTransaction = require('./src/createTransaction');

async function run() {
  await configureChain(client);
  const key = await createKey(client);
  const signer = createSigner(key, client.mockHsm.signerConnection);
  const feed = createFeed(client);

  const account = await createAccount(client, key);
  const asset = await createAsset(client, key);

  for (let i = 1; i <= 75; i++) {
    await createTransaction(client, account, asset, signer);
    console.log(`Transaction created ${i}`);
    await sleep(250);
  }
}

run();
