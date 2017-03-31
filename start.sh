#!/bin/bash

docker run -p "2999:1999" -d --name chain-issue chaincore/developer:1.1.1

sleep 10

TOKEN=$(docker exec -it chain-issue cat /var/log/chain/client-token)

echo "CHAIN_URL=http://localhost:2999" >> .env
echo "CHAIN_TOKEN="${TOKEN} >> .env

