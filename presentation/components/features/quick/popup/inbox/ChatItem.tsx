import Image from 'next/image'
import { useState } from 'react'
import s from '../../styles/inbox-popup.module.scss'

type Props = { data: { isMine: boolean, sender: string, txt: string, time: string } }

export default function ChatItem({ data }: Props) {
  return <div className={data.isMine ? s.chat_item_mine : s.her_chat_item}>
    <h6>{data.isMine ? 'You' : data.sender}</h6>

    <div>
      <Image alt='3dot' src='./icons/three_dot_black.svg' width={15} height={15} />
      <div className={data.isMine ? s.my_chat_bubble : s.her_chat_bubble}>
        <p>{data.txt}</p>
        <p>{data.time}</p>
      </div>
    </div>
  </div>
}