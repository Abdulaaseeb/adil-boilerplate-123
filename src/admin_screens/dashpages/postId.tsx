import { Button, Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useState} from 'react'
import axios from 'axios'
export default function PostId(){
  const [singlePost , setSinglePost] = useState <any>({})
    let params = useParams()
    let getSinglePost = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)   
      .then((res) => {
        console.log(res.data)
        setSinglePost({...res.data})
      })
      .catch((err) => {
        console.log(err)
      })
    }
    return(
        <>
        <Typography variant="h5">Single Post</Typography>
        <Button variant="contained" onClick={getSinglePost}>Get Single Post</Button>
        <Box className = "mt-5  p-5">
        <Typography>{singlePost.id}</Typography>
        <Typography>{singlePost.userId}</Typography>
        <Typography>{singlePost.title}</Typography>
        <Typography>{singlePost.body}</Typography>
        </Box>
      
        </>
    )
}