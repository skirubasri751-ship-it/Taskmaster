import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div className="w-[260px] bg-zinc-950 border-r border-red-900 p-8">

      <h1 className="text-4xl font-bold text-red-500 mb-14">
        TaskFlow
      </h1>

      <div className="space-y-5">

        <Link to="/">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Dashboard
          </div>
        </Link>

        <Link to="/tasks">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Tasks
          </div>
        </Link>

        <Link to="/analytics">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Analytics
          </div>
        </Link>

        <Link to="/team">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Team
          </div>
        </Link>

        <Link to="/settings">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Settings
          </div>
        </Link>

        <Link to="/contact">
          <div className="hover:bg-red-600 px-5 py-4 rounded-2xl text-lg cursor-pointer">
            Contact
          </div>
        </Link>

      </div>

    </div>

  )
}

export default Sidebar