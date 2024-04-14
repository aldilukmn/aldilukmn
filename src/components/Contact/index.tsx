import { Icon } from '@iconify/react/dist/iconify.js'
import { ListContact, inputForm } from './data'
import { stateForm, submitForm } from './hooks'

export default function Contact (): JSX.Element {
  const { name, email, phone, message, handleChange, handleTextareaChange, resetState } = stateForm()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await submitForm(formData, resetState)
  }
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {
              inputForm.map((val, index) => (
                <input key={index} type={val.type} placeholder={val.placeholder} name={val.name} className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none" onChange={handleChange} value={val.name === 'name' ? name : val.name === 'email' ? email : val.name === 'phone' ? phone : ''} />
              ))
            }
            <textarea placeholder="Your Message ..." name='message' cols={20} rows={5} className="border rounded-lg p-3 w-full focus:border-gray-400 outline-none" onChange={handleTextareaChange} value={message}></textarea>
            <button className={`border p-2 rounded-lg bg-primary text-white font-medium outline-none ${!name || !email || !phone || !message ? 'opacity-60 cursor-not-allowed' : ''}`} type='submit' disabled={!name || !email || !phone || !message}>Submit</button>
          </form>
        </section>
      </div>
    </>
  )
}
