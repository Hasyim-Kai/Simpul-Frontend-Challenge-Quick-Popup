import Image from 'next/image'
import { useState } from 'react'
import s from '../../styles/inbox-popup.module.scss'

export default function ContactItem() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  function handleCheckbox(e: any) { setIsChecked(!isChecked) }
  const [date, setDate] = useState<string | null>(null)
  function handleDate(e: any) { setDate(e.target.value) }
  const [desc, setDesc] = useState<string | null>(`Closing off this case since this application has been cancelled.
  No one really understand how this case could possibly be cancelled.
  The options and the documents within this document were totally a
  guaranteed for a success!`)

  return <div className={s.contact_item}>
    <div className={``}>
      <Image alt='contact' src='./icons/contact.svg' width={50} height={50} />
    </div>

    <div className={s.chat_desc}>
      <p>109220-Naturalization</p>
      <p>Cameron Phillips :</p>
      <p>Inside auto layout!</p>
    </div>

    <p className={s.date_text}>12/06/2021</p>
  </div>
}