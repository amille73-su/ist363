function Ray({ goHome }) {
  return (
    <div className="m-4">
      <h1 class="">Internet Pioneers Bios</h1>
      <div className="m-4 bg-secondary text-white rounded p-4">
      <div>
            <h4 class="m-3 p-3 pb-2 border-bottom border-dark">Ray Tomlinson</h4>
        </div>
        <img class="p-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ray_Tomlinson.jpg/330px-Ray_Tomlinson.jpg" alt="Ray Tomlinson" />
        <div class="p-3 pb-5">
            <h4>Age:</h4>
            <p>74</p>
            <h4>Known For:</h4>
            <p> Creator of email and the '@' symbol in email addresses.</p>
            <button onClick={goHome} class="btn btn-primary">Return to Directory</button>
        </div>
      </div>
    </div>
  );
}

export default Ray;