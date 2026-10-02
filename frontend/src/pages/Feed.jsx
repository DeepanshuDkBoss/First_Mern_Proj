import React,{useState,useEffect} from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://tse1.mm.bing.net/th/id/OIP.-GQXR0XWhXrQH-b8lO3LwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            caption:"Funny"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then((res)=>{
            setPosts(res.data.posts)
        })
    },[])
  return (
    <section className='feed-section'>
       {
        posts.length > 0 ? (
            posts.map((post)=>(
                <div key={post.id} className='post-card'>
                    <img src={post.image} alt={post.caption}  />
                    <p>{post.caption}</p>
                </div>
            ))
       ) : (
        <h1>No post available</h1>
       )

       }

    </section>
  )
}

export default Feed