import * as React from 'react';
import { Link } from 'gatsby';
import NavbarAndSocial from '../components/nav_with_social';
import Footer from '../components/footer';
import BudsNationals from '../images/buds nationals.jpg';

const Donate = () => {
	const donationLink =
		'https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=210&sort=1&bledit=1';
	return (
		<main className="bg-[#1E1E1E] h-fit w-screen">
			<NavbarAndSocial />
			<div className="px-[10%]">
				<h1 className="text-5xl pt-10 ">Support the Cornell Ultimate Community!</h1>
				<div className="grid grid-cols-12">
					<div className="col-start-1 col-end-6 py-8">
						<h2 className="text-3xl py-2">About the Endowment</h2>
						<p className="py-2">
							Do you want to ensure discs keep spinning at Cornell in perpetuity? Make a tax-deductible
							donation to the Cornell Ultimate Endowment! The fund will generate thousands of dollars that
							the Buds (and Roses) can use to cover costs like tournament fees, coaching, and travel
							expenses.{' '}
							<a href={donationLink} target="_blank" className="underline">
								Click here
							</a>{' '}
							to donate, and feel free to email us if you have any questions.{' '}
						</p>
						<h2 className="text-3xl py-2">What will the funds be used for?</h2>
						<p className="">
							Playing college ultimate is expensive. Each year, we incur thousands of dollars of costs
							from hotel rooms, gas money, tournament fees, and field costs. Playing in the Northeast, we
							often have to travel long distances to find competitive tournaments, and that travel is
							costly. We would greatly appreciate any donation you can give to help minimize the costs
							incurred by the Buds players each year.
						</p>
					</div>
					<img className="col-start-7 col-end-13 pt-6" src={BudsNationals}></img>
				</div>
			</div>
			<div className="flex justify-center pt-8 pb-10">
				<button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 hover:bg-red-400 px-2 py-1">
					<a href={donationLink} rel="noreferrer" target="_blank" className="underline text-xl">
						Link to Endowment
					</a>
				</button>
			</div>
			<Footer />
		</main>
	);
};

export default Donate;

export const Head = () => <title>Donate</title>;
