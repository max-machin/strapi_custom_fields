'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('my-custom-fields')
      .service('myService')
      .getWelcomeMessage();
  },
});
