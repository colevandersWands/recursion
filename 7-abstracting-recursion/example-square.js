{ console.log('--- -- one funk to rule them all --- ---')

console.log('--- given: formal definition ---')

  /*
    {n | n is a whole number > 0}
    r(n) === n                :: if (n === 1)
    r(n) === r(n-1) + r(n-1)  :: if (n > 1)
  */


console.log('--- normal solution ---')

  function og(n) {
    if(n === 1) {
      return n;
    } else {
      return og(n-1) + og(n-1);
    };
  };
  run_tests(og, test_cases);


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


console.log('--- abstracted solution ---')


  /*
    r(x) === ta(x)             :: if (bc(x))
    r(x) === bu( r( bd(x) ) )  :: if (!bc(x))
  */


  // don't touch this code !!! 
  function abstrec(arg) {
    if (bc(arg)) {
      return ta(arg);
    } else {
      return bu( recurse( bd(arg) ) );
    }
  };
  run_tests(abstrec, test_cases);



console.log('--- base case check --');

  const bc_cases = [
      {name: '1', args: [1], expected: true},
      {name: '4', args: [4], expected: false},
      {name: '9', args: [9], expected: false},
      {name: '12', args: [12], expected: false},
    ];
  function bc(arg) {
    let result;
    result = arg === 1;
    return result;
  };
  run_tests(bc, bc_cases)


console.log('--- turn-around --');

  const ta_cases = [
      {name: '5', args: [5], expected: 5},
      {name: '100', args: [100], expected: 100},
      {name: '50', args: [50], expected: 50},
      {name: '5000', args: [5000], expected: 5000},
    ];
  function ta(arg) {
    let result;
    result = arg;
    return result;
  };
  run_tests(ta, ta_cases)


console.log('--- break-down --');

  const bd_cases = [
      {name: '5', args: [5], expected: [4,4]},
      {name: '6', args: [6], expected: [5,5]},
      {name: '0', args: [0], expected: [-1,-1]},
      {name: '-1', args: [-1], expected: [-2,-2]},
    ];
  function bd(arg) {
    let result;
    result = [ arg-1, arg-1 ];
    return result;
  };
  run_tests(bd, bd_cases)


console.log('--- recurse ---');

  const recurse_cases = [
      // {name: '1', args: [1], expected: ?} - this won't happen
      {name: '2', args: [2], expected: [1,1]},
      {name: '3', args: [3], expected: [2,2]},
      {name: '4', args: [4], expected: [4,4]},
      {name: '5', args: [5], expected: [8,8]},
      {name: '6', args: [6], expected: [16,16]},
      {name: '7', args: [7], expected: [32,32]},
    ];
  // function recurse_dev(arg) {
  //   let result;
  //   result = [ og(arg[0]), og(arg[1]) ];
  //   return result;
  // }
  // run_tests(recurse_dev, recurse_cases);
  function recurse(arg) {
    let result;
    result = [ abstrec(arg[0]), abstrec(arg[1]) ];
    return result;
  }
  run_tests(recurse, recurse_cases);


console.log('--- build-up ---');

  const bu_cases = [
      {name: '[3, 4]', args: [[3,4]], expected: 7},
      {name: '[2, 2]', args: [[2,2]], expected: 4},
      {name: '[-4, 4]', args: [[-4,4]], expected: 0},
    ];
  function bu(arg) {
    let result;
    result = arg[0] + arg[1];
    return result;
  };
  run_tests(bu, bu_cases)






// ---------- testing utils -------------

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