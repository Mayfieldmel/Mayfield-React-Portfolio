import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {pages} = props
    // jsx
    return (
        <header>
            <h1>
                <a>Melissa Mayfield</a>
            </h1>
            <nav>
                <ul>
                    {pages.map(page => (
                        <li>
                            <span>{capitalizeFirstLetter(page.name)}</span>
                        </li>
                    ))}
                
                </ul>
            </nav>
        </header>
    )
}

export default Nav;