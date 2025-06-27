'use strict';

/**
 * package-form service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-form.package-form');
