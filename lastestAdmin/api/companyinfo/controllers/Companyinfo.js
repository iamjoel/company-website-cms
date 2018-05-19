'use strict';

/**
 * Companyinfo.js controller
 *
 * @description: A set of functions called "actions" for managing `Companyinfo`.
 */

module.exports = {

  /**
   * Retrieve companyinfo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.companyinfo.fetchAll(ctx.query);
  },

  /**
   * Retrieve a companyinfo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.companyinfo.fetch(ctx.params);
  },

  /**
   * Create a/an companyinfo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.companyinfo.add(ctx.request.body);
  },

  /**
   * Update a/an companyinfo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.companyinfo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an companyinfo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.companyinfo.remove(ctx.params);
  }
};
