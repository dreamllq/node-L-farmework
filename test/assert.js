/**
 * Created by lvlq on 16/4/1.
 */
const assert = require('assert');

if (assert.deepEqual({a: 1}, {a: 1})) {
    console.log(1);
} else {
    console.log(2);
}
// assert.deepStrictEqual({a: 1}, {a: '1'});
assert.equal(1, '2');
console.log(assert.deepEqual({a: 1}, {a: 1}));