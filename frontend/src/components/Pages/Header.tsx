import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to={'/profile'}>
    Profile
</Link>
<Link to={'/login'}>
    Login
</Link>
<Link to={'/signup'}>
    SignUp
</Link>
<Link to={'/userprofile'}>
    UserProfile
</Link>
<Link to={'/'}>
  Home
</Link>
<Link to={'/explore'}>
  Explore
</Link>
<Link to={'/chat'}>
  Chat
</Link>
<Link to={'/like'}>
  Like
</Link>
</div>
  )
}

export default Header