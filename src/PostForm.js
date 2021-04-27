import React, { useState } from 'react'
import axios from 'axios'

function PostForm() {

    const [values, setValues] = useState({
        email : "",
        pswd : "",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://192.168.1.30:3111/api/login`,values)
        .then((response)=>{
            console.log('Response', response)
        })
        .catch((err)=>{
            console.log("Err", err)
        })
        console.log('values',values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="Enter email"/><br></br>
                <input type="text" name="pswd" value={values.pswd} onChange={handleChange} placeholder="Enter password"/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm
