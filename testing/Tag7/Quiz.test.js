
const { isRightSolutionForQuestion } = require('./Quiz');


// Testfall 1: Ungültiger Frage-Key (deckt Zeile 34 ab)
it('should throw an error for invalid question keys', () => {
  expect(() => isRightSolutionForQuestion('invalid_key', 'Antwort')).toThrow(ReferenceError);
});

// Testfall 2: Ungültiger Antworttyp (deckt die Zeilen 35 + 36 ab)
it('should throw an error if answer is not a string', () => {
  expect(() => isRightSolutionForQuestion('frage_1', 42)).toThrow(TypeError);
});

// Testfall 3: Richtige Antwort (deckt die Zeilen 38 + 39 ab)
describe('isRightSolutionForQuestion', () => {
  it('should return true for correct answers', () => {
    expect(isRightSolutionForQuestion('frage_1', 'Weil er immer kalt gelötet ist.')).toBe(true);
    expect(isRightSolutionForQuestion('frage_2', 'Weil sie sich ständig im Code verheddern.')).toBe(true);
    expect(isRightSolutionForQuestion('frage_3', 'Weil er einen Virus hatte.')).toBe(true);
    expect(isRightSolutionForQuestion('frage_4', 'Logout.')).toBe(true);
    expect(isRightSolutionForQuestion('frage_5', 'Sie hatte zu viele Back-End-Probleme.')).toBe(true);
  });

  // Testfall 4: Falsche Antwort (deckt die Zeilen 40 + 41 ab)
  it('should return false for incorrect answers', () => {
    expect(isRightSolutionForQuestion('frage_1', 'Falsche Antwort')).toBe(false);
    expect(isRightSolutionForQuestion('frage_2', 'Falsche Antwort')).toBe(false);
    expect(isRightSolutionForQuestion('frage_3', 'Falsche Antwort')).toBe(false);
    expect(isRightSolutionForQuestion('frage_4', 'Falsche Antwort')).toBe(false);
    expect(isRightSolutionForQuestion('frage_5', 'Falsche Antwort')).toBe(false);
  });
});








// Das Folgende war mein erster Ansatz zum Lösen der Aufgabe, besser gar nicht anschauen. :-P

// Ich schätze mir fehlt noch der Durchblick für das "Große-Ganze". Keine Ahnung, warum ich
// (Chat-GPT :-P) auf die Idee kam, dass man das mit "try + catch" lösen sollte.^^'




// try {
//   isRightSolutionForQuestion('ungueltiger_key', 'Beliebige Antwort');
//   console.error('Testfall 1 sollte einen Fehler auslösen');
// } catch (error) {
//   console.log('Testfall 1:', error.message);
// }


// try {
//   isRightSolutionForQuestion('frage_4', 42);
//   console.error('Testfall 2 sollte einen Fehler auslösen');
// } catch (error) {
//   console.log('Testfall 2:', error.message);
// }


// try {
//     const result1 = isRightSolutionForQuestion('frage_1', 'Weil er immer kalt gelötet ist.');
//     console.assert(result1 === true, 'Testfall 3 erfolgreich');
//   } catch (error) {
//     console.error('Testfall 3:', error.message);
//   }
  

//   try {
//     const result2 = isRightSolutionForQuestion('frage_2', 'Falsche Antwort');
//     console.assert(result2 === false, 'Testfall 4 fehlgeschlagen');
//   } catch (error) {
//     console.error('Testfall 4:', error.message);
//   }