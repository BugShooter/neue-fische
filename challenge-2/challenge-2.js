export function maskCreditCard(creditCardNumber) {
    const l = creditCardNumber.length;
    if (creditCardNumber && l <= 4) return creditCardNumber;
    return creditCardNumber.substring(l-4).padStart(l, '#');
}