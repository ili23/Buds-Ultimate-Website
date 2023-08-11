import * as React from "react";
import NavbarAndSocial from "../components/nav_with_social";
import Footer from "../components/footer";
import Shake from "../images/shake.jpg";
import Thorny from "../images/thorny.png";
import Roses from "../images/roses.jpg";
import BudsCCC from "../images/ccc-invite.jpg";
const Contact = () => {
  const programCard = (title, img, alt, email, intForm) => {
    // let linkIntForm;
    // if (intForm !== "") {
    //   linkIntForm = (<h2><a href={intForm}>Interest Form</a></h2>)
    // } else {
    //   linkIntForm = (<div></div>)
    // }
    let link = "mailto:" + email;
    return (
      <div className="mt-20 flex justify-center">
        <div>
          <img className="w-auto max-h-60" src={img} alt={alt}></img>
          <h1 className="text-2xl pt-4">{title}</h1>
          <h2>
            Email: <a href={link}>{email}</a>
          </h2>
          {/* {linkIntForm} */}
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#1E1E1E] h-fit w-screen">
      <NavbarAndSocial />
      <div className=" px-[10%] h-fit w-screen mt-28">
        <div className="grid grid-cols-12 flex items-center max-h-80">
          <div className="col-start-1 col-end-8 text-xl">
            <h1 className="text-5xl mb-8">Connect With Us!</h1>
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
            <img src={BudsCCC} alt="Tomer at College Championships 2021"></img>
          </div>
        </div>
        <div className="grid grid-cols-12 flex">
          <div className="text-5xl col-start-1 col-end-13 pt-40">
            Connect with the Cornell Ultimate Frisbee Community:
          </div>
          <div className="col-start-1 col-end-5 pb-20">
            {programCard(
              "Shake (Cornell Men's B team)",
              Shake,
              "Cornell Shake",
              "shake@cornell.edu",
              ""
            )}
          </div>
          <div className="col-start-5 col-end-9">
            {programCard(
              "Wild Roses (Cornell Women's A team)",
              Roses,
              "Cornell Wild Roses",
              "roses@cornell.edu",
              "https://docs.google.com/forms/d/e/1FAIpQLSfRCjt0mvmL5HZl0j92CNWgqsC7QLV9qoo0AdCYuElC4WyK8g/viewform"
            )}
          </div>
          <div className="col-start-9 col-end-13">
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
      <h1 className="text-3xl underline text-center pb-20">
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
