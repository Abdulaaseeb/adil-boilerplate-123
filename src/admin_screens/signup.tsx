import { Box, Paper, Typography , TextField, Button} from "@mui/material";
import {Link , useNavigate} from 'react-router-dom'
export default function SignUpFunc(){
    const navigate = useNavigate()
    let loginRout = () => {
       navigate(`/login`)
    }
    return(
        <Box>
            <Box sx={{height:'100vh', backgroundColor:'GrayText'}} className = 'd-flex justify-content-center align-items-center '>
                <Paper className="p-5">
                    <Box>
                    <Typography variant="h5">Sign Up</Typography>
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" label = 'Full Name' type="name" />
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" label = 'Email' type="email" />
                    </Box>
                    <Box className = 'mt-3'>
                       <TextField variant="standard" label = 'Password' type="password" />
                    </Box>
                    <Box className = 'mt-3 '>
                        <Button className="w-100" variant="contained">Sign Up</Button>
                    </Box>
                    <Box className = 'mt-2'>
                        <Typography>Already have an account <span className="linking" onClick={() => loginRout()}>Login</span></Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}