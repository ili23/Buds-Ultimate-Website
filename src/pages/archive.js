import * as React from "react";
import NavbarAndSocial from "../components/nav_with_social";
import Footer from "../components/footer";
import Roster from "../components/pastRosters";
const Archive = () => {
  const yearCard = (year, img, coaches, captains, players) => {
    const captainList = captains.map((name) => <li>{name}</li>);
    const coachList = coaches.map((name) => <li>{name}</li>);
    const firstHalfPlayer = players.slice(0, players.length / 2);
    const secondHalfPlayer = players.slice(players.length / 2);

    const firstHalfPlayerList = firstHalfPlayer.map((name) => <li>{name}</li>);
    const secondHalfPlayerList = secondHalfPlayer.map((name) => (
      <li>{name}</li>
    ));
    return (
      <div className="grid-cols-6 grid md:grid-cols-12 mb-28">
        <div className="grid grid-cols-2 col-start-1 col-end-7 md:col-start-1 md:col-end-3">
          <h1 className="col-start-1 col-end-3 text-3xl md:text-4xl pb-8">
            {year}
          </h1>
          <div className="col-start-1 col-end-3 md:hidden pb-5">
            <img src={img} alt={"Team Photo from" + year}></img>
          </div>
          <div className="col-start-1 col-end-2">
            <h2 className="text-lg underline ">Captains:</h2>
            <ul className="text-sm pb-6">{captainList}</ul>
          </div>
          <div className="col-start-2 col-end-3">
            {coaches.length !== 0 && (
              <h2 className="text-lg underline">Coaches:</h2>
            )}
            <ul className="text-sm pb-6">{coachList}</ul>
          </div>
        </div>
        <div className="col-start-1 col-end-3 md:col-start-4 md:col-end-6">
          <ul className="text-sm md:text-base">{firstHalfPlayerList}</ul>
        </div>
        <div className="col-start-4 col-end-7 md:col-start-6 md:col-end-8">
          <ul className="text-sm md:text-base">{secondHalfPlayerList}</ul>
        </div>
        <div className="col-start-8 col-end-13 hidden md:block">
          <img src={img} alt={"Team Photo from" + year}></img>
        </div>
      </div>
    );
  };

  const rosterView = Roster.map((year) => (
    <div>{yearCard(year[0], year[1], year[2], year[3], year[4])}</div>
  ));
  return (
    <main className="bg-[#1E1E1E] h-fit w-screen">
      <NavbarAndSocial />
      <div className="px-[10%] my-10">
        <h1 className="pb-10 text-5xl md:pb-20">Past Buds</h1>
        <div>{rosterView}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Archive;

export const Head = () => <title>Archive</title>;
