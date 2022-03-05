import React from 'react'
import {useState} from 'react'
import {SendOutlined, PictureOutline} from '@ant-design/icons'
import {sendMessage,isTyping} from "react-chat-engine"
function MessageForm(props) {
    const [value,setValue] = useState('')
    const {chatId, creds} = props
    const handleChange = (e) => {
        setValue(e.target.value)
        isTyping(props.chatId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = value.trim()  
        if(text.length > 0) {
            sendMessage(chatId, creds, {text})
        } 
        setValue('')
    }


    const handleUpload = (e) => {
        sendMessage(creds,chatId, {files: e.target.files,text:""})
    }


  return (
    <form onSubmit={handleSubmit} className="message-form">
        <input type="text" className="message-input" 
        placeholder='send a message...'  
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
          />

          <label htmlFor="upload-button">
              <span className="image-button">
                    <PictureOutline className="picture-icon" />
                  </span>
          </label>
            <input id="upload-button" type="file" 
            multiple={false}
            style={{display: "none"}}
            onChange={handleUpload.bind(this)}
             />

             <button type="submit" className="send-button">
                 <SendOutlined className="send-icon" />
                 </button>
    </form>
  )
}

export default MessageForm