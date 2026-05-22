function Header() {

  return (

    <div className="flex justify-between items-center mb-12">

      <div>

        <h1 className="text-5xl font-bold">
          Task Dashboard
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          Manage workflow professionally
        </p>

      </div>

      <button className="bg-red-600 hover:bg-red-700 px-7 py-4 rounded-2xl">
        + Create Task
      </button>

    </div>

  )
}

export default Header