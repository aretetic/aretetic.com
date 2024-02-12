import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Carousel.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const IndustryCarousel = () => {
    return (
        <>
        <center><h2>Industry Partners</h2></center>
        <hr />
        <Carousel
            autoPlay
            centerMode={true}
            centerSlidePercentage={100}
            useKeyboardArrows={true}
            infiniteLoop={true}
            showThumbs={true}
            stopOnHover={false}

        >
            <div class='carouselImageContainer'>
                <Link to='https://pcornet.org/' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/PCORnet-logo.png" alt="Patient-centered Clinical Research Network" size='medium' />
                </Link>
            </div>
            {/**<div class='carouselImageContainer'>
                <Link to='https://www.qualitymetric.com/' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/QM_Logo.png" alt="QualityMetric Logo" size='medium' />
                </Link>
            </div>*/}
            <div class='carouselImageContainer'>
                <Link to='https://www.takeda.com/en-us' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/Takeda_Pharmaceutical_Company_logo.svg" alt="Takeda Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://www.takeda.com/en-us' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/Biogen_logo.svg" alt="Biogen Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://www.geneticalliance.org' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/GA_Logo.png" alt="Genetic Alliance Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://www.lunadna.com' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/Luna_Logo.png" alt="Luna Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://www.acmg.net/' target='_blank'>
                    <Image className='carouselImage' src="/images/content/industrypartners/acmg-logo.png" alt="American College of Medical Genetics Logo" size='medium' />
                </Link>
            </div>
            {/* Add more images as needed */}
        </Carousel>
        </>
    );
};

export default IndustryCarousel;
