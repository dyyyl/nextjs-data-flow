import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Main, Section } from 'shared/components/Containers';
import { Big, Title } from 'shared/components/Typography';
import User from 'shared/components/User';

import useUser from 'shared/hooks/useUser';

const UserShowdownPage: NextPage = () => {
  const router = useRouter();

  const { userIds } = router.query;

  const [firstUserId, secondUserId] = String(userIds).split('-vs-');

  const { data: firstUserData, isLoading: firstUserIsLoading } = useUser(
    firstUserId,
  );

  const { data: secondUserData, isLoading: secondUserIsLoading } = useUser(
    secondUserId,
  );

  return (
    <Main>
      {firstUserData?.followers.totalCount &&
      secondUserData?.followers.totalCount ? (
        <Title>NOT EVEN CLOSE</Title>
      ) : (
        <Title>WHO WILL WIN?</Title>
      )}
      <Section>
        <User user={firstUserData} isLoading={firstUserIsLoading} />

        <Big>VS.</Big>

        <User user={secondUserData} isLoading={secondUserIsLoading} />
      </Section>

      <Link href="/">
        <a style={{ textAlign: 'center' }}>ANOTHER ONE</a>
      </Link>
    </Main>
  );
};

export default UserShowdownPage;
