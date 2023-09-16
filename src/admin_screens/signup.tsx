import { Box, Paper, Typography , TextField, Button} from "@mui/material";
import {Link , useNavigate} from 'react-router-dom'
export default function SignUpFunc(){
    const navigate = useNavigate()
    let loginRout = () => {
       navigate(`/login`)
    }
    return(
        <Box>
            <Box sx={{height:'100vh', backgroundColor:'lightgray'}} className = 'd-flex justify-content-center align-items-center '>
                <div className="p-5 border rounded shadow-lg border-primary bg-light">
                    <Box>
                    <Typography variant="h5" className="text-center text-primary">Sign Up</Typography>
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" color="primary" focused label = 'Full Name' type="name" />
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" color="primary" focused label = 'Email' type="email" />
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" color="primary" focused label = 'Password' type="password" />
                    </Box>
                    <Box className = 'mt-3 '>
                        <Button className="w-100" variant="contained">Sign Up</Button>
                    </Box>
                    <Box className = 'mt-2'>
                        <Typography className="text-primary">Already have an account <span className="linking" onClick={() => loginRout()}>Login</span></Typography>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}