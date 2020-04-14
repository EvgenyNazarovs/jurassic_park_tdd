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

module.exports = Park;
