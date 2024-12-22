<<<<<<< HEAD
import "./Profile.css";
=======
import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { OgChar } from "../interfaces/OgChar";
import axios from "axios";
import { authContext } from "../../App";
>>>>>>> ce5180c7b119614c6f2e5bf2a8dc3f195ce82926

function Profile() {

  const auth = useContext(authContext);
  const [profileUsername, setProfileUsername] = useState<string>('')
  const [ownCharacters, setOwnCharacters] = useState<OgChar[]>([]);

  // let getOwnCharacters = (ogc: OgChar[]) => {
  //   setOwnCharacters(ogc);
  // };

  useEffect(() => {
    setProfileUsername(auth?.username as unknown as string)
    let userId = auth?.userId
    axios
      .get<OgChar[]>(`
        http://localhost:8080/users/search/userId/character/${userId}`,
        { withCredentials: true }
      )
      .then((res) => {
        setOwnCharacters(res.data);
        console.log(res.data);
      });
  }, []);


  return (
    <div>
<<<<<<< HEAD
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
=======
      <br />
      <br />
      <h1>Profile</h1>
      <hr />

      <div className="profile_info">
        <div>
            <div style={{display: 'inline-block'}}><h2>Welcome, {profileUsername}!</h2></div>
        </div>
        {/* <h3>Date of Account Creation:</h3> */}
        {/* <h3>About Me:</h3> */}
        <h3>Characters Made:</h3>
      </div>

      <div>
        <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Setting</th>
                  <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
                ownCharacters.map((chara) => {
                return(
                    <tr key={chara.characterId}>
                        <td>{chara.characterName}</td>
                        <td>{chara.characterAge}</td>
                        <td>{chara.characterSetting}</td>
                    </tr>
                )
                })
            }
            </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
      
        <div className="left_char">
            <span className="char">
                <b>*Character 1 Name*</b> 
                <br /><br />
                <b>Age:</b> 
                <br /><br />
                <b>Gender:</b> 
                <br />
                <br />
                <b>Description:</b> 
                <br />
                <br />
                <b>Setting:</b>                
                <br />
                <br />
                <b>Private?</b> 
                <br />
                <br />
                <b>18+?</b> <br></br>
            </span>
        </div>

>>>>>>> ce5180c7b119614c6f2e5bf2a8dc3f195ce82926
    </div>
  );
}

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> ce5180c7b119614c6f2e5bf2a8dc3f195ce82926
