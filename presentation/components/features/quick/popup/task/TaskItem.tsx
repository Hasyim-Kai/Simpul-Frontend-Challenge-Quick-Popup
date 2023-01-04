import Image from 'next/image'
import { useState } from 'react'
import s from '../../styles/task-popup.module.scss'

interface Props {
  data: {
    name: string,
    dl: string,
    date: string,
    desc: string
  }
}

export default function TaskItem({ data }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  function handleCheckbox() { setIsChecked(!isChecked) }
  const [date, setDate] = useState<string | null>(null)
  function handleDate(e: any) { setDate(e.target.value) }

  return <div className={s.task_item}>
    <label htmlFor="task1">
      <input type="checkbox" name="task1" id="task1" onChange={handleCheckbox} />
      <p className={isChecked ? s.task_title_checked : ''}>{data.name}</p>

      <div>
        {!isChecked && <p className={s.dl_text}>{data.dl}</p>}
        <p className={s.date_text}>{data.date}</p>
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
      <Image alt='up' src={data.desc === null ? './icons/pencil_grey.svg' : './icons/pencil.svg'} width={17} height={17} />
      <p>{data.desc}</p>
    </div>}
  </div>
}