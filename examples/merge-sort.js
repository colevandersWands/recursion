const test_cases = [
  {name: '9 8 7 6', args: [[9,8,7,6]], expected: [6,7,8,9]},
  {name: '6 8 7 9', args: [[6,8,7,9]], expected: [6,7,8,9]},
  {name: '6 7 8 9', args: [[6,7,8,9]], expected: [6,7,8,9]},
  {name: '9 6 8 7', args: [[9,6,8,7]], expected: [6,7,8,9]},
  {name: '6 7 8 ', args: [[6,7,8]], expected: [6,7,8]},
  {name: '9 6 ', args: [[9,6]], expected: [6,9]},
  {name: '856320474619', args: [[8,5,6,3,2,0,4,7,4,6,1,9]], expected: [0,1,2,3,4,4,5,6,6,7,8,9]}
];

/*            
              5  5
          5,4       4,5
              4  4
  5,4,3,2               2,3,4,5
              3  3
          3,2       2,3
              2  2
*/

/*            break-down  | turn |  build up        

                          5     5 
                     5,3           3,5 
                          3     3  
              5,3,4                     3,4,5
                     4          4  
  5,3,4,1,7,2                                  1,2,3,4,5,7
                          1     1  
                     1,7           1,7 
                          7     7  
              1,7,2                     1,2,7
                     2          2  

*///          break-down  | turn |  build up

console.log('-- break-down tests');

  const break_down_tests = [
    {name: '9 8 7 6', args: [[9,8,7,6]], expected: [[9,8],[7,6]]},
    {name: '6 8 7 9', args: [[6,8,7,9]], expected: [[6,8],[7,9]]},
    {name: '6 7 8 9', args: [[6,7,8,9]], expected: [[6,7],[8,9]]},
    {name: '9 6 8 7', args: [[9,6,8,7]], expected: [[9,6],[8,7]]},
    {name: '6 7 8 ', args: [[6,7,8]], expected: [[6,7],[8]]},
    {name: '9 6 ', args: [[9,6]], expected: [[9],[6]]},
  ];
  function break_down(arr) {
    const middle = Math.ceil(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return [left, right]
  };
  run_tests(break_down, break_down_tests)


console.log('-- base case tests --')

  const base_case_tests = [
    {name: '[]', args: [[]], expected: false},
    {name: '[0]', args: [[0]], expected: true},
    {name: '[1,2]', args: [[1,2]], expected: false},
  ]
  function base_case(arr) {
    return arr.length === 1;
  }
  run_tests(base_case, base_case_tests)


console.log('-- turn around tests --')

  const turn_around_tests = [
    {name: '[]', args: [[]], expected: []},
    {name: '[0]', args: [[0]], expected: [0]},
    {name: '[1,2]', args: [[1,2]], expected: [1,2]},
  ]
  function turn_around(arr) {
    return arr;
  }
  run_tests(turn_around, turn_around_tests)


console.log('-- build up tests --')

  // args's elements will all be in ascending order, because mergesort
  const build_tests = [ 
    {name: '35 26', args: [[3,5], [2,6]], expected: [2,3,5,6]},
    {name: '46 57', args: [[4,6],[5,7]], expected: [4,5,6,7]},
    {name: '12 1', args: [[1,2],[1]], expected: [1,1,2]},
  ]    // can you find a recursive solution?
  function build(arr_1, arr_2) {
    // return arr_1.concat(arr_2).sort()
    const sorted = [];
    let ind_1 = 0;
    let ind_2 = 0;
    while (sorted.length !== (arr_1.length + arr_2.length )) {
      if (ind_1 === arr_1.length) {
        const rest_of_2 = arr_2.slice(ind_2);
        return sorted.concat(rest_of_2);
      } else if (ind_2 === arr_2.length) {
        const rest_of_1 = arr_1.slice(ind_1);
        return sorted.concat(rest_of_1);
      } else {
        if (arr_1[ind_1] < arr_2[ind_2]) {
          sorted.push(arr_1[ind_1]);
          ind_1++;
        } else {
          sorted.push(arr_2[ind_2]);
          ind_2++;
        }
      }
    }
    return 'huh';
  }
  run_tests(build, build_tests)
/*
  [3,5] [2,6] ind1=0 ind2=0 sort=[]
  [3,5] [2,6] ind1=0 ind2=1 sort=[2]
  [3,5] [2,6] ind1=1 ind2=1 sort=[2,3]
  [3,5] [2,6] ind1=2 ind2=1 sort=[2,3,5]
  [3,5] [2,6] ind1=2 ind2=1 sort=[2,3,5,6]
*/

console.log('-- full solution --')  

  function m_s(arr) {
    if (base_case(arr)) {
      return turn_around(arr);
    } else {
      const split_arr = break_down(arr);
      const recursed_left = m_s(split_arr[0]);
      const recursed_right = m_s(split_arr[1]);
      return build(recursed_left, recursed_right);
    }
  };
  run_tests(m_s, test_cases);

console.log('-- full solution --')  

  function m_s_d(arr) {
    if (base_case(arr)) {
      return turn_around(arr);
    } else {
      const split_arr = break_down(arr);
      const recursed_left = dummy(split_arr[0]);
      const recursed_right = dummy(split_arr[1]);
      return build(recursed_left, recursed_right);
    }
  };
  run_tests(m_s_d, test_cases);

  function dummy(arr) {
    return arr.sort();
  }


console.log('--- formal definition ---')

  /* 
    | arr is a n array of numbers
    | f(a) = a                   :: if (a.length === 1)
    | f(a) = b(f(a_l), f(a_r))   :: if (a.length > 1)
    | b := merge a_r & a_l then sort them
  */

console.log('-- manual replacement --');
  const b = build;

  { // [3, 7, 2, 1, 9, 5]
    const expected = JSON.stringify([1,2,3,5,7,9]);
    const steps = {};
  steps.step_1 = m_s([3,7,2,1,9,5]);
  steps.step_2 = b( m_s([3,7,2]), m_s([1,9,5]) );
  steps.step_3 = b( b( m_s([3,7]), m_s([2]) ), b( m_s([1,9]), m_s([5]) ) );
  steps.step_4 = b( b( b(m_s([3]), m_s([7])), m_s([2]) ), b( b( m_s([1]), m_s([9]) ), m_s([5]) ) );
  steps.step_5 = b( b( b( [3],[7] ), [2] ), b( b( [1], [9] ), [5]) );
  steps.step_6 = b( b( [3,7],[2]), b([1,9],[5]) );
  steps.step_7 = b( [2,3,7], [1,5,9] );
  steps.step_8 = [1,2,3,5,7,9];
    for (let step in steps) {
      const actual = JSON.stringify(steps[step]);
      if (actual !== expected) {
        console.log(step, actual);
      };
    };
  }

  { // [9,8,7,6]
    const expected = JSON.stringify([6,7,8,9]);
    const steps = {};
  steps.step_1 = m_s([9,8,7,6]);
  steps.step_2 = b( m_s([9,8]), m_s([7,6]) );
  steps.step_3 = b( b( m_s([9]), m_s([8]) ), b( m_s([7]), m_s([6]) ) );
  steps.step_4 = b( b( [9], [8] ), b( [7], [6] ) );
  steps.step_5 = b( [8,9], [6,7] );
  steps.step_6 = [6,7,8,9];
    for (let step in steps) {
      const actual = JSON.stringify(steps[step]);
      if (actual !== expected) {
        console.log(step, actual);
      };
    };
  }

console.log('-- logged --');

  test_cases.push({name: '6 7 8 9', args: [[6,7,8,9]], expected: [6,8,7,9]})
  test_cases.push({name: '9 6 8 7', args: [[9,6,8,7]], expected: [9,7,8,6]})
  test_cases.push({name: '6 7 8 ', args: [[6,7,8]], expected: [6,8,7]})

  function m_s_l(arr, _log) {
    if (base_case(arr)) {
      if (_log) {
          let turnt = turn_around(arr);
          let turn_log = {args: {arr, turnt}, result: turnt}
          return {result: turnt, log: turn_log};
      } else {
        return turn_around(arr);
      }
    } else {
      if (_log) {
        const recurse_log = {a_arg: arr}

        const split_arr = break_down(arr);
        recurse_log.b_split = split_arr;

        const recursed_left = m_s_l(split_arr[0], _log);
        const recursed_right = m_s_l(split_arr[1], _log);
        recurse_log.c_left = recursed_left.log
        recurse_log.c_right = recursed_right.log

        const built = build(recursed_left.result, recursed_right.result);
        recurse_log.d_built = built

        return {result: built, log: recurse_log}

      } else {
        const split_arr = break_down(arr);
        const recursed_left = m_s_l(split_arr[0], _log);
        const recursed_right = m_s_l(split_arr[1], _log);
        const built = build(recursed_left, recursed_right);
        return built;
      }
    }
  };
  run_tests(m_s_l, test_cases, true);





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

 // another merge-sort: https://gist.github.com/paullewis/1982121