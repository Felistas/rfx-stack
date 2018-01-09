const dotenv = require('dotenv');
const path = require('path');
const dir = require('../config/dir').default;
const dir2 = require('../config/dir2').default;

dotenv.config();
global.DIR = dir(path);
global.DIR2 = dir2(path);
