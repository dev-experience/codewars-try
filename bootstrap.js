"use strict";

require('fs');
require("./.codewars/cw-2.js");

const taskDirectory = process.argv[2];

// const taskJs = fs.readFileSync(`${taskDirectory}\\task.js`);
// const testsJs = fs.readFileSync(`${taskDirectory}\\tests.js`);
// const fullCodeJs = `${taskJs}\n${testsJs}`;

try {
    require(`${taskDirectory}\\task.js`);
}
catch (e)
{
    console.error(e);
    console.error("Task loading failed");
    process.disconnect();
}

try {
    require(`${taskDirectory}\\tests.js`);
}
catch (e)
{
    console.error(e);
    console.error("Tests failed");
    process.disconnect();
}

console.log("Tests done");

// eval(fullCodeJs);
