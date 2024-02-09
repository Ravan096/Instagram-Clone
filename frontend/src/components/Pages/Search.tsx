import { Input } from '@mui/joy';
import { Box } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import img1 from "../../assets/01-1.jpg"
import img2 from "../../assets/model_img_10-500x625.jpg"
import img3 from "../../assets/model_img_3-500x625.jpg"
import img4 from "../../assets/model_img_6-500x625.jpg"
import img5 from "../../assets/bg_1.jpg.webp"


const Search = () => {

    const [message, setMessage]= useState('');
    const sendHandler= ()=>{
        console.log("message send successfully")
    }
  return (
   <Box height={"100%"}>

    <Box display={"flex"} alignItems={"center"} >
        <SearchIcon style={{fontSize:"2.5rem",marginTop:5}}/>
    <Input  variant="outlined"
                 placeholder="Search..."
                 sx={{mt:2,width:1,mb:1, mr:1}}
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                 onKeyPress={(e)=>e.key==="Enter"? sendHandler():null}/>
    </Box>


    <Box>
        <SearchCard image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}/>
        <SearchCard image1={img5} image2={img4} image3={img2} image4={img3} image5={img1}/>
        <SearchCard image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}/>
        <SearchCard image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}/>
    </Box>


   </Box>
  )
}

export default Search



const SearchCard =({image1,image2,image3,image4,image5}:any)=>{

    return(
        <Box>

            <Box height={"200px"} width={"100%"} display={"flex"} boxSizing={"border-box"}>

            <Box display={"flex"} width={"66.6%"} flexWrap={"wrap"} height={"100%"} justifyContent={"space-around"}>
                <img src={image1} style={{height:"50%",width:"100px"}}/>
                <img src={image2} style={{height:"50%",width:"100px"}}/>
                <img src={image3} style={{height:"50%",width:"100px"}}/>
                <img src={image4} style={{height:"50%",width:"100px"}}/>

            </Box>
            <Box width={"33.3%"} height={"100%"}>
            <img src={image5} style={{height:"100%",width:"100%"}}/>
            </Box>
            </Box>



            <Box height={"200px"} width={"100%"} display={"flex"} boxSizing={"border-box"}>

            <Box width={"33.3%"} height={"100%"}>
            <img src={image1} style={{height:"100%",width:"100%"}}/>
            </Box>

            <Box display={"flex"} width={"66.6%"} flexWrap={"wrap"} height={"100%"} justifyContent={"space-around"}>
                <img src={image2} style={{height:"50%",width:"100px"}}/>
                <img src={image3} style={{height:"50%",width:"100px"}}/>
                <img src={image4} style={{height:"50%",width:"100px"}}/>
                <img src={image5} style={{height:"50%",width:"100px"}}/>

            </Box>
            

            </Box>


        </Box>
    )
}