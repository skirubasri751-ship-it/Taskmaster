import { useState } from "react"

function Settings({ setCompanyData }) {

  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {

    if(company === "" || email === ""){
      alert("Please Fill All Fields")
      return
    }

    setCompanyData({
      company,
      email
    })

    setSaved(true)
  }

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Settings
      </h1>

      <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl w-[500px]">

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white mb-5"
        />

        <input
          type="email"
          placeholder="Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white mb-5"
        />

        <button
          onClick={handleSave}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
        >
          Save Settings
        </button>

        {saved && (

          <div className="mt-6 bg-black p-5 rounded-xl border border-green-700">

            <h2 className="text-green-500 text-2xl mb-3">
              Saved Successfully ✅
            </h2>

            <p>
              <span className="text-red-500">
                Company:
              </span>
              {" "}
              {company}
            </p>

            <p className="mt-2">
              <span className="text-red-500">
                Email:
              </span>
              {" "}
              {email}
            </p>

          </div>

        )}

      </div>

    </div>

  )
}

export default Settings