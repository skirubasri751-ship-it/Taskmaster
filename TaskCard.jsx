function TaskCard({ task, deleteTask }) {

  return (

    <div className="bg-black border border-zinc-800 p-6 rounded-2xl flex justify-between items-center">

      <div>

        <h3 className="text-2xl font-semibold">
          {task.title}
        </h3>

        <div className="flex gap-5 mt-3">

          <p className="text-zinc-400">
            Priority:
            <span className="text-red-500 ml-2">
              {task.priority}
            </span>
          </p>

          <p className="text-zinc-400">
            Status:
            <span className="text-yellow-500 ml-2">
              {task.status}
            </span>
          </p>

        </div>

      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
      >
        Delete
      </button>

    </div>

  )
}

export default TaskCard