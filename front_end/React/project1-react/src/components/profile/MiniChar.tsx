import { useEffect, useState } from "react";
import { OgChar } from "../interfaces/OgChar";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function MiniChar(props: OgChar) {

    const [selectedCharacterId, setSelectedCharacterId] = useState<number>(0);
    const navigate = useNavigate();
    
    let clickedMore = () => {
        setSelectedCharacterId(props.characterId)
        navigate(`/character/${props.characterId}`, {state: props})
    };

    let clickedEdit = () => {
      setSelectedCharacterId(props.characterId)
      navigate(`/edit/${props.characterId}`, {state: props})
    }

    useEffect(() => {
        console.log("SelectedCharacterId: " + selectedCharacterId)
    })

  return (
    <div className="char">
      <span>
        <b>{props.characterName}</b>
        <br />
        <br />
        <b>Age: {props.characterAge}</b>
        <br />
        <br />
        <b>Setting: {props.characterSetting}</b>
        <br />
        <br />
        <button onClick = {clickedMore} className="moreButton">More</button>
        <button onClick = {clickedEdit} className="editButton">Edit</button>
      </span>
    </div>
  );
}

export default MiniChar;
