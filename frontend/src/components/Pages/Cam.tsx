import Webcam from "react-webcam";
import {useRef,useState,useCallback} from 'react';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import FlipCameraAndroidOutlinedIcon from '@mui/icons-material/FlipCameraAndroidOutlined';
import { Container,Box,Button } from "@mui/material";

const Cam = () => {
  // const webcamRef = useRef(null);
  const webcamRef = useRef<Webcam>(null);
  // const [imgSrc, setImgSrc] = useState(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImgSrc(imageSrc);
    }
    // setImgSrc(imageSrc);
  }, [webcamRef]);


  return (
    <Container
     sx={{border:1,borderColor:"blue",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    {imgSrc ? (
      <img src={imgSrc} alt="webcam" />
    ) : (
      <Webcam style={{width:"100%",height:"100%"}}  ref={webcamRef} />
    )}
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      {imgSrc ? (
        <Button variant="outlined" sx={{ml:"1vw",borderRadius:"30px",p:"0.5vw"}} onClick={retake}><FlipCameraAndroidOutlinedIcon fontSize={"large"}/></Button>
      ) : (
        <Box>
          <Button variant="outlined" sx={{ml:"1vw",borderRadius:"30px",p:"0.5vw"}} onClick={capture}><CameraOutlinedIcon fontSize={"large"}/></Button>
        <Button variant="outlined" sx={{ml:"1vw",borderRadius:"30px",p:"0.5vw"}}><CameraswitchOutlinedIcon fontSize={"large"}/></Button>
        </Box>
      )}
    </Box>
  </Container>
  )
}

export default Cam