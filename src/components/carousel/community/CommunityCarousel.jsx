import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Carousel.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const CommunityCarousel = () => {
    return (
        <>
        <center><h2>Community Partners</h2></center>
        <hr />
        <Carousel
            autoPlay
            centerMode={true}
            centerSlidePercentage={100}
            useKeyboardArrows={true}
            infiniteLoop={true}
            stopOnHover={false}

        >
            <div class='carouselImageContainer'>
                <Link to='https://pxe.org' target='_blank'>
                    <Image className='carouselImage' src="/images/content/communitypartners/PXE_logo.png" alt="PXE International Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://kcnt1epilepsy.org/' target='_blank'>
                <Image className='carouselImage' src="/images/content/communitypartners/KCNT1-Logo.png" alt="KCNT1 Epilepsy Foundation Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://bobbyjonescsf.org/' target='_blank'>
                <Image className='carouselImage' src="/images/content/communitypartners/bjcsf_logo.jpeg" alt="Bobby Jones CSF Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://rplassociation.org/' target='_blank'>
                <Image className='carouselImage' src="/images/content/communitypartners/RPLA_Logo.png" alt="RPL Association Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://agsaa.org/' target='_blank'>
                <Image className='carouselImage' src="/images/content/communitypartners/agsaa_logo.png" alt="AGSAA Logo" size='medium' />
                </Link>
            </div>
            <div class='carouselImageContainer'>
                <Link to='https://www.sallaresearch.org/' target='_blank'>
                <Image className='carouselImage' src="/images/content/communitypartners/STAR_Logo.webp" alt="Salla Research Logo" size='medium' />
                </Link>
            </div>
            {/* Add more images as needed */}
        </Carousel>
        </>
    );
};

export default CommunityCarousel;
