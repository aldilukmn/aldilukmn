import { Icon } from '@iconify/react/dist/iconify.js'
import { screenSize } from '../../libs'
import { menu } from './data'
import { useState } from 'react'

export default function Navbar (): JSX.Element {
  const { width } = screenSize()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const handleShowNavbar = (): void => {
    setShowMenu(prev => !prev)
  }
  return (
    <>
      <div className='flex justify-between shadow border-b items-center px-10 lg:px-32 py-6 bg-white fixed top-0 w-full z-[9999]'>
        <section className="font-Logo text-3xl cursor-default">
          <h1>aldilukmn</h1>
        </section>
        <section className={`flex ${width >= 1024 ? 'gap-5' : 'flex-col'}`}>
          {
            width >= 1024
              ? menu.map((val, index) => (
              <div key={index}>
                <h1>{val.name}</h1>
              </div>
              ))
              : (<>
                  <button onClick={handleShowNavbar}>
                    <Icon icon={ showMenu ? 'material-symbols:close' : 'lucide:menu'} width={30} className='cursor-pointer'/>
                  </button>
                </>
                )
          }
        </section>
      </div>
      {
        width <= 1024
          ? (<>
              <section className={`fixed left-0 right-0 bg-primary text-white flex flex-col items-center gap-4 py-5 duration-500 top-0 ${showMenu ? 'translate-y-20 z-[1]' : '-translate-y-52'}`}>
                {/* <Icon icon="material-symbols:close" width={30} className='cursor-pointer' /> */}
                {
                  menu.map((val, index) => (
                    <div key={index}>
                      <h1>{val.name}</h1>
                    </div>
                  ))
                }
              </section>
              <section onClick={handleShowNavbar} className={`duration-500 ${showMenu ? 'bg-black fixed left-0 right-0 top-0 bottom-0 opacity-20 translate-y-56 h-dvh' : ''}`}></section>
            </>
            )
          : (null)
        }
    </>
  )
}
