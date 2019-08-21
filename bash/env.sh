#!/usr/bin/env bash
export HADOOP_DIR="/fake/path"
[[ -z HADOOP_DIR ]]; echo $? && echo $HADOOP_DIR;
unset HADOOP_DIR
[[ -z HADOOP_DIR ]]; echo $? && echo $HADOOP_DIR;
echo $PWD
