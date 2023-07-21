class Uber {
  constructor(distanceInKm, ratePerKm) {
    this.distanceInKm = distanceInKm;
    this.ratePerKm = ratePerKm;
  }

  calculatePrice() {
    return this.distanceInKm * this.ratePerKm;
  }
}

// Example
const distance = 10; 
const rate = 1.5; 
const uberTrip = new Uber(distance, rate);
const totalPrice = uberTrip.calculatePrice();
console.log(`The Uber price for a ${distance} km trip is $${totalPrice.toFixed(2)}.`);
