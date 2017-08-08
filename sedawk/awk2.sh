#!/bin/bash -xe

docker exec -ti `docker ps | awk 'FNR == 2 {print $1}'` bash


