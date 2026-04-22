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

    await expect(title).toHaveText('Over ons')
    await expect(paragraph).toContainText(
      'Ik ben een hobbykweker, met een grote passie voor de Germaanse baardirissen en daglelies (hemerocallis). In de loop van de jaren, heb ik een kleine verzameling opgebouwd. Al de planten worden zelf gekweekt en zonder bestrijdings middelen. Alvast veel kijkplezier gewenst.'
    )
  })

  test('rendert router-link knop', async ({ page }) => {
    const button = page.locator('section.header1 a.btn-pill') // <- aangepast
    await expect(button).toBeVisible()
    await expect(button).toHaveText('Bekijk Aanbod')
    await expect(button).toHaveAttribute('href', '/bloemen') // <- router-link to wordt href in DOM
  })
})
