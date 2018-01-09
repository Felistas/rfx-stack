require('babel-register');
require('./global');

const getenv = require('getenv');
const env = require('../config/expose');

global.CONFIG = getenv.multi(env).default;

require('../src2/utils/seeder.runner').default('./src2/seeds/');
