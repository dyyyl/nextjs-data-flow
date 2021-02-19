import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import { QueryClient } from 'react-query';
// import { dehydrate, DehydratedState } from 'react-query/hydration';

import { Main, Section } from 'shared/components/Containers';
import { Big, Title } from 'shared/components/Typography';
import User from 'shared/components/User';

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

// export async function getStaticProps(): Promise<
//   Record<string, Record<string, DehydratedState>>
// > {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['user', userId], () => getUser(userId));

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default UserShowdownPage;
