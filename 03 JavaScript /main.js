
// Let's do some math

class Calculator {
  last_result;

  sum(n1, n2) {
    return n1 + n2;
  }

  sub(n1, n2) {
    return n1 - n2;
  }

  mul(n1, n2) {
    return n1 * n2;
  }

  div(n1, n2) {
    return n1 / n2;
  }

}

const calculator = new Calculator();

console.log(
  'Sum: ',
  calculator.sum(3, 4)
);

console.log(
  'Sub: ',
  calculator.sub(3, 4)
);

console.log(
  'Mul: ',
  calculator.mul(3, 4)
);

console.log(
  'Div: ',
  calculator.div(3, 4)
);