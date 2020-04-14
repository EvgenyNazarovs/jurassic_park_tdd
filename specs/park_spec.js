const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic', 10);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('indominus rex', 'carnivore', 45);
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 105);
    dinosaur4 = new Dinosaur('indominus rex', 'carnivore', 80);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.equal(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs[0];
    assert.equal(actual, dinosaur2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.most_visited_dinosaur();
    assert.equal(actual, dinosaur3);
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
