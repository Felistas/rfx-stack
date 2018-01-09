/*
  Project Directories
*/
export default path => ({
    config      : path.resolve(__dirname),
    root        : path.resolve(__dirname, '..'),
    src         : path.resolve(__dirname, '..', 'src2'),
    run         : path.resolve(__dirname, '..', 'run'),
    modules     : path.resolve(__dirname, '..', 'node_modules'),
    staticBuild : path.resolve(__dirname, '..', 'public', 'build'),
    nodeBuild   : path.resolve(__dirname, '..', 'run', 'build'),
    public      : path.resolve(__dirname, '..', 'public'),
    static      : path.resolve(__dirname, '..', 'public', 'static'),
    shared      : path.resolve(__dirname, '..', 'src2', 'shared'),
    api         : path.resolve(__dirname, '..', 'src2', 'api'),
    web         : path.resolve(__dirname, '..', 'src2', 'web'),
    views       : path.resolve(__dirname, '..', 'src2', 'web', 'views'),
    utils       : path.resolve(__dirname, '..', 'src2', 'utils'),
    hooks       : path.resolve(__dirname, '..', 'src2', 'api', 'hooks'),
    middleware  : path.resolve(__dirname, '..', 'src2', 'api', 'middleware'),
    services    : path.resolve(__dirname, '..', 'src2', 'api', 'services'),
    seeds       : path.resolve(__dirname, '..', 'src2', 'seeds'),
  });
  