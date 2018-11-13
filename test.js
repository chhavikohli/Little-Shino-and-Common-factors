const assert = require('assert');
const testShino = require('./shino.js');
describe("common factors", function () {
        it("Enter X as 0 Y as integer result should be Error", function () {
            assert.equal(testShino.factors(0, 32), "Error");
        });
        it("Enter X as Integer Y as 0 result should be Error", function () {
            assert.equal(testShino.factors(32, 0), "Error");
        });
        it("Enter X as 1 Y as integer result should be 1", function () {
            assert.equal(testShino.factors(1, 15), "1");
        });
        it("Enter only one argument ", function () {
            assert.equal(testShino.factors(12), "Error");
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.factors(32, 64), '1 , 2 , 4 , 8 , 16 , 32');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.factors(999983, 999979), '1');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.factors(9999834, 9999792), '1 , 2 , 3 , 6');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.factors(99998349, 99997923), '1 , 3');
        });



    }
)