import { gql } from 'graphql-request';
import { User } from 'types';

import { graphQLClient } from 'shared/graphql/client';

const query = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
      createdAt
      avatarUrl
      email
      location

      followers {
        totalCount
      }

      repositories(first: 3, orderBy: { field: STARGAZERS, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          languages(first: 10) {
            nodes {
              id
              name
              color
            }
          }
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

/**
 * GraphQL query - returns promise of user data
 * @param userId username of github user to query
 */
export const getUser = async (userId: string): Promise<User> => {
  const { user } = await graphQLClient.request(query, { login: userId });

  return user;
};
