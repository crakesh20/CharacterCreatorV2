import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { OgChar } from "../interfaces/OgChar";
import axios from "axios";
import { authContext } from "../../App";

function Profile() {

  const auth = useContext(authContext);
  const [ownCharacters, setOwnCharacters] = useState<OgChar[]>([]);

  let getOwnCharacters = (ogc: OgChar[]) => {
    setOwnCharacters(ogc);
  };

  useEffect(() => {
    let userId = auth?.userId;
    axios
      .get<OgChar[]>(
        `http://localhost:8080/users/search/userId/character/${userId}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        getOwnCharacters(res.data);
      });
  }, ownCharacters);

  let un = auth?.username;

  return (
    <div>
      <br />
      <br />
      <h1>Profile</h1>
      <hr />

      <div className="profile_info">
        <div>
            <div style={{display: 'inline-block'}}><h2>Welcome, {un}!</h2></div>
        </div>
        {/* <h3>Date of Account Creation:</h3> */}
        {/* <h3>About Me:</h3> */}
        <h3>Characters Made:</h3>
      </div>

      <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Setting</th>
                <th>Description</th>
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

      {/* 
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
        </div> */}
    </div>
  );
}

export default Profile;
