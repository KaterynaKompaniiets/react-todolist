
import React from "react";

const ListElement =(props) =>{
    return (
        <li className="list-element">
            <h3>{props.list.title}</h3>
        </li>
    )
}

export default ListElement