const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/signIn", {
      target: "https://service-oasis-demo-api.mediazenaicloud.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/auth", {
      target: "https://edutech-speechpro.mediazenaicloud.com:37205",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/chapters", {
      target: "https://edutech-speechpro.mediazenaicloud.com:37205",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/edu", {
      target: "https://service-oasis-demo-api.mediazenaicloud.com",
      changeOrigin: true,
    })
  );
};
