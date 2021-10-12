console.log('Bai 3.1')
let x1 = 5

console.log(++x1 + x1++ - --x1 - x1--)//(6+6-6-6)
console.log('------------')
//stack      6    7       6   5
console.log('Bai 3.2');
let x2 = 6
let y = 10

console.log(++y - y++ + x2++ + x2-- - --x2 - --y);//(11-11+6+7-5-11)
//stack     11     12    7     6        5      11 
console.log('------------')
console.log('Bai 3.3')
let x3 = 10
let y3 = 12
let z3 = 16

console.log(x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3 + x3--);//(10+16-10+11-11+11+16+15+10)
//stack      11     15    10      11     10     11      16     15   9
console.log(++x3 - x3++ + z3++ + ++y3 - y3-- );//(10-10+15+12-12)
            //10 - 9    + 15   + 12  - 11
console.log('------------')
console.log('Bai 4')

let text ='Number,String,Array,Boolean,Object'
console.log(text);
console.log('------------')
console.log('Bai 5')

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array[0] + array[1])
console.log(array[0] * array[9])

console.log('------------')
console.log('Bai 6')
let object = {firstName:'Dat',lastName:'Lai'}
console.log(object);

object.firstName = 'Hai'
object['lastName'] = 'Ho'
console.log(object);
console.log('------------')

