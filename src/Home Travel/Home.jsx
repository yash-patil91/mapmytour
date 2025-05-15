import PopularDestination from './PopularDestination';
import TravelCard from './TravelCard';
import PopularTourSlider from './PopularTourSlider';
import RecentGallery from './RecentGallery';
import StatsCircles from './AnimatedCircle';
import TeamSlider from './TeamSlider';
import TestimonialSlider from './TestimonialSlider';
import BrandsLogo from './BrandsLogo';
import TravelCardSlider from './TravelCardSlider';
import TourCategorySlider from './TourCategorySlider';

const Home = () => {
    return (
        <div>
            <TourCategorySlider />
            <PopularDestination />
            <TravelCard />
            <PopularTourSlider />
            <RecentGallery />
            <StatsCircles />
            <TeamSlider />
            <TestimonialSlider />
            <BrandsLogo />
            <TravelCardSlider />
        </div>
    );
};

export default Home;
