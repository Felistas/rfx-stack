require('./global');

// neded for css import on node
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

require('../src/web2/server');
