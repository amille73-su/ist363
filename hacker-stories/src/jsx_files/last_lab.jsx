import { useState } from "react";
import Elizabeth from './jsx_files/Elizabeth';
import Tim from './jsx_files/Tim';
import Ray from './jsx_files/Ray';

const App = () => {
  const [selectedPioneer, setSelectedPioneer] = useState(null);
  const [viewed, setViewed] = useState({
    Tim: false, 
    Elizabeth: false,
    Ray: false,
  });

  const handleClick = (name) => {
    setViewed({ ...viewed, [name]: true });
    setSelectedPioneer(name);
  }

  const goHome = () => {
    setSelectedPioneer(null);
  };

  if (selectedPioneer === 'Tim') return <Tim goHome={goHome} />;
  if (selectedPioneer === 'Elizabeth') return <Elizabeth goHome={goHome} />;
  if (selectedPioneer === 'Ray') return <Ray goHome={goHome} />;

  return (
    <div>
        <h1 className="m-2">Internet Pioneers Bios</h1>
        <div className="row">
            <div className="col-md-4 d-flex">
                <div className="card border border-black rounded m-2 m-lg-4 p-2 w-100 d-flex flex-column" onClick={() => handleClick('Elizabeth')}>
                  <div className="position-relative">
                    {viewed.Elizabeth && <span className="badge bg-danger position-absolute top-0 start-0 m-2">VIEWED</span>}
                    <img className="object-fit-cover card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg" alt="Elizabeth J. Feinler" />
                  </div>
                    <h2 className="card-title text-center pt-1 flex-grow-1 d-flex align-items-center justify-content-center">Elizabeth J. Feinler</h2>
                </div>
            </div>
    
            <div className="col-md-4 d-flex">
                <div className="card border border-black rounded m-2 m-lg-4 p-2 w-100 d-flex flex-column" onClick={() => handleClick('Tim')}>
                  <div className="position-relative">
                    {viewed.Tim && <span className="badge bg-danger position-absolute top-0 start-0 m-2">VIEWED</span>}
                    <img className="object-fit-cover card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/330px-LS3_4919_%28cropped%29.jpg" alt="Tim Berners Lee" />
                  </div>
                    <h2 className="card-title text-center pt-1 flex-grow-1 d-flex align-items-center justify-content-center">Tim Berners Lee</h2>
                </div>
            </div>
    
            <div className="col-md-4 d-flex">
                <div className="card border border-black rounded m-2 m-lg-4 p-2 w-100 d-flex flex-column" onClick={() => handleClick('Ray')}>
                  <div className="position-relative">
                    {viewed.Ray && <span className="badge bg-danger position-absolute top-0 start-0 m-2">VIEWED</span>}
                    <img className="object-fit-cover card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ray_Tomlinson.jpg/330px-Ray_Tomlinson.jpg" alt="Ray Tomlinson" />
                  </div>
                    <h2 className="card-title text-center pt-1 flex-grow-1 d-flex align-items-center justify-content-center">Ray Tomlinson</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;