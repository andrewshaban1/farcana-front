import React from 'react';

import AuthCheckProvider from '@/src/components/AuthCheckProvider';
import ProfileComponent from '@/src/components/ProfileComponent';

const Profile = () => {
  return (
    <AuthCheckProvider>
      <div>
        <h1 className="text-lg text-center">User Profile</h1>
        <ProfileComponent />
      </div>
    </AuthCheckProvider>
  );
};

export default Profile;
