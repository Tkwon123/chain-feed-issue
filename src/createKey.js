function createKey(client) {
  return client.mockHsm.keys.create().then(newKey => {
    key = newKey;
    console.log('Key created');
    return key;
  }).catch(() => {
    Promise.reject(new Error('Failed to create a key'));
  });
}

module.exports = createKey;
