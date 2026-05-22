function StatsCard({ title, value, color }) {

  return (

    <div className="bg-zinc-900 border border-red-900 p-7 rounded-3xl">

      <p className="text-zinc-400 text-lg">
        {title}
      </p>

      <h1 className={`text-5xl font-bold mt-5 ${color}`}>
        {value}
      </h1>

    </div>

  )
}

export default StatsCard