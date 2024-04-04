import { About, Close, Contact, Footer, Home, Navbar } from './components'

export default function App (): JSX.Element {
  return (
    <>
      <div className='relative'>
        <Navbar/>
        <div className='px-10 lg:px-32'>
          <Home/>
          <About/>
          <Contact/>
          <Close/>
        </div>
        <Footer/>
      </div>
   </>
  )
}
