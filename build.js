const shell = require('shelljs');

shell.cp('.env', 'build/.env');
shell.cp('-R', 'public', 'build/public');
