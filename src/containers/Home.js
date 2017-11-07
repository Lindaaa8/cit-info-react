import React from 'react'
import routes from './../routes/routes';
import images from './../images/images';
import Section from './../components/Section';
import SectionSeparator from './../components/SectionSeparator';
import './Home.css';

const Home = () => (
	<div className='home'>
		<div className='home-header'>
			<img src={images.banner} className='home-title-container-img'/>
  		<img src={images.logo} className='home-title-logo-img'/>
		</div>
		<div className='home-content'>
			<Section
				title={'Latest Message'}
				image={images.messages}
				linkTo={routes.message}
			/>
			<SectionSeparator/>
			{/*<Section
				title={'What's Happening'}
				image={images.whatsHappening}
				linkTo={routes.news}
			/>*/}
			<Section
				title={'Giving'}
				image={images.giving}
				linkTo={routes.giving}
			/>
			<SectionSeparator/>
			{/*<Section
				title={'Community Groups'}
				image={images.giving}
				linkTo={routes.groups}
			/>*/}
			<Section
				title={'Connect'}
				image={images.connect}
				linkTo={routes.connect}
			/>
		</div>
	</div>
);

export default Home
