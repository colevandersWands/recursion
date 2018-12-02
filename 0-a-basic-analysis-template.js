/* https://www.researchgate.net/profile/J_Angel_Velazquez-Iturbide/publication/221536738_Recursion_in_gradual_steps_Is_recursion_really_that_difficult/links/0c96052322b44dd4db000000.pdf
mathematical induction
  ? https://www.researchgate.net/profile/Isidoro_Hernan-Losada/publication/220807105_Exploring_recursion_with_fibonacci_numbers/links/0c960532adc571f155000000/Exploring-recursion-with-fibonacci-numbers.pdf
* or only symbolic, like the paper?
  https://www.khanacademy.org/math/algebra/sequences/constructing-arithmetic-sequences/v/recursive-formula-for-arithmetic-sequence
    here sequences go from base to final
    in coding it's the other way around
    but maybe this is a better way to learn/think about it?
    just the first couple

*/

{ // hella killer exercise.  find some for strings too
  // could help to learn trust & local focus
  // syntax should only mean rules: find non-confounding notation
    // next step adds on js-meaning to syntax
    // or use js syntax with functions not yet coded?
      // below is test cases, uncomment them and your function should pass cleanly
  // shows the strategically parallel thinking, distinguishing from iteration\
  // f(n) is defined as it's return value
    // now go through and replace everything you can until you've only prims & ops
    // then collapse according to build-up operator & sequence (parenthesis)
  
  /* steps - the page is now in (current) order
      convert definition to function
      identify the key players
      star destroyer a few solutions
        the template
        add them to the function
      write full test cases
  */

// ----- initial study -------

  /*  (given)
    | n is a whole number > 0
    | f(n) === 1                :: if (n === 1)
    | f(n) === f(n-1) + f(n-1)  :: if (n > 1)
  */
  /*  (fill this in)
    recurse:      f(n-1) + f(n-1)
    build-up:     +
    break-down:   -
    base-case:    1
    turn-around:  identity
    allowed set:  whole number > 0
  */

// -------- work it manually, building your 'faith cases' -----

/* - faith cases -
  f(4) === 8
  f(5) === 16
  f(8) === 128
*/

  /* b-d  -| t-a -| b-u
          1      1
        2           2
          1      1
      3               4
          1      1
        2           2
          1      1  
    4                   8
          1      1
        2           2
          1      1
      3               4
          1      1
        2           2
          1      1
  */

  /* b-d | fth | b-u 
        4    8  
      5         16
        4    8
  */


/*    b-d -| fth -| b-u     ---|
          5     16
        6           32
          5     16
      7                 64
          5     16
        6           32
          5     16
    8                       128
          5     16
        6           32
          5     16
      7                 64
          5     16
        6           32
          5     16
*/



// -------- code the thing above, 'proofs' ----------

  function f(n) {
    if (n === 1) {
      return 1
    } else {
      return f(n-1) + f(n-1) 
    }
  }


  const test_cases = [
    {name: '4', args: [4], expected: 8},
    {name: '5', args: [5], expected: 16},
    {name: '8', args: [8], expected: 128},
  ]
  run_tests(f, test_cases);


  { // write these test cases first, then write the function
    const four = {};
    four.step_0 = f(4) === f(4)
    four.step_1 = f(4) === f(3) + f(3);
    four.step_2 = f(4) === (f(2) + f(2)) + (f(2) + f(2));
    four.step_3 = f(4) === ((f(1) + f(1)) + (f(1) + f(1))) + ((f(1) + f(1)) + (f(1) + f(1)));
    four.step_4 = f(4) === ((1 + 1) + (1 + 1)) + ((1 + 1) + (1 + 1));
    four.step_5 = f(4) === (2 + 2) + (2 + 2);
    four.step_6 = f(4) === 4 + 4;
    four.step_7 = f(4) === 8;
    for (let step in four) {
      if (!four[step]) {
        console.log(step);
      };
    };
  }
  { console.log(5)
    const five = {};
    five.step_1 = f(5) === f(5) // step_0 ?
    five.step_2 = f(5) === f(4) + f(4) 
    five.step_3 = f(5) === 8 + 8
    five.step_4 = f(5) === 16
    for (let step in five) {
      if (!five[step]) {
        console.log(step);
      };
    };
  }

  { console.log(8)
    const eight = {};
    eight.step_1 = f(8) === f(8) // step_0 ?
    eight.step_2 = f(8) === (f(7) + f(7))
    eight.step_3 = f(8) === (f(6) + f(6)) + (f(6) + f(6))
    eight.step_4 = f(8) === ((f(5) + f(5)) + (f(5) + f(5))) + ((f(5) + f(5)) + (f(5) + f(5)))
    eight.step_5 = f(8) === ((16 + 16) + (16 + 16)) + ((16 + 16) + (16 + 16))
    eight.step_6 = f(8) === (32 + 32) + (32 + 32)
    eight.step_7 = f(8) === 64 + 64
    eight.step_8 = f(8) === 128
    for (let step in eight) {
      if (!eight[step]) {
        console.log(step);
      };
    };
  }

// ----------- to protect and to serve ---------

  const allowed_tests = [
    {name: '0', args: [0], expected: false},
    {name: '2.5', args: [2.5], expected: false},
    {name: 'e', args: ['e'], expected: false},
    {name: '4', args: [4], expected: true},
    {name: '"3"', args: ["3"], expected: false},
    {name: 'false', args: [false], expected: false}
  ]
  function allowed(_n) { // if it's a
    if (_n % 1 === 0) { // whole 
      if (typeof _n === 'number') { // number 
        if (_n > 0) { // greater than 0
          return true; // proceed 
        }
      }
    }
    return false;
  }
  run_tests(allowed, allowed_tests)

  test_cases.concat([
    {name: '0', args: [0], expected: false},
    {name: '2.5', args: [2.5], expected: false},
    {name: 'e', args: ['e'], expected: false}
  ]);
  function safe_f(n) {
    if (allowed(n)) {
      return f(n);
    } else {
      return false; // or throw()
    }
  }
  run_tests(safe_f, test_cases);



  // testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };

}