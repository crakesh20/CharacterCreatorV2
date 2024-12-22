import { useLocation } from "react-router-dom";
import { OgChar } from "../interfaces/OgChar";
import "./Character.css";

function Character() {

  const location = useLocation();
  const character = location.state as OgChar

  return (
    <main>
      <br /> <br />
      <h1 className="title">{character.characterName}</h1>
      <hr />
      <br />
      <div className="char_display">
        {/* <h2 className="nextToEachOther">Creator:</h2>
        <span className="nextToEachOther">{character.creator}</span>
        <br /> <br /> */}
        <h2 className="nextToEachOther">Age:</h2>
        <span className="nextToEachOther">{character.characterAge}</span>
        <br /> <br />
        <h2 className="nextToEachOther">Setting:</h2>
        <span className="nextToEachOther">{character.characterSetting}</span>
        <br /> 
        <h2>Description:</h2>
        <span>{character.description}</span>
      </div>
    </main>
  );
}

export default Character;
