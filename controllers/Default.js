'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.servicesOauth2TokenPOST = function servicesOauth2TokenPOST (req, res, next) {
  Default.servicesOauth2TokenPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
