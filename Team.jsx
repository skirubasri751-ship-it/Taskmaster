function Team() {

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Team
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-2xl">Arun Kumar</h2>
          <p className="text-zinc-400 mt-3">Frontend Developer</p>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-2xl">Priya</h2>
          <p className="text-zinc-400 mt-3">UI Designer</p>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h2 className="text-2xl">Karthik</h2>
          <p className="text-zinc-400 mt-3">Backend Developer</p>
        </div>

      </div>

    </div>

  )
}

export default Team