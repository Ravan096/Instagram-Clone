import { Stack,Box,Typography, Avatar, Button} from '@mui/material'
import {Input} from '@mui/joy';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import proimg from '../../assets/peakpx.jpg';
import { Link } from 'react-router-dom';




const Like = () => {
  return (
    <Stack sx={{
      // border:1,
      width: {
        lg: '80%',
        md: '80vw',
        xs: '100vw'
      },margin:"auto"}}>

        {/* header start  */}
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

          <Link to={'/home'}><HomeOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
          {/* <TelegramIcon style={{fontSize:"2.5rem"}}/> */}
          <Link to={'/explore'}><ExploreOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
          <Link to={'/like'}><FavoriteBorderOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
          <Link to={'/userprofile'}><PermIdentityOutlinedIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
          </Box>

</Box>
{/* header end */}

<Box sx={{display:"flex",alignItems:"center"}}>
<Link to={'/'}><ArrowBackIosOutlinedIcon style={{fontSize:"3rem",color:"black"}}/></Link>
<Typography variant='h4'>
  Notification
</Typography>
</Box>

{/* like body start */}


<Box>

<Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},
               p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box >
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography >
                          requsted to follow you. 21 min
                        </Typography>
                        </Box>
                        <Button variant='contained' >Follow</Button>

    </Box>
<Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          started following you. 51 min
                        </Typography>
                        </Box>
                        <Button variant='contained'>Follow</Button>

    </Box>
<Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          requsted to follow you. 21 min
                        </Typography>
                        </Box>
                        <Button variant='contained'>Follow</Button>

    </Box>
<Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                          requsted to follow you. 21 min
                        </Typography>
                        </Box>
                        <Button variant='contained'>Follow</Button>

    </Box>
<Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                        requsted to follow you. 3h
                        </Typography>
                        </Box>
                        <Button variant='contained'>Follow</Button>

    </Box>
    <Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},p:1}}>
    <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
                       <Box>
                       <Typography variant="h6">
                          _nae11
                        </Typography>
                        <Typography>
                        requsted to follow you. 3h
                        </Typography>
                        </Box>
                        <Button variant='contained'>Follow</Button>

    </Box>
</Box>

</Stack>
  )
}

export default Like