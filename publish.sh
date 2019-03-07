#!/bin/bash

cd `dirname $0`

yarn version --patch

rm -rf dist;
npm run build

npm publish
