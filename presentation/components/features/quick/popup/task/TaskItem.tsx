import Image from 'next/image'
import { useState } from 'react'
import s from '../../styles/task-popup.module.scss'

type Props = {}

export default function TaskItem({ }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  function handleCheckbox(e: any) { setIsChecked(!isChecked) }
  const [date, setDate] = useState<string | null>(null)
  function handleDate(e: any) { setDate(e.target.value) }
  const [desc, setDesc] = useState<string | null>(`Closing off this case since this application has been cancelled.
  No one really understand how this case could possibly be cancelled.
  The options and the documents within this document were totally a
  guaranteed for a success!`)

  return <div className={s.task_item}>
    <label htmlFor="task1">
      <input type="checkbox" name="task1" id="task1" onChange={handleCheckbox} />
      <p className={isChecked ? s.task_title_checked : ''}>Close off Case #012920- RODRIGUES, Amiguel</p>

      <div>
        {!isChecked && <p className={s.dl_text}>2 Days Left</p>}
        <p className={s.date_text}>12/06/2021</p>
        <Image alt='up' src={isChecked ? './icons/down.svg' : './icons/up.svg'} width={10} height={10} />
        <Image alt='3dot' src='./icons/three_dot_black.svg' width={15} height={15} />
      </div>
    </label>

    {/* DATE */}
    {!isChecked && <div className={`flex`}>
      <label htmlFor="date">
        <Image alt='up' src={date === null ? './icons/clock.svg' : './icons/clock_set.svg'} width={17} height={17} />
      </label>
      <input type="date" name="date" id="date" className={s.datepicker} onChange={handleDate} />
    </div>}

    {/* TEXT */}
    {!isChecked && <div className={s.desc_txt}>
      <Image alt='up' src={desc === null ? './icons/pencil_grey.svg' : './icons/pencil.svg'} width={17} height={17} />
      <p>{desc}</p>
    </div>}
  </div>
}