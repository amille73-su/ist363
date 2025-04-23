function Elizabeth({ goHome }) {
  return (
    <div className="m-4">
      <h1 class="">Internet Pioneers Bios</h1>
      <div className="m-4 bg-secondary text-white rounded p-4">
      <div>
            <h4 class="m-3 p-3 pb-2 border-bottom border-dark">Elizabeth J. Feinler</h4>
        </div>
        <img class="p-5" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg" alt="Elizabeth Feinler" />
        <div class="p-3 pb-5">
            <h4>Age:</h4>
            <p>92</p>
            <h4>Known For:</h4>
            <p>Director of the Network Information Center, key contributor to the early internet infrastructure.</p>
            <button onClick={goHome} class="btn btn-primary">Return to Directory</button>
        </div>
      </div>
    </div>
  );
}

export default Elizabeth;
