import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "./index.css";

const NavbarJobs = (props) => {
    return(
        <Navbar className="navbar">
            <Navbar.Brand href="/">
                <div className="row mx-1">
                    <h3 className="bold col-7 pt-1 m-0">GitHub</h3> 
                    <p className="title col-5 px-1 m-0">Jobs</p>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}
export default NavbarJobs;