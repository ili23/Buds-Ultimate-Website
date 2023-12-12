import * as React from "react";
import NavbarAndSocial from "../components/nav_with_social.js";
import Footer from "../components/footer";
import Carousel from "../components/carousel.js";
const IndexPage = () => {
  return (
    <main className="bg-[#1E1E1E] h-fit w-screen">
      <NavbarAndSocial />
      <Carousel />
      <div className="text-right px-[10%] my-10 text-6xl">
        Buds Ultimate at Cornell
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Cornell Buds</title>;
