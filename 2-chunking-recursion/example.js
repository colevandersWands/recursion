// stepping through recursive calls one at a time
/*  to step through recursion requires trusting recursion
  think back to the fait-cases from last time
  stepping through recursion is very different from other step-throughs
    you cannot step through everything in detail!
  a step-through must include trust of the recursive call
  to think about and debug your code 
    you must focus locally on the current execution frame only
  trust the recursion!
  don't try imagining all recursive calls down to the base


*/

{ console.log('--- name of exercise ---')

console.log('--- og code ---')
  // given

  /*
    {n | n is a whole number > 0}
    r(n) === n                :: if (n === 1)
    r(n) === r(n-1) + r(n-1)  :: if (n > 1)
  */

  function r(n) {
    if (n === 1) {
      return n
    } else {
      return r(n-1) + r(n-1)
    }
  }

console.log('--- test cases ---')

  const test_cases = [
      {name: '1', args: [1], expected: 1},
      {name: '2', args: [2], expected: 2},
      {name: '3', args: [3], expected: 4},
      {name: '4', args: [4], expected: 8},
      {name: '5', args: [5], expected: 16},
      {name: '6', args: [6], expected: 32},
      {name: '7', args: [7], expected: 64},
      {name: '8', args: [8], expected: 128},
    ];
  run_tests(r, test_cases)


console.log('--- expand solution ---');
  // expand like normal

  function pand(n) {
    const condition = n === 1
    if (condition) {
      return n
    } else {
      let result; { // pand(n-1) + pand(n-1)
        const step_1 = n - 1;
        const step_2 = pand(step_1);
        const step_3 = pand(step_1);
        const step_4 = step_2 + step_3;
        result = step_4
      }
      return result;
    }
  }
  run_tests(pand, test_cases)


console.log('--- chunk it for strategy ---');
  // refactor the expansion to show the 4 components

  function chunk(n) {
    const is_base = n === 1
    if (is_base) {
      const turnt = n;
      return turnt;
    } else {
      const broke_n = n - 1;
      const rec_r = chunk(broke_n);
      const rec_l = chunk(broke_n);
      const built = rec_l + rec_r;
      return built;
    }
  }
  run_tests(chunked, test_cases)



// testing utils
function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n` + 
          `   actual: {${typeof actual}, ${actual}} \n` +
          `   expected: {${typeof expected}, ${expected}}`);
    };
  };
};

}