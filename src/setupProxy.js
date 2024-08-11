import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/dapi',
    createProxyMiddleware({
      target: 'https://www.swiggy.com',
      changeOrigin: true,
      pathRewrite: {
        '^/dapi': '/dapi', // Keeps the /dapi prefix when proxying
      },
    })
  );
};
