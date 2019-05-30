import React from "react";

const Profile = ({ username, name }) => {
  return (
    <div>
      <b>{username}u</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default Profile;
