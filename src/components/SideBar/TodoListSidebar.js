import React, { useEffect, useState } from 'react'
import ListElement from './ListElement'
import logo from '../SideBar/logo.svg'
import { getLists } from '../../rest/rest'

const TodoListSidebar = ({selectTodoList}) => {
    const [lists , setLists] = useState([])
  
    useEffect(()=>{
        getLists().then(res => { setLists(res);
        })
    },[])
    
    return (
        <div className="sidebar">
        <img src={logo} alt="no img" />
        <div className="sidebar_logo">
            <h3>Onboarding Tool</h3>
            <h4>Software Planet Group</h4>
        </div>
        <ul id='lists'>
            {
            lists.map(list=><ListElement key={list.id} list={list} selectTodoList ={selectTodoList}/>)
            }
            </ul>
        </div>
    
    )
}
export default TodoListSidebar