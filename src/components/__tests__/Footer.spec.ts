import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

describe('Empty Footer', () => {
  it('renders properly', () => {
    const wrapper = mount(Footer, { props: {} })
    expect(wrapper.element.children[0].children[0].innerHTML).toBe('Contact Us')
    expect(wrapper.element.children[0].children[1].childElementCount).toBe(0)

    expect(wrapper.element.children[2].children[0].innerHTML).toContain('Terms and Conditions')
  })
})
