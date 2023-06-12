import * as React from 'react'
import Navbar from "../components/navbar"
const About = () => {
  return (
    <main className="bg-[#1E1E1E] h-screen w-screen">
      <Navbar />
      <div>
        About
      </div>
    </main>
  )
}
export default About

export const Head = () => <title>About</title>