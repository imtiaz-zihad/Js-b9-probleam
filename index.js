function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'give valid amount'
    }
    
    return ticketSale * 120 - (500 +8 *50);
}
const ticketSale = calculateMoney('h');
console.log(ticketSale);
