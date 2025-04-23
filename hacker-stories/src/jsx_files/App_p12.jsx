import { useState } from "react";
import About from './About'
// ./ means same folder as the App.jsx file

function Home () {
  return (
    <div>
      <h1 class="text-danger">Home Page</h1>
    </div>
  );
}

// conditional rendering AKA navigating SPAs (Single Page Web Appss)
function App () {
  const [page, setPage] = useState('home');
  return (
    <>
    <nav class="text-primary bg-warning">
      <a onClick={() => setPage('home')} class="m-2 text-decoration-underline">Home</a>
      <a onClick={() => setPage('about')} class="m-2 text-decoration-underline">About</a>
    </nav>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}

export default App;