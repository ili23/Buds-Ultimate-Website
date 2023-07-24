import * as React from "react"
import Twitter from "../images/icons/twitter.png"
import Youtube from "../images/icons/youtube.png"
import Instagram from "../images/icons/insta.png"
import Facebook from "../images/icons/facebook.png"

const SocialMedia = () => {

  const createIcon = (src, alt, link) => {
    return (
      <div className="flex justify-center items-center">
        <a href={link} rel="noreferrer" target="_blank">
          <img className="h-12 py-1 flex " src={src} alt={alt} ></img>
        </a>
      </div>
    )
  }

  return (
    <div className="w-max flex flex-col z-10 absolute top-[35vh] left-5">
      {createIcon(Twitter, "Twitter icon", "https://twitter.com/BudsUltimate")}
      {createIcon(Instagram, "Instagram icon", "https://www.instagram.com/budsultimate/")}
      {createIcon(Youtube, "Youtube icon", "https://www.youtube.com/@budsultimate278")}
      {createIcon(Facebook, "Facebook icon", "https://www.facebook.com/CornellBudsUltimate/")}
    </div>
  )
}

export default SocialMedia

