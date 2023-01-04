import Image from 'next/image'
import { useState } from 'react'
import { openInboxPopup, openTaskPopup, closePopup } from '../../../../../app/GlobalSlice';
import { useAppDispatch } from '../../../../../app/store';
import s from '../styles/quick-btn.module.scss'

export default function QuickBtnMenu() {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null)
  function handleMenu() {
    setIsMenuOpen((currentState) => !currentState)
    setSelectedBtn(null)
    dispatch(closePopup())
  }

  function openInbox() { setSelectedBtn('inbox'); dispatch(openInboxPopup()) }
  function openTask() { setSelectedBtn('task'); dispatch(openTaskPopup()) }

  return <section>
    <button className={`${selectedBtn === null ? s.quick_btn : s.quick_btn_hide}`} onClick={handleMenu}>
      <Image src="./icons/quick.svg" alt="Quick icon" width={26} height={26} />
    </button>

    <div>
      <button className={`${selectedBtn === 'inbox' ? s.inbox_btn_active // if inbox btn selected
        : selectedBtn === 'task' ? s.inbox_btn_inactive // if task btn selected
          : isMenuOpen ? s.inbox_btn : s.inbox_btn_hide}`} // if Quick btn clicked and menu opened, if not .. hide it
        onClick={openInbox}>
        {(selectedBtn === null && isMenuOpen) && <span className={s.btn_text}>Inbox</span>}
        <Image src={selectedBtn === 'inbox' ? './icons/chat_white.svg' : './icons/chat.svg'} alt="Inbox icon" width={26} height={26} />
      </button>
    </div>

    <div>
      <button className={`${selectedBtn === 'task' ? s.task_btn_active // same as Inbox Btn ^^
        : selectedBtn === 'inbox' ? s.task_btn_inactive
          : isMenuOpen ? s.task_btn : s.task_btn_hide}`}
        onClick={openTask}>
        {(selectedBtn === null && isMenuOpen) && <span className={s.btn_text}>Task</span>}
        <Image src={selectedBtn === 'task' ? './icons/book_white.svg' : './icons/book.svg'} alt="Task icon" width={26} height={26} />
      </button>
    </div>
  </section>
}