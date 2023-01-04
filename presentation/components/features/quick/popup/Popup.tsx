import { useState } from 'react'
import ChatDetail from './inbox/ChatDetail'
import Inbox from './inbox/Inbox'
import Task from './task/Task'

export default function Popup() {
  return <article>
    <Inbox />
    <ChatDetail />
    <Task />
  </article>
}