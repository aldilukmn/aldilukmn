import Education from './Education'
import Experience from './Experience'
import Hobby from './Hobby'
import Skill from './Skill'

export default function About (): JSX.Element {
  return (
    <>
      <div className='mt-16 flex flex-col lg:flex-row gap-10'>
        <section className='flex flex-col gap-5 flex-auto lg:w-2/3'>
          <Experience/>
        </section>
        <section className='flex-auto flex flex-col gap-5'>
          <Skill/>
          <Education/>
          <Hobby/>
        </section>
      </div>
    </>
  )
}
