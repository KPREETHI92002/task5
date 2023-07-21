const uberCalculator = new UberPriceCalculator(50, 10, 2);
const distance = 7; // in kilometers
const duration = 15; // in minutes
const totalFare = uberCalculator.calculateFare(distance, duration);
console.log(`Uber Price: ${totalFare}`);
