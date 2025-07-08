import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ImageScroller from '../ImageScroller.vue'

describe('ImageScroller', () => {
  it('renders empty properly', () => {
    const wrapper = mount(ImageScroller, { props: { items: [] } })
    expect(wrapper.element.children[0].childElementCount).toBe(2)
  })

  it('renders list properly', () => {
    const wrapper = mount(ImageScroller, {
      props: {
        items: [
          { path: 'test', name: 'logo 1' },
          { path: 'https://picsum.photos/200/100', name: 'logo 2' },
          { path: 'no alt' },
        ],
      },
    })

    const scroller = wrapper.get('[data-test="scroller"]')

    expect(scroller.element.childElementCount).toBe(3)
    expect(scroller.findAll('img')[0].element.src).toContain('src/assets/test')
    expect(scroller.findAll('img')[0].element.alt).toBe('logo 1')
    expect(scroller.findAll('img')[1].element.src).toBe('https://picsum.photos/200/100')
    expect(scroller.findAll('img')[2].element.alt).toBe('logo')
  })
})
