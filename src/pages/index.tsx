import { NextPage } from 'next';
import React from 'react';
// import { QueryClient } from 'react-query';
// import { dehydrate, DehydratedState } from 'react-query/hydration';

import useUser from 'shared/hooks/useUser';

const IndexPage: NextPage = () => {
  const { data, isLoading } = useUser('dyyyl');
  if (!isLoading) console.log({ data });
  return (
    <div>
      <h1>Hello, all!</h1>
    </div>
  );
};

// export async function getStaticProps(): Promise<
//   Record<string, Record<string, DehydratedState>>
// > {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['user'], () => useUser('dyyyl'));

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default IndexPage;
