function createFeed(client) {
  const feed = {
    alias: 'transactions',
    filter: null,
  };

  return client.transactionFeeds.create(feed).then(() => {
    console.log('Feed created');
  }).catch(() => {
    console.log('Using existing feed... (maybe?)');
  });
}

module.exports = createFeed;
