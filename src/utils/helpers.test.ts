import { createSlug } from './helpers'

describe('createSlug()', () => {
  test('should result hello-world-hows-it-going', () => {
    const input = "Hello World! How's it going?"
    const expected = 'hello-world-hows-it-going'

    expect(createSlug(input)).toBe(expected)
  })

  test('should result my-collection', () => {
    const input = 'my collection'
    const expected = 'my-collection'

    expect(createSlug(input)).toBe(expected)
  })
})
