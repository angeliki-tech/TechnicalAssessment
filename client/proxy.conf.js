const PROXY_CONFIG = [

  {
    "/api": {
      "target": "https://www.omdbapi.com/",
      "changeOrigin": true,
      "ws": true
    }
  }
];
module.exports = PROXY_CONFIG;
