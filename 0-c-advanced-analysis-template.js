{ // order ?
console.log('--- name of challenge ---');
  // description
  // addition with recursion

  // specs

console.log('--- test solution ---');

  function mult(a, b) {
    if (b === 1) {
      return a;
    } else {
      return a + mult(a, b - 1);
    }
  };

console.log('--- define solution ---')

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

console.log('--- prove test cases ---')

  const test_cases = [
    {name: '3 * 4', args: [3, 4], expected: 12},
    {name: '4 * 3', args: [4, 3], expected: 12},
    {name: '5 * 4', args: [5, 4], expected: 20},
    {name: '4 * 5', args: [4, 5], expected: 20},
    {name: '1 * 6', args: [1, 6], expected: 6},
    {name: '6 * 1', args: [6, 1], expected: 6}
  ];


  // manually apply breakdown & buildup until you are calling your function with base cases only
  const b = build_up;

  { // console.log('3 * 4 step-through')
    const expected = 12;
    const steps = {};
    steps.step_1 = m_r(3, 4);
    steps.step_2 = 3 + m_r(3, 3);
    steps.step_3 = 3 + 3 + m_r(3, 2);
    steps.step_4 = 3 + 3 + 3 + m_r(3, 1);
    steps.step_5 = 3 + 3 + 3 + 3;
    steps.step_6 = 3 + 3 + b(3, 3);
    steps.step_7 = 3 + b(3, 6);
    steps.step_8 = b(3, 9);
    steps.step_9 = 12;
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(step);
      };
    };
  }


  { // console.log('4 * 3 step-through')
    const expected = 12;
    const steps = {};
    steps.step_1 = m_r(4, 3);
    steps.step_2 = 4 + m_r(4, 2);
    steps.step_3 = 4 + 4 + m_r(4, 1);
    steps.step_3 = 4 + 4 + 4;
    steps.step_4 = 4 + b(4, 4);
    steps.step_5 = b(4, 8);
    steps.step_6 = 12;
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(step);
      };
    };
  }


console.log('--- to protect and to serve ---')

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


console.log('--- break-down chunk ---');

  const break_down_tests = [
    {name: '3', args: [3], expected: 2},
    {name: '4', args: [4], expected: 3},
    {name: '5', args: [5], expected: 4}
  ];
  function break_down(_b) {
    return _b - 1;
  };
  run_tests(break_down, break_down_tests)


console.log('--- recursed chunk ---');

  function mult_recursed(a, b) {
    if (b === 1) {
      return a;
    } else {
      const next_b = break_down(b);
      const recursed = mult_recursed(a, next_b)
      return a + recursed;
    }
  };
  run_tests(mult_recursed, test_cases);  

console.log('--- base-case chunk ---');

  const base_case_tests = [
    {name: '0', args: [0], expected: false},
    {name: '-1', args: [-1], expected: false},
    {name: '1', args: [1], expected: true}
  ];
  function base_case(_b) {
    return _b === 1;
  };
  run_tests(base_case, base_case_tests)


console.log('--- turn-around chunk ---');

  const turn_around_tests = [
    {name: '0', args: [0], expected: 0},
    {name: '-1', args: [-1], expected: -1},
    {name: '1', args: [1], expected: 1}
  ];
  function turn_around(_a) {
    return _a;
  };
  run_tests(turn_around, turn_around_tests)


console.log('--- build-up chunk ---');

  const build_up_tests = [
    {name: '0 + 4', args: [0, 4], expected: 4},
    {name: '-1 + 3', args: [-1, 3], expected: 2},
    {name: '1 + 1', args: [1, 1], expected: 2}
  ];
  function build_up(_a, _recursed) {
    return _a + _recursed;
  };
  run_tests(build_up, build_up_tests)



console.log('--- final refactor ---');

  function m_r(a, b) {
    if (!allowed(a, b))  return throw();
    
    if (base_case(b)) {
      return turn_around(a);
    } else {
      const next_b = break_down(b);
      const recursed = m_r(a, next_b)
      return build_up(a, recursed);
    }
  };
  run_tests(m_r, test_cases);

console.log('--- dummy recursion ---');

  function m_r(a, b) {
    if (!allowed(a, b))  return throw();

    if (base_case(b)) {
      return turn_around(a);
    } else {
      const next_b = break_down(b);
      const recursed = m_r(a, next_b)
      return build_up(a, recursed);
    }
  };
  run_tests(m_r, test_cases);

console.log('--- log solution ---');

  test_cases.push({name: '5 * 4', args: [5, 4], expected: 21})
  test_cases.push({name: '5 * 4', args: [5, 5], expected: 20})
  test_cases.push({name: '4 * 5', args: [4, 5], expected: 20})
  test_cases.push({name: '1 * 6', args: [1, 6], expected: 5})

  function m_r_logged(a, b, _log) {
    if (!allowed(a, b)) {
      if (_log) {
        const err = throw()
        const error_log = {}
        error_log.result = err;
        error_log.log = {
          args: {a, b},
          err
        }
        return error_log
      } else {
        return throw();
      }
    } 

    if (base_case(b)) {
      if (_log) {
        const turnt = turn_around(a);

        const turn_log = {};
        turn_log.log = { args: {a, b}, turned: turnt }
        turn_log.result = turnt;

        return turn_log
      } else {
        return turn_around(a);
      }
    } else {
      if (_log) {
        const recurse_log = {'0 args': {a, b}};
  
        const next_b = break_down(b);
        recurse_log['1 break-down'] = {b, next_b};
  
        const recursed = m_r_logged(a, next_b, _log)
        recurse_log['2 recursed'] = recursed.log;
  
        const built = build_up(a, recursed.result);
        recurse_log['3 build-up'] = built;
  
        return {result: built, log: recurse_log};
      } else {
        const next_b = break_down(b);
        const recursed = m_r(a, next_b)
        return build_up(a, recursed);
      }
    }
  };
  run_tests(m_r_logged, test_cases, true);





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
