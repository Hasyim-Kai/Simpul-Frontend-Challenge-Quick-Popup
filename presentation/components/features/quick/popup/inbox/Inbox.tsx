import Image from 'next/image'
import { useState } from 'react'
import { selectGlobalState } from '../../../../../../app/GlobalSlice';
import { useAppSelector } from '../../../../../../app/store';
import s from '../../styles/inbox-popup.module.scss'
import ContactItem from './ContactItem'

export default function Inbox() {
  const { isInboxPopupOpen } = useAppSelector(selectGlobalState);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  function handleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  return <section className={`${s.popup} ${isInboxPopupOpen ? s.popup_show : s.popup_hide}`}>
    <div className={s.search_container}>
      <input type="search" name="inbox" id="inbox" placeholder='Search' />
      <Image alt='contact' src='./icons/search_grey.svg' width={15} height={15} className={s.search_icon} />
    </div>

    <div>
      <ContactItem />
      <ContactItem />
    </div>
  </section>
}