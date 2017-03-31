const chain = require('chain-sdk');

function createSigner(key, connection) {
  signer = new chain.HsmSigner();
  signer.addKey(key.xpub, connection);
  console.log('Signer created');
  return signer;
}

module.exports = createSigner;
