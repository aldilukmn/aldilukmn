import { Home, Navbar } from './components'

export default function App (): JSX.Element {
  return (
    <>
      <div className='relative'>
        <Navbar/>
        <div className='px-10 lg:px-32'>
          <Home/>
        </div>
      </div>
   </>
  )
}
