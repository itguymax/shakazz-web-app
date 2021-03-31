import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://3.64.214.244/graphql',
  cache: new InMemoryCache()
});