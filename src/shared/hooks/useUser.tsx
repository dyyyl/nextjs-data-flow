import { QueryObserverResult, useQuery } from 'react-query';
import { GraphQLClient, gql, request } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';

/**
 * Yeets data from github graphql api
 * @param userId username of github user to generate
 */
const useUser = (userId: string): QueryObserverResult<string, unknown> => {
  const query = gql`
  query {
    user(login: ${userId} {
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

      repositories(
        first: 3
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          languages(first: 10) {
            id
            name
            color
          }
          totalCount
        }

        stargazers {
          totalCount
        }

        forks {
          totalCount
        }
      }
    }
  }
`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer ',
    },
  });

  return useQuery(
    ['user', 'userId'],
    async () => {
      const { user } = await request(
        endpoint,
        await graphQLClient.request(query),
      );

      return user;
    },
    {
      enabled: !!userId,
    },
  );
};

export default useUser;
