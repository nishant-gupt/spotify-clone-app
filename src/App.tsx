import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePageContainer';
import Navbar from './components/Navbar';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
