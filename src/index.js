'use strict';

const pkgDir = require('pkg-dir');

try {
	module.exports = require(pkgDir.sync());
} catch (err) {
	module.exports = undefined;
}
