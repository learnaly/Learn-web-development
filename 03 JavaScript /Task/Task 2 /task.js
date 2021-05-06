

// 1. Create a function that takes in 2 arguments: string and another string(1 or more characters).
// Function should take first argument and remove all characters given as second argument from first string, and return the result

// ie.remove('Jooohny Olimp', 'o'); // Returns 'Jhny limp';

function remove(value, toRemove) {
  // Regular expressions basically just match if there's some pattern in a string
  // Here we say is find (g) all occurencies of whatever toRemove characters are (i) in any casing small or big letter
  const regularExpression = new RegExp(toRemove, 'gi');

  // Replace function on a string just replaces whatever it matches (regular expression) as first argument, with whatever second argument is
  // Since our second argument here is empty string, it will just replace toRemove values in with empty strings (remove them by that logic)
  return value.replace(regularExpression, '');
}

console.log(
  remove('Jooohny Olimp', 'o')
);


// 2. Create a function that takes in 1 argument a string, reverses that string, and returns the result.

// ie. reverse('asd'); // Returns 'dsa';

function reverse(value) {
  // Split method splits a string into a list of items, where each item is some character
  const list = value.split('');

  // Reverse method reverses items in the list, last item is now first
  const listReversed = list.reverse();

  // Join method just joins list items back into a string
  return listReversed.join('');
}

console.log(
  reverse('asd')
);
