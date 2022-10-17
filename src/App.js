import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

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

  function renderPage(currentPage) {
    if(currentPage === "Portfolio") {
      return <Portfolio></Portfolio>
    } else if(currentPage === "Contact") {
      return <ContactForm></ContactForm>
    } else if(currentPage === "Resume") {
      return <Resume></Resume>
    } else {
      return <About></About>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
