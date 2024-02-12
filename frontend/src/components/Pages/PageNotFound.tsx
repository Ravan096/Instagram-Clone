import { Box, Button, Typography } from "@mui/material";
import notfoundimg from '../../assets/gfg.jpg';
import { Link } from "react-router-dom";


const PageNotFound = () => {

  return (
    <Box border={"2px solid red"} width={"100%"}>
        <Box>
        <Typography color={"whiteAlpha.900"} fontSize={"4xl"} mb={[5,2]}>
        The page you were looking for doesn't exist.
        </Typography>
        <Box>
            <img src={notfoundimg} width={"100%"} style={{objectFit:"contain"}}/>
        </Box>
        <Link to={"/contact"}>
        <Button>
            Contact Us
        </Button>
        </Link>
        </Box>
    </Box>
   
  )
}

export default PageNotFound



