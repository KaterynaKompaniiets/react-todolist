import axios from "axios";

async function getLists() {
  return await axios.get(`http://localhost:5100/lists`).then((res) => res.data);
}

async function getTasks() {
  return await axios.get(`http://localhost:5100/tasks`).then((res) => res.data);
}

async function createTask(body) {
  return await axios
    .post(`http://localhost:5100/tasks`, body)
    .then((res) => res.data);
}

async function deleteTask(id) {
  return await axios
    .delete(`http://localhost:5100/tasks/${id}`)
    .then((res) => res.data);
}
async function handleDoneTask(id, done){
    return await axios
    .patch(`http://localhost:5100/tasks/${id}`, {done:done})
    .then((res) => res.data);

}

export { getLists, getTasks, createTask, deleteTask, handleDoneTask};
