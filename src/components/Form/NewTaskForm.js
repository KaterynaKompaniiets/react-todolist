import React from "react"

const NewTaskFom = (props)=> {
    const onsubmit = (event)=>{
        event.preventDefault()
       
    }

    const onChangeInput = (event)=>{
        

    } 
    return(
        <div id="addTask">
                <h2>Додати нову задачу</h2>
                <div id="contacts"></div>
                <form onSubmit={onsubmit} name="task">
                    <input onChange={onChangeInput} type="text" name="title" placeholder="Назва задачі"/>
                    <input onChange={onChangeInput} type="text" name="description" placeholder="Опис задачі"/>
                    <input onChange={onChangeInput} type="date" name="due_date"/>
                    <button type="submit">Додати</button>
                    <p className="err_empty_title">Обов'язкове поле для заповнення</p>
                </form>
            </div>
    )
}

export default NewTaskFom;