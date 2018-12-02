import ApolloClient, { Operation } from 'apollo-boost';
import { resolvers, defaults } from './resolvers';
const client = new ApolloClient({
  clientState: {
    resolvers,
    defaults,
    // defaults: {
    //   auth: {
    //     __typename: 'Auth',
    //     isLoggedIn: Boolean(localStorage.getItem('jwt')),
    //   },
    // },
    // resolvers: {
    //   Mutation: {
    //     logUserIn: (_, { token }, { cache }) => {
    //       localStorage.setItem('jwt', token);
    //       cache.writeData({
    //         data: {
    //           auth: {
    //             __typename: 'Auth',
    //             isLoggedIn: true,
    //           },
    //         },
    //       });
    //       return null;
    //     },
    //     logUserOut: (_, __, { cache }) => {
    //       localStorage.removeItem('jwt');
    //       cache.writeData({
    //         data: {
    //           __typename: 'Auth',
    //           isLoggedIn: false,
    //         },
    //       });
    //       return null;
    //     },
    //   },
    // },
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('jwt') || '',
      },
    });
  },
  uri: 'https://api-apeast.graphcms.com/v1/cjo6mf7nx540x01fu4c9mpziy/master',
});

export default client;
