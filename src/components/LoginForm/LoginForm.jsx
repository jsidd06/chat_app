import React from 'react'
import {useState} from "react"
import axios from "axios"

const projectID = "d20ec61c-671e-4cf4-b27b-f7497a4d2f9e";

function LoginForm() {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault() 
        const authObject = {'Project-ID': projectID, 'Username': username, 'User-Secret': password} 

        try{
            await axios.get("https://api.chatengine.io/chats",{headers:authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
            setError('')
        } catch(err) {
            setError('Invalid Credentials')
        }
    }

  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onnSubmit={handleSubmit} >
              <input type="text" 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="input" placeholder="Username" required 
              />  
              <input type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input" placeholder="Password" required 
              />  
              <div align="center">
                  <button type="submit" className="button"><span>Start Chatting</span></button>
                  </div>
              </form>
              <h1>{error}</h1>
            </div> </div>
  )
}

export default LoginForm