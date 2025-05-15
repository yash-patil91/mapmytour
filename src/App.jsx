import StatsCircles from './AnimatedCircle'
import './App.css'
import CursorFollower from './CursorFollower'
import Footer from './Footer'
// import JoinUs from './JoinUs'
// import LatestVedanta from './LatestNews'
// import OurBusiness from './OurBusiness'
// import Quote from './Quote'
// import StatsCarousel from './StatsSlider'
// import Sustainability from './Sustainability'
// import Navbar from './Navbar'
// import Carousel from './Carousel'
// import GlobalPresence from './GlobalPresence'
import TravelCardSlider from './TravelCardSlider'
import TestimonialSlider from './TestimonialSlider'
import BrandsLogo from './BrandsLogo'

function App() {

  return (
    <div >
      <CursorFollower />
      <TestimonialSlider />
      <BrandsLogo/>
      <TravelCardSlider />
      <StatsCircles />
      {/* <Navbar />
      <Carousel />
      <OurBusiness />
      <StatsCarousel />
      <Quote />
      <GlobalPresence />
      <JoinUs />
      <LatestVedanta /> */}
      <Footer />
    </div>
  )
}

export default App