'use strict';

/**
 * Producttype.js controller
 *
 * @description: A set of functions called "actions" for managing `Producttype`.
 */

module.exports = {

  /**
   * Retrieve producttype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.producttype.fetchAll(ctx.query);
  },

  /**
   * Retrieve a producttype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.producttype.fetch(ctx.params);
  },

  /**
   * Create a/an producttype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.producttype.add(ctx.request.body);
  },

  /**
   * Update a/an producttype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.producttype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an producttype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.producttype.remove(ctx.params);
  }
};
