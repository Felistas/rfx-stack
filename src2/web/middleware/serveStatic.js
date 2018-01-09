import serveStatic from 'serve-static';

export function serveStaticMiddleware() {
  const app = this;
  const Dir = global.DIR || global.DIR2;

  app.use('/build', serveStatic(Dir.staticBuild));
  app.use('/static', serveStatic(Dir.static));
}
