import StatsCircles from './AnimatedCircle'
import './App.css'
import CursorFollower from './CursorFollower'
import Footer from './Footer'
import TravelCardSlider from './TravelCardSlider'
import TestimonialSlider from './TestimonialSlider'
import BrandsLogo from './BrandsLogo'

function App() {

  return (
    <div >
      <CursorFollower />
      <TestimonialSlider />
      <BrandsLogo />
      <TravelCardSlider />
      <StatsCircles />
      <Footer />
    </div>
  )
}

export default App