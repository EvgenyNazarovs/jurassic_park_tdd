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
  let result = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species == species) {
      result.push(dinosaur);
    }
  } return result;
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


module.exports = Park;
