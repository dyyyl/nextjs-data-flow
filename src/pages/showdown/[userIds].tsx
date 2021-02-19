import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { Main, Section } from 'shared/components/Containers';
import { Big, Title } from 'shared/components/Typography';
import User from 'shared/components/User';
import { getUser } from 'shared/graphql/queries/getUser';

const UserShowdownPage: NextPage = () => {
  const [
    firstUserFollowerCount,
    setFirstUserFollowerCount,
  ] = useState<number>();

  const [
    secondUserFollowerCount,
    setSecondUserFollowerCount,
  ] = useState<number>();

  const router = useRouter();

  const { userIds } = router.query;

  const [firstUserId, secondUserId] = String(userIds).split('-vs-');

  return (
    <Main>
      {firstUserFollowerCount && secondUserFollowerCount ? (
        <Title>NOT EVEN CLOSE</Title>
      ) : (
        <Title>WHO WILL WIN?</Title>
      )}
      <Section>
        <User
          userId={firstUserId}
          setFollowerCount={setFirstUserFollowerCount}
          win={
            firstUserFollowerCount &&
            secondUserFollowerCount &&
            firstUserFollowerCount > secondUserFollowerCount
          }
        />

        <Big>VS.</Big>

        <User
          userId={secondUserId}
          setFollowerCount={setSecondUserFollowerCount}
          win={
            firstUserFollowerCount &&
            secondUserFollowerCount &&
            secondUserFollowerCount > firstUserFollowerCount
          }
        />
      </Section>

      <Link href="/">
        <a style={{ textAlign: 'center' }}>ANOTHER ONE</a>
      </Link>
    </Main>
  );
};

interface ContextProps {
  params: ParsedUrlQuery;
}

interface ReturnProps {
  props: {
    dehydratedState: DehydratedState;
  };
}

export async function getServerSideProps({
  params,
}: ContextProps): Promise<ReturnProps> {
  const queryClient = new QueryClient();
  const { userIds } = params;
  const [firstUserId, secondUserId] = String(userIds).split('-vs-');

  await queryClient.prefetchQuery(['user', firstUserId], () =>
    getUser(firstUserId),
  );

  await queryClient.prefetchQuery(['user', secondUserId], () =>
    getUser(secondUserId),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default UserShowdownPage;
