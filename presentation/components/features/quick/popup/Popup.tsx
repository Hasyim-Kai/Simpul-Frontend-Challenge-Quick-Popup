import { useState } from 'react'
import Inbox from './inbox/Inbox'
import Task from './task/Task'

export default function Popup() {
  return <article>
    <Inbox />
    <Task />
  </article>
}