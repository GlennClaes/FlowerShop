import { test, expect } from '@playwright/test'

test.describe('FeaturesComponent', () => {
  test('de voordelen zijn zichtbaar op de pagina', async ({ page }) => {
    await page.goto('/')

    const section = page.locator('#features034-1i')
    await expect(section).toBeVisible()

    const items = section.locator('.item.features-without-image')
    await expect(items).toHaveCount(3)

    await expect(items.nth(0)).toContainText('Dit is voordeel 1.')
    await expect(items.nth(1)).toContainText('Dit is voordeel 2.')
    await expect(items.nth(2)).toContainText('Dit is voordeel 3.')
  })

  test('iconen worden gerenderd', async ({ page }) => {
    await page.goto('/')

    const icons = page.locator('#features034-1i .mbr-iconfont')
    await expect(icons).toHaveCount(3)
  })
})
