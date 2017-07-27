# get-root-module

> Traverses up the directory tree and returns the first module found

[![Build Status](https://travis-ci.org/lukechilds/get-root-module.svg?branch=master)](https://travis-ci.org/lukechilds/get-root-module)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/get-root-module/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/get-root-module?branch=master)
[![npm](https://img.shields.io/npm/v/get-root-module.svg)](https://www.npmjs.com/package/get-root-module)

Useful in tests so you don't have to require the package you're testing via relative paths.

Starts directory traversal from `process.cwd()` so this should really only be used in tests or CLI apps.

## Install

```shell
npm install --save get-root-module
```

Or if using for tests you'll probably want:

```shell
npm install --save-dev get-root-module
```

## Usage

Just require `get-root-module` the same way you would require the root module with a relative path.

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
import myPackage from 'get-root-module';

// and then in sub folders it's still just:
import myPackage from 'get-root-module';
```

## License

MIT © Luke Childs
