const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('returns 2', () => {expect(returnTwo()).toBe(2)})

describe('returns Hello, plus name param', () => {
	test('Should be Hello, James.', () => {expect(greeting('James')).toBe('Hello, James.')})
	test('Should be Hello, Jill.', () => {expect(greeting('Jill')).toBe('Hello, Jill.')})
})

describe('testing math', () => {
	test('adds the two numbers', () => {expect(add(1, 2)).toBe(3)})
	test('adds the two numbers', () => {expect(add(5, 9)).toBe(14)})

	test('multiplies the two numbers', () => {expect(multiply(10, 3)).toBe(30)})
	test('multiplies the two numbers', () => {expect(multiply(10, 4)).toBe(40)})

	test('divides the first number by the second', () => {expect(divide(7, 1)).toBe(7)})
	test('divides the first number by the second', () => {expect(divide(6, 10)).toBe(0.6)})

	test('subtracts the second number from the first', () => {expect(subtract(9, 5)).toBe(4)})
	test('subtracts the second number from the first', () => {expect(subtract(5, 4)).toBe(1)})
})