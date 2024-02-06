import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Farmers from './components/Farmers';
import Users from './components/Users';
import Subscriptions from './components/Subscriptions';
import Changepassword from './components/Changepassword';
import AppConfiguration from './components/Appconfiguration';
import Farmersdetails from './components/Farmersdetails';
import Usersdetails from './components/Usersdetails';
import Subscriptionsdetails from './components/Subscriptionsdetails';
import Appconfigurationdetails from './components/Appconfigurationdetails';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <>
     
    <Router>
      <Routes>
        
        <Route path="/agrovenom" element={<Login/>} />
        <Route path="" element={<Login/>} />

        <Route path="/Home" element={<Home/>} />
        <Route path="/farmers" element={<Farmers/>} />
        <Route path="/Farmersdetails/:businessid" element={<Farmersdetails/>} />

        <Route path="/Users" element={<Users/>} />
        <Route path="/Usersdetails/:mobileno/:androidid" element={<Usersdetails/>} />

        <Route path="/Subscriptions" element={<Subscriptions/>} />
        <Route path="/Subscriptionsdetails/:subscriptionid" element={<Subscriptionsdetails/>} />

        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Logout/>} />


        <Route path="/Changepassword" element={<Changepassword/>} />
        <Route path="/AppConfiguration" element={<AppConfiguration/>} />
        <Route path="/AppConfigurationdetails" element={<Appconfigurationdetails/>} />

        




        {/* <Route path="/users" component={UsersComponent} />
        <Route path="/subscriptions" component={SubscriptionsComponent} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
