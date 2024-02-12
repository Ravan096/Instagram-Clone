// import { Box, Button, Container, Input, Typography,Stack, Avatar} from "@mui/material";
// import {useEffect, useState} from 'react';
// import axios from "axios";
// import proimg from '../../assets/peakpx.jpg';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



// function Comment() {
//   const [comment, setComment] = useState([]);
//   const [tcomm, setTcomm]= useState("");
//   const [liked, setLiked] = useState(false);

//   const handleSubmit = (event:any) => {
//     event.preventDefault();  
//     setTcomm("")
//   };

//   const handleLike=()=> {
//     setLiked(!liked);
//   }
//   const url = "https://jsonplaceholder.typicode.com/comments?_limit=20";

//   useEffect(()=>{
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(url);
//         const data = response.data;
//         console.log(data)
//         setComment(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchComments();
//   },[url]);
  

//   return (
//     <Container sx={{border:1,borderColor:"red",height:["50vh","90vh"]}}>

//       <Stack sx={{border:1, borderColor:"steelblue",height:"80%",width:"100%",overflow:"scroll",}}>
//         {
//           comment.map((i:any)=>(
//             <Box sx={{border:1,borderColor:"black",display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}} key={i.id}>

//               <Box sx={{width:"10%",border:1}}>
//               <Avatar 
//                   src={proimg}
//                   sx={{
//                       //  border:1,
//                        borderColor:"greenyellow",
//                        height:[32,52],
//                        width:[32,52],
//                        }}/>
//               </Box>

//               <Box sx={{width:"80%",border:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
//                    <Typography sx={{border:1,borderColor:"red",fontWeight:600}} variant="subtitle2">{i.name}</Typography>
//                   <Typography variant="caption" sx={{ml:2,border:1,borderColor:"red"}}>{i.body}</Typography>
//               </Box>
              
//               <Box sx={{width:"10%",border:1}}>
//               {  liked ?  <FavoriteIcon onClick={handleLike}  style={{fontSize:"2.5rem",color: 'crimson'}}/>:
//         <FavoriteBorderOutlinedIcon onClick={handleLike} style={{fontSize:"2.5rem",}}/>}
//               </Box>



//                   </Box>
//           ))
//         }
//       </Stack>


//       <Box sx={{border:1,borderColor:"crimson",display:"flex",alignItems:"center",justifyContent:"space-around",height:"20%"}}>
//       <Input
//         type="text"
//         value={tcomm}
//         onChange={(e)=>setTcomm(e.target.value)}
//         placeholder="Write a comment..."
//         sx={{mt:2,width:[300,1/2]}}
//       />
//       <Button type="submit" disabled={!comment} onClick={handleSubmit}>
//         comment
//       </Button>
//     </Box>
//     </Container>
//   );
// }


// export default Comment;


import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function Comment(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}