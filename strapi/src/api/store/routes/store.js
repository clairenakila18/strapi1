module.exports = {
    async findOne(ctx) {
      console.log("Request received for store with ID:", ctx.params.id);
      const { id } = ctx.params;
      const entity = await strapi.services.store.findOne({ id });
      return entity;
    }
  };
  