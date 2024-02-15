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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import img1 from '../../assets/jzc4hvrdcosbikvx0xzf.webp';
import img2 from '../../assets/th.png';
import img3 from '../../assets/header.1af6756a.png';
import img4 from '../../assets/main-home-slider-image.jpg';
import img5 from '../../assets/WallpaperDog-10781474.jpg';
import img6 from '../../assets/WallpaperDog-10781485.jpg';
import img7 from '../../assets/WallpaperDog-10788782.jpg';
import img8 from '../../assets/WallpaperDog-10804574.jpg';
import img9 from '../../assets/WallpaperDog-10804598.jpg';
import img10 from '../../assets/WallpaperDog-10916426.jpg';
import img11 from '../../assets/WallpaperDog-10916523.jpg';
import img12 from '../../assets/WallpaperDog-20593498.jpg';
import img13 from '../../assets/WallpaperDog-20618096.jpg';
import img14 from '../../assets/WallpaperDog-20618169.jpg';
import img15 from '../../assets/WallpaperDog-20618175.jpg';
import img16 from '../../assets/WallpaperDog-20618331.jpg';
import img17 from '../../assets/WallpaperDog-20618358.jpg';
import img18 from '../../assets/WallpaperDog-5505040.jpg';
import img19 from '../../assets/WallpaperDog-5549881.jpg';
import img20 from '../../assets/WallpaperDog-5549905.jpg';
import img21 from '../../assets/model_img_10-500x625.jpg';
import img22 from '../../assets/model_img_3-500x625.jpg';
import img23 from '../../assets/model_img_6-500x625.jpg';
import img24 from '../../assets/2.jpg.webp';
import img25 from '../../assets/5.jpg.webp';
import img26 from '../../assets/bg_1.jpg.webp';
import img27 from '../../assets/bg_2.jpg.webp';
import img28 from '../../assets/blog09-370x200_c.jpg';
import img29 from '../../assets/7.jpg.webp';
import img30 from '../../assets/category-1.jpg';
import img31 from '../../assets/banner5.jpg';
import img32 from '../../assets/Depositphotos_121792560_original-main-1-3.jpg';
import img33 from '../../assets/image_5.jpg.webp';
import img34 from '../../assets/item-14.jpg.webp';

const Userprofile = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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





  


    <Box sx={{ width: '100%', typography: 'body1'}}>
      
      <TabContext value={value}>
        <Box sx={{ 
          // borderBottom: 1, 
        // borderColor: 'divider',
                            borderColor:"crimson",
                            width:["100%","60%"],
                            // height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center"
                            // p:1
                            }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="1" label={
              <Box>
            <GridOnRoundedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      POSTS
                    </Typography>
                    </Box>
                  }/>


            
            <Tab value="2" label={
              <Box>
             <LiveTvRoundedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      IGTV
                    </Typography>
                    </Box> 
                  }/>

            <Tab value="3" label={
              <Box>
            <BookmarkBorderOutlinedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      SAVED 
                    </Typography>
                    </Box>
            }
            />




            <Tab value="4" label={
              <Box>
             <SwitchAccountOutlinedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>
            }
            />



          </TabList>
        </Box>
        <TabPanel value="1" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:2
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'crimson',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img1} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img34} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img33} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img31} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img30} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img29} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
          </TabPanel>

        <TabPanel value="2" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:2
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'green',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img11} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img12} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img13} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img14} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>


        <TabPanel value="3" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:2
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img21} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img22} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img23} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>


        <TabPanel value="4" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:2
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img24} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img25} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img26} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img27} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>
      </TabContext>
    </Box>
 

                  {/* <Box sx={{
                            
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


                  </Box> */}




                  {/* image post start */}
                  {/* <Box sx={{
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



                  </Box> */}


</Stack>
  )
}

export default Userprofile