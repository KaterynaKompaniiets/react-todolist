import "./App.css";
import TaskElement from "./components/Dashboard/TaskElement";
import NewTaskForm from "./components/Form/NewTaskForm";
import TodoListSidebar from "./components/SideBar/TodoListSidebar";
import {useEffect, useState} from 'react'



const inc = (init = 0) => () => ++init;
const genId = inc();
let state = {
  tasks: [{
    id: genId(),
    title: "Пройти опитування",
    description: "Пройти опитування за цим посиланням: https://example.com/",
    done: false,
    due_date: new Date(new Date().setDate(new Date().getDate() - 1)),
    listID: 2,
  },
  {
    id: genId(),
    title: "Реєстрація на TechTalk 25.08.22",
    description:
      "Зареєструватись на TechTalk, який пройде 25.08.22 о 09:00. Поговоримо про багаторічну традицію нашої компанії — шаринг знань та традиційний івент з багаторічною історією — InterLink Tech Talk. За традицією, останній івент теплого сезону ми проводимо на свіжому повітрі, у форматі Open Air з пікніком та спілкуванням з колегами. Ділимося з вами коротким оглядом презентацій від наших спікерів, світлинами та атмосферою. Підготовка, саунд чек, посадочні місця — і наша офісна зона відпочинку готова зустрічати гостей. Почали ми наш Knowledge...",
    done: true,
    due_date: new Date(Date.now()),
    listID: 1,
  },
  {
    id: genId(),
    title: "Реєстрація на MeetUp 22.09.22",
    description: "Зареєструватись на MeetUp, який пройде 22.09.22 о 18:00",
    done: false,
    due_date: new Date(new Date().setDate(new Date().getDate() + 1)),
    listID: 1,
  },
  {
    id: genId(),
    title: "Зробити щось",
    done: false,
    due_date: new Date(new Date().setDate(new Date().getDate() + 2)),
    listID: 3,
  },
  {
    id: genId(),
    title: "Кожен день робити зарядку",
    description: "Зареєструватись на MeetUp, який пройде 22.09.22 о 18:00",
    done: false,
    listID: 3,
  },
  {
    id: genId(),
    title: "Зробити практичне завдання",
    description:
      "Зробити практичне завдання за посиланням: https://example.com/",
    done: false,
    due_date: new Date(new Date().setDate(new Date().getDate() - 1)),
    listID: 2,
  }],
  lists: [
    { id: 1, title: "Івенти" },
    { id: 2, title: "Тренінги" },
    { id: 3, title: "Домашні справи" },]
}

function App() {
  const [tasks , setTask] = useState(state.tasks)
  const [selectedList, selectList] =useState(state.tasks)
  
  const handleToggle = (id)=>{
    setTask([...tasks.map((task)=> task.id ===id ? {...task, done: !task.done} : {...task})])
  }


  const handleraddTask=(newTask)=>{
    console.log('newTask', newTask);
    if(newTask){
      setTask([...tasks, newTask])
    }
  }
  const removeTask = (id)=>{
     setTask([...tasks.filter((task)=> task.id !== id)])
  }

  const selectTodoList = (id)=>{
    console.log(id);
    selectList([...tasks.filter((task)=> task.listID === id)])
    
  }
 
  return (
    <div className="App">
      <TodoListSidebar lists={state.lists} selectTodoList ={selectTodoList}/>
      <section className="all_main_info">
        <div className="current_tasks">
          <h1>Поточні завдання</h1>
          <h4>Загальна дошка в системі, що містить поточні завдання для всіх контракторів </h4>
        </div>
        <div id="showOnlyUndode">
          <input id="showAllTasks" type="checkbox"  />
          <h4>Показати виконані задачі</h4>
        </div>
        <div className="list">
          <ul className="list_of_tasks">
            {
            selectedList.map(task => <TaskElement key={task.id} task={task} toggleTask={handleToggle} removeTask={removeTask}/>)
            }
          </ul>
        </div>
        <NewTaskForm addTask={handleraddTask} selectedlist={selectedList} />
      </section>
    </div>
  )
}

export default App;
