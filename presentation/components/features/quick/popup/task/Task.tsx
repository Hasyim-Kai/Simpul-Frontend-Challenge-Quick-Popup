import Image from 'next/image'
import { useState } from 'react'
import { selectGlobalState } from '../../../../../../app/GlobalSlice';
import { useAppSelector } from '../../../../../../app/store';
import s from '../../styles/task-popup.module.scss'
import TaskItem from './TaskItem'

export default function Task() {
  const { isTaskPopupOpen } = useAppSelector(selectGlobalState);
  const [dummyTodo, setDummyTodo] = useState([
    {
      name: 'Close off Case #012920- RODRIGUES, Amiguel',
      dl: '2 Days Left',
      date: '12/06/2021',
      desc: `Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!`
    }, {
      name: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
      dl: '4 Days Left',
      date: '4/06/2021',
      desc: `All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.`
    }, {
      name: 'Set up appointment with Dr Blake',
      dl: '10 Days Left',
      date: '22/06/2021',
      desc: `No Description`
    }, {
      name: 'Assign 3 homework to Client A',
      dl: '3 Days Left',
      date: '12/06/2021',
      desc: `No Description`
    },
  ])

  return <section className={`${s.popup} ${isTaskPopupOpen ? s.popup_show : s.popup_hide}`}>
    <div className={s.nav_btn}>
      <select name="task-type" placeholder='My Task' className={s.task_type}>
        <option value="Personal Errands">Personal Errands</option>
        <option value="Urgent To-Do">Urgent To-Do</option>
      </select>
      <button className={s.newtask_btn}>New Task</button>
    </div>

    <div>
      {dummyTodo.map((data, i) => <TaskItem data={data} key={i} />)}
    </div>
  </section>
}