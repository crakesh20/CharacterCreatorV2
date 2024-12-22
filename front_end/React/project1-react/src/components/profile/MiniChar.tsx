import "./Profile.css";

function MiniChar() {
  return (
    <div className="char">
      <span>
        <b>Character Name</b>
        <br />
        <br />
        <b>Age:</b>
        <br />
        <br />
        <b>Setting:</b>
        <br /> 
        <br />
        {/* <button onClick={More} className="moreButton">More</button> */}
      </span>
    </div>
  );
}

export default MiniChar;
