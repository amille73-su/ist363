function Tim({ goHome }) {
  return (
    <div className="m-4">
      <h1 class="">Internet Pioneers Bios</h1>
      <div className="m-4 bg-secondary text-white rounded p-4">
      <div>
            <h4 class="m-3 p-3 pb-2 border-bottom border-dark">Tim Berners Lee</h4>
        </div>
        <img class="p-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/330px-LS3_4919_%28cropped%29.jpg" alt="Tim Berners Lee" />
        <div class="p-3 pb-5">
            <h4>Age:</h4>
            <p>69</p>
            <h4>Known For:</h4>
            <p> Inventor of the World Wide Web, HTML, URLs, and HTTP.</p>
            <button onClick={goHome} class="btn btn-primary">Return to Directory</button>
        </div>
      </div>
    </div>
  );
}

export default Tim;