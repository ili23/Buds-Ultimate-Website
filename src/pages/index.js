import * as React from "react"
import Navbar from "../components/navbar.js"

const IndexPage = () => {
  return (
    <main className="bg-[#1E1E1E] h-screen w-screen">
      <Navbar />
      <div >
        Hello
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
