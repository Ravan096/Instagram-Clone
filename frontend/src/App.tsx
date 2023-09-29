import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './components/Pages/ForgotPassword';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Profile from './components/Pages/Profile';
import SignUp from './components/Pages/SignUp';
import Userprofile from './components/Pages/Userprofile';
// import Header from './components/Pages/Header';/
import Cam from './components/Pages/Cam';
import Chat from './components/Pages/Chat';
import EditProfile from './components/Pages/EditProfile';
import Explore from './components/Pages/Explore';
import Like from './components/Pages/Like';

function App() {
 
  return (
   <Router>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/like' element={<Like/>}/>
      <Route path='/cam' element={<Cam/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
      {/* <Route path='/test' element={<Test/>}/> */}
    </Routes>
   </Router>
  )
}

export default App
