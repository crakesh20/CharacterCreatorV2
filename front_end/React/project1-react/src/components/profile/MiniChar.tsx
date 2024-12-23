import {  useEffect, useState } from "react";
import { OgChar } from "../interfaces/OgChar";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function MiniChar(props: OgChar) {

    const [selectedCharacterId, setSelectedCharacterId] = useState<number>(0);
    const navigate = useNavigate();

    // let clickedDelete = () => {
    //     setSelectedCharacterId(props.characterId)
    //     let id = selectedCharacterId
    //     console.log(`This is id before delete: ${id}`)
    //     axios.delete(`http://localhost:8080/characters/${id}`, {withCredentials: true})
    //     .then(() => {
    //     console.log(`This is id after delete: ${id}`)})
    //     .catch((err) => {
    //       console.log(err)
    //     });
    // }
    
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
        {/* <button onClick = {clickedDelete} className="deleteButton">Delete</button> */}
      </span>
    </div>
  );
}

export default MiniChar;
