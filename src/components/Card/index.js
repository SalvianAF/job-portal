import React from "react";
import './index.css'

const Card = (props) => {
    return(
        <div className={"card mb-4 "+props.style}>
            <div className={"card-header d-flex justify-content-between "+props.style}>
                <h6>{props.header}</h6>
            </div>
            <div className="card-body">
                {props.isImg?
                <div>
                    <img src={props.body[0]} className="image"/>
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