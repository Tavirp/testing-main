const calculator = require("./calculator");

describe('Berechnungen mit dem Calculator', () => {
    test("Die Summe von 2 + 5 ist 7", () => {

        // Act
        const result = calculator.sum(2, 5);

        // Assert
        expect(result).toEqual(7);
    });

    test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {

        // Act
        const result = calculator.sum("Apfel", 5);

        // Assert
        expect(result).toEqual("Apfel5");
    });

    test("Der Quotient aus 10 durch 2 ist 5", () => {

        // Act
        const result = calculator.divide(10, 2);

        // Assert
        expect(result).toEqual(5);
    });

    test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {

        // Act
        const result = calculator.divide(10, 3);

        // Assert
        expect(result).toBeCloseTo(3.33, 2);
    });

    test("Positive durch negative Zahl ist kleiner als 0", () => {
   
        // Act
        const result = calculator.divide(10, -2);

        // Assert
        expect(result).toBeLessThan(0);
    });

    test("Negativ durch negative Zahl ist größer als 0", () => {

        // Act
        const result = calculator.divide(-10, -2);

        // Assert
        expect(result).toBeGreaterThan(0);
    });
});

describe('Subtraktion und Multiplikation', () => {
    test('Subtraktion von 5 - 3 sollte 2 ergeben', () => {

        // Act
        const result = calculator.subtract(5, 3);

        // Assert
        expect(result).toBe(2);
    });

    test('Subtraktion von 10 - 7 sollte 3 ergeben', () => {

        // Act
        const result = calculator.subtract(10, 7);

        // Assert
        expect(result).toBe(3);
    });

    test('Subtraktion von 15 - 9 sollte 6 ergeben', () => {

        // Act
        const result = calculator.subtract(15, 9);

        // Assert
        expect(result).toBe(6);
    });

    test('Multiplikation von 4 * 6 sollte 24 ergeben', () => {

        // Act
        const result = calculator.multiply(4, 6);

        // Assert
        expect(result).toBe(24);
    });

    test('Multiplikation von 2 * 8 sollte 16 ergeben', () => {

        // Act
        const result = calculator.multiply(2, 8);

        // Assert
        expect(result).toBe(16);
    });

    test('Multiplikation von 7 * 3 sollte 21 ergeben', () => {

        // Act
        const result = calculator.multiply(7, 3);

        // Assert
        expect(result).toBe(21);
    });
});