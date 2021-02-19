import React, { useEffect, useRef } from 'react'
import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from './Chat.Styles'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
import ChatInput from './ChatInput'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from './Message'
import { ChatBottom } from './Message.Styles'

function Chat() {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useCollection(
    roomId && db.collection('rooms').doc(roomId)
  )
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView()
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data()
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat
