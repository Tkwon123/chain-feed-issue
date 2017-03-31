require('dotenv').config();

const chain = require('chain-sdk');

if (!process.env.CHAIN_TOKEN) {
  throw new Error('CHAIN_TOKEN is required');
}

const client = new chain.Client(process.env.CHAIN_URL, process.env.CHAIN_TOKEN);

client.transactionFeeds.get({
  alias: 'transactions'
}).then((feed) => {
  let n = 0;
  return feed.consume((tx, next) => {
    n++;
    console.log(`Consumed transaction #${n}`)
    next(true);
  });
})
