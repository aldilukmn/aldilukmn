import type { ContactType, InputType } from './types'

export const ListContact: ContactType[] = [
  {
    iconName: 'ph:phone-call-fill',
    title: '+6281-324-718-895'
  },
  {
    iconName: 'fluent:mail-32-filled',
    title: 'aldilukman99@gmail.com'
  },
  {
    iconName: 'mdi:location',
    title: 'Blok Roma Desa Bulak No. 11 Jatibarang Indramayu Jawa Barat'
  }
]

export const inputForm: InputType[] = [
  {
    type: 'text',
    placeholder: 'Full Name',
    name: 'name'
  },
  {
    type: 'email',
    placeholder: 'Email',
    name: 'email'
  },
  {
    type: 'number',
    placeholder: 'Phone Number',
    name: 'phone'
  }
]
