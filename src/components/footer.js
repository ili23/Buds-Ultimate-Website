import * as React from 'react';
import { Link } from 'gatsby';
import Twitter from '../images/icons/twitter-footer.png';
import Youtube from '../images/icons/youtube-footer.png';
import Instagram from '../images/icons/instagram-footer.png';
import Facebook from '../images/icons/facebook-footer.png';
import Github from '../images/icons/github.png';
const Footer = () => {
	const socialMedia = () => {
		const createIcon = (src, alt, link) => {
			return (
				<div className="flex justify-center items-center">
					<a href={link} rel="noreferrer" target="_blank">
						<img className="h-8 pr-2 flex " src={src} alt={alt}></img>
					</a>
				</div>
			);
		};
		return (
			<div className="w-max flex flex-row z-10 left-5">
				{createIcon(Twitter, 'Twitter icon', 'https://twitter.com/BudsUltimate')}
				{createIcon(Instagram, 'Instagram icon', 'https://www.instagram.com/budsultimate/')}
				{createIcon(Youtube, 'Youtube icon', 'https://www.youtube.com/@budsultimate278')}
				{createIcon(Facebook, 'Facebook icon', 'https://www.facebook.com/CornellBudsUltimate/')}
			</div>
		);
	};

	return (
		<div className="w-screen bg-red-400 px-[15%] text-black pb-4">
			<div className="grid grid-cols-12 pt-6 flex flex-row">
				<div className="col-start-1 col-end-6">
					<p className="text-3xl">Cornell Buds Ultimate</p>
					<div className="pt-3">{socialMedia()}</div>
					<div className="text-xs pt-5">
						<a href="https://github.com/ili23" className="flex flex-row" rel="noreferrer" target="_blank">
							{' '}
							<div>Site by Iram L.</div>
							<img className="h-4" src={Github} alt="Github"></img>{' '}
						</a>
					</div>
				</div>
				<div className="col-start-8 col-end-12 text-xl">
					<p className="text-3xl">Explore</p>
					<div className="flex">
						<ul className="flex flex-row pt-3 divide-x-2 divide-black text-lg">
							<li className="pr-4">
								<Link to="/">Home</Link>
							</li>
							<li className="px-4">
								<Link to="/about">About</Link>
							</li>
							<li className="px-4">
								<Link to="/roster">Roster</Link>
							</li>
							<li className="px-4">
								<Link to="/contact">Contact</Link>
							</li>
							<li className="px-4">
								<Link to="/donate">Donate</Link>
							</li>
							<li className="px-4">
								<Link to="/archive">Archive</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
