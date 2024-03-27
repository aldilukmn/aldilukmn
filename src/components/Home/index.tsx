import photo from '../../assets/photo.jpg'

export default function Home (): JSX.Element {
  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row gap-20 items-center justify-between mt-36 mb-10'>
        <section className='lg:w-3/4'>
          <h1 className='text-6xl lg:text-7xl font-bold leading-tight mb-5'>
            Hi there! 👋 <br />
            I&apos;m Aldi
          </h1>
          <p className='leading-loose'>
            I am a graduate from mechanical engineering major at Muhammadiyah University of Yogyakarta and graduate from Synrgy Academy on Full Stack Web JavaScript class, wave #6, have an interest in maintenance and/or inspection field and digital technology specifically Full Stack Web. Capable to use various software for support my activities such as : Autodesk Inventor, Ansys Workbench, Visual Studio Code software. Involved in lecturer journal project. Intermediate in english skill. Experience working with teams or individual and currently looking for new challenges to grow.
          </p>
        </section>
        <section>
          <img src={photo} alt="photo-jpg" width={400} className='rounded-xl' />
        </section>
      </div>
      <div className=' w-[10.6rem] lg:w-[15.6rem]'>
        <a href='https://www.linkedin.com/in/aldilukmn' target='_blank' rel='noopener noreferrer' className='text-primary font-bold text-2xl lg:text-4xl group'>Let&apos;s connect!
        <div className='group-hover:w-full w-0 h-1 duration-500 bg-primary'></div>
        </a>
      </div>
    </>
  )
}
