
const min = require('./min');
const max = require('./max');

describe('min und max Funktionen', () => {
    describe('min-Funktion', () => {
        test('gibt den kleineren Wert aus', () => {
            // Act
            const result1 = min(5, 10);
            const result2 = min(-3, 2);
            const result3 = min(4, 0);

            // Assert
            expect(result1).toBe(5);
            expect(result2).toBe(-3);
            expect(result3).toBe(0);
        });
    });

    describe('max-Funktion', () => {
        test('gibt den größeren Wert aus', () => {
            // Act
            const result1 = max(5, 10);
            const result2 = max(-3, 2);
            const result3 = max(4, 0);
    
            // Assert
            expect(result1).toBe(10);
            expect(result2).toBe(2);
            expect(result3).toBe(4);
        });
    });

    describe('min und max funktionieren zusammen', () => {
        test('min und max geben die erwarteten Werte aus', () => {
            // Act
            const result1 = min(5, 10);
            const result2 = max(5, 10);
            const result3 = min(-3, 2);
            const result4 = max(-3, 2);
            const result5 = min(4, 0);
            const result6 = max(4, 0);

            // Assert
            expect(result1).toBe(5);
            expect(result2).toBe(10);
            expect(result3).toBe(-3);
            expect(result4).toBe(2);
            expect(result5).toBe(0);
            expect(result6).toBe(4);
        });
    });
});