#!/bin/sh
./sqlversion.sh &&
npm run-script reload &&
npm run-script logs