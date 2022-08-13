#!/bin/bash

directory=$(pwd)
echo $directory
while inotifywait -r -e modify $(pwd); do
    git add .
    git checkout -b Important
    git commit -m "dellLap"
    git push -u origin Important
done