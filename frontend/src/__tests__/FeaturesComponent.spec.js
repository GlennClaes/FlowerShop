import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeaturesComponent from '../components/Home/FeaturesComponent.vue'

describe('FeaturesComponent', () => {
  it('rendert de hoofdsectie', () => {
    const wrapper = mount(FeaturesComponent)

    const section = wrapper.find('section#features034-1i')
    expect(section.exists()).toBe(true)
  })

  it('rendert exact drie voordelen', () => {
    const wrapper = mount(FeaturesComponent)

    const items = wrapper.findAll('.item.features-without-image')
    expect(items.length).toBe(3)
  })

  it('toont de juiste voordeel-teksten', () => {
    const wrapper = mount(FeaturesComponent)

    const titles = wrapper.findAll('.card-title')

    expect(titles[0].text()).toBe('Dit is voordeel 1.')
    expect(titles[1].text()).toBe('Dit is voordeel 2.')
    expect(titles[2].text()).toBe('Dit is voordeel 3.')
  })

  it('rendert de juiste icon classes', () => {
    const wrapper = mount(FeaturesComponent)

    const icons = wrapper.findAll('.mbr-iconfont')

    expect(icons[0].classes()).toContain('mbrib-pin')
    expect(icons[1].classes()).toContain('mbrib-help')
    expect(icons[2].classes()).toContain('mbrib-gift')
  })

  it('eerste item heeft de active class', () => {
    const wrapper = mount(FeaturesComponent)

    const activeItem = wrapper.find('.item.active')
    expect(activeItem.exists()).toBe(true)
  })
})
