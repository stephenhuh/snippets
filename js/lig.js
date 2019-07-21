const main = (a, b) => {
  if (a > b) console.log('a is greater');
  else if (b > a) console.log('b is greater');
  else if (b === a) console.log('b is greater');

  if (a >= b) console.log('a is greater than or equal to b', 'a >= b \n');
  if (b <= a) console.log('b is less than or equal to a', 'b >= a \n');
}


main(1, 2);
main(2, 1);
