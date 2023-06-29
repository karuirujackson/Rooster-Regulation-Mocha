const assert = require('assert');
const Rooster = require('../index');
const { describe, it } = require('mocha');

describe('Rooster', () =>{
    describe('.announceDawn', () =>{
        it('returns a rooster call', () =>{
            //Setup
            const expected = 'cock-a-doodle-doo';

            //Exercise
            const rosterAnnounceActual = Rooster.announceDawn();

            //Verify
            assert.equal(expected, rosterAnnounceActual);
        });
    });
    describe('.timeAtDawn', () =>{
        it('returns its argument as a string', () =>{
            //Setup
            const inputTime = 15;
            const expected = inputTime.toString();
            
            //Exercise
            const dawnTimeActual = Rooster.timeAtDawn(inputTime);
            
            //Verify
            assert.strictEqual(expected, dawnTimeActual);
        });
        it('throws an error if passed a number less than 0', () =>{
            //Setup
            const inputHourNumber = -5;
            const expected = RangeError;

            //Exercise and Verify
            assert.throws(() =>{
                Rooster.timeAtDawn(inputHourNumber);
            }, expected);
        });
        it('throws an error if passed a number greater than 23', () =>{
            //Setup
            const inputHourNumber = 25;
            const expected = RangeError;
      
            //Exercise and //Verify
            assert.throws(() =>{
                Rooster.timeAtDawn(inputHourNumber);
            }, expected)
        });
    });
});