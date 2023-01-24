const stringlength = require('./stringlength');

test("task 1", () => {
    expect(stringlength('dddddddddd')).toBe(10);
})

const reverse = require('./reversestring');

test("task 2", () => {
    expect(reverse('hello')).toBe('olleh');
})

const calculator = require('./calculator');
const cal = new calculator();

describe('calculator', () => {
    test('adding', () => {
        expect(cal.add(4,2)).toBe(6);
    })
    test('subtracting', () => {
        expect(cal.subtract(3,2)).toBe(1);
    })
    test('multiplying', () => {
        expect(cal.multiply(2,2)).toBe(4);
    })
})

const capitalize = require('./capitalize');

test('task 4', () => {
    expect(capitalize('okay')).toBe('Okay');
})