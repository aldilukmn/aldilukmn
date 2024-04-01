import type { ExperienceType } from './types'
import kalimati from '../../../assets/uptdsdn2kalimati.jpg'
import synrgy from '../../../assets/synrgyacademy.png'
import device from '../../../assets/deviceservice.jpg'

export const experience: ExperienceType[] = [
  {
    logo: kalimati,
    name: 'Tenaga Administrasi Sekolah',
    year: 'UPTD SDN 2 Kalimati | Jul 2023 - Present',
    responsible: [
      'Responsible for entry in or out student data',
      'Responsible for prepare administrative letters',
      'Responsible for planning and budgeting the school (Rencana dan Anggaran Sekolah) including entry data (office stationery and asset) on regional inventory information system (SIPDA) and regional management information system (SIMDA)'
    ]
  },
  {
    logo: synrgy,
    name: 'Full-Stack Web JavaScript',
    year: 'SYNRGY Academy | Aug 2023 - Mar 2024',
    responsible: [
      'Complete of the 1 - 8 challenges',
      'Slicing web design to code with ReactJS and styling prefer Tailwind before Bootstrap, then deploy on Vercel with CI/CD on Git Action',
      'Create API documentation with NodeJS and PostgreSQL',
      'Deploy API with Docker Image on Railway',
      'Do integration BE to FE',
      'Do documentation code with Github',
      'Do testing code using Jest',
      ' Implement the scrum framework of the agile method to create an application with team on 9 - 11 challenges or final project'
    ]
  },
  {
    logo: device,
    name: 'Device Service',
    year: 'Freelance | Sep 2019 - Sep 2022',
    responsible: [
      'Replacing the battery on an android/iphone/laptop device',
      'Replacing the LCD on an android/iphone/laptop device',
      'Adding RAM/SSD component to laptop',
      'Reinstall android/iphone/laptop device'
    ]
  }
]
