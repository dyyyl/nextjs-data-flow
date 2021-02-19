import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { Main, Section } from 'shared/components/Containers';
import { Big, Title } from 'shared/components/Typography';
import User from 'shared/components/User';

import { getUser } from 'shared/graphql/queries/getUser';
import useUser from 'shared/hooks/useUser';

const UserShowdownPage: NextPage = () => {
  const router = useRouter();

  const { userIds } = router.query;

  const [firstUserId, secondUserId] = String(userIds).split('-vs-');

  const { data: firstUser } = useUser(firstUserId);
  const { data: secondUser } = useUser(secondUserId);

  return (
    <Main>
      <Title>NOT EVEN CLOSE</Title>
      <Section>
        <User user={firstUser} />

        <Big>VS.</Big>

        <User user={secondUser} />
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
