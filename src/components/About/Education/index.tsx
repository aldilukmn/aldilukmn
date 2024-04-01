import { study } from './data'

export default function Education (): JSX.Element {
  return (
    <>
      <h2 className="font-semibold text-light text-xl">Education</h2>
      {
        study.map((val, index) => (
          <>
          <section key={index} className='p-5 border border-slate-300 rounded-xl'>
            <figure className='flex flex-col gap-1'>
              <img src={val.logo} alt="logo" width={50} />
              <figcaption className='text-sm font-medium'>{val.major}</figcaption>
              <h4 className='text-xs text-light'>{val.name}</h4>
              <h4 className='text-xs text-light'>{val.year}</h4>
            </figure>
          </section>
          </>
        ))
      }
    </>
  )
}
