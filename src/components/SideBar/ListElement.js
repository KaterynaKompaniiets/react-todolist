
import React from "react";

const ListElement =({list, selectTodoList}) =>{

    return (
        <li className="list-element" onClick={()=> selectTodoList(list.id)}>
            <h3>{list.list_name}</h3>
        </li>
    )
}

export default ListElement