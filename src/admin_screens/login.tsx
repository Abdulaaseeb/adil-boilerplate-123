import { Box, Paper, Typography , TextField, Button} from "@mui/material";
import {Link , useNavigate} from 'react-router-dom'
export default function LoginFunc(){
    const navigate = useNavigate()
    let signUpRout = () => {
       navigate(`/signup`)
    }
    return(
        <Box>
            <Box sx={{height:'100vh', backgroundColor:'lightgray'}} className = 'd-flex justify-content-center align-items-center '>
                <div className="p-5 bg-light border border-primary shadow-lg rounded">
                    <Box>
                    <Typography className="text-center text-primary" variant="h5">Login</Typography>
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" color="primary" focused label = 'Email' type="email" />
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" color="primary" focused label = 'Password' type="password" />
                    </Box>
                    <Box className = 'mt-3 '>
                        <Button className="w-100" variant="contained">Login</Button>
                    </Box>
                    <Box className = 'mt-2'>
                        <Typography className="text-primary" text-primary>Don't have an account <span className="linking" onClick={() => signUpRout()}>Sign Up</span></Typography>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}