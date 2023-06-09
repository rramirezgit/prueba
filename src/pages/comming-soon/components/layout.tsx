import Image from 'next/image'
import logo from '@/assets/img/comming-soon/logo.svg'
import style from '../comming-soon.module.css'

export default function CommingSoonLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={style.main}>
        <nav className={style.nav}>
          <Image alt="logo" src={logo} />
        </nav>
        <div className={style.body}>{children}</div>
      </div>
    </>
  )
}
