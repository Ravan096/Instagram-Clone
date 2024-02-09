import { Link } from "react-router-dom"
import { Box,Typography, } from "@mui/material"
import { Input } from "@mui/joy";
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Header = () => {
  return (
    <Box sx={{
      // border:1,
      position:"fixed",bottom:0,
      zIndex:1000,
      height:"8%",
      width:"100%",
      // borderColor:"greenyellow",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      bgcolor:"white"
      }}>
        {/* <Box sx={{width:"20%",
                  textAlign:"center",
                  // border:1,
                  display:"flex",
                  alignContent:"center",
                  justifyContent:'space-evenly'
                  }}>

        <InstagramIcon style={{fontSize:"3rem"}}/>
        <Typography variant='h4' display={["none","block"]} fontFamily={"cursive"}>
          Instagram
        </Typography>
        </Box> */}

        <Box sx={{
                  // border:1,
                  width:"40%",
                  display:["none","flex"],
                  alignItems:"center",
                  justifyContent:"center"
                  }}>

        <SearchIcon style={{fontSize:"2rem",color:"gray"}}/>
        <Input placeholder='Search' variant='outlined'/>
        </Box>

        <Box sx={{
                  // border:1,
                  width:["100%","20%"],
                  display:"flex",
                  justifyContent:"space-evenly",
                  alignItems:"center"
                  }}>

        <Link to={'/home'}><HomeOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
        {/* <TelegramIcon style={{fontSize:"2.5rem"}}/> */}
        <Link to={'/explore'}><SearchIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
        <Link to={'/explore'}><AddBoxIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
        <Link to={'/explore'}><SubscriptionsIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
        <Link to={'/profile'}><PermIdentityOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
        </Box>

</Box >
  )
}

export default Header