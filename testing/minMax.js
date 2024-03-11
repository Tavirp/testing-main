
function min(a, b) {
    return a < b ? a : b;
}

function max(a, b) {
    return a > b ? a : b;
}

const zahl1 = 10;
const zahl2 = 20;

const kleinereZahl = min(zahl1, zahl2);
const groessereZahl = max(zahl1, zahl2);

console.log("Die kleinere Zahl ist:", kleinereZahl);
console.log("Die größere Zahl ist:", groessereZahl);


module.exports.min = min;
module.exports.max = max;