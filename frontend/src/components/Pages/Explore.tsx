import {Stack,Box,Typography,Avatar,Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Input, } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import proimg from '../../assets/peakpx.jpg';
import { Link } from "react-router-dom";


const Explore = () => {
  return (
    <Stack sx={{
        // border:1,
        height:"96vh",width:"80%",margin:"auto"}}>
        {/* insta nav start */}
<Box sx={{
        // border:1,
        height:"15%",
        width:"100%",
        borderColor:"greenyellow",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
        }}>
          <Box sx={{width:"20%",
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
          </Box>

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
                    width:["75%","20%"],
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center"
                    }}>

          <Link to={'/'}><HomeOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          {/* <TelegramIcon style={{fontSize:"2.5rem"}}/> */}
          <Link to={'/explore'}><ExploreOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          <Link to={'/like'}><FavoriteBorderOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          <Link to={'/profile'}><PermIdentityOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          </Box>

</Box >
{/* insta nav close */}

{/* discover people start */}
     <Box sx={{}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography>
                Discover People
            </Typography>
            <Typography>
                See All
            </Typography>
        </Box>

        {/* start suggest people */}
        <Box sx={{display:"flex",
                  justifyContent:"space-evenly",
                  alignItems:"center",
                  mt:2}}>

        <Box sx={{mt:1,
                  // border:1,
                  boxShadow:1,
                  p:0.5,
                  borderRadius:2,
                  width:"12vh",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       
                        <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       
                       <Button variant="contained" size="small" >Follow</Button>
      </Box>
        <Box sx={{mt:1,
                  // border:1,
                  boxShadow:1,
                  p:0.5,
                  borderRadius:2,
                  width:"12vh",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       
                        <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       
                       <Button variant="contained" size="small">Follow</Button>
      </Box>
        <Box sx={{mt:1,
                  // border:1,
                  boxShadow:1,
                  p:0.5,
                  borderRadius:2,
                  width:"12vh",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       
                        <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       
                       <Button variant="contained" size="small">Follow</Button>
      </Box>
        <Box sx={{mt:1,
                  // border:1,
                  boxShadow:1,
                  p:0.5,
                  borderRadius:2,
                  width:"12vh",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       
                        <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       
                       <Button variant="contained" size="small">Follow</Button>
      </Box>
        <Box sx={{mt:1,
                  // border:1,
                  boxShadow:1,
                  p:0.5,
                  borderRadius:2,
                  width:"12vh",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       
                        <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       
                       <Button variant="contained" size="small">Follow</Button>
      </Box>

        </Box>

     </Box>
{/* discover people end */}


{/* explore start here */}
              <Box sx={{
                        // border:1,
                         mt:8}}>
                <Box>
                  <Typography>
                    Explore
                  </Typography>
                </Box>
                
                <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-evenly"}}>

                  <Box sx={{boxShadow:1,
                            width:"16vh",
                            height:"11vh",
                            borderRadius:2}}>

                  </Box>
                  <Box sx={{boxShadow:1,
                            width:"16vh",
                            height:"11vh",
                            borderRadius:2}}>

                  </Box>
                  <Box sx={{boxShadow:1,
                            width:"16vh",
                            height:"11vh",
                            borderRadius:2}}>

                  </Box>
                  <Box sx={{boxShadow:1,
                            width:"16vh",
                            height:"11vh",
                            borderRadius:2}}>

                  </Box>
                  <Box sx={{boxShadow:1,
                            width:"16vh",
                            height:"11vh",
                            borderRadius:2}}>

                  </Box>



                </Box>

              </Box>
              {/* explore end here */}




{/* explore contents start */}
              <Box>
                
              </Box>
              {/* explore content end */}


    </Stack>
  )
}

export default Explore