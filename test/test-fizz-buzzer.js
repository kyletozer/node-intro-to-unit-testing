const expect = require('chai').expect;
const fizzbuzz = require('../fizzBuzzer');

describe('fizzbuzz', function() {

  it('should return a number or string depending on the number passed to it', function() {
    expect(fizzbuzz(1)).to.equal(1);
    expect(fizzbuzz(3)).to.equal('fizz');
    expect(fizzbuzz(5)).to.equal('buzz');
    expect(fizzbuzz(15)).to.equal('fizz-buzz');
  });

  it('should throw an error if passed an input other than a number', function() {
    expect(function() {
      fizzbuzz(true);
      fizzbuzz({});
      fizzbuzz();
    }).to.throw(Error);
  });
});
