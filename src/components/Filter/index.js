import React from "react";
import { Button, Form } from "react-bootstrap";
import "./index.css";

const Filter = (props) => {
    return(
        <Form className="row mx-2 mt-4">
            <Form.Group className="col-4">
                <Form.Label><h6 className="m-0">Job Description</h6></Form.Label>
                <Form.Control type="text" placeholder="Filter by title, benefits, companies, expertise" />
            </Form.Group>
    
            <Form.Group className="col-4">
                <Form.Label><h6 className="m-0">Location</h6></Form.Label>
                <Form.Control type="text" placeholder="Filter by city, state, zip code, or country" />
            </Form.Group>
            <Form.Group className="col-2 checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Full Time Only" style={{fontWeight:600}} />
            </Form.Group>
            <Button variant="outline-primary" type="submit" className="col-2 btn-search">
                Search
            </Button>
      </Form>
       
    )
}
export default Filter;