'use strict';

/**
 * package-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-type.package-type');
