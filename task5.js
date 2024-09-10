function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === false || typeof livingCost !== 'number') {
        return 'invalid input'
    }

    // calculate income
    let totalIncome = 0;
    for (const payment of arr) {
        
        if (payment >= 3000) {
            let tax = payment * 0.2;
            totalIncome += payment  -tax
        }
        else{
            totalIncome += payment
        }
        
    }

    let savings = totalIncome -livingCost;

    return savings>=0 ? savings : 'earn more'
    
}
console.log(monthlySavings([1000, 2000, 2500], 5000));
