import "./App.css";
import TaskElement from "./components/Tasks/TaskElement";
import NewTaskForm from "./components/Form/NewTaskForm";
import TodoListSidebar from "./components/SideBar/TodoListSidebar";
import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, handleDoneTask } from "./rest/rest";

function App() {
  const [alltasks, setTask] = useState([]);
  const [selectedList, selectList] = useState(1);
  const [showDone, setshowDone] = useState(false);
 

  const handleToggle = (id, done) => {
    handleDoneTask(id, !done).then(
      setTask([
        ...alltasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : { ...task }
        ),
      ])
    );
  };

  const handleraddTask = (newTask) => {
    console.log("newTask", newTask);
    if (newTask) {
      createTask(Object.assign(newTask, { list_id: selectedList })).then(
        (res) => setTask([...alltasks, res])
      );
    }
  };

  const removeTask = (id) => {
    deleteTask(id).then(() => {
      setTask([...alltasks.filter((task) => task.id !== id)]);
    });
  };

  const selectTodoList = (id) => {
    console.log(id);
    selectList(id);
  };

  useEffect(() => {
    getTasks().then((res) => setTask(res));
  }, [selectedList]);

  let tasks = alltasks.filter((t) => t.list_id === selectedList);
  if (!showDone) {
    tasks = tasks.filter((t) => !t.done);
  }

  return (
    <div className="App">
      <TodoListSidebar  selectTodoList={selectTodoList} />
      <section className="all_main_info">
        <div className="current_tasks">
          <h1>Поточні завдання</h1>
          <h4>
            Загальна дошка в системі, що містить поточні завдання для всіх
            контракторів{" "}
          </h4>
        </div>
        <div id="showOnlyUndode">
          <input
            id="showAllTasks"
            type="checkbox"
            onChange={() => setshowDone((prev) => !prev)}
          />
          <h4>Показати виконані задачі</h4>
        </div>
        <div className="list">
          <ul className="list_of_tasks">
            {tasks.map((task) => (
              <TaskElement
                key={task.id}
                task={task}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            ))}
          </ul>
        </div>
        <NewTaskForm addTask={handleraddTask} />
      </section>
    </div>
  );
}

export default App;
