
function calculateNetSalary(grossSalary, taxRate, socialInsuranceRate) {
    // Alle Beträge sind in Euro (€)

    // Berechne die Steuern
    const taxes = grossSalary * (taxRate / 100);

    // Berechne die Sozialversicherungsbeiträge
    const socialInsurance = grossSalary * (socialInsuranceRate / 100);

    // Berechne sonstige Abzüge
    const otherDeductions = grossSalary * (otherDeductionsRate / 100);

    // Nettogehalt = Bruttogehalt - Steuern - Sozialversicherungsbeiträge
    const netSalary = grossSalary - taxes - socialInsurance - otherDeductions + Bonus;

    return netSalary;
}

// Beispielaufruf
const grossSalary = 50000; // Bruttogehalt in Euro
const taxRate = 30; // Steuersatz in Prozent
const socialInsuranceRate = 20; // Sozialversicherungsbeitrag in Prozent
const otherDeductionsRate = 5; // Sonstige Abzüge in Prozent
const Bonus = 1000; //Bonuszahlung in Euro

const netSalaryResult = calculateNetSalary(grossSalary, taxRate, socialInsuranceRate, otherDeductionsRate, Bonus);
console.log(`Nettogehalt: €${netSalaryResult.toFixed(2)}`);