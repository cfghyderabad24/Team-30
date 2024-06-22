
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import LandInfo from './components/farmer/landInfo/LandInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import Blog from './components/farmer/blog/Blog';
import Horibar from './components/farmer/horibar/Horibar';
import Analytics from './components/ngo/analytics/Analytics';

function App() {
  return (
    <div >
<Router>
      <Routes>
        <Route path="/" element={<Horibar />} />
        {/* <Route path="/dashboard/*" element={<LandInfo />} /> */}
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
