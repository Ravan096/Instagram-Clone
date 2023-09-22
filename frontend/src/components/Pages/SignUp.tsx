import {Box, 
    Container,
    Typography,
    Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {Input,Button} from '@mui/joy';
import FacebookIcon from '@mui/icons-material/Facebook';
import {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername]= useState("");
    const [fullname, setFullName]= useState("");
    const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");

  

  const SignupHandle= async ()=>{

    const signUpUser = new Object({
      "email": email,
      "username": username,
      "name": fullname,
      "password": password

    });

    // signUpUser.set("email", email);
    // signUpUser.set("username", username);+
    // signUpUser.set("name", fullname);
    // signUpUser.set("password", password);
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const data  = await axios.post(
          `http://localhost:3000/api/v1/register`,
          signUpUser,
          config
        );
        console.log(data)
    };






  
  return (
    <Container sx={{
        height:['100vh','90vh'],
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }} >


<Stack sx={{ width:["100%","60%"],height:["80%","80%"],display:"flex",
        alignItems:"center",}}>
<Box sx={{border:1, width:["100%","60%"],
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          borderColor: 'grey.500'
          }}>

    <Typography children={"Instagram"} 
    sx={{fontFamily:"cursive",
        fontSize:"2rem",
        padding:"3rem",
        boxSizing:"border-box"
    }}/>

    <Typography sx={{ width:[300,1/2]}} fontSize={16} fontWeight={600} color={"gray"}>
        Sign up to see photos and videos
         from your friend
    </Typography>
    <Button variant="plain" sx={{width:[300,1/2],mt:1}}>
            <FacebookIcon/>
            Log in with Facebook
        </Button>
        <Typography sx={{mt:2,width:[300,1/2]}}>
                        --------------------OR--------------------
                        </Typography>
    <Input  variant="outlined"
     placeholder="Phone number or Email"
     sx={{mt:2,width:[300,1/2]}}
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     />
   
     <Input placeholder="Full Name"
      variant="outlined"
      sx={{mt:1,width:[300,1/2]}}
      value={fullname}
      onChange={(e)=>setFullName(e.target.value)}
       />
     <Input placeholder="Username"
      variant="outlined"
      sx={{mt:1,width:[300,1/2]}}
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
    

     
        <Typography variant='caption' sx={{mt:2,width:[300,1/2],borderColor: 'grey.500'}}>
        People who use our service may have uploaded your contact
         information to Instagram. <a href="#">Learn More</a>
        </Typography>

        <Typography variant='caption' sx={{mt:2,width:[300,1/2],borderColor: 'grey.500'}}>
        By signing up, you agree to our <a href="#">Terms</a> ,
         <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> .
        </Typography>

        <Button sx={{width:1/2,
                     mt:2,backgroundColor:"rgb(50, 193, 250)", mb:2}}
                     onClick={SignupHandle}>
        Sign up
        </Button>
</Box>
<Box sx={{border:1,mt:2,width:["100%","60%"],borderColor: 'grey.500',
          display:"flex",alignItems:"center",justifyContent:"center",
          padding:"1vh"}}>
        <Link to={"/login"} style={{textDecoration:"none"}}>
             Have an account? 
            <Button variant='plain'>
            Log in
            </Button>
        </Link>
        </Box>
</Stack>
</Container>
  )
}

export default SignUp