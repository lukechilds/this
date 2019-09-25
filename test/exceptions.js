import test from 'ava';

const cwd = process.cwd();
const pkgPath = require.resolve('../');

test.afterEach.always(() => {
	process.chdir(cwd);
	delete require.cache[pkgPath];
});

test.serial(`throws exceptions`, t => {
	process.chdir('test/helpers/package-with-exception');
    t.throws(() => require(pkgPath));
});
