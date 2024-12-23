import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { OgChar } from "../interfaces/OgChar";
import axios from "axios";
import { authContext } from "../../App";
import MiniChar from "./MiniChar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const [ownCharacters, setOwnCharacters] = useState<OgChar[]>([]);

  let deleteProfile = () => {
    let id = auth?.userId;
    console.log("Trying to delete profile");
    axios
      .delete(`http://localhost:8080/users/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        console.log("Profile Deleted");
        auth?.setUserId(0)
        auth?.setUsername("")
        auth?.setRole("unauthenticated")
        setOwnCharacters([])
        alert("Profile Deleted!")
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      });


  };

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
  }, []);

  let un = auth?.username;

  return (
    <div>
      <br />
      <br />
      <h1>Profile</h1>
      <hr />

      <div className="profile_info">
        <div>
          <div style={{ display: "inline-block" }}>
            <h2>Welcome, {un}!</h2>
          </div>
        </div>
        {/* <h3>Date of Account Creation:</h3> */}
        {/* <h3>About Me:</h3> */}
        <h3>Characters Made:</h3>
      </div>

      <div>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Setting</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody> */}
        {ownCharacters.map((chara) => {
          return (
            // <tr key={chara.characterId}>
            //   <td>{chara.characterName}</td>
            //   <td>{chara.characterAge}</td>
            //   <td>{chara.characterSetting}</td>
            // </tr>
            <MiniChar {...chara} key={"Character-" + chara.characterId} />
          );
        })}
        {/* </tbody>
        </table> */}
      </div>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={deleteProfile}
        className="logoutButton"
        style={{ float: "left" }}
      >
        DELETE PROFILE
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Profile;
