#!/bin/sh
./sqlversion.sh &&
npm run-script start &&
pm2 list &&
npm run-script logs
