import * as React from "react";
import NavbarAndSocial from "../components/nav_with_social";
import Footer from "../components/footer";
import { Link } from "gatsby";
const Roster = () => {
  return (
    <main className="bg-[#1E1E1E] h-fit w-screen">
      <NavbarAndSocial />
      <div className="px-[10%] h-screen py-16 flex items-center ">
        <div className="flex flex-col w-full text-right">
          <h1 className="text-5xl">2023-2024 Roster</h1>
          <div className="text-xl pt-4">
            Stay tuned for the 2024-2025 Roster. Tryout information will be
            posted soon. In the meantime, fill out the interest form below!
          </div>
          <div className="underline text-xl py-2">
            <a href="https://forms.gle/YobWPg73fvMU1VMeA">
              2024-2025 Interest Form
            </a>
          </div>
          <div className=" underline text-xl">
            <Link to="/archive"> Past Rosters</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Roster;

export const Head = () => <title>Roster</title>;
