import React from "react";

const MyProfile = ({ npm, nama, github }) => {
  return (
    <div>
      <p>NPM : {npm}</p>
      <p>NAMA : {nama}</p>
      <p>
        Github : <a href={github}>Klik Untuk Masuk Github</a>
      </p>
    </div>
  );
};

export default MyProfile;
