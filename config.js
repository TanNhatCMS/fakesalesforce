const path = require('path');

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 3000,
  URL_PATH: 'http://localhost;3000',
  //URL_PATH: 'https://api-test-salesforce.vercel.app',
  BASE_VERSION: '1.0.0',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  PROJECT_DIR: __dirname,
};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, 'uploaded_files');

module.exports = config;
