import {Link} from 'react-router-dom';
import {  Divider, Drawer, SwipeableDrawer } from "@mui/material";
import {Stack,Box,Typography,Avatar,Button} from '@mui/material';
import { Input, } from '@mui/joy';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import proimg from '../../assets/peakpx.jpg';
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
import {useEffect, useState} from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';
// import Comment from '../Comment/Comment';





const Home = () => {
  
  const [followBtn, setFollowBtn]= useState("Follow");

  const FollowHandler= ()=>{
    setFollowBtn("Following")
  }




  return (
    <Stack>
      <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>

<Box sx={{width:"20%",
  textAlign:"center",
  // border:1,
  display:"flex",
  alignContent:"center",
  justifyContent:'space-evenly'
  }}>

<InstagramIcon style={{fontSize:"2rem"}}/>
<Typography variant='h4' display={["none","block"]} fontFamily={"cursive"}>
Instagram
</Typography>
</Box>

<Box width={"40%"} display={"flex"} justifyContent={"space-around"}>
  <Link to={"/like"}>
    <FavoriteBorderOutlinedIcon style={{fontSize:"2rem",color:"black"}}/>
  </Link>
  <Link to={"/message"}>
    <TelegramIcon style={{fontSize:"2rem",color:"black"}}/>
  </Link>
</Box>
</Box>

<Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
<Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:70,
                               width:70
                               }}/>
                               
                               <Avatar 
                          src={img22}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:70,
                               width:70,
                               }}/>
                               <Avatar 
                          src={img24}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:70,
                               width:70,
                               }}/>
                               <Avatar 
                          src={img25}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:70,
                               width:70,
                               }}/>
                               <Avatar 
                          src={img26}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:70,
                               width:70,
                               }}/>
                               
                           
</Box>


    <Stack sx={{
        // border:1,
        height:"96vh",width:"80%",margin:"auto"}}>







      <Stack direction={["column",'row']}
             sx={{
              // border:1,
              width:"100%",
              mt:[1.5,0]
            }}>

        {/* home content start */}
        <Box sx={{
                  // border:1,
                  width:["100%","60%"],
                  display:"flex",
                  alignItems:"center",
                  flexDirection:"column",}}>

          <HomeCard image={img1}/>
          <HomeCard image={img2}/>
          <HomeCard image={img3}/>
          <HomeCard image={img4}/> 
          <HomeCard image={img5}/> 
          <HomeCard image={img6}/> 
          <HomeCard image={img7}/> 
          <HomeCard image={img8}/> 
          <HomeCard image={img9}/> 
          <HomeCard image={img10}/> 
          <HomeCard image={img11}/> 
          <HomeCard image={img12}/> 
          <HomeCard image={img13}/> 
          <HomeCard image={img14}/> 
          <HomeCard image={img15}/> 
          <HomeCard image={img16}/> 
          <HomeCard image={img17}/> 
          <HomeCard image={img18}/> 
          <HomeCard image={img19}/> 
          <HomeCard image={img20}/> 
          <HomeCard image={img21}/> 
          <HomeCard image={img22}/> 
          <HomeCard image={img23}/> 
          <HomeCard image={img24}/> 
          <HomeCard image={img25}/> 
          <HomeCard image={img26}/> 
          <HomeCard image={img27}/> 
          <HomeCard image={img28}/> 
          <HomeCard image={img29}/> 
          <HomeCard image={img30}/> 
          <HomeCard image={img31}/> 
          <HomeCard image={img32}/> 
          <HomeCard image={img33}/> 
          <HomeCard image={img34}/> 
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


const HomeCard = ({image}:any)=>{


  const [liked, setLiked] = useState(false);
  const [save, setSave] = useState(false);
  // const [c, setColor] = useState(false);
  const [showComments, setShowComments]=useState(false);
  const [comment, setComment] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/comments?_limit=20";
  // const url = "https://api.publicapis.org/entries";

  useEffect(()=>{
    const fetchComments = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data)
        setComment(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  },[url]);


  const handleShowComments = () => {
    setShowComments(!showComments);
    const toggleDrawer=(!showComments)
  };

  const handleLike=()=> {
    setLiked(!liked);
  }
  const handleSave=()=> {
    setSave(!save);
  }

  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setShowComments(!showComments);
    setOpen(!open);
  };

  const drawerBleeding = 56;



  return (
    <Box sx={{
              // border:1, 
              // height:"60vh", 
              width:["100vw","100%"]}}>
                      <Box sx={{
                // border:1,
                display:"flex",
                alignItems:"center",}}>
      <Link to={"/profile"}>
      <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:62,
                       width:62,
                       ml:2
                       }}/>
                        </Link>
                       <Box sx={{ml:2}}>
                        <Link to={"/profile"}>
                        <Typography color={"black"} sx={{textDecorationLine:"none"}}>
                          _nae11
                        </Typography>
                        </Link>
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
                            backgroundColor: 'black',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}>
                              <img src={image} alt="test" style={{objectFit:'contain',height:"100%",width:"100%"}}/>
                            </Box>
                            
      </Box>




      <Box sx={{mt:1,
                // border:1,
                display:"flex",justifyContent:"space-around"}}>
        <Box sx={{width:"25%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-evenly",}}>
        {/* <FavoriteIcon onClick={handleClick}  style={{fontSize:"2.5rem",marginLeft:"2%",color: liked ? 'crimson' : 'black'}}/> */}
        {  liked ?  <FavoriteIcon onClick={handleLike}  style={{fontSize:"2.5rem",marginLeft:"2%",color: 'crimson'}}/>:
        <FavoriteBorderOutlinedIcon onClick={handleLike} style={{fontSize:"2.5rem",marginLeft:"2%"}}/>}

      {/* <ModeCommentOutlinedIcon onClick={handleShowComments} style={{fontSize:"2.5rem",marginLeft:"2%",}}/> */}
      <ModeCommentOutlinedIcon onClick={handleClick} style={{fontSize:"2.5rem",marginLeft:"2%",}}/>

        </Box>
      <Box sx={{width:"75%",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-end",
                }}>
      { save ? <BookmarkRoundedIcon onClick={handleSave} style={{fontSize:"2.5rem",marginRight:"3%"}}/>:
      <BookmarkBorderOutlinedIcon onClick={handleSave} style={{fontSize:"2.5rem",marginRight:"3%"}}/>}
      </Box>


      </Box>

      {/* comments  */}
      <Box sx={{width:"100%"}}>
          {
          showComments ? 
          // <Box>        
        <Drawer anchor="bottom" open={open} onClose={handleClick}>
          {/* {renderDrawer()} */}
          <Box>
        <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: 'auto',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={handleClick}
        onOpen={handleClick}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Typography sx={{alignSelf:"center",fontWeight:"bold"}}>{comment.length} Result</Typography>
        <Divider sx={
          {
            width:"50%",
            alignSelf:"center",
            fontSize:"2vh",
            fontWeight:"bold"
          }
        }/>
        {
          comment.map((i:any)=>(
            <Box sx={{borderColor:"black",display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}} key={i.id} boxSizing={"border-box"}>

              <Box sx={{width:"90%",display:"flex"}}>
              <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:[30,52],
                       width:[30,52],
                       mr:1,
                       ml:0.5,
                       mt:0.5
                       }}/>
              {/* <Box sx={{border:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}> */}
                   <Typography sx={{fontWeight:800,padding:1}} variant="subtitle2">{"i.name"} 
                   <Typography variant="caption" sx={{ml:0.5}}>{"i.body i like your body lorem index cam chat message home contact i like your body lorem index cam chat message home contact " }</Typography>
                   </Typography>
                  {/* <Typography variant="caption" sx={{ml:2}}>{"i.body i like your body lorem index cam chat message home contact"}</Typography> */}
              {/* </Box> */}
              </Box>

              
              <Box sx={{width:"10%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              {  liked ?  <FavoriteIcon onClick={handleLike}  style={{fontSize:"1rem",color: 'crimson'}}/>:
        <FavoriteBorderOutlinedIcon onClick={handleLike} style={{fontSize:"1rem",}}/>}
              </Box>



                  </Box>
          ))
        }
      </SwipeableDrawer>
      </Box>
        </Drawer>
            // </Box>
    
  
          : ""
          }
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

        <Typography onClick={handleShowComments} variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          view all 18 comments
        </Typography>

        <Typography variant={"subtitle2"} gutterBottom sx={{ml:1.1}}>
          ewthatsgross great colos!
        </Typography>
        <Typography sx={{ml:1.1}}>
          24 Minutes ago
        </Typography>
        <MoreHorizRoundedIcon style={{marginLeft:"2%"}}/>

      </Box>



    </Box>
  )
}

export default Home


