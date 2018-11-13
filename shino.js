/**
 *function to find common factors
 *
 * @param x
 * @param y
 * @returns {*}
 */
exports.factors = function find(x, y) {
    let str = 1;

    if (x < 1 || y < 1 || y === undefined) {
        return "Error";
    }
    for (let i = 2; i <= Math.min(x, y); i++) {
        if (x % i === 0 && y % i === 0) {
            str = `${str} , ${i}`;
        }
    }

    return str;
};













