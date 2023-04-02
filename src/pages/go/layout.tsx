import Image from 'next/image'
import logo from '@/assets/img/go/logo.svg'
import style from './go.module.css'

export default function GoLayout({ children }: { children: React.ReactNode }) {
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
