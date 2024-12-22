import "./Character.css";

function Character() {

  // const [selectedCharacterId, setSelectedCharacterId] = useParams<{characterId: string}>();

  // useEffect(() => {
  //   axios
  //     .get<OgChar[]>(
  //       `http://localhost:8080/users/search/userId/character/${userId}`,
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       getOwnCharacters(res.data);
  //     });
  // }, []);

  return (
    <main>
      <br /> <br />
      <h1 className="title">Name</h1>
      <hr />
      <br />
      <div className="char_display">
        <h2 className="nextToEachOther">Creator:</h2>
        <span className="nextToEachOther">*Fill In creator*</span>
        <br /> <br />
        <h2 className="nextToEachOther">Age:</h2>
        <span className="nextToEachOther">*Fill In characterAge*</span>
        <br /> <br />
        <h2 className="nextToEachOther">Setting:</h2>
        <span className="nextToEachOther">*Fill In*</span>
        <br /> <br />
        <h2 className="nextToEachOther">Description:</h2>
        <span className="nextToEachOther">*Fill In*</span>
      </div>
    </main>
  );
}

export default Character;
