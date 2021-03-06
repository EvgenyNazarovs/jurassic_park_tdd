const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];

}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i] === dinosaur) {
      this.dinosaurs.splice(i, 1);
    }
  }
}

Park.prototype.mostVisitedDinosaur = function() {
  let numberOfVisitors = 0;
  let result;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > numberOfVisitors) {
      numberOfVisitors = dinosaur.guestsAttractedPerDay;
      result = dinosaur;
    }
  } return result;
}

Park.prototype.dinosaursBySpecies = function(species) {
  let result = this.dinosaurs.filter(dinosaur => dinosaur.species === species);
  return result;
}

Park.prototype.numberOfVisitorsPerDay = function() {
  let result = 0;
  for (dinosaur of this.dinosaurs) {
    result += dinosaur.guestsAttractedPerDay;
  }
  return result;
}

Park.prototype.numberOfVisitorsAnnual = function() {
  let dailyNumber = this.numberOfVisitorsPerDay();
  let result = (dailyNumber * 365);
  return result;
}

Park.prototype.annualRevenue = function() {
  let annualVisitors = this.numberOfVisitorsAnnual();
  let result = (annualVisitors * this.ticketPrice);
  return result;
}

Park.prototype.removeDinosaursBySpecies = function(species) {
  this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species !== species)
}

Park.prototype.dietCount = function() {
  let object = new Object;
  for (dinosaur of this.dinosaurs) {
    if (object.hasOwnProperty(dinosaur.diet)) {
      object[dinosaur.diet] += 1
    } else {
      object[dinosaur.diet] = 1
    }
  } return object
}




module.exports = Park;
