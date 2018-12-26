// stepping through recursive calls one at a time
/*
  stepping through recursion is very different from other step-throughs
    you cannot step through everything in detail!
  a step-through must include trust of the recursive call
  you must focus locally on the current execution frame
    trust the code & engine to do it's job

  
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


console.log('--- develop components ---')

  /* identify components
    base-case:    n === 1
    turn-around:  n
    break-down:   n - 1
    build-up:     a + b
  */

  const bc_cases = [
      {name: '1', args: [1], expected: true},
      {name: 'not 1', args: [!1], expected: false},
    ]
  function bc(n) {
    return n === 1;
  };
  run_tests(bc, bc_cases)

  const ta_cases = [
      {name: '1', args: [1], expected: 1},
      {name: 'not 1', args: [!1], expected: false},
    ]
  function ta(n) {
    return n;
  }
  run_tests(ta, ta_cases)

  const bd_cases = [
    {name: '4', args: [4], expected: 3},
    {name: '-4', args: [-4], expected: -5},
    {name: 'true', args: [true], expected: 0},
  ]
  function bd(n) {
    return n - 1;
  };
  run_tests(bd, bd_cases)

  const bu_cases = [
      {name: '2 + 3', args: [2,3], expected: 5},
      {name: '2 + -3', args: [2,-3], expected: -1},
      {name: '-2 + 3', args: [-2,3], expected: 1},
      {name: '-2 + -3', args: [-2,-3], expected: -5},
    ]
  function bu(a, b) {
    return a + b;
  }
  run_tests(bu, bu_cases)

console.log('--- scaffold components ---')

  function scaf(n) {
    const is_base = bc(n);
    if (is_base) {
      const turnt = ta(n);
      return turnt;
    } else {
      const broke_n = bd(n);
      const rec_l = scaf(broke_n);
      const rec_r = scaf(broke_n);
      const built = bu(rec_l, rec_r);
      return built;
    }
  }
  run_tests(scaf, test_cases)

console.log('--- compose components ---')
  // should be demoed in multiple steps?

  function compo(n) {
    if (bc(n)) {
      return ta(n)
    } else {
      return bu( compo(bd(n)), compo(bd(n)) )
    }
  }
  run_tests(compo, test_cases)


console.log('--- rewrite formal definition ---')
  /* 
    for all whole numbers greater than 0
    r(n) === ta(n)                   :: bc(n)
    r(n) === bu(r(bd(n)), r(bd(n)))  :: !bc(n)
  */

console.log('--- es6-ify ---')
  // will look effectively the same for all problems

  const es6 = (n) => bc(n) ? ta(n) : bu(es6(bd(n)), es6(bd(n)));
  run_tests(es6, test_cases)



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