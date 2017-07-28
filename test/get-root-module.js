import test from 'ava';

const pkgPath = require.resolve('../');

test(`exports root module`, t => {
	process.chdir('test/helpers/package');
	t.is(require(pkgPath), 'package');
});
