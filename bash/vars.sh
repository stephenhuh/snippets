#!/usr/bin/env bash

VARIABLE=hello_there
VARIABLE_2=world
echo $VARIABLE
echo "$VARIABLE $VARIABLE_2" 

# but it works quoted or unquoted with sensible defaults
echo $(ls) \n
# though the output here is slightly different -- looks like multiple invocations piped via xargs-like functionality
echo "$(ls) he"
