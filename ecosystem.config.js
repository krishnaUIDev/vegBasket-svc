module.exports = {
  apps: [
    {
      name: "vegBasket-svc",
      script: "index.js",
      instances: "MAX",
      autorestart: true,
      args: "CONTACT SVC - 1",
      watch: false,
      max_memory_restart: "1G",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
        port: 3000,
      },
    },
  ],
};
