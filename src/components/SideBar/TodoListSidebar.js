import React from 'react'
import ListElement from './ListElement'
import logo from '../SideBar/logo.svg'

const TodoListSidebar = (props) => {
    return (
        <div className="sidebar">
        <img src={logo} alt="no img" />
        <div className="sidebar_logo">
            <h3>Onboarding Tool</h3>
            <h4>Software Planet Group</h4>
        </div>
        <ul id='lists'>
            {
            props.lists.map(list=><ListElement key={list.id} list={list}/>)
            }
            </ul>
        </div>
    
    )
}
export default TodoListSidebar