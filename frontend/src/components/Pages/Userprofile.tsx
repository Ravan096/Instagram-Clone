import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import { Input, } from '@mui/joy';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import proimg from '../../assets/peakpx.jpg';
import { Link } from 'react-router-dom';

const Userprofile = () => {
  return (
    <Stack  sx={{
        // border:2,
        height:["","96vh"],width:"100%",margin:"auto"}}>


{/*profile start here*/}

<Box sx={{ 
        // border:1,
        borderColor:"red",
        height:["","30%"],
        width:"100%",
        display:"flex",
        flexDirection:["column","column"],
        // mt:6,
        // flexDirection:"column",
        alignItems:["flex-start","flex-start"]}}>

          <Box sx={{
                    // border:1, 
                    borderColor:"limegreen",
                    width:["100%","30%"],
                    height:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"}}>

          <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:96,
                       width:96,
                       mt:2
                       }}/>

            <Box sx={{display:"flex",
                                width:"70%",
                                alignItems:"center",
                                mt:1,
                                justifyContent:"space-between"}}>

            <Typography fontWeight={"600"} sx={{mt:1}}>
                            1,475 Posts
                          </Typography>

                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            15m followers
                          </Typography>
                          
                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            4,999 following
                          </Typography>

                        </Box>

          
          </Box>



          <Box sx={{
                    // border:1,
                    height:"100%",
                    width:"100%",
                    borderColor:"blue",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>

            <Box sx={{display:"flex",
                      alignItems:"center",
                      width:["100%","30%"],
                      // border:1,
                      justifyContent:"space-around"}}>

            <Typography variant='h5' sx={{mt:1}}>
              Ashely Todd 
              </Typography>    
              <Link to={'/editprofile'}>
              <Button variant="text" sx={{color:"black"}}>
                Edit Profile</Button></Link>
              <Link to={'/'}>
              <SettingsOutlinedIcon/>
              </Link>
            </Box>


                        <Box sx={{
                                //   border:1,
                                  width:["100%","45%"]}}>
                        <Typography variant="body2" sx={{
                                        mt:1
                                        }}>

                          Bringing you closer to the people 
                          and the ones you love 🧡. 
                          Founder of @toddoagency. WATCH 
                          @mynameisashley ON PRIME VIDEO 🎦
                          www.ashleytodd.com
                          </Typography> 
                        </Box>




                </Box>

</Box>



{/* profile end */}






<Box sx={{ 
                            // border:1,
                            borderColor:"blueviolet",
                            width:"100%",height:"13%",
                            display:"flex",
                            alignContent:"center",
                            mt:0.5,
                            justifyContent:"space-evenly"}}>


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
                           
                           
                  </Box>







{/* navber for contents */}

                  <Box sx={{
                            
                            mt:1,
                            width:"100%",height:"10%",
                  display:"flex",alignItems:"center",
                justifyContent:"center"}}>
                  <Box sx={{
                            
                            borderColor:"crimson",
                            width:["100%","60%"],
                            // height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center",
                            p:1
                           }}>


                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <GridOnRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
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
                    <Typography sx={{ml:1,display:["none","block"]}}>
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
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      SAVED 
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
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>

                  </Box>


                  </Box>




                  {/* image post start */}
                  <Box sx={{
                          //  border:1,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:4}}>

                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>


</Stack>
  )
}

export default Userprofile