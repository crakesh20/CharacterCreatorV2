import { useLocation } from "react-router-dom";
import { OgChar } from "../interfaces/OgChar";
import { SyntheticEvent, useState } from "react";
import axios from "axios";


function Edit() {
    
    const location = useLocation();
    const character = location.state as OgChar

    const [characterName, setCharacterName] = useState<string>(character.characterName)
    const [characterAge, setCharacterAge] = useState<number>(character.characterAge)
    const [characterDescription, setCharacterDescription] = useState<string>(character.description)
    const [characterSetting, setCharacterSetting] = useState<string>(character.characterSetting)
    const [characterPrivate, setCharacterPrivate] = useState<boolean>(character.isPublic)
    const [characterMatureOrNot, setCharacterMatureOrNot] = useState<boolean>(character.matureContent)
    
    let checkChangePrivate = () => {
        setCharacterPrivate(!characterPrivate)
    }
    
    let checkChangeMatureOrNot = () => {
        setCharacterMatureOrNot(!characterMatureOrNot)
    }
    
    let checking = () => {

        //       Check to see if the values are properly updating (they are)
            //   console.log("Name: " + characterName);
            //   console.log("Age: " + characterAge);
            //   console.log("Desc: " + characterDescription);
            //   console.log("Setting: " + characterSetting);
            //   console.log("Private? " + characterPrivate);
            //   console.log("Mature? " + characterMatureOrNot);
    
            // Check if all required fields are there
              if (!characterName) {
                  alert("Please enter a name")
                  return
              } else if (!characterAge) {
                  alert("Please enter an age")
                  return
              } else if (!characterDescription) {
                  alert("Please enter a description")
                  return
              } else if (!characterSetting) {
                  alert("Please enter a setting")
                  return
              }
    
            axios.post("http://localhost:8080/characters/create",
                {
                    "characterName": characterName,
                    "characterAge": characterAge, 
                    "characterSetting": characterSetting, 
                    "description": characterDescription, 
                    "public": characterPrivate, 
                    "matureContent": characterMatureOrNot
                },
                {withCredentials: true}
            ).then((res) => {
                console.log(res.data)
                console.log("Character created")
            }).catch((err) => {
                console.log(err)
            })
        }
    
    return (
        <main>
      <br /> <br />
      <h1>Edit your Character:</h1>
      <hr />
      <br />
      <div className="infor"> 
        <label> 
            Character:
            <input
                id="characterName-input"
                type="text"
                value={characterName}
                onChange={ (e:SyntheticEvent) => { setCharacterName((e.target as HTMLInputElement).value) } }
            />
        </label>
        <br /> <br />
        <label> 
            Age: 
            <input 
                id="characterAge-input"
                type="number"
                value={characterAge}
                onChange={ (e:SyntheticEvent) => { setCharacterAge((e.target as HTMLInputElement).value as unknown as number) } }
            />
        </label>
        <br /> <br />
        <label> 
            Description: 
            <br /> <br />
            <textarea
                id="characterDescription-input"
                // type="text"
                value={characterDescription}
                rows={20}
                cols={70}
                onChange={ (e:SyntheticEvent) => { setCharacterDescription((e.target as HTMLInputElement).value) } }
            />
        </label>
        <br /> <br />
        <label> 
            Setting: 
            <input 
              id="characterSetting-input"
              type="text"
              value={characterSetting}
              onChange={ (e:SyntheticEvent) => { setCharacterSetting((e.target as HTMLInputElement).value) } }
            />
        </label>
        <br /> <br />
        <label> 
            Private? 
            <input 
              id="characterPrivate-input"
              type="checkbox"
              value={characterPrivate}
              onChange={ checkChangePrivate }
            />
        </label>
        <br /> <br />
        <label> 
            18+? 
            <input
              id="characterMatureOrNot-input"
              type="checkbox"
              value={characterMatureOrNot}
              onChange={ checkChangeMatureOrNot }
            />
        </label>
        <br /> <br />
        <button onClick={checking} id="createChar">Confirm Changes</button>
        </div>
    </main>
    )
}

export default Edit
