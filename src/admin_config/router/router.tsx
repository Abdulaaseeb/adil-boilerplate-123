import { Typography } from "@mui/material"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginFunc from "../../admin_screens/login"
import SignUpFunc from "../../admin_screens/signup"
import ResponsiveDrawer from "../../admin_screens/dasboard"
import AppComponents from "../../admin_components/components"
import Comments from "../axiosmethods/comments"
import AddComments from "../axiosmethods/addComments"
import PageNFound from "./pageNfound"
export default function AppRouter(){
    return(
       <Router>
        <Routes>
            <Route path="/" element={<AppComponents/>}/>
            <Route path="login" element={<LoginFunc/>}/>
            <Route path="signup" element={<SignUpFunc/>}/>
            <Route path="dasboard/*" element={<ResponsiveDrawer/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="addComments" element={<AddComments/>}/>
            <Route path="addComments/:id" element={<AddComments/>}/>
            <Route path="*" element={<PageNFound/>}/>
        </Routes>
       </Router>
    )
}