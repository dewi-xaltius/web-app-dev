import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const user = location.state?.user;

  return (
    <div>
        <h1>User Profile</h1>
        <h2>Welcome, {user ? user.name : 'Guest'}</h2>
    </div>);
};

export default Profile;
