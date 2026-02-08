import { test, expect } from '@playwright/test'

test.describe('FeaturesComponent', () => {
  // Before all tests, navigate once and wait for the section
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait longer for the section to appear (10s)
    const section = page.locator('#features034-1i')
    await expect(section).toBeVisible({ timeout: 10000 })
  })

  test('de voordelen zijn zichtbaar op de pagina', async ({ page }) => {
    const section = page.locator('#features034-1i')
    const items = section.locator('.item.features-without-image')
    await expect(items).toHaveCount(3, { timeout: 10000 })

    await expect(items.nth(0)).toContainText('Dit is voordeel 1.')
    await expect(items.nth(1)).toContainText('Dit is voordeel 2.')
    await expect(items.nth(2)).toContainText('Dit is voordeel 3.')
  })

  test('iconen worden gerenderd', async ({ page }) => {
    const icons = page.locator('#features034-1i .mbr-iconfont')
    await expect(icons).toHaveCount(3, { timeout: 10000 })
  })
})
