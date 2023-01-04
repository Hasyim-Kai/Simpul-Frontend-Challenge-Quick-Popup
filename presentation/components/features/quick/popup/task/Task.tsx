import Image from 'next/image'
import { useState } from 'react'
import { selectGlobalState } from '../../../../../../app/GlobalSlice';
import { useAppSelector } from '../../../../../../app/store';
import s from '../../styles/task-popup.module.scss'
import TaskItem from './TaskItem'

export default function Task() {
  const { isTaskPopupOpen } = useAppSelector(selectGlobalState);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null)
  function handleMenu() {
    setIsMenuOpen((currentState) => !currentState)
    setSelectedBtn(null)
  }

  function openInbox() { setSelectedBtn('inbox') }
  function openTask() { setSelectedBtn('task') }

  return <section className={`${s.popup} ${isTaskPopupOpen ? s.popup_show : s.popup_hide}`}>
    <div className={s.nav_btn}>
      <select name="task-type" placeholder='My Task' className={s.task_type}>
        <option value="Personal Errands">Personal Errands</option>
        <option value="Urgent To-Do">Urgent To-Do</option>
      </select>
      <button className={s.newtask_btn}>New Task</button>
    </div>

    <div>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </section>
}