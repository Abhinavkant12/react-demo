import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link class="navbar-brand" to="#">React</Link>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="#">Link 1</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#">Link 2</Link>
                </li>

                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
            </Link>
                    <div class="dropdown-menu">
                        <Link class="dropdown-item" to="#">Link 1</Link>
                        <Link class="dropdown-item" to="#">Link 2</Link>
                        <Link class="dropdown-item" to="#">Link 3</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarComponent;