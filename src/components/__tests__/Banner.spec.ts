import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Banner from '../Banner.vue'

describe('Banner', () => {
  it('renders properly', () => {
    const wrapper = mount(Banner, { props: { title: 'Test' } })
    expect(wrapper.text()).toContain('Test')
  })
})
