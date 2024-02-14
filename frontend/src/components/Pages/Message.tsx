import { Avatar, Box, Stack, Typography } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/joy";
import { useState } from "react";

const Message = () => {
    const [message, setMessage]= useState('');
    const sendHandler= ()=>{
        console.log("message send successfully")
    }
  return (
    <Stack sx={{
        // border:1,
        height:"96vh",width:["100%","80%"],margin:"auto"}}>

            <Box sx={{display:"flex",py:1}}>
                <Box sx={{display:"flex",width:"30%",alignItems:"center",justifyContent:"space-around"}}>
                    <KeyboardBackspaceOutlinedIcon style={{fontSize:"2rem"}}/>
                    <Typography fontSize={"1.4rem"} fontWeight={"bold"}>
                        Chats
                    </Typography>
                </Box>
                
                <Box sx={{width:"70%",display:"flex",justifyContent:"flex-end"}}>
                   <Box sx={{display:"flex",width:"50%",justifyContent:"space-around"}}> 
                    <VideocamOutlinedIcon style={{fontSize:"2rem"}}/>
                    <EditNoteOutlinedIcon style={{fontSize:"2rem"}}/>
                   </Box>

                </Box>

            </Box>

            <Box display={"flex"} alignItems={"center"} >
        <SearchIcon style={{fontSize:"2.5rem",marginTop:5}}/>
    <Input  variant="outlined"
                 placeholder="Search..."
                 sx={{mt:2,width:1,mb:1, mr:1}}
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                 onKeyPress={(e)=>e.key==="Enter"? sendHandler():null}/>
    </Box>


            <Box overflow={"auto"}>
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            </Box>
      </Stack>
  )
}

export default Message



const MessageCard =()=>{
    return (
        <Box display={"flex"} mt={1}>
            <Box sx={{width:"20%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>Ad</Avatar>
                
            </Box>

            <Box sx={{width:"60%"}}>
                <Typography fontWeight={"bold"} ml={1}>
                    Admin
                </Typography>
                <Typography ml={1}>
                    hi
                </Typography>

            </Box>

            <Box sx={{width:"20%",display:"flex",alignItems:"center",justifyContent:"center"}} >
                <LocalSeeOutlinedIcon style={{fontSize:"2rem"}}/>
            </Box>

        </Box>
    )
}