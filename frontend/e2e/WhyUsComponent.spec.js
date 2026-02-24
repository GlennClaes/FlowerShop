import { test, expect } from '@playwright/test'

test.describe('WhyUsComponent E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    const section = page.locator('section.header1')
    await expect(section).toBeVisible({ timeout: 10000 })
  })

  test('toont titel en beschrijving', async ({ page }) => {
    const title = page.locator('section.header1 h1.mbr-section-title')
    const paragraph = page.locator('section.header1 p.mbr-text')

    await expect(title).toHaveText('Waarom ons?')
    await expect(paragraph).toContainText(
      'Bestel eenvoudig de mooiste bloemen, wij bieden een uitgebreid assortiment aan bloemen voor iedere gelegenheid en elk seizoen.'
    )
  })

  test('rendert afbeelding correct', async ({ page }) => {
    const image = page.locator('section.header1 img')
    await expect(image).toBeVisible()
    await expect(image).toHaveAttribute('alt', 'Bloemenhoeve')
    await expect(image.getAttribute('src')).resolves.toContain('mbr-816x544.webp')
  })

  test('rendert router-link knop', async ({ page }) => {
    const button = page.locator('section.header1 a.btn-pill') // <- aangepast
    await expect(button).toBeVisible()
    await expect(button).toHaveText('Bekijk Aanbod')
    await expect(button).toHaveAttribute('href', '/bloemen') // <- router-link to wordt href in DOM
  })
})
