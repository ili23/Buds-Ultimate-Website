import * as React from "react";
import NavbarAndSocial from "../components/nav_with_social";
import Footer from "../components/footer";
import Shake from "../images/shake.jpg";
import Thorny from "../images/thorny.png";
import Roses from "../images/roses.jpg";
import BudsNationals from "../images/buds nationals.jpg";
const Contact = () => {
  const programCard = (title, img, alt, email) => {
    let link = "mailto:" + email;
    return (
      <div className="mt-10 md:mt-20 md:flex md:justify-center">
        <div className="flex flex-row space-x-4">
          <img className="w-[30vw]" src={img} alt={alt}></img>
          <div className="flex-col">
            <h1 className="text-xl md:text-2xl md:pt-4">{title}</h1>
            <h2>
              Email: <a href={link}>{email}</a>
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#1E1E1E] h-fit w-screen">
      <NavbarAndSocial />
      <div className="px-[10%] h-fit w-screen mt-8 md:mt-28 ">
        <div className="md:grid md:grid-cols-12 md:flex md:items-center max-h-80">
          <div className="md:col-start-1 md:col-end-8 md:text-xl">
            <h1 className="text-4xl md:text-5xl mb-8">Connect With Us!</h1>
            <h2 className="py-2">
              Feel free to reach out with questions and fill out the interest
              form to get updates!
            </h2>
            <div className="py-2">
              Buds Captain and Coaches:{" "}
              <a href="mailto:buds@cornell.edu">buds@cornell.edu</a>
            </div>
            {/* need to change the website link */}
            <div className="py-2 underline">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://forms.gle/YobWPg73fvMU1VMeA"
              >
                Link to Interest Form
              </a>
            </div>
          </div>
          <div className="col-start-8 col-end-13 bg-red-100 flex flex-grow basis-full">
            <img
              src={BudsNationals}
              alt="Tomer at College Championships 2021"
            ></img>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:flex">
          <div className="text-4xl md:text-5xl col-start-1 col-end-13 pt-40">
            Connect with the Cornell Ultimate Frisbee Community:
          </div>
          <div className="flex-col">
            <div className="md:col-start-1 md:col-end-5 md:pb-20">
              {programCard(
                "Shake (Cornell Men's B team)",
                Shake,
                "Cornell Shake",
                "shake@cornell.edu",
                ""
              )}
            </div>
            <div className="md:col-start-5 md:col-end-9">
              {programCard(
                "Wild Roses (Cornell Women's A team)",
                Roses,
                "Cornell Wild Roses",
                "roses@cornell.edu",
                "https://docs.google.com/forms/d/e/1FAIpQLSfRCjt0mvmL5HZl0j92CNWgqsC7QLV9qoo0AdCYuElC4WyK8g/viewform"
              )}
            </div>
            <div className="md:col-start-9 md:col-end-13">
              {programCard(
                "Thorny (Cornell Women's B team)",
                Thorny,
                "Cornell Thorny",
                "thorny@cornell.edu",
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl underline text-center py-20">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRCjt0mvmL5HZl0j92CNWgqsC7QLV9qoo0AdCYuElC4WyK8g/viewform">
          2023-2024 Program Wide Interest Form
        </a>
      </h1>
      <Footer />
    </main>
  );
};

export default Contact;

export const Head = () => <title>Contact</title>;
