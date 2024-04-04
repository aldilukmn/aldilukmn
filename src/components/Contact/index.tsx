import { Icon } from '@iconify/react/dist/iconify.js'
import { ListContact } from './data'

export default function Contact (): JSX.Element {
  return (
    <>
      <div className="mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0">
        <section className="flex-auto lg:w-1/2">
          <h2 className="text-4xl text-primary font-bold mb-5">Get In Touch</h2>
          <p className="text-light mb-20">Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing together.</p>
          <section className='flex flex-col gap-5'>
            {
              ListContact.map((contact, index) => (
                <figure key={index} className='flex items-center gap-2 text-dark'>
                  <Icon icon={contact.iconName} width={23} />
                  <figcaption>{contact.title}</figcaption>
                </figure>
              ))
            }
          </section>
        </section>
        <section className="flex-auto lg:w-1/2">
          <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="Full Name" className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none" />
            <input type="email" placeholder="Email" className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none" />
            <input type="number" placeholder="Phone Number" className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none" />
            <textarea placeholder="Your Message ..." cols={20} rows={5} className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none"></textarea>
            <button className="border p-2 rounded-lg bg-primary text-white font-medium outline-none">Submit</button>
          </form>
        </section>
      </div>
    </>
  )
}
