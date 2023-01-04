import s from '../../styles/inbox-popup.module.scss'

type Props = { date: string }

export default function DateDivider({ date = 'Today January 01, 2023' }: Props) {
  return <div className={s.date_divider}>
    <hr />    <p>{date}</p>    <hr />
  </div>
}