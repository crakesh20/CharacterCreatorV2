import { OgChar } from "../interfaces/OgChar";
import "./Profile.css";

function MiniChar(props: OgChar) {

    // const navigate = useNavigate()

    // const handleMore = () => {
    //     navigate(`/character/${props.characterId}`);
    // }
    
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
        {/* <button onClick={handleMore} className="moreButton">More</button> */}
      </span>
    </div>
  );
}

export default MiniChar;
