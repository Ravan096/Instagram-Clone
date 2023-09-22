import Webcam from "react-webcam";
import {useRef,useState,useCallback} from 'react';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import FlipCameraAndroidOutlinedIcon from '@mui/icons-material/FlipCameraAndroidOutlined';

const Cam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);


  return (
    <div className="container"
     style={{border:"1px solid red",
             width:"50%",
             margin:"auto",
             height:"90vh",
             display:"flex",
             alignItems:"center",
             flexDirection:"column",
             justifyContent:"space-around"}}>
    {imgSrc ? (
      <img src={imgSrc} alt="webcam" />
    ) : (
      <Webcam style={{width:"90%",height:"90%"}}  ref={webcamRef} />
    )}
    <div className="btn-container">
      {imgSrc ? (
        <button onClick={retake}><FlipCameraAndroidOutlinedIcon/></button>
      ) : (
        <div>
          <button onClick={capture}><CameraOutlinedIcon/></button>
        <button><CameraswitchOutlinedIcon/></button>
        </div>
      )}
    </div>
  </div>
  )
}

export default Cam