import { useState } from "react"

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {

    if(name === "" || email === "" || message === ""){
      alert("Please Fill All Fields")
      return
    }

    setSubmitted(true)
  }

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Contact
      </h1>

      <div className="bg-zinc-900 border border-red-900 p-8 rounded-2xl w-[600px]">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white mb-5"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white mb-5"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-black border border-zinc-700 p-4 rounded-xl w-full text-white mb-5 h-[150px]"
        />

        <button
          onClick={handleSubmit}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
        >
          Send Message
        </button>

        {submitted && (

          <div className="mt-6 bg-black p-5 rounded-xl border border-green-700">

            <h2 className="text-green-500 text-2xl mb-3">
              Message Sent Successfully ✅
            </h2>

            <p>
              <span className="text-red-500">
                Name:
              </span> {name}
            </p>

            <p className="mt-2">
              <span className="text-red-500">
                Email:
              </span> {email}
            </p>

            <p className="mt-2">
              <span className="text-red-500">
                Message:
              </span> {message}
            </p>

            <div className="mt-5 bg-zinc-900 p-4 rounded-xl">

              <h3 className="text-red-500 text-xl mb-2">
                Auto Reply
              </h3>

              <p className="text-zinc-300">
                Thank you for contacting TaskFlow Pro.
                Our team will respond shortly.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>

  )
}

export default Contact