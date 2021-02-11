/*
 * Copyright (C) 2021 SonarSource SA
 * All rights reserved
 */

const process = require('process');

function sayHello(name) {
	console.log(`Hello ${name}!`);
}

sayHello(process.argv[2]);

