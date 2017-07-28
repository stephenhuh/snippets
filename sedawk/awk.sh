#!/bin/bash -xe

cat logs.txt | awk '{ print $0 }'

cat logs.txt | awk '{ print $1 }'

cat logs.txt | awk '{ print $NF }'

cat logs.txt | awk '{ print $(NF-2) }'

awk '{print NR ") " $1 " -> " $(NF-2)}' logs.txt
