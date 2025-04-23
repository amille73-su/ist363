function Lab12Home({ setPage, visited }) {
    const pioneers = [
      {
        id: "elizabeth",
        name: "Elizabeth J. Feinler",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg"
      },
      {
        id: "tim",
        name: "Tim Berners Lee",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/330px-LS3_4919_%28cropped%29.jpg"
      },
      {
        id: "ray",
        name: "Ray Tomlinson",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ray_Tomlinson.jpg/330px-Ray_Tomlinson.jpg"
      }
    ];
  
    return (
      <div className="container">
        <h1 className="m-3">Internet Pioneers Bios</h1>
        <div className="row">
          {pioneers.map((person) => (
            <div key={person.id} className="col-md-4">
              <div
                onClick={() => setPage(person.id)}
                className="card m-3 p-2 border border-dark position-relative"
                role="button"
              >
                {visited[person.id] && (
                  <div className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">
                    Visited
                  </div>
                )}
                <img
                  src={person.img}
                  alt={person.name}
                  className="card-img-top object-fit-cover"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <h5 className="text-center mt-2">{person.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Lab12Home;
  