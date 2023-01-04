import Image from 'next/image'
import { useState } from 'react'
import { addAbortSignal } from 'stream';
import { selectGlobalState } from '../../../../../../app/GlobalSlice';
import { useAppSelector } from '../../../../../../app/store';
import s from '../../styles/inbox-popup.module.scss'
import ContactItem from './ContactItem'

export default function Inbox() {
  const { isInboxPopupOpen } = useAppSelector(selectGlobalState);
  const [dummyContact, setDummyContact] = useState([
    {
      name: '109220-Naturalization',
      date: '02/06/2021 10:45',
      latestSender: 'Cameron Phillips :',
      latestTxt: 'Inside auto layout!'
    }, {
      name: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
      date: '02/06/2021 10:45',
      latestSender: 'Ellen',
      latestTxt: 'Hey, please read'
    }, {
      name: '8405-Diana SALAZAR MUNGUIA',
      date: '01/06/2021 12:19',
      latestSender: 'Cameron Phillips :',
      latestTxt: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...'
    },
  ])

  return <section className={`${s.popup} ${isInboxPopupOpen ? s.popup_show : s.popup_hide}`}>
    <div className={s.search_container}>
      <input type="search" name="inbox" id="inbox" placeholder='Search' />
      <Image alt='contact' src='./icons/search_grey.svg' width={15} height={15} className={s.search_icon} />
    </div>

    <div>
      {dummyContact.map((data, i) => <ContactItem data={data} key={i} />)}
    </div>
  </section>
}