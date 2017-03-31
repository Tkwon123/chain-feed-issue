async function createTransaction(client, account, asset, signer) {
  const issuance = client.transactions.build(builder => {
    builder.issue({
      assetId: asset.id,
      amount: 5,
    });
    builder.controlWithAccount({
      accountId: account.id,
      assetId: asset.id,
      amount: 5
    });
  });

  const signed = await signer.sign(issuance);
  const submitted = await client.transactions.submit(signed);

  return submitted;
}

module.exports = createTransaction;
