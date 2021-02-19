import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { db, auth } from '../firebase'
import { ChatInputContainer } from './ChatInput.Styles'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('')
  const [user] = useAuthState(auth)

  const sendMessage = (e) => {
    e.preventDefault() //prevents refresh

    if (!channelId) {
      return false
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    })

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })

    setInput('')
  }

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
