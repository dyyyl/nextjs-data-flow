import { GraphQLClient } from 'graphql-request';

// Endpoint constant
const ENDPOINT = 'https://api.github.com/graphql';

// GraphQL Client constructor (passes token)
export const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});
