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

export interface StateFormType {
  name: string
  email: string
  phone: string
  message: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleTextareaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  resetState: () => void
}
