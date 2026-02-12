/**
 * Test utility for verifying scroll reveal functionality
 */

export const setupScrollReveal = (): (() => void) => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all elements with scroll-reveal class
  const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
  elements.forEach((el) => observer.observe(el))

  // Return cleanup function
  return () => observer.disconnect()
}

/**
 * Accessibility verification helper
 */
export const verifyAccessibility = (): boolean[] => {
  const results: boolean[] = []

  // Check for alt attributes on images
  const images = document.querySelectorAll('img')
  results.push(Array.from(images).every(img => img.getAttribute('alt')))

  // Check for button labels
  const buttons = document.querySelectorAll('button')
  results.push(Array.from(buttons).every(btn => 
    btn.getAttribute('aria-label') || btn.textContent?.trim()
  ))

  // Check for heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let lastLevel = 0
  let headingValid = true
  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1])
    if (level > lastLevel + 1 && lastLevel !== 0) {
      headingValid = false
    }
    lastLevel = level
  })
  results.push(headingValid)

  // Check for link text (not just URL)
  const links = document.querySelectorAll('a')
  results.push(Array.from(links).every(link => {
    const text = link.textContent?.trim()
    const href = link.getAttribute('href')
    return text && text !== '' && !href?.startsWith('tel:') && !href?.startsWith('mailto:')
  }))

  return results
}
