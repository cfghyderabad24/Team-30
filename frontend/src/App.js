import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



//import LandInfo from './components/farmer/landInfo/LandInfo';
import Blog from './components/farmer/blog/Blog';
import Home from './components/farmer/home/Home';
import Report from './components/farmer/report/Report';
import TalkToExpert from './components/farmer/talkToExpert/TalkToExpert';
import Analytics from './components/ngo/analytics/Analytics';
import AnswerQueries from './components/ngo/answerQueries/AnswerQueries';
import FarmerProfiles from './components/ngo/farmerProfiles/FarmerProfiles';
import Profile from './components/farmer/profile/Profile';

import LoginPage from './LoginPage';





function App() {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<LoginPage></LoginPage>
    },
  {
    path:"/blog",
    element:<Blog></Blog>
  },
  {
    path:"/home",
    element:<Home></Home>
  },
  {
    path:"/profile",
    element:<Profile></Profile>
  },
  {
    path:"/report",
    element:<Report></Report>
  },
  {
    path:"talkToExpert",
    element:<TalkToExpert></TalkToExpert>
  },
  {
    path:"/answerQueries",
    element:<AnswerQueries></AnswerQueries>
  },
  {
    path:"/farmerProfiles",
    element:<FarmerProfiles></FarmerProfiles>
  },{
    path:"/analytics",
    element:<Analytics></Analytics>
  }


])


  return (
    <div >

      <RouterProvider router={router}/>
</div>
  );
}

export default App;
