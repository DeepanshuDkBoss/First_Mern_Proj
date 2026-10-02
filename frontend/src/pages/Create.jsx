import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Create = () => {
  const navigate = useNavigate()


  const handleSubmit = async (e)=>{
      e.preventDefault()

      const formData = new FormData(e.target)

      axios.post("http://localhost:4000/create-post",formData).then((res)=>{
        // alert("Post created succesfully")
        // e.target.reset()
        navigate("/feed")
      }).catch((err)=>{
        console.log(err)
        alert("erroe creating post")
      })
  }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} >

                <input type="file" name='image' accept='image/*' />
                <input type="text" name='caption' placeholder='Type Caption...' required />
                <button type="submit">Submit</button>

        </form>

    </section>
  ) 
}

export default Create 