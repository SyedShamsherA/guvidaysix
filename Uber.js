class UberPrice{
    constructor(baseFare, costPerMinute, costPerMile, bookingFee){
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    //calculate time 
    calculatePrice(distance , time){
        const fareFromDistance = distance* this.costPerMile;
        const fareFromTime = time * this.costPerMinute;

        const total = this.baseFare + fareFromDistance + fareFromTime + this.bookingFee;
        return total;
    }
}

const Price = new priceCalculator(5, 0.5, 1.5, 2.5);
const distanceInMinutes= 10;
const timeInMinutes = 20;

const total = Price.calculatePrice(distanceInMinutes, timeInMinutes);
console.log(total)