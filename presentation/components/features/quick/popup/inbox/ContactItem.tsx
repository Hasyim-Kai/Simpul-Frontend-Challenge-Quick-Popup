import Image from 'next/image'
import { useState } from 'react'
import { openInboxDetailPopup } from '../../../../../../app/GlobalSlice'
import { useAppDispatch } from '../../../../../../app/store'
import s from '../../styles/inbox-popup.module.scss'

interface Props {
  data: {
    name: string,
    date: string,
    latestSender: string,
    latestTxt: string
  }
}

export default function ContactItem({ data }: Props) {
  const dispatch = useAppDispatch()
  function openInboxDetail() { dispatch(openInboxDetailPopup()) }
  const [isChecked, setIsChecked] = useState<boolean>(false)
  function handleCheckbox(e: any) { setIsChecked(!isChecked) }
  const [date, setDate] = useState<string | null>(null)
  function handleDate(e: any) { setDate(e.target.value) }
  const [desc, setDesc] = useState<string | null>(`Closing off this case since this application has been cancelled.
  No one really understand how this case could possibly be cancelled.
  The options and the documents within this document were totally a
  guaranteed for a success!`)

  return <div className={s.contact_item} onClick={openInboxDetail}>
    <div className={``}>
      <Image alt='contact' src='./icons/contact.svg' width={50} height={50} />
    </div>

    <div className={s.chat_desc}>
      <p>{data.name}</p>
      <p>{data.latestSender}</p>
      <p>{data.latestTxt}</p>
    </div>

    <p className={s.date_text}>{data.date}</p>
  </div>
}