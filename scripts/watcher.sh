#! /usr/bin/env bash
while true; 
do 
    inotifywait -r -e modify . && 
    node --test; 
done