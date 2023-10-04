import { Stack,Box,Avatar,Typography,Button} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Input, } from '@mui/joy';
import proimg from '../../assets/peakpx.jpg';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import { Link } from 'react-router-dom';
import {useState} from 'react';


const Profile = () => {

  const [followBtn, setFollowBtn]= useState("Follow");

  const FollowHandler= ()=>{
    setFollowBtn("Following")
  }


  const onClickMailtoHandler = () => {
    window.location.href = 'mailto:max.mustermann@example.com?body=My custom mail body';
  }
  
  <Button onClick={onClickMailtoHandler}>Send E-Mail</Button>
  
  return (
    <Stack  sx={{
                // border:1,
                height:"96vh",width:"90%",margin:"auto"}}>

      <Box sx={{
                // border:1,
                height:"15%",
                width:"100%",
                borderColor:"greenyellow",
                display:"flex",
                alignItems:"center",
                // justifyContent:"space-between"
                }}>
                  <Box sx={{width:"15%",textAlign:"center"}}>
                  <InstagramIcon style={{fontSize:"3rem"}}/>
                  </Box>

                  <Box sx={{
                            width:"40%",
                            display:["none","flex"],
                            alignItems:"center",
                            justifyContent:"flex-end"
                            }}>

                  <SearchIcon style={{fontSize:"2rem",color:"gray"}}/>
                  <Input placeholder='Search' variant='outlined'/>
                  </Box>

                  <Box sx={{
                            width:["75%","35%"],
                            display:"flex",
                            justifyContent:"space-evenly",
                            alignItems:"center"
                            }}>

                  <Link to={'/home'}><HomeOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
                  <Link to={'/chat'}><TelegramIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
                  <Link to={'/explore'}><ExploreOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
                  <Link to={'/like'}><FavoriteBorderOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
                  </Box>

                  <Box sx={{ width:"10%",}}>
                  <Avatar 
                          src={proimg}
                          sx={{
                              //  border:1,
                               borderColor:"greenyellow",
                               height:62,
                               width:62,
                               }}/>
                  </Box>

      </Box >

      <Stack direction={["column","row"]} sx={{height:"100%"}}>
        {/*profile start here*/}

      <Box sx={{ 
                // border:1,
                borderColor:"red",
                height:"100%",
                width:["100%","20%"],
                display:"flex",
                flexDirection:"column",
                alignItems:"center"}}>

                  <Box sx={{width:"85%"}}>
                  <Avatar 
                          src={proimg}
                          sx={{
                              //  border:1,
                               borderColor:"greenyellow",
                               height:98,
                               width:98,
                               mt:2
                               }}/>

                    <Typography variant='h5' sx={{mt:1}}>
                      Ashely Todd 
                      <VerifiedRoundedIcon style={{color:"rgb(50, 193, 250)"}}/>
                      </Typography>    
                      <Typography sx={{mt:1}}>@ashleytodd</Typography>      
                      <Typography sx={{mt:1,mb:1}}>Designer</Typography> 
                  </Box>

                      <Box sx={{display:"flex",
                                width:"100%",
                                alignItems:"center",
                                justifyContent:"space-evenly"}}>

                      <Button variant="contained" sx={{backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9', 
                                                  color: followBtn === 'Following' ? '#000' : '#fff' }} onClick={FollowHandler}>
                        {followBtn}</Button>

                      <Button variant="text" sx={{color:"black"}}>
                        Message</Button>

                      <Button onClick={onClickMailtoHandler}  variant="text" sx={{color:"black"}}>
                        E-mail</Button>

                        </Box>

                        <Box sx={{
                                  width:"85%"}}>

                        <Typography variant="body2" sx={{
                                        width:"90%",
                                        mt:2
                                        }}>

                          Bringing you closer to the people 
                          and the ones you love 🧡. 
                          Founder of @toddoagency. WATCH 
                          @mynameisashley ON PRIME VIDEO 🎦
                          www.ashleytodd.com
                          </Typography> 

                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            1,475 Posts
                          </Typography>

                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            15m followers
                          </Typography>
                          
                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            4,999 following
                          </Typography>

                          <Typography  sx={{mt:1}}>
                            Followers instagram, armanihotel, omega
                            other 351 ones
                          </Typography>

                          <MoreHorizRoundedIcon/>
                        </Box>

      </Box>


      <Box sx={{
                // border:1,
                borderColor:"black",
                height:"100%",
                width:["100%","80%"]}}>

                  <Box sx={{ 
                            // border:1,
                            borderColor:"blueviolet",
                            width:"100%",height:"13%",
                            display:"flex",
                            alignContent:"center",
                            mt:3,
                            justifyContent:"space-evenly",
                            overflow:"scroll"}}>


                              <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72
                               }}/>
                               
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>

                  </Box>

                  <Box sx={{
                            // border:1,
                            borderColor:"crimson",
                            width:"100%",
                            height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center"
                           }}>


                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <GridOnRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{display:["none","block"]}}>
                      POSTS
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <LiveTvRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{display:["none","block"]}}>
                      IGTV
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <BookmarkBorderOutlinedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{display:["none","block"]}}>
                      SAVED ELEMENTS
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>

                    <SwitchAccountOutlinedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>

                  </Box>
                  {/* image post start */}
                  <Box sx={{
                          //  border:1,
                           borderColor:"brown",
                           height:"77%",
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           gap:4}}>

                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>


      </Box>
      </Stack>

    </Stack>
  )
}

export default Profile