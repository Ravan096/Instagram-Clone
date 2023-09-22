import {Link} from 'react-router-dom';
import {Stack,Box,Typography,Avatar,Button} from '@mui/material';
import { Input, } from '@mui/joy';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import proimg from '../../assets/peakpx.jpg';
import {useState} from 'react';







const Home = () => {

  const [followBtn, setFollowBtn]= useState("Follow");

  const FollowHandler= ()=>{
    setFollowBtn("Following")
  }




  return (
    <Stack>
    <Stack sx={{
        // border:1,
        height:"96vh",width:"80%",margin:"auto"}}>

      {/* Home navbar start */}
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

          {/* <HomeOutlinedIcon style={{fontSize:"2.5rem"}}/> */}
          <Link to={'/chat'}><TelegramIcon style={{fontSize:"2.5rem"}}/></Link>
          <Link to={'/explore'}><ExploreOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          <Link to={'/like'}><FavoriteBorderOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          <Link to={'/userprofile'}><PermIdentityOutlinedIcon style={{fontSize:"2.5rem"}}/></Link>
          </Box>

</Box >
      {/* Home navbar end */}





      <Stack direction={["column",'row']}
             sx={{
              // border:1,
              width:"100%"
            }}>

        {/* home content start */}
        <Box sx={{
                  // border:1,
                  width:["100%","60%"],
                  display:"flex",
                  alignItems:"center",
                  flexDirection:"column",}}>

          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
        </Box>
        {/* home content end */}







        {/* home sidebar start */}
        <Box sx={{
                  // border:1,
                  borderColor:"red",
                  width:"40%",
                  display:["none","block"]}}>

        <Box sx={{
                  // border:1,
                  display:"flex"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>

      </Box>


      <Box sx={{
              //  border:1,
               mt:2}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography>
          Stories
        </Typography>
        <Typography>
          Watch All
        </Typography>
        </Box>

        <Box sx={{display:"flex",mt:1}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
      </Box>
        <Box sx={{display:"flex",mt:1}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
      </Box>
        <Box sx={{display:"flex",mt:1}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
      </Box>



      </Box>







      <Box sx={{
                // border:1,
                mt:2}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography>
          Suggested for you
        </Typography>
        <Typography>
          See All
        </Typography>
        </Box>

        <Box sx={{display:"flex",mt:1}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
                       <Button variant="contained"
                        sx={{backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9', 
                        color: followBtn === 'Following' ? '#000' : '#fff',height:1 }} onClick={FollowHandler}>{followBtn}</Button>
      </Box>
        <Box sx={{mt:1,display:"flex"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
                        <Button variant="text" sx={{backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9', 
                                                  color: followBtn === 'Following' ? '#000' : '#fff',height:1  }} onClick={FollowHandler}>{followBtn}</Button>
      </Box>
        <Box sx={{mt:1,display:"flex"}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>
                       <Button variant="text" sx={{backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9', 
                                                  color: followBtn === 'Following' ? '#000' : '#fff',height:1  }} onClick={FollowHandler}>{followBtn}</Button>
      </Box>



      </Box>
      







        </Box>

        {/* home sidebar end */}



      </Stack>



    </Stack>






    </Stack>
  )
}


const HomeCard = ()=>{
  return (
    <Box sx={{
              // border:1, 
              // height:"60vh", 
              width:["100vw","100%"]}}>

      <Box sx={{
                // border:1,
                display:"flex",
                alignItems:"center",}}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:62,
                       width:62,
                       ml:2
                       }}/>
                       <Box sx={{ml:2}}>
                        <Typography>
                          _nae11
                        </Typography>
                        <Typography>
                          Instagram HQ
                        </Typography>
                       </Box>

      </Box>




      <Box sx={{
                // border:1,
                display:"flex",
                justifyContent:"center",mt:1}}>
      <Box sx={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
      </Box>




      <Box sx={{mt:1,
                // border:1,
                display:"flex",justifyContent:"space-around"}}>
        <Box sx={{width:"25%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-evenly",}}>
        <FavoriteBorderOutlinedIcon style={{fontSize:"2.5rem",marginLeft:"2%"}}/>
      <ModeCommentOutlinedIcon style={{fontSize:"2.5rem",marginLeft:"2%"}}/>
        </Box>
      <Box sx={{width:"75%",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-end",
                }}>
      <BookmarkBorderOutlinedIcon style={{fontSize:"2.5rem",marginRight:"3%"}}/>
      </Box>


      </Box>



      <Box sx={{
                // border:1,
                borderColor:'red',
                }}>
        <Typography variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          like by ewthatsgross and 475 others
        </Typography>
        
        <Typography variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          nae11 work vibes comming at you from Instagram HQ #instagramhq
        </Typography>

        <Typography variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          view all 18 comments
        </Typography>

        <Typography variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          ewthatsgross great colos!
        </Typography>
        <Typography sx={{ml:1.1}}>
          24 Minutes ago
        </Typography>
        <Input placeholder="Add a comment" variant="plain" />
        <MoreHorizRoundedIcon style={{marginLeft:"2%"}}/>

      </Box>



    </Box>
  )
}

export default Home