export const defaults = { cart: [] };
export const resolvers = {
  Mutation: {
    toggleProduct: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Product', id: variables.id });
      console.log(id);
    },
  },
};
