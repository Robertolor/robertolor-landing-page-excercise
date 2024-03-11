import React from "react";

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>

                <div className="collapse navbar-collapse navbar-dark d-flex justify-content-between" id="navbarTogglerDemo01">
                    <span><a className="navbar-brand navbar-dark" href="#">Start Bootstrap</a></span>
                    <span><ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-dark">
                        <li className="nav-item navbar-dark">
                            <a className="nav-link active navbar-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item navbar-dark">
                            <a className="nav-link navbar-dark" href="#">About</a>
                        </li>
                        <li className="nav-item navbar-dark">
                            <a className="nav-link navbar-dark" href="#">Services</a>
                        </li>

                        <li className="nav-item navbar-dark">
                            <a className="nav-link navbar-dark" href="#">Contact</a>
                        </li>

                    </ul>
                    </span>
                </div>
            </div>
        </nav>

    );
};

export default NavBar