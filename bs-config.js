module.exports = {
  "port": 3000,
  "server": {
      "baseDir": "./src",
      "routes": {
          "/jspm_packages": "jspm_packages",
          "/node_modules": "node_modules",
          "/config.js": "config.js"
      }
  }
};
