/*
 * Copyright (C) 2021 SonarSource SA
 * All rights reserved
 */

import * as process from 'process';

function sayHello(name: string) {
	console.log(`Hello ${name}!`);
}

sayHello(process.argv[2]);

