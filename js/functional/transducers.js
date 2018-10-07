function appendX(result, x) {
    result.push(x);
    return result;
}
var arr = [1, 2, 3, 4];
transduce(map(x => x + 1), appendX, [], arr);


var numbers = [1, 2, 3, 4];
var transducer = R.compose(R.map(R.add(1)), R.take(2));
R.transduce(transducer,       //=> [1,2] => [2,3]
            R.flip(R.append),  // => [] => [2] => [3]
            [], numbers); //=> [2, 3]

transducer([3,4])

