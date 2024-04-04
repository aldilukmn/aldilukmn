import { Icon } from '@iconify/react/dist/iconify.js'
import { skills } from './data'

export default function Skill (): JSX.Element {
  return (
    <>
      <h2 className='font-semibold text-light text-xl'>Skills</h2>
      <section className='p-5 border border-slate-300 rounded-xl grid grid-cols-3 gap-5'>
        {
          skills.map((val, index) => (
            <figure key={index} className='flex flex-col items-center gap-2'>
              <div className='rounded-full border p-3 border-slate-300 group'>
                <Icon icon={val.iconName} width={30} className=' group-hover:scale-125 duration-300'/>
              </div>
              <figcaption className='text-xs font-medium text-dark'>{val.name}</figcaption>
            </figure>
          ))
        }
      </section>
    </>
  )
}
