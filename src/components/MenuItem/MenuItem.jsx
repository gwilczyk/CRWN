import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ imageUrl, size, title }) => {
	return (
		<div
			className={`MenuItem ${size}`}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
