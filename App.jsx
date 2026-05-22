import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import Analytics from "./pages/Analytics"
import Team from "./pages/Team"
import Settings from "./pages/Settings"
import Contact from "./pages/Contact"

function App() {

  const [companyData, setCompanyData] = useState({
    company: "",
    email: ""
  })

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-black text-white flex">

        <Sidebar />

        <div className="flex-1 p-10">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/tasks"
              element={<Tasks />}
            />

            <Route
              path="/analytics"
              element={
                <Analytics
                  companyData={companyData}
                />
              }
            />

            <Route
              path="/team"
              element={<Team />}
            />

            <Route
              path="/settings"
              element={
                <Settings
                  setCompanyData={setCompanyData}
                />
              }
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )
}

export default App