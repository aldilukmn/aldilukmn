export interface ContactType {
  iconName: string
  title: string
}

export interface InputType {
  type: string
  placeholder: string
  name: string
}

export interface ResponseType {
  success: boolean
}

export interface UserType {
  name: string
  email: string
  phone: string
  message: string
}

export interface StateFormType {
  user: UserType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleTextareaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  resetState: () => void
}

export interface ModalFormHookType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}
