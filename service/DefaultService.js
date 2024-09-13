'use strict';


/**
 * Lấy access_token và instance_url
 *
 * returns inline_response_200
 **/
exports.servicesOauth2TokenPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "access_token",
  "instance_url" : "instance_url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

