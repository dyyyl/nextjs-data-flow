import React, { useEffect } from 'react';

import useUser from 'shared/hooks/useUser';

interface Props {
  userId: string;
  setFollowerCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  win?: boolean | 0;
}

const User: React.FC<Props> = ({ userId, setFollowerCount, win }: Props) => {
  const { data, isLoading } = useUser(userId);

  win && data && console.log(`${data.name} is most popular`);

  useEffect(() => {
    data && setFollowerCount(data.followers.totalCount);
  }, [isLoading]);

  return (
    <>
      {isLoading && <p style={{ placeSelf: 'center' }}>Loading...</p>}
      {data && (
        <div style={{ placeSelf: 'center' }}>
          <img
            src={data.avatarUrl}
            alt={`${data.name}'s GitHub profile picture`}
            style={{
              height: '20vmin',
              width: '20vmin',
              borderRadius: '100%',
              backgroundColor: 'papayawhip',
            }}
          />
          <section style={{ display: 'grid', placeItems: 'center' }}>
            <h2>{data.name.toUpperCase()}</h2>
            <p>{data.followers.totalCount} FOLLOWERS</p>
          </section>
        </div>
      )}
    </>
  );
};

export default User;
