import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Carousel from '../Carousel.vue'

describe('Empty Carousel', () => {
  it('renders properly', () => {
    const wrapper = mount(Carousel, { props: {} })
    expect(wrapper.element.childElementCount).toBe(2)
  })
})

describe('Carousel', () => {
  it('renders properly', () => {
    const wrapper = mount(Carousel, {
      props: {
        items: [
          { image: 'test', alt: 'logo 1' },
          { image: 'https://picsum.photos/200/100', alt: 'logo 2' },
          { image: 'no alt' },
        ],
      },
    })
    expect(wrapper.element.childElementCount).toBe(2)
    expect(wrapper.element.children[0].childElementCount).toBe(3)
    expect(wrapper.element.children[0].children[0].children[0].src).toBe(
      'http://localhost:3000/test',
    )
    expect(wrapper.element.children[0].children[1].children[0].src).toBe(
      'https://picsum.photos/200/100',
    )
    expect(wrapper.element.children[0].children[2].children[0].alt).toBe('logo')
  })
})
