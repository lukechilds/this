import test from 'ava';

const cwd = process.cwd();
const pkgPath = require.resolve('../');

test.afterEach.always(() => {
	process.chdir(cwd);
	delete require.cache[pkgPath];
});

test.serial(`exports root module`, t => {
	process.chdir('test/helpers/package');
	t.is(require(pkgPath), 'package');
});

test.serial(`exports undfined if there's no root module`, t => {
	process.chdir('/');
	t.is(require(pkgPath), undefined);
});
