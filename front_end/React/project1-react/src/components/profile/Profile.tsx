import "./Profile.css";

function Profile() {
  return (
    <div>
      <br /> <br />
      <h1>Profile</h1>
      <div className="profile_info">
        <hr />
        <h2>Welcome, Username-of-User!</h2>
        <h3>About Me:</h3>
        <h3>Date of Profile Creation:</h3>
        <h3>Characters Made:</h3>
      </div>
      <div className="left_char">
        {/*<!-- Show the list of all characters made by the user -->
                <!-- Will be replaced by API calls using JS -->*/}
        <span className="char">
          <b>Character 1 Name</b> <br></br>
          <b>Age:</b> <br></br>
          <b>Gender:</b> <br></br>
          <b>Description:</b> <br></br>
          <b>Setting:</b> <br></br>
          <b>Private?</b> <br></br>
          <b>18+?</b> <br></br>
        </span>
        {/*
        <span className="char">
          <b>Character 2 Name</b> <br></br>
          <b>Age:</b> <br></br>
          <b>Gender:</b> <br></br>
          <b>Description:</b> <br></br>
          <b>Setting:</b> <br></br>
          <b>Private?</b> <br></br>
          <b>18+?</b> <br></br>
        </span>

        <span className="char">
          <b>Character 3 Name</b> <br></br>
          <b>Age:</b> <br></br>
          <b>Gender:</b> <br></br>
          <b>Description:</b> <br></br>
          <b>Setting:</b> <br></br>
          <b>Private?</b> <br></br>
          <b>18+?</b> <br></br>
        </span>

        <span className="char">
          <b>Character 4 Name</b> <br></br>
          <b>Age:</b> <br></br>
          <b>Gender:</b> <br></br>
          <b>Description:</b> <br></br>
          <b>Setting:</b> <br></br>
          <b>Private?</b> <br></br>
          <b>18+?</b> <br></br>
        </span>

        <span className="char">
          <b>Character 5 Name</b> <br></br>
          <b>Age:</b> <br></br>
          <b>Gender:</b> <br></br>
          <b>Description:</b> <br></br>
          <b>Setting:</b> <br></br>
          <b>Private?</b> <br></br>
          <b>18+?</b> <br></br>
        </span> */}
      </div>
    </div>
  );
}

export default Profile;
