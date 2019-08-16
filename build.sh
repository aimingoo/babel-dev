#!/bin/bash

# pull files
if ! [[ -f "./package.json" ]]; then
	wget 'https://github.com/babel/babel/raw/master/package.json'
	wget 'https://github.com/babel/babel/raw/master/babel.config.js'
	wget 'https://github.com/babel/babel/raw/master/.flowconfig'
fi

# force clean
if [[ "$1" == "--force" ||
	  "$1" == "--f" ]]; then
  rm -rf ./node_modules
fi

# recheck
if ! [[ -x "./node_modules/.bin/gulp" ]]; then
	npm install
fi

# build
./node_modules/.bin/gulp build
