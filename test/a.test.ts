import { test, expect } from 'vitest'
import { isEven } from '@serescnn/pkga'

test('1 is not even', () => {
  expect(isEven(1)).toBe(false)
})
