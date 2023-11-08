'use client'

import { getAllChat, postData } from "@/libs/calls";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { uuid } from "uuidv4";

export default function Home() {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  // using useQuery to get all the messages
  const { data, isLoading, isError, isSuccess, refetch, isFetching } = useQuery({
    queryKey: 'CHATS',
    queryFn: () => getAllChat()
  })

  // checking localstorage if user has an account, if not create one 
  useEffect(() => {
    if (!localStorage.getItem('chatRoom')) {
      const unique_id = uuid();
      localStorage.setItem('chatRoom', `user-${unique_id.slice(0, 8)}`)
    }
    const chatRoomUser = localStorage.getItem('chatRoom')
    setUser(chatRoomUser)
  }, [])

  // posting message
  const postMessage = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('chatRoom')
    const body = {
      user,
      message: text
    }
    postData(body)
    setText('')
    refetch()
  }

  return (
    <div className="dashboad">
      <div className="chat-body">
        <div className="chats-container">
          {isLoading || isFetching ?
            (<p>loading...</p>)
            : isSuccess ?
              (data?.data?.map((singleChat) => (
                <div className={singleChat.user == user ? 'chat you' : "chat"} key={singleChat._id}>
                  <div className="chat-main">
                    <div className="details">
                      <img src="/pic.webp" alt="" />
                      <h2>{singleChat.user === user ? 'You' : singleChat.user || 'user'}</h2>
                      <span>{moment(singleChat.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    {
                      singleChat.message
                    }
                  </div>
                </div>)
              ))
              : isError ?
                (
                  <p>Error!! Something happened</p>
                )
                : (null)
          }
          <form className="input-container" onSubmit={postMessage}>
            <textarea required placeholder="Type a message" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
