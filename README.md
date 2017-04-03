# Chain Issue
This repo replicates this [issue](https://github.com/chain/chain/issues/714). 

In short, you will be performing the following actions in this guide.

1) Create an asset, account, feed, and transactions with the node client
2) Run a listener to ack transactions on the feed
3) Restart the chain and add more transactions

You will observe the first 75 transactions will properly ack. The next 75 (or >125) after restarting the chain will halt. 

## Requirements

* Docker 
* Node 7.6+ for async/await functions

## Run the example

### Step 1: Start the docker container

```
./start.sh
```

This will run the chain core in docker and set the env variables.

### Step 2: Install npm packages

```
npm install
```

### Step 3: Create the transactions

This will create the account, asset, feed, and 75 transactions. 

```
node runner.js
```

The transactions will begin to increment. You can continue to the next step while you wait. 

### Step 4: Subscribe to the feed

Start the listener which will read off of the feed. In another pane or terminal tab, run the following.

```
node listener.js
```

The listener will ack new transactions as they are added.

**Test #1**: Listener should emit new transactions < 125 blocks - PASS

### Step 5: Restart the chain

Once the 75 transactions have been created and acked, restart the chain. 

```
docker restart chain-issue
```
The listener should still be alive, but if for any reason it dies, you can restart the chain (which will start from transaction #1, but the chain dashboard can be found on localhost:2999).

```
node listener.js
```

### Step 6: Add more transactions

Once the chain has been restarted, create 75 more transactions:

```
node runner.js
```

Ignore any duplication asset/account creation. You will see the listener correctly pick up the transactions from the feed until it abruptly stops. 

When creating > 125 transactions while running the listener, nothing will be retrieved from the feed.

**Test #2**: Listener should ack transactions > 125 blocks - FAIL

You can confirm this by looking at the dashboard on localhost:2999. Note: you'll have to enter the client ID which you can find with `docker exec -it chain-issue cat /var/log/chain/client-token`.

The results shown:

![Feed](/latest_feed.png)
![Feed](/total_blocks.png)

### Cleanup

```
./clean.sh
```
