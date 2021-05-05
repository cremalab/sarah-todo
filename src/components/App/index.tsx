import React from "react"
import "./styles.css"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export type Task = { task: string }

export function App() {
  const [modal, setModal] = React.useState(false)
  // const handleModal = (e) => {
  //   setModal(true)
  // }
  // const [taskArray, setTasksArray] = React.useState([])
  // const addTask = (e) => {
  //   setTasksArray([...taskArray, e.target.value])
  // }

  const tasks: Task[] = [{ task: "finish the app" }, { task: "do a dance" }]
  const completedTasks: Task[] = [
    { task: "make an array" },
    { task: "do it live" },
  ]

  const handleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  return (
    <div className="App">
      <AppHeader />
      <main>
        <p>Active Tasks</p>
        <div className="TaskList">
          {" "}
          {tasks.map((taskItem: Task, index: number) => {
            return <TaskCard key={index} task={taskItem} />
          })}
        </div>

        <FormNewTask show={modal} onHideModal={handleModal} />
        <ButtonCreateTask onShowModal={handleModal} />
        {modal}
        <div className="CompleteList">
          <p>Completed Tasks</p>
          <TaskCounter />
          {completedTasks.map((taskItem: Task, index: number) => {
            return <TaskCard key={index} task={taskItem} />
          })}
        </div>
      </main>
    </div>
  )
}
