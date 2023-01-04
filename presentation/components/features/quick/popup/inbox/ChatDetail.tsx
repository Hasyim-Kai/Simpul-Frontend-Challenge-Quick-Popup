import Image from 'next/image'
import { useState } from 'react';
import { openInboxPopup, selectGlobalState, closePopup } from '../../../../../../app/GlobalSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../app/store';
import s from '../../styles/inbox-popup.module.scss'
import ChatItem from './ChatItem';
import DateDivider from './DateDivider';

export default function ChatDetail() {
  const dispatch = useAppDispatch()
  const { isInboxDetailPopupOpen } = useAppSelector(selectGlobalState);
  const [inbox, setInbox] = useState('')
  const [dummyChat, setDummyChat] = useState([
    {
      isMine: true, sender: 'Sugiono',
      txt: 'No worries. It will be completed ASAP. I’ve asked him yesterday', time: '19:32'
    }, {
      isMine: false, sender: 'Mary Hilda',
      txt: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.', time: '19:32'
    }, {
      isMine: true, sender: 'Sugiono',
      txt: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.', time: '19:32'
    }, {
      isMine: false, sender: 'Mary Hilda',
      txt: 'Sure thing, Claren', time: '19:32'
    }, {
      isMine: false, sender: 'Obaidullah Amarkhil',
      txt: 'Morning. I’ll try to do them. Thanks', time: '19:32'
    },
  ])
  function openInbox() { dispatch(openInboxPopup()) }
  function handleChat(e: any) { setInbox(e.target.value) }
  function sendChat() {
    setDummyChat(currentState => [...currentState, { isMine: true, sender: 'Sugiono', txt: inbox, time: '12:32' }])
    setInbox('')
  }

  return <div className={`${s.chat_detail_popup} ${isInboxDetailPopupOpen ? s.popup_show : s.popup_hide}`}>
    <header className={s.head}>
      <Image src="./icons/arrow_left.svg" alt="arrow_left" width={15} height={15} onClick={openInbox} />
      <div>
        <p>I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
        <p>3 Participants</p>
      </div>
      <Image src="./icons/close_grey.svg" alt="close" width={15} height={15} className={s.close_btn} onClick={openInbox} />
    </header>

    <div className={s.chats_container}>
      {dummyChat.map((data, index) => <ChatItem data={data} key={index} />)}
      {/* <DateDivider date='Today January 01, 2023' /> */}
    </div>

    <div className={s.chat_input}>
      <input type="search" name="inbox" id="inbox" placeholder='Type New Message' value={inbox} onChange={handleChat} />
      <button onClick={sendChat}>Send</button>
    </div>
  </div>
}