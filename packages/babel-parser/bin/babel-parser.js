#!/usr/bin/env node
/* eslint no-var: 0 */

var parser = require("..");
var fs = require("fs");

var filename = process.argv[2];
if (!filename) {
  console.log("Usage: babel-parser <filename> [options .json file]");
  console.error("  err: no filename specified");
  process.exit(0);
}

var file = fs.readFileSync(filename, "utf8");
var opts = JSON.parse(fs.readFileSync(process.argv[3] || "/dev/null", "utf8") || '{}');
var ast = parser.parse(file, opts);

console.log(JSON.stringify(ast, null, "  "));