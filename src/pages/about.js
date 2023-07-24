import * as React from 'react'
import NavbarAndSocial from "../components/nav_with_social"
import Footer from "../components/footer"
import Data from "../components/data"
import snow from "../images/Snow.jpg"
import ethan from "../images/ethan.jpg"
import tomer from "../images/tomer.jpg"
import shake from "../images/shake.jpg"
const createRightImageSection = (header, text, image, alt, linebreak, shadow) => {
  return (
    <div className='grid grid-cols-12 py-28'>
      <div className='col-start-1 col-span-5 '>
        <h1 className='text-4xl pb-6'>{header}</h1>
        <div className='text-xl'>
          {text}
        </div>
        {linebreak !== "" &&
          <div className='text-xl pt-5'>
            {linebreak}
          </div>
        }
      </div>
      <div className='col-start-8 col-span-5 flex items-center'>
        <img className={shadow} alt={alt} src={image}></img></div>
    </div>
  )
}

const createLeftImageSection = (header, text, image, alt, linebreak, shadow) => {

  return (
    <div className='grid grid-cols-12 py-24'>
      <div className='col-start-1 col-span-5 flex items-center'>
        <img className={shadow} alt={alt} src={image}></img></div>
      <div className='col-start-8 col-span-5 '>
        <h1 className='text-4xl pb-6'>{header}</h1>
        <div className='text-xl'>
          {text}
        </div>
        {linebreak !== "" &&
          <div className='text-xl pt-5'>
            {linebreak}
          </div>
        }
      </div>

    </div>
  )
}


const About = () => {
  return (
    <main className="bg-[#1E1E1E] h-max w-screen">
      <NavbarAndSocial />
      <div className='px-[10%] pb-[5%]'>
        {createRightImageSection(Data[0][0], Data[0][1], snow, "Dylan Winchell at USAU D1 College Championships 2023", "", "shadow-lg shadow-red-700")}
        {createLeftImageSection(Data[1][0], Data[1][1], tomer, "Tomer Poole-Dayan at USAU D1 College Championships 2021", "", "shadow-lg shadow-sky-200")}
        {createRightImageSection(Data[2][0], Data[2][1], ethan, "Ethan Lau at USAU D1 College Championships 2023", Data[2][2], "shadow-lg shadow-green-100")}
        {createLeftImageSection(Data[3][0], Data[3][1], shake, "Cornell Shake", Data[3][2], "shadow-lg shadow-emerald-200")}
      </div>
      <Footer />
    </main>
  )
}
export default About

export const Head = () => <title>About</title>