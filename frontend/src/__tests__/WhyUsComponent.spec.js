import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderComponent from '../components/Home/WhyUsComponent.vue'

describe('HeaderComponent', () => {
  it('rendert de hoofdsectie', () => {
    const wrapper = mount(HeaderComponent)
    const section = wrapper.find('section.header1')
    expect(section.exists()).toBe(true)
  })

  it('toont de juiste titel', () => {
    const wrapper = mount(HeaderComponent)
    const title = wrapper.find('h1.mbr-section-title')
    expect(title.text()).toBe('Waarom ons?')
  })

  it('toont de juiste beschrijvingstekst', () => {
    const wrapper = mount(HeaderComponent)
    const paragraph = wrapper.find('p.mbr-text')
    expect(paragraph.text()).toContain(
      'Bestel eenvoudig de mooiste bloemen, wij bieden een uitgebreid assortiment aan bloemen voor iedere gelegenheid en elk seizoen.'
    )
  })

  it('rendert de afbeelding correct', () => {
    const wrapper = mount(HeaderComponent)
    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('alt')).toBe('Bloemenhoeve')
    expect(image.attributes('src')).toContain('mbr-816x544.webp')
  })

  it('rendert de router-link knop', () => {
    const wrapper = mount(HeaderComponent)
    const button = wrapper.find('router-link.btn-pill')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Bekijk Aanbod')
    expect(button.attributes('to')).toBe('/bloemen')
  })
})
