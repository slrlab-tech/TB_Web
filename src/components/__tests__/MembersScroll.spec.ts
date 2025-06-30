import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Members from '../AboutView/MembersScroll.vue'

describe('Members', () => {
  it('renders empty properly', () => {
    const wrapper = mount(Members)

    expect(wrapper.get('[data-test="members"]').element.childElementCount).toBe(2)
  })

  it('renders properly', () => {
    const wrapper = mount(Members, {
      props: {
        members: [
          {
            id: 0,
            image: 'image1',
            name: 'name 1',
            position: 'test position',
          },
          {
            id: 1,
            image: 'https://picsum.photos/100/100',
            name: 'test 2',
            position: 'test position 2',
          },
        ],
      },
    })

    const members = wrapper.get('[data-test="members"]')
    expect(members.element.childElementCount).toBe(4)
    expect(members.element.children[2].textContent).toContain('name 1')
    expect(members.element.children[2].textContent).toContain('test position')
    expect(members.element.children[3].textContent).toContain('test description 2')
    expect(members.findAll('img')[0].element.src).toBe('http://localhost:3000/image1')
    expect(members.findAll('img')[1].element.src).toBe('https://picsum.photos/100/100')
  })
})
