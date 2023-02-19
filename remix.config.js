/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: 'app',
  // assetsBuildDirectory: 'dist/client/build',
  // publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  // watchPaths: ['./public'],
  // server: './server.js',
  // serverBuildPath: 'dist/worker/index.js',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildPath: 'api/index.js',
  // serverMainFields: ['browser', 'module', 'main'],
  // serverConditions: ['worker', process.env.NODE_ENV],
  // serverDependenciesToBundle: 'all',
  // serverModuleFormat: 'esm',
  // serverPlatform: 'neutral',
  // serverMinify: true,
};
