import { Box, Button, Typography } from "@mui/material";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { error } from "console";

export default function PostData() {
   const [renderData, setRenderData] = useState<any>([])
   let getData = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((res) => {
            console.log(res.data)
            setRenderData([...res.data])
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const navigate = useNavigate()

   let clickCart = (id: any) => {
      navigate(`/postId/${id}`)
   }

   return (
      <>
         <Typography variant="h5" >
            Post
         </Typography>

         <Button variant="contained" onClick={getData}>
            Post Data
         </Button>
         {renderData.map((x: any, i: any) => {
            return (
               <Box key={i} onClick={() => clickCart(x.id)} sx={{ background: 'lightcyan' }} className='border rounded my-5 p-5'>
                  <Typography>{x.title}</Typography>
                  <Typography>{x.body}</Typography>
                  <Typography>{x.userId}</Typography>
               </Box>
            )
         })}
      </>

   )
}