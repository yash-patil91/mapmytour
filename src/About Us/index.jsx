import React from 'react';
import HeroSection from '../Common/HeroSection';
import TestimonialSlider from '../Home Travel/TestimonialSlider';
import BrandsLogo from '../Home Travel/BrandsLogo';
import InstagramSlider from './InstagramSlider';
import TeamSlider from '../Home Travel/TeamSlider';
import ServicesGrid from './ServicesGrid';
import TravelCard from './TravelCard';
import TagsCloud from './TagsCloud';

const About = () => {
    return (
        <div>
            <HeroSection
                title="About Map My Tour"
                name="Home"
                description="About Map My Tour"
                bgImage="https://gleeful-eclair-61ad48.netlify.app/assets/img/bg/breadcumb-bg.jpg"
            />
            <TravelCard />
            <ServicesGrid />
            <TagsCloud />
            <TeamSlider />
            <TestimonialSlider />
            <BrandsLogo />
            <InstagramSlider />
        </div>
    );
};

export default About;
