import { defineStore } from 'pinia'

import members from './members.json'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      members: members as MemberInfo[],
      products: [] as unknown[],
      contacts: {
        'Phone number': '(852) 67715590',
        Email: 'info@tomorrowsbrain.com',
      },
      partners: [
        { image: 'partners/HKSTP.png', alt: 'logo 1', href: 'https://google.com' },
        { image: 'partners/TEC.png', alt: 'logo 2' },
      ],
      publications: [
        {
          name: '2023 A novel approach to the design of a 3D-printed soft robotic gripper',
          year: '2023',
          description:
            '2023 This paper presents a novel approach to the design of a 3D-printed soft robotic gripper that can be used for various applications.',
          image: 'https://picsum.photos/400/150',
          functions: [{ name: '2023 Soft Robotics' }, { name: '2023 3D Printing' }],
        },
        {
          name: '2022 A study on the effects of soft robotics on human-robot interaction',
          year: '2022',
          description:
            '2022 This study investigates the effects of soft robotics on human-robot interaction and how it can improve user experience.',
          image: 'https://picsum.photos/400/151',
          functions: [{ name: '2022 Soft Robotics' }, { name: '2022 Human-Robot Interaction' }],
        },
      ] as PublicationsInfo[],
    }
  },
})

interface MemberInfo {
  name: string
  position: string
  description: string
  image: string
}

interface PublicationsInfo {
  name: string
  year: string
  description: string
  image: string
  functions: { name: string }[]
}
