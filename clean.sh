#!/bin/bash

docker kill chain-issue
docker rm chain-issue
rm .configured
rm .env
