import React from 'react';
import { Link } from 'react-router-dom';
import SwitchComponent from '../../routes';

const NavbarComponent = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">React</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">LifeCycleHooks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/context-api">ContextApi</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            Dropdown link
            </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="#">Link 1</Link>
                            <Link className="dropdown-item" to="#">Link 2</Link>
                            <Link className="dropdown-item" to="#">Link 3</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            {SwitchComponent}
        </React.Fragment>

    );
}

export default NavbarComponent;