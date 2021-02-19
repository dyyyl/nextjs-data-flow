import { gql } from 'graphql-request';
import { User } from 'types';

import { graphQLClient } from 'shared/graphql/client';

const query = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      avatarUrl

      followers {
        totalCount
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
