/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['./public'],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  // server: './server.js',
  // serverBuildPath: 'dist/worker/index.js',
  // appDirectory: 'app',
  // assetsBuildDirectory: 'dist/client/build',
  // publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildPath: 'dist/worker/index.js',
  serverMainFields: ['browser', 'module', 'main'],
  serverConditions: ['worker', process.env.NODE_ENV],
  serverDependenciesToBundle: 'all',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverMinify: true,
};
