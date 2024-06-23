import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LandInfo from './components/farmer/landInfo/LandInfo';
import Blog from './components/farmer/blog/Blog';
import Home from './components/farmer/home/Home';
import Report from './components/farmer/report/Report';
import TalkToExpert from './components/farmer/talkToExpert/TalkToExpert';
import Analytics from './components/ngo/analytics/Analytics';
import AnswerQueries from './components/ngo/answerQueries/AnswerQueries';
import FarmerProfiles from './components/ngo/farmerProfiles/FarmerProfiles';
import LoginPage from './LoginPage';
import LanguageProvider from './LanguageContext';
import Profile from './components/farmer/profile/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/report',
      element: <Report />,
    },
    {
      path: '/talkToExpert',
      element: <TalkToExpert />,
    },
    {
      path: '/answerQueries',
      element: <AnswerQueries />,
    },
    {
      path: '/farmerProfiles',
      element: <FarmerProfiles />,
    },
    {
      path: '/analytics',
      element: <Analytics />,
    },
    {
      path:'/landInfo',
      element:<LandInfo></LandInfo>
    }
  ]);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
