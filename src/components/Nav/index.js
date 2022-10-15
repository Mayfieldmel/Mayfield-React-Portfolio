import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages, pageSelected, setPageSelected, currentPage, setCurrentPage } =
    props;
  // jsx
  return (
    <header>
      <h1>
        <a href="/">Melissa Mayfield</a>
      </h1>
      <nav>
        <ul>
          {pages.map((page) => (
            <li className={`${currentPage.name === page.name && pageSelected && 'navActive'}`} key={page.name}>
              <span onClick={() => {setCurrentPage(page); setPageSelected(true)}}>
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
