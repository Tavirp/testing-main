
const min = require('./min');

test('min-Funktion gibt den kleineren Wert aus', () => {
    expect(min(5, 10)).toBe(5);
    expect(min(-3, 2)).toBe(-3);
    expect(min(4, 0)).toBe(0);
});


const max = require('./max');

test('max-Funktion gibt den größeren Wert aus', () => {
    expect(max(5, 10)).toBe(10);
    expect(max(-3, 2)).toBe(2);
    expect(max(4, 0)).toBe(4);
});


const min = require('./min');
const max = require('./max');

test('min and max funktionieren zusammen', () => {
    expect(min(5, 10)).toBe(5);
    expect(max(5, 10)).toBe(10);
    expect(min(-3, 2)).toBe(-3);
    expect(max(-3, 2)).toBe(2);
    expect(min(4, 0)).toBe(0);
    expect(max(4, 0)).toBe(4);
});