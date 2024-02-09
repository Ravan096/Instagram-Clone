import {Link} from 'react-router-dom';
import {Stack,Box,Typography,Avatar,Button,styled} from '@mui/material';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-6%',
    width: '115%',
    height: '100%',
    border: 'none',
    backgroundColor: 'white',
    color: '#ECC94B',
  };
  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
  };



 


function EditProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername]= useState('');
    const [bio, setBio]= useState('');
    const [gender, setGender]= useState('');
    const [mobile, setMobile]= useState('');
    const [state, setState]= useState('');
    const [dob, setDob]= useState('');
    const [website, setWebsite]= useState('');
    const [imageprev, setImageprev] = useState('');
    const [image, setImage] = useState('');


    const changeImageHandler = (e:any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImageprev(reader.result);
          setImage(file);
          console.log("filetest",typeof(file))
          
        };
      };



      const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });


      
      
      




    const UpdateHandler = () => {
        // alert("profile updated successfully");
        console.log({name,email,mobile,username,gender,bio,website,state,dob})
    };

    return (
    <Stack sx={{
        height:["100vh","96vh"],width:["100%","80%"],margin:"auto"}}>      
                      {/* edit profile section start */}
              <Box sx={{height:["150vh","90vh"]}}>
                <Box sx={{width:["98%","30%"],margin:"auto",height:"100%",justifyContent:"space-around",display:"flex",flexDirection:"column",}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Avatar 
                    src={imageprev}
                    sx={{
                        //  border:1,
                         borderColor:"greenyellow",
                         height:92,
                         width:92,}}/>
                            
                     
                     <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                     Change Profile Picture
                    <VisuallyHiddenInput type="file" onChange={changeImageHandler}/>
                    </Button>
                    </Box>

                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Name
                        </Typography>
                        <Input value={name} onChange={(e)=>setName(e.target.value)} />
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            UserName
                        </Typography>
                        <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Bio
                        </Typography>
                        <Input value={bio} onChange={(e)=>setBio(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Gender
                        </Typography>
                        <Input value={gender} onChange={(e)=>setGender(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Email
                        </Typography>
                        <Input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Mobile 
                        </Typography>
                        <Input value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            State
                        </Typography>
                        <Input value={state} onChange={(e)=>setState(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography >
                            Date of Birthdate
                        </Typography>
                        <Input type="date" sx={{width:["54%","47%"]}} value={dob} onChange={(e)=>setDob(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:["space-between","space-between"],}}>
                        <Typography>
                            Website
                        </Typography>
                        <Input value={website} onChange={(e)=>setWebsite(e.target.value)}/>
                     </Box>
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <Button variant="contained" onClick={UpdateHandler}>
                        Update Your Profile
                     </Button>
                     </Box>
                     
                    
                </Box>

                

              </Box>
              {/* edit profile section end */}


    </Stack >

    );
}

export default EditProfile;
