const f = (strings, ...values) => {
  console.log(strings);
  console.log('here are the tagged args', values);
  return strings.join('');
}
const here = 'your home';

const subFunction = (adder) => {
  adder = adder || 9;
  return 3 + 4 + adder;
}

const highlight = (strings, ...values) => {
  let str = '';
  strings.forEach((string, i) => {
    console.log('hi', string, i);
    if (string === '') return;
    str += `${string} <span class="h1">${values[i] || ''}</span>`;
  })
  return str;
}

const regular = f`Hello my name is xxx, I'm a computer \n, what happens now? Can I substitute in ${here}? ${subFunction(5)}times`;

const stuff = `THIS IS A WARNING TO BE HIGHLIGHTED`;

const toHighlight = highlight`Hello my name is e to the double d i e${stuff}`;

console.log(regular);
console.log(toHighlight);
const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence)


