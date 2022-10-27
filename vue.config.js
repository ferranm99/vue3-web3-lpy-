var fs = require('fs');

module.exports = {
  configureWebpack: {
    devServer: {
      proxy:  "https://localhost:5001"
    }
  }
};  