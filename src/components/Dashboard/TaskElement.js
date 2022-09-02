import React from "react";

const TaskElement = (props) => {
    let task =props.task

function getValidDate(date) {
    if (date) {
        date = new Date(date)
        let time = date.toISOString().split("T")[0].split("-").reverse().join(".");
        return time;
    } else return "";
}

    return (
        <li id="element_of_list">
            <div className="task">
                <button id="toDelete" onClick="removeTask(event)">Delete</button>
                <span className="scale"></span>
                <div className="due_date">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4998 2.33325H3.49984C2.21117 2.33325 1.1665 3.37792 1.1665 4.66659V10.4999C1.1665 11.7886 2.21117 12.8333 3.49984 12.8333H10.4998C11.7885 12.8333 12.8332 11.7886 12.8332 10.4999V4.66659C12.8332 3.37792 11.7885 2.33325 10.4998 2.33325Z" stroke="#878787" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.6665 1.16663V3.49996M9.33317 1.16663V3.49996M1.1665 5.83329H12.8332" stroke="#878787" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>{getValidDate(task.due_date)}</h3>
                </div> 
                <div className="title">
                    <input type="checkbox" onclick="changeState(event)" />
                    <h4>{task.title}</h4>
                </div>
                <div className="description">
                    <p>{task.description}</p>
                </div>
            </div>
        </li>
    )
}

export default TaskElement;