# this

> Traverses up the directory tree and returns the first module found

[![Build Status](https://travis-ci.org/lukechilds/this.svg?branch=master)](https://travis-ci.org/lukechilds/this)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/this/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/this?branch=master)
[![npm](https://img.shields.io/npm/v/this.svg)](https://www.npmjs.com/package/this)

Useful in tests so you don't have to require the package you're testing via relative paths.

Starts directory traversal from `process.cwd()` so this should really only be used in tests or CLI apps.

## Install

```shell
npm install --save this
```

Or if using for tests you'll probably want:

```shell
npm install --save-dev this
```

## Usage

Just require `this` the same way you would require the root module with a relative path.

e.g instead of:

```js
import test from 'ava';
import myPackage from '../';

// and then in sub folders
import myPackage from '../../';
```

You can now do:

```js
import test from 'ava';
import myPackage from 'this';

// and then in sub folders it's still just:
import myPackage from 'this';
```

e.g without import transpilation:

```js
const test = require('tape');
const myPackage = require('this');
```

## License

MIT © Luke Childs
