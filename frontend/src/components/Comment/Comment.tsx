import { Box, Button, Container, Input, Typography,Stack, Avatar} from "@mui/material";
import {useEffect, useState} from 'react';
import axios from "axios";
import proimg from '../../assets/peakpx.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



function Comment() {
  const [comment, setComment] = useState([]);
  const [tcomm, setTcomm]= useState("");
  const [liked, setLiked] = useState(false);

  const handleSubmit = (event:any) => {
    event.preventDefault();  
    setTcomm("")
  };

  const handleLike=()=> {
    setLiked(!liked);
  }
  const url = "https://jsonplaceholder.typicode.com/comments?_limit=20";

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
  

  return (
    <Container sx={{border:1,borderColor:"red",height:["50vh","90vh"]}}>

      <Stack sx={{border:1, borderColor:"steelblue",height:"80%",width:"100%",overflow:"scroll",}}>
        {
          comment.map((i:any)=>(
            <Box sx={{border:1,borderColor:"black",display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}} key={i.id}>

              <Box sx={{width:"10%",border:1}}>
              <Avatar 
                  src={proimg}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:[32,52],
                       width:[32,52],
                       }}/>
              </Box>

              <Box sx={{width:"80%",border:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
                   <Typography sx={{border:1,borderColor:"red",fontWeight:600}} variant="subtitle2">{i.name}</Typography>
                  <Typography variant="caption" sx={{ml:2,border:1,borderColor:"red"}}>{i.body}</Typography>
              </Box>
              
              <Box sx={{width:"10%",border:1}}>
              {  liked ?  <FavoriteIcon onClick={handleLike}  style={{fontSize:"2.5rem",color: 'crimson'}}/>:
        <FavoriteBorderOutlinedIcon onClick={handleLike} style={{fontSize:"2.5rem",}}/>}
              </Box>



                  </Box>
          ))
        }
      </Stack>


      <Box sx={{border:1,borderColor:"crimson",display:"flex",alignItems:"center",justifyContent:"space-around",height:"20%"}}>
      <Input
        type="text"
        value={tcomm}
        onChange={(e)=>setTcomm(e.target.value)}
        placeholder="Write a comment..."
        sx={{mt:2,width:[300,1/2]}}
      />
      <Button type="submit" disabled={!comment} onClick={handleSubmit}>
        comment
      </Button>
    </Box>
    </Container>
  );
}


export default Comment;