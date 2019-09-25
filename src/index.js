'use strict';

const pkgDir = require('pkg-dir');

const packageDir = pkgDir.sync();

module.exports = packageDir === null ? undefined : require(packageDir);
