import React, { useEffect, useState } from "react"
import './index.css' 

    const NewTaskFom = ({addTask, selectedlist})=> {
        const [form, setForm] = useState({
            title: "",
            description: "",
            due_date: null,
            done: false,
            listID: 1
          });


    const onsubmit = (event)=>{
        event.preventDefault()
       console.log(form.title);
        if(form.title.length){
           addTask(form)
        }else{

        }

    }
    function handleChange(e) {
        setForm((state) => ({
          ...state,
          [e.target.name]: e.target.value,
        }));
      } 

    
    return(
        <div id="addTask">
                <h2>Додати нову задачу</h2>
                <div id="contacts"></div>
                <form onSubmit={onsubmit} name="task">
                    <input onChange={handleChange} type="text" name="title" placeholder="Назва задачі"/>
                    <input onChange={handleChange} type="text" name="description" placeholder="Опис задачі"/>
                    <input onChange={handleChange} type="date" name="due_date"/>
                    <button type="submit">Додати</button>
                    <p className="err_empty_title">Обов'язкове поле для заповнення</p>
                </form>
            </div>
    )
}

export default NewTaskFom;