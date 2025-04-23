import { useState } from "react";

function About () {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// conditional rendering AKA navigating SPAs (Single Page Web Appss)
function App () {
  const [page, setPage] = useState('home');
  return (
    <>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}

export default App;