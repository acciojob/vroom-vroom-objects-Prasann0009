// Complete the js code
function Car(make,model)
{
   this.make = make;
   this.model = model;
}

Car.prototype.getMakeModel = function()
{
    return `${this.make} ${this.model}`;
}

function SportsCar(make,model,topSpeed)
{
    Car.call(this,make,model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property back to SportsCar
SportsCar.prototype.constructor = SportsCar;


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
