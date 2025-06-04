import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Footer from '../App/SiteFooter.vue'

describe('Footer', () => {
  it('renders empty properly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('Contact Us')
    expect(wrapper.text()).toContain('Terms and Conditions')

    const contacts = wrapper.get('[data-test="contacts"]')
    expect(contacts.element.childElementCount).toBe(0)
  })

  it('renders properly', () => {
    const wrapper = mount(Footer, {
      props: {
        data: {
          items: {
            'Phone number': '1234 5678',
            Email: 'abc@test.com',
            Address: '1234 Test St, Test City, Test Country',
          },
        },
      },
    })
    expect(wrapper.text()).toContain('Contact Us')
    expect(wrapper.text()).toContain('Terms and Conditions')

    const contacts = wrapper.get('[data-test="contacts"]')
    expect(contacts.element.children[0].textContent).toBe('Phone number: 1234 5678')
    expect(contacts.element.children[1].textContent).toBe('Email: abc@test.com')
    expect(contacts.element.children[2].textContent).toBe(
      'Address: 1234 Test St, Test City, Test Country',
    )
    expect(contacts.element.childElementCount).toBe(3)
  })
})
