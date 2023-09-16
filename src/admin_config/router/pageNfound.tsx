import { Box, Paper, Typography , TextField, Button} from "@mui/material";
import {Link , useNavigate} from 'react-router-dom'
export default function PageNFound(){
    return(
        <Box>
            <Box sx={{height:'100vh', backgroundColor:'lightgray'}} className = 'd-flex justify-content-center align-items-center '>
                <div className="p-5 bg-light border border-primary shadow-lg rounded">
                    <Box>
                    <Typography className="text-center text-primary" variant="h5">PAGE NOT FOUND</Typography>
                    </Box>

                </div>
            </Box>
        </Box>
    )
}