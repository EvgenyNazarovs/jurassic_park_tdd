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

Park.prototype.most_visited_dinosaur = function() {
  let numberOfVisitors = 0;
  let result;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > numberOfVisitors) {
      numberOfVisitors = dinosaur.guestsAttractedPerDay;
      result = dinosaur;
    }
  } return result;
}


module.exports = Park;
