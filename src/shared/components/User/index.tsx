import React from 'react';
import { User as IUser } from 'types';

interface Props {
  user?: IUser;
}

const User: React.FC<Props> = ({ user }: Props) => (
  <div style={{ placeSelf: 'center' }}>
    <img
      src={user?.avatarUrl}
      alt={`${user?.name}'s GitHub profile picture`}
      style={{
        height: '20vmin',
        width: '20vmin',
        borderRadius: '100%',
        backgroundColor: 'papayawhip',
      }}
    />
    <section style={{ display: 'grid', placeItems: 'center' }}>
      <h2>{user?.name.toUpperCase()}</h2>
      <p>{user?.followers.totalCount} FOLLOWERS</p>
    </section>
  </div>
);

export default User;
