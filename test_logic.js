const assert = require('assert');
/*const testShino = require('./shino.js');*/
const testShino = require('./shino_logic.js');

describe("common factors", function () {
        it("Enter X as 0 Y as integer result should be Error", function () {
            assert.equal(testShino.dd(0, 32), "Error");
        });
        it("Enter X as Integer Y as 0 result should be Error", function () {
            assert.equal(testShino.dd(32, 0), "Error");
        });
        it("Enter X as 1 Y as integer result should be 1", function () {
            assert.equal(testShino.dd(1, 15), "1");
        });
        it("Enter only one argument ", function () {
            assert.equal(testShino.dd(12), "Error");
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(32, 64), '1 , 2 , 4 , 8 , 16 , 32');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(999983, 999979), '1');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(9999834, 9999792), '1 , 2 , 3 , 6');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(99998349, 99997923), '1 , 3');
        });

        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(9999834652, 9999792722), '1');
        });

        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(723211047202, 426262703497), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(16476190629, 54433933447), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(962623690081, 917861648772), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(540024979445, 116602436426), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(250877914575, 260158260522), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(962623690081, 962623690081), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(250877914575, 250877914575), '21323');
        });
        it("Enter X as integer Y as integer result should be list of all common factors", function () {
            assert.equal(testShino.dd(540024979445, 116602436426), '21323');
        });
    }
)