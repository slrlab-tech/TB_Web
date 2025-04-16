import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Carousel from '../Carousel.vue'

describe('Carousel', () => {
  it('renders empty properly', () => {
    const wrapper = mount(Carousel, { props: {} })
    expect(wrapper.element.childElementCount).toBe(2)
  })

  it('renders list properly', () => {
    const wrapper = mount(Carousel, {
      props: {
        items: [
          { image: 'test', alt: 'logo 1' },
          { image: 'https://picsum.photos/200/100', alt: 'logo 2' },
          { image: 'no alt' },
        ],
      },
    })

    const carousel = wrapper.get('[data-test="carousel"]')

    expect(carousel.element.childElementCount).toBe(3)
    expect(carousel.findAll('img')[0].element.src).toBe('http://localhost:3000/test')
    expect(carousel.findAll('img')[0].element.alt).toBe('logo 1')
    expect(carousel.findAll('img')[1].element.src).toBe('https://picsum.photos/200/100')
    expect(carousel.findAll('img')[2].element.alt).toBe('logo')
  })
})
