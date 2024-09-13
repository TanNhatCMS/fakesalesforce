/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Lấy JWT access_token và instance_url test.salesforce.com
*
* grantUnderscoretype String Kiểu grant OAuth2
* assertion String JWT hoặc chứng thực để lấy token
* returns _services_oauth2_token_post_200_response
* */
const servicesOauth2TokenPOST = ({ grantUnderscoretype, assertion }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        grantUnderscoretype,
        assertion,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  servicesOauth2TokenPOST,
};
