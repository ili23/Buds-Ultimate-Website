import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import y21_22 from '../images/archives/2021-2022.jpg';
import y22_23 from '../images/archives/2022-2023.jpg';
const images = [
	{
		original: y21_22,
		sizes: '50px',
	},
	{
		original: y22_23,
		sizes: '50px',
	},
];

const Carousel = () => {
	return (
		<div className="px-[10%]">
			<ImageGallery
				items={images}
				showFullscreenButton={false}
				showPlayButton={false}
				autoPlay={true}
				slideInterval={10000}
			/>
		</div>
	);
};

export default Carousel;
