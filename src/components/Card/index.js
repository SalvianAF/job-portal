import React from "react";
import './index.css'
import { Button } from "react-bootstrap";

const Card = (props) => {
    return(
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
                <h6>{props.header}</h6>
                {/* <Button variant="primary"></Button> */}
            </div>
            <div className="card-body">
                {props.isImg?
                <div>
                    <img src={props.body[0]}/>
                    <br/>
                    <a href={props.body[1]}>{props.body[1]}</a>
                </div>
                :<div className="overflow-auto">
                    <td dangerouslySetInnerHTML={{__html: props.body[0]}} />
                </div>
                }
            </div>
        </div>
    )
}
export default Card;