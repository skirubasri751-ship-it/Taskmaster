function Dashboard() {

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-zinc-400">Total Tasks</h2>
          <h1 className="text-5xl text-red-500 mt-5">24</h1>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-zinc-400">Completed</h2>
          <h1 className="text-5xl text-green-500 mt-5">18</h1>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-zinc-400">Pending</h2>
          <h1 className="text-5xl text-yellow-500 mt-5">6</h1>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-zinc-400">Productivity</h2>
          <h1 className="text-5xl text-blue-500 mt-5">92%</h1>
        </div>

      </div>

    </div>

  )
}

export default Dashboard