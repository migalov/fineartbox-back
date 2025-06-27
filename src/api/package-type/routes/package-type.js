'use strict';

/**
 * package-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::package-type.package-type');
