import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import WhyUsComponent from '../components/Home/WhyUsComponent.vue'

describe('WhyUsComponent', () => {
  it('rendert de hoofdsectie', () => {
    const wrapper = mount(WhyUsComponent, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
        },
      },
    })
    const section = wrapper.find('section.header1')
    expect(section.exists()).toBe(true)
  })

  it('toont de juiste titel', () => {
    const wrapper = mount(WhyUsComponent, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
        },
      },
    })
    const title = wrapper.find('h1.mbr-section-title')
    expect(title.text()).toBe('Waarom ons?')
  })

  it('toont de juiste beschrijvingstekst', () => {
    const wrapper = mount(WhyUsComponent, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
        },
      },
    })
    const paragraph = wrapper.find('p.mbr-text')
    expect(paragraph.text()).toContain(
      'Bestel eenvoudig de mooiste bloemen, wij bieden een uitgebreid assortiment aan bloemen voor iedere gelegenheid en elk seizoen.'
    )
  })

  it('rendert de router-link knop', () => {
    const wrapper = mount(WhyUsComponent, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
        },
      },
    })
    const button = wrapper.findComponent(RouterLinkStub)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Bekijk Aanbod')
    expect(button.props('to')).toBe('/bloemen')
  })
})

