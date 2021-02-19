import { QueryObserverResult, useQuery } from 'react-query';
import { User } from 'types';

import { getUser } from 'shared/graphql/queries/getUser';

/**
 * Yeets data from github graphql api by username
 * @param userId username of github user to generate
 */
const useUser = (userId: string): QueryObserverResult<User, Error> =>
  useQuery(['user', userId], async () => await getUser(userId), {
    staleTime: 60 * 1000,
  });

export default useUser;
