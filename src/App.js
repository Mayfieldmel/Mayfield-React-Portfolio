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
  // const [portfolio, setPortfolio] = useState(false);/
  // const [contact, setContact] = useState(false);
  // const [resume, setResume] = useState(false);

  function renderPage(currentPage) {
    if(currentPage === "Portfolio") {
      return <Portfolio></Portfolio>
  //   // } else if(contact) {
  //   //   return <Contact></Contact>
  //   // } else if(resume) {
  //   //   return <Resume></Resume>
    } else {
      <About></About>
    }
    }

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
        {pageSelected ? (
          renderPage(currentPage.name)
        ) : (
          <About></About>
        )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
