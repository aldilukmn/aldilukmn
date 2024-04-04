import { Icon } from '@iconify/react/dist/iconify.js'
import { listSocMed } from './data'

export default function Footer (): JSX.Element {
  return (
    <>
      <div className="bg-dark mt-16 py-10 text-white">
        <h6 className="text-center mb-3">Follow me on social media:</h6>
        <section className='flex justify-center gap-5'>
          {
            listSocMed.map((socMed, index) => (
              <a key={index} href={socMed.linkName} target='_blank' rel='noopener noreferrer' className='p-2 hover:bg-white duration-300 rounded-full hover:text-dark outline-none'>
                <Icon icon={socMed.iconName} width={25} />
              </a>
            ))
          }
        </section>
      </div>
    </>
  )
}
