#!/usr/bin/env node
const fs = require('fs');
const dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

console.log("Created!");