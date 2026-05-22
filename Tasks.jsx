import { useState } from "react"

function Tasks() {

  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState("")

  const addTask = () => {

    if(taskName === ""){
      alert("Enter Task")
      return
    }

    const newTask = {
      id: Date.now(),
      name: taskName
    }

    setTasks([...tasks, newTask])

    setTaskName("")
  }

  const deleteTask = (id) => {

    const updated =
      tasks.filter(task => task.id !== id)

    setTasks(updated)
  }

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Tasks
      </h1>

      <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl mb-10">

        <input
          type="text"
          placeholder="Enter Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white"
        />

        <button
          onClick={addTask}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl mt-5"
        >
          Add Task
        </button>

      </div>

      <div className="space-y-5">

        {tasks.map(task => (

          <div
            key={task.id}
            className="bg-zinc-900 border border-red-900 p-6 rounded-2xl flex justify-between"
          >

            <h2 className="text-2xl">
              {task.name}
            </h2>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 px-5 py-2 rounded-xl"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Tasks