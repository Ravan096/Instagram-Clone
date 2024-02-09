import { Box, Stack ,Typography} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
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

const Homescaleton = () => {
  return (
    <Stack spacing={1}>
        <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>

<Box sx={{width:"20%",
  textAlign:"center",
  // border:1,
  display:"flex",
  alignContent:"center",
  justifyContent:'space-evenly'
  }}>

<Skeleton variant="circular" width={40} height={40} />
</Box>

<Box width={"40%"} display={"flex"} justifyContent={"space-around"}>
 
<Skeleton variant="circular" width={40} height={40} />

  
<Skeleton variant="circular" width={40} height={40} />
 
</Box>
</Box>






<Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
<Skeleton variant="circular" width={70} height={70} />
<Skeleton variant="circular" width={70} height={70} />
<Skeleton variant="circular" width={70} height={70} />
<Skeleton variant="circular" width={70} height={70} />
<Skeleton variant="circular" width={70} height={70} />
                           
</Box>




<Box sx={{
              // border:1, 
              // height:"60vh", 
              width:["100vw","100%"]}}>
                      <Box sx={{
                // border:1,
                display:"flex",
                alignItems:"center",}}>
      <Skeleton variant="circular" width={40} height={40} />
                       <Box sx={{ml:2}}>
                       <Skeleton variant="text" width={80} sx={{ fontSize: '1rem'}} />
                       <Skeleton variant="text" width={80} sx={{ fontSize: '1rem'}} />
                       </Box>

      </Box>




      <Box sx={{
                // border:1,
                display:"flex",
                justifyContent:"center",mt:1}}>
      <Box sx={{
                            width: 350,
                            height: 350,
                           }}>
                              <Skeleton variant="rounded" width={350} height={350} />
                            </Box>
                            
      </Box>




      <Box sx={{mt:1,
                // border:1,
                display:"flex",justifyContent:"space-around"}}>
        <Box sx={{width:"25%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-evenly",}}>
      <Skeleton variant="circular" width={40} height={40} />

      <Skeleton variant="circular" width={40} height={40} />

        </Box>
      <Box sx={{width:"75%",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-end",
                }}>
            <Skeleton variant="rectangular" width={25} height={35} sx={{marginRight:2}}/>

      </Box>


      </Box>



      <Box>
      <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />

        
      <Skeleton variant="text" width={170} sx={{ fontSize: '1rem' }} />


      <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />


      <Skeleton variant="text"width={200} sx={{ fontSize: '1rem' }} />

      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />


      </Box>



    </Box>
    </Stack>
    
  );
}


export  default Homescaleton
