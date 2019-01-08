const assert = require('assert')
const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')

describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(25, true);
  });

  it('should have sqm', function () {
    const actual = room.sqm;
    assert.strictEqual(actual, 25);
  });

  it('should be painted', function (){
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

});

describe('Paint', function(){

  let paint;

  beforeEach(function(){
    paint = new Paint(25, true);
  });

  it('should have an amount ot litres', function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 25);
  });

  it('should check if it is empty', function(){
    const actual = paint.content;
    assert.strictEqual(actual, true);

  });

  it('should be able to remove litres', function () {
      const actual = paint.removePaint;
      assert.strictEqual(actual, 0);
    });


});
