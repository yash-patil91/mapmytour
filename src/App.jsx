import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CursorFollower from './Home Travel/CursorFollower';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import Home from './Home Travel/Home';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <CursorFollower />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
