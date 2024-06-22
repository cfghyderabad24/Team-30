
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import LandInfo from './components/farmer/landInfo/LandInfo';
import Blog from './components/farmer/blog/Blog';
function App() {
  return (
    <div >
       <LandInfo></LandInfo> 
      {/* <Blog></Blog> */}
    </div>
  );
}

export default App;
