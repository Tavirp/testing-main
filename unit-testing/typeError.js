const zahl = 1024;

try {
  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.error('Fehler beim Ausführen der map-Methode:', error.message);
} finally {
  console.log('Ausführung abgeschlossen.');
}