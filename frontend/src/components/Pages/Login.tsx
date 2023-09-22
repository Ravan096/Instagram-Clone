import {Box, 
    Container,
    Typography,
    Stack} from '@mui/material';
import {Input,Button} from '@mui/joy';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';


const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword]=useState("");

  const LoginHandle=()=>{
    console.log({username,password})
  }


  return (
    <Container sx={{border:1,
                    height:['100vh','90vh'],
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                    }} >


        <Stack sx={{ width:["100%","60%"],height:["80%","80%"],display:"flex",
                    alignItems:"center",}}>
            <Box sx={{border:1, width:["100%","60%"],
            borderColor: 'grey.500',
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center"
                      }}>

                <Typography children={"Instagram"} 
                sx={{fontFamily:"cursive",
                    fontSize:"2rem",
                    padding:"3rem",
                    boxSizing:"border-box"
                }}/>
                <Input  variant="outlined"
                 placeholder="Phone number, username, or email"
                 sx={{mt:2,width:[300,1/2]}}
                 value={username}
                 onChange={(e)=>setUsername(e.target.value)}

                 />
               
                 <Input placeholder="Password"
                 type='password'
                  variant="outlined"
                  sx={{mt:1,width:[300,1/2]}}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                   />
                

                 <Button
                 onClick={LoginHandle}
                  sx={{width:[300,1/2], mt:2,backgroundColor:"rgb(50, 193, 250)"}}>
                    Log in 
                    </Button>
                    <Typography sx={{mt:2,width:[300,1/2]}}>
                        --------------------OR--------------------
                        
                    </Typography>
                    <Button variant="plain" sx={{width:[300,1/2],mt:1}}>
                        <FacebookIcon/>
                        Log in with Facebook
                    </Button>

                    
                    <Link to={"/forgotpassword"}
                     style={{marginTop:"1vh",
                     textDecoration:"none",color:"black"}}>
                        Forgot password?
                    </Link>
            </Box>
            <Box sx={{border:1,mt:2,width:["100%","60%"],borderColor: 'grey.500',
                      display:"flex",alignItems:"center",justifyContent:"center",
                      padding:"1vh"}}>
                    <Link to={"/signup"} style={{textDecoration:"none",
                    color:"black"}}>
                        Don't have an account? 
                        <Button variant='plain'>
                        Sign up
                        </Button>
                    </Link>
                    </Box>
            </Stack>
    </Container>
  )
}

export default Login