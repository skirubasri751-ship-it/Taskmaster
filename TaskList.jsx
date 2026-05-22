import TaskCard from "./TaskCard"

function TaskList({ tasks, deleteTask }) {

  return (

    <div className="bg-zinc-900 border border-red-900 p-8 rounded-3xl">

      <h2 className="text-3xl font-bold mb-8">
        Active Tasks
      </h2>

      {
        tasks.length === 0
        ? (
          <p className="text-zinc-500">
            No Tasks Added
          </p>
        )
        : (
          <div className="space-y-5">

            {tasks.map(task => (

              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
              />

            ))}

          </div>
        )
      }

    </div>

  )
}

export default TaskList