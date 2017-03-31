function createAsset(client, key) {
  let asset = {
    rootXpubs: [key.xpub],
    quorum: 1,
    tags: {},
    definitions: {},
  };

  return client.assets.create(asset)
    .then((newAsset) => {
      asset = newAsset;
      console.log('Asset created');
      return asset;
    }).catch(() => {
    Promise.reject(new Error('Failed to create an asset'));
  });
}

module.exports = createAsset;

