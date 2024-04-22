const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': './src/assets/',
    // Define more aliases as needed
  })(config);

  return config;
};