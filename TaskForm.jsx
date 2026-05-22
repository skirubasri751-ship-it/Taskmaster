import { useState } from "react"

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("High")

  const handleSubmit = () => {

    if(title === ""){
      alert("Please Enter Task")
      return
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      status: "Pending"
    }

    addTask(newTask)

    setTitle("")
    setPriority("High")
  }

  return (

    <div className="bg-zinc-900 border border-red-900 p-8 rounded-3xl mb-10">

      <h2 className="text-3xl font-bold mb-8">
        Create Task
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-black border border-zinc-700 p-5 rounded-2xl text-white"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-black border border-zinc-700 p-5 rounded-2xl text-white"
        >

          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>

      </div>

      <button
        onClick={handleSubmit}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl mt-6"
      >
        Add Task
      </button>

    </div>

  )
}

export default TaskForm