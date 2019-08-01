#!/usr/bin/env node
const fs = require('fs');
let originalCwd = process.cwd();
const dir = `${originalCwd}/tmp`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

console.log(originalCwd);