const MyProfile = ({ npm, nama, github }) => {
  return (
    <div>
      <p>NPM : {npm}</p>
      <p>NAMA : {nama}</p>
      <p>
        Github : <a href={github}>{github}</a>
      </p>
    </div>
  );
};

export default MyProfile;
