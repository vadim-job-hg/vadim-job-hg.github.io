#!/usr/bin/env bash
browserify -t vueify -e src/main.js -o js/build.js