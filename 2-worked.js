{
console.log('--- name of challenge ---');
  // description
  // addition with recursion

  // specs

  const test_cases = [
    {name: 'mattress', args: ['mattress'], expected: 'sserttam'},
    {name: 'mattresses', args: ['mattresses'], expected: 'sesserttam'},
    {name: 'toad', args: ['toad'], expected: 'daot'},
    {name: 'toadz', args: ['toadz'], expected: 'zdaot'},
    {name: 'racecar', args: ['racecar'], expected: 'racecar'},
  ];

console.log('--- manually recurse ---');


/*
  break down:   split the string in two pieces
  base case:    single letter or empty string
  turn around:  no change, return string as-is
  build up:     recombine recursion return values in reverse order
*/

/*        
  |--  break down  --|- base -|- turn -|--  build up  --|
              m   m
          ma            am
              a   a
      matt                ttam
              t   t
          tt            tt
              t   t
  mattress                      sserttam
              r   r
          re            er
              e   e
      ress                sser
              s   s
          ss            ss
              s   s
*/

/*
  |--  break down  --|- base -|- turn -|--  build up  --|
              r   r
          ra            ar
              a   a
      race                ecar
              c   c
          ce            ec
              e   e
  racecar                     racecar
              c   c
          ca            ac
              a   a
      car                 rac
              r   r
          r             r
              ''    ''
*/

/*        
  |--  break down  --|-- base -|- turn -|--  build up  --|
              t
          to        am
              o
      toa             ttam
              
          a     a   tt
              
  toadz                 sserttam
              
          d     d   er
              
      dz            sser
              
          z     z   ss
              
*/    


console.log('--- build break-down chunk ---');

  const break_down_tests = [
    {name: 'arr', args: ['arr'], expected: ['ar', 'r']},
    {name: 'arrg', args: ['arrg'], expected: ['ar', 'rg']},
    {name: ' -- ', args: [' -- '], expected: [' -', '- ']},
    {name: 'toadz', args: ['toadz'], expected: ['toa', 'dz']},
  ];
  function break_down(str) {
    const middle = Math.ceil(str.length / 2);
    const left = str.slice(0, middle);
    const right = str.slice(middle);
    return [left, right]
  };
  // run_tests(break_down, break_down_tests)

console.log('--- build base_case/turn_around (n) ---');
  
  const base_tests = [
    {name: 'e', args: ['e'], expected: true},
    {name: '', args: [''], expected: true},
    {name: 'ee', args: ['ee'], expected: false},
    {name: 'eee', args: ['eee'], expected: false}
  ];
  function base_case(str) {
    if (str.length === 1 || str.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  // run_tests(base_case, base_tests)

  const turn_around_tests = [
    {name: 'e', args: ['e'], expected: 'e'},
    {name: '4', args: ['4'], expected: '4'},
  ]
  function turn_around(arg) {
    return arg;
  };
  // run_tests(turn_around, turn_around_tests)

console.log('--- build build-up chunk ---');

  const build_tests = [
    {name: 'f, e', args: ['f','e'], expected: 'ef'},
    {name: ' , e', args: ['','e'], expected: 'e'},
    {name: 'e, ', args: ['e',''], expected: 'e'},
    {name: 'ee, ff', args: ['ee','ff'], expected: 'ffee'}
  ];
  function build(first, second) {
    return second + first;
  };
  // run_tests(build, build_tests)

console.log('--- unit-testable ---');

  function m_r(a, b) {
    if (base_case(b)) {
      return turn_around(a);
    } else {
      const next_b = break_down(b);
      const recursed = m_r(a, next_b)
      return build_up(a, recursed);
    }
  };
  run_tests(m_r, test_cases);


console.log('--- final refactor ---');

  function reverse_recurse(str) {
    if (base_case(str)) {
      return turn_around(str);
    } else {
      const split_str_arr = break_down(str);
      const recursed_left = reverse_recurse(split_str_arr[0]);
      const recursed_right = reverse_recurse(split_str_arr[1]);
      return build(recursed_left, recursed_right);
    }
  };
  // run_tests(reverse_recurse, test_cases)

console.log('--- dummy recursion ---');
// for testing extra trickies

  function m_r(a, b) {
    if (base_case(b)) {
      return turn_around(a);
    } else {
      const next_b = break_down(b);
      const recursed = m_r(a, next_b)
      return build_up(a, recursed);
    }
  };
  run_tests(m_r, test_cases);


console.log('--- manual return values ---');
// manually apply breakdown & buildup until you are calling your function with base cases only
 
  { console.log('3 * 4 step-through')
    const expected = 12;
    const steps = {};
    steps.step_1 = m_r(3, 4);
    steps.step_2 = 3 + m_r(3, 3);
    steps.step_3 = 3 + 3 + m_r(3, 2);
    steps.step_4 = 3 + 3 + 3 + m_r(3, 1);
    steps.step_5 = 3 + 3 + (3 + 3);
    steps.step_6 = 3 + (3 + 6);
    steps.step_7 = (3 + 9);
    steps.step_8 = 12;
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(step);
      };
    };
  }

console.log('--- log solution ---');

  test_cases.push({name: 'racedcar', args: ['racedcar'], expected: 'racecar'})
  test_cases.push({name: 'timbukti', args: ['tinbukti'], expected: 'itkubmit'})

  function reverse_recurse_logged(str, _log) {

    if (base_case(str)) {
      if (_log) {
        const turn_log = {};
        const turnt = turn_around(str);
        turn_log.log = { arg: str, result: turnt }
        turn_log.result = turnt;
        return turn_log
      } else {
        return turn_around(str);
      }
    } else {
      if (_log) {
        const recurse_log = {'- arg': str};

        // break down
        const split_str_arr = break_down(str);
        recurse_log['1 break-down'] = split_str_arr;

        // recurse
        const recursed_left = reverse_recurse_logged(split_str_arr[0], _log);
        recurse_log['2 left rec'] = recursed_left.log;
        const recursed_right = reverse_recurse_logged(split_str_arr[1], _log);
        recurse_log['3 right rec'] = recursed_right.log;

        // build up
        const left_result = recursed_left.result
        const right_result = recursed_right.result
        const built = build(left_result, right_result);
        recurse_log['4 build'] = {
          '0 left res': left_result,
          '1 right res': right_result,
          '2 built': built
        }

        recurse_log['- result'] = built;
        return {result: built, log: recurse_log};
      } else {
        const split_str_arr = break_down(str);
        const recursed_left = reverse_recurse(split_str_arr[0]);
        const recursed_right = reverse_recurse(split_str_arr[1]);
        return build(recursed_left, recursed_right);
      }
    }
  };
  let inspect_log = reverse_recurse_logged('berrets', true)
  run_tests(reverse_recurse_logged, test_cases, true)





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
