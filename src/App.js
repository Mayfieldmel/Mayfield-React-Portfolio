import React, { useState } from "react";
import Nav from "./components/Nav";

function App() {
  // page navigation
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  // page selection state
  const [pageSelected, setPageSelected] = useState(false);

  // jsx
  return (
    <div>
      <Nav
        pages={pages}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Nav>
      <main></main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
