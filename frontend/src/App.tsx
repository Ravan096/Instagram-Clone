import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Suspense, lazy} from "react"
const ForgotPassword= lazy(()=> import("./components/Pages/ForgotPassword"));
const Home= lazy(()=> import("./components/Pages/Home"));
const Login= lazy(()=> import("./components/Pages/Login"));
const Profile= lazy(()=> import("./components/Pages/Profile"));
const SignUp= lazy(()=> import("./components/Pages/SignUp"));
const Userprofile= lazy(()=> import("./components/Pages/Userprofile"));
const Chat= lazy(()=> import("./components/Pages/Chat"));
const Explore= lazy(()=> import("./components/Pages/Explore"));
const Like= lazy(()=> import("./components/Pages/Like"));
const Search= lazy(()=> import("./components/Pages/Search"));
const EditProfile= lazy(()=> import("./components/Pages/EditProfile"));
const PageNotFound= lazy(()=> import("./components/Pages/PageNotFound"));
import Cam from './components/Pages/Cam';
import { Toaster } from 'react-hot-toast';
import Header from './components/Pages/Header';
import Homescaleton from './components/Loader/Homescaleton';

function App() {
  return (
   <Router>
    <Suspense fallback={<Homescaleton/>}>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/like' element={<Like/>}/>
      <Route path='/cam' element={<Cam/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </Suspense>

    <Header/>


    <Toaster position="top-center"
  reverseOrder={true}/>
   </Router>
  )
}

export default App
