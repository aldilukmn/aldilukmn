import { useState } from 'react'
import type { UserType, ResponseType, StateFormType, ModalFormHookType } from './types'

export const submitForm = async (formData: FormData, resetState: () => void, openModal: () => void): Promise<void> => {
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
        openModal()
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const stateForm = (): StateFormType => {
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setUser((state: UserType) => ({
      ...state,
      [name]: value
    }))
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target
    if (name === 'message') {
      setUser((state: UserType) => ({
        ...state,
        [name]: value
      }))
    }
  }

  const resetState = (): void => {
    setUser((state: UserType) => ({
      ...state,
      name: '',
      email: '',
      phone: '',
      message: ''
    }))
  }

  return { user, handleChange, handleTextareaChange, resetState }
}

export const ModalFormHook = (): ModalFormHookType => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openModal (): void {
    setIsOpen(prev => !prev)
  }

  function closeModal (): void {
    setIsOpen(prev => !prev)
  }

  return { isOpen, openModal, closeModal }
}
