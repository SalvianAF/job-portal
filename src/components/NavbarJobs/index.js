import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "./index.css";

const NavbarJobs = (props) => {
    return(
        <Navbar variant="primary" bg="primary">
            <Navbar.Brand href="#home">
                <div className="row mx-1">
                    <h4 className="title-bold col-7 pt-1 m-0">GitHub</h4> 
                    <p className="title col-5 px-1 m-0">Jobs</p>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}
export default NavbarJobs;