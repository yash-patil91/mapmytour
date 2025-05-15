import StatsCircles from './AnimatedCircle'
import './App.css'
import CursorFollower from './CursorFollower'
import Footer from './Footer'
import TravelCardSlider from './TravelCardSlider'
import TestimonialSlider from './TestimonialSlider'
import BrandsLogo from './BrandsLogo'
import TeamSlider from './TeamSlider'
import RecentGallery from './RecentGallery'
import PopularTourSlider from './PopularTourSlider'
import TravelCard from './TravelCard'

function App() {

  return (
    <div >
      {/* <CursorFollower /> */}
      <TravelCard/>
      <PopularTourSlider/>
      <RecentGallery />
      <StatsCircles />
      <TeamSlider />
      <TestimonialSlider />
      <BrandsLogo />
      <TravelCardSlider />
      <Footer />
    </div>
  )
}

export default App