import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

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
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // jsx
  return (
    <div>
      <Nav
        pages={pages}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
