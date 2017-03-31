function createAccount(client, key) {
  let account = {
    rootXpubs: [key.xpub],
    quorum: 1,
    tags: {},
  };

  return client.accounts.create(account)
    .then((newAccount) => {
      account = newAccount;
      console.log('Account created');
      return account;
    }).catch(() => {
    Promise.reject(new Error('Failed to create an account'));
  });
}

module.exports = createAccount;
