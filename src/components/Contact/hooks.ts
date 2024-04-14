import { useState } from 'react'
import type { ResponseType, StateFormType } from './types'

export const submitForm = async (formData: FormData, resetState: () => void): Promise<void> => {
  formData.append('access_key', import.meta.env.VITE_FORM_ACCESS_KEY as string)

  const object = Object.fromEntries(formData)
  const json = JSON.stringify(object)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    })

    if (response.ok) {
      const res: ResponseType = await response.json()
      if (res.success) {
        console.log('Success', res)
        resetState()
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const stateForm = (): StateFormType => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
    }
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target
    if (name === 'message') {
      setMessage(value)
    }
  }

  const resetState = (): void => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return { name, email, phone, message, handleChange, handleTextareaChange, resetState }
}
