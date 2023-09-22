import Home from './components/Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './components/Pages/Profile';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import ForgotPassword from './components/Pages/ForgotPassword';
import Userprofile from './components/Pages/Userprofile';
// import Header from './components/Pages/Header';/
import Explore from './components/Pages/Explore';
import Like from './components/Pages/Like';
import Chat from './components/Pages/Chat';
import Cam from './components/Pages/Cam';
import EditProfile from './components/Pages/EditProfile';

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
