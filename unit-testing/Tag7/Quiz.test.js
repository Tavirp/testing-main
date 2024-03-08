
const { isRightSolutionForQuestion } = require('./Quiz');

// Testfall 1: Ungültiger Frage-Key (Zeile 34)
try {
  isRightSolutionForQuestion('ungueltiger_key', 'Beliebige Antwort');
  console.error('Testfall 1 sollte einen Fehler auslösen');
} catch (error) {
  console.log('Testfall 1:', error.message);
}

// Testfall 2: Ungültiger Antworttyp (Zeilen 35 + 36)
try {
  isRightSolutionForQuestion('frage_4', 42);
  console.error('Testfall 2 sollte einen Fehler auslösen');
} catch (error) {
  console.log('Testfall 2:', error.message);
}

// Testfall 3: Richtige Antwort (deckt Zeilen 38 + 39 ab)
try {
    const result1 = isRightSolutionForQuestion('frage_1', 'Weil er immer kalt gelötet ist.');
    console.assert(result1 === true, 'Testfall 3 erfolgreich');
  } catch (error) {
    console.error('Testfall 3:', error.message);
  }
  
  // Testfall 4: Falsche Antwort (Zeilen 40 + 41)
  try {
    const result2 = isRightSolutionForQuestion('frage_2', 'Falsche Antwort');
    console.assert(result2 === false, 'Testfall 4 fehlgeschlagen');
  } catch (error) {
    console.error('Testfall 4:', error.message);
  }