const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://oasis.mediazenaicloud.com:36403/",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
