import path from 'path';

const Dir = global.DIR || global.DIR2;

export default {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      react: path.join(Dir.modules, 'react'),
    },
  },
};
