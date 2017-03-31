# Chain Issue

## Start the docker container

```
./start.sh
```

This will run the chain core in docker and set the env variables.

## Run the example

Create transactions with the javascript client and run the listener on the feed.
It will create 150 transactions.

### Install npm packages

```
npm install
```

### Create the transactions

This will create the account, asset, feed, and 75 transactions.

```
node runner.js
```

### Subscribe to the feed

This will log the count and ack the transaction.

```
node listener.js
```

## Restart the chain

Once the 75 transactions have been created and acked,
stop the listener and restart the chain.

```
docker restart chain-issue
```

Once the chain has been restarted, create 75 more transactions and start the listener.
The transactions should still be acked fine.

## Finally

Once 75 more transactions have been created and acked,
stop the listener and restart the chain one more time.

When creating 75 more transactions and running the listener,
nothing will be retrieved from the feed.

## Cleanup

```
./clean.sh
```
