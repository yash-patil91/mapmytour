import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CursorFollower from './Home Travel/CursorFollower';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import Home from './Home Travel/Home';
import './App.css'
import About from './About Us';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <CursorFollower />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes here if needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;