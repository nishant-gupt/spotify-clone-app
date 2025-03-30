import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePageContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
