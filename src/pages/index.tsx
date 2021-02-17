import { NextPage } from 'next';
import React from 'react';
// import { QueryClient } from 'react-query';
// import { dehydrate, DehydratedState } from 'react-query/hydration';

import useUser from 'shared/hooks/useUser';

const IndexPage: NextPage = () => {
  const { data, isLoading } = useUser('dyyyl');

  return (
    <main>
      <h1>Hello, all!</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <img
            src={data.avatarUrl}
            alt={`${data.name}'s GitHub profile picture`}
            style={{
              width: '30vmin',
              borderRadius: '100%',
            }}
          />
          <h2>{data.name}</h2>
          <article>
            <section>
              <p>{data.bio}</p>
            </section>
          </article>
        </>
      )}
    </main>
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

export default IndexPage;
