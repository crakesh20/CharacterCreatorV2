import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { OgChar } from "../interfaces/OgChar";
import axios from "axios";
import { authContext } from "../../App";
import MiniChar from "./MiniChar";

function Profile() {
  const auth = useContext(authContext);
  const [profileUsername, setProfileUsername] = useState<string>("");
  const [ownCharacters, setOwnCharacters] = useState<OgChar[]>([]);
//   const [selectedCharacter, setSelectedCharacter] = useState<OgChar>(null);

  let getOwnCharacters = (ogc: OgChar[]) => {
    setOwnCharacters(ogc);
  };

  useEffect(() => {
    setProfileUsername(auth?.username as unknown as string);
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
  }, []);

  return (
    <div>
      <br />
      <br />
      <h1>Profile</h1>
      <hr />

      <div className="profile_info">
        <div>
          <div style={{ display: "inline-block" }}>
            <h2>Welcome, {profileUsername}!</h2>
          </div>
        </div>
        {/* <h3>Date of Account Creation:</h3> */}
        {/* <h3>About Me:</h3> */}
        <h3>Characters Made:</h3>
      </div>

      <div>
        {ownCharacters.map((chara) => {
          return (
            // <tr key={chara.characterId}>
            //     <td>{chara.characterName}</td>
            //     <td>{chara.characterAge}</td>
            //     <td>{chara.characterSetting}</td>
            // </tr>
            <MiniChar {...chara} key={"Character-" + chara.characterId} />
          );
        })}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Profile;
