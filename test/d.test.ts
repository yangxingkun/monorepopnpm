import {test, expect} from 'vitest'
import {isEmail} from '@serescnn/pkgd'

test('1 is not email', () => {
	expect(isEmail('1')).toBe(false)
})

test('abc@qq.com is email', () => {
	expect(isEmail('abc@qq.com')).toBe(true)
})
test('123@qq.com is emial', () => {
	expect(isEmail('123@qq.com')).toBe(true)
})
