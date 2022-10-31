const {returnTwo, greeting, add} = require('./functions')

test('returns 2', () => {expect(returnTwo()).toBe(2)})

test('returns Hello, plus name param', () => {expect(greeting('James')).toBe('Hello, James.')})
test('returns Hello, plus name param', () => {expect(greeting('Jill')).toBe('Hello, Jill.')})

test('adds the two numbers', () => {expect(add(1, 2)).toBe(3)})
test('adds the two numbers', () => {expect(greeting(5, 9)).toBe(14)})

