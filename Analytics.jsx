function Analytics({ companyData }) {

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Analytics
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h1 className="text-5xl text-red-500">
            95%
          </h1>

          <p className="mt-4">
            Task Completion
          </p>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h1 className="text-5xl text-green-500">
            84%
          </h1>

          <p className="mt-4">
            Team Performance
          </p>
        </div>

        <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">
          <h1 className="text-5xl text-blue-500">
            72%
          </h1>

          <p className="mt-4">
            Productivity
          </p>
        </div>

      </div>

      <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl">

        <h2 className="text-3xl font-bold text-red-500 mb-6">
          Company Analytics
        </h2>

        {
          companyData.company === ""
          ? (
            <p className="text-zinc-400">
              No Company Data Added Yet
            </p>
          )
          : (
            <div className="space-y-4">

              <p className="text-xl">
                <span className="text-red-500">
                  Company:
                </span>
                {" "}
                {companyData.company}
              </p>

              <p className="text-xl">
                <span className="text-red-500">
                  Business Email:
                </span>
                {" "}
                {companyData.email}
              </p>

              <p className="text-green-500 text-lg mt-5">
                Company Settings Connected Successfully ✅
              </p>

            </div>
          )
        }

      </div>

    </div>

  )
}

export default Analytics