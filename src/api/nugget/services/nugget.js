'use strict';

/**
 * nugget service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nugget.nugget');
