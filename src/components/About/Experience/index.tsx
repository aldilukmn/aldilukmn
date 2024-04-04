import { experience } from './data'

export default function Experience (): JSX.Element {
  return (
    <>
      <h2 className="font-semibold text-light text-xl">Experiences</h2>
      {
        experience.map((val, index) => (
          <section key={index} className='p-5 border border-slate-300 rounded-xl'>
            <img src={val.logo} alt="school logo" width={80} className='mb-2' />
            <h3 className='font-medium mb-1 text-dark'>{val.name}</h3>
            <h4 className='text-sm font-medium text-light mb-2'>{val.year}</h4>
            <ul className='ml-5 list-disc text-dark'>
              {
                val.responsible.map((res, index) => (
                  <li key={index}>
                    {res}
                  </li>
                ))
              }
            </ul>
          </section>
        ))
      }
    </>
  )
}
