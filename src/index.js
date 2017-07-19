'use strict';

const findRoot = require('find-root');

try {
	const modulePath = findRoot(process.cwd());
	module.exports = require(modulePath);
} catch (err) {
	module.exports = false;
}
