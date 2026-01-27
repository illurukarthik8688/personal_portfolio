import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './pages/Admin';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <Router>
      <ThreeBackground />
      <div className="min-h-screen bg-bg-secondary/80 overflow-x-hidden selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
