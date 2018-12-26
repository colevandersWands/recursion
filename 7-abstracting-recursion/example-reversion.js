{ console.log('--- -- one funk to rule them all --- ---')

console.log('--- given: formal definition ---')

  /*
    { x | typeof x === 'string' }
    f(x) === x                      :: x.length === (0 or 1)
    f(x) === f(x[2/2]) + f(x[1/2])  :: x.length !== 1
  */

console.log('--- standard recursive solution ---')

  function og(str) {
    if (str.length === 1 || str.length === 0) {
      return str;
    } else {
      const left_half = str.slice(0, str.length/2);
      const right_half = str.slice(str.length/2, str.length);
      return og(right_half) + og(left_half);
    }
  };


console.log('--- test cases ---')

  const test_cases = [
      {name: 'asdf', args: ['asdf'], expected: 'fdsa'},
      {name: 'dfi;n0-23', args: ['dfi;n0-23'], expected: '32-0n;ifd'},
      {name: '\t\n\n', args: ['\t\n\n'], expected: '\n\n\t'},
      {name: 'dfi;n0-23', args: ['dfi;n0-23'], expected: '32-0n;ifd'},
      {name: '', args: [''], expected: ''},
    ];
  run_tests(og, test_cases);


console.log('--- abstracted recursive solution ---')
  // this is template!  
  // it can work for any and all recursive challenges
  // your task is to develop the 5 chunks below this function
  //  once they pass all their tests, uncomment the abstrec tests!

  /*  generalized recursive definition
    r(x) === ta(x)                    :: if (bc(x))
    r(x) === bu( recurse( bd(x) ) )   :: if (!bc(x))
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
      {name: '', args: [''], expected: true},
      {name: ' ', args: [' '], expected: true},
      {name: '  ', args: ['  '], expected: false},
      {name: '121', args: ['121'], expected: false},
    ];
  function bc(arg) {
    let result;
    result = arg.length === 1 || arg.length === 0;
    return result;
  };
  run_tests(bc, bc_cases)


console.log('--- turn-around --');

  const ta_cases = [
      {name: '', args: [''], expected: ''},
      {name: 0, args: [0], expected: 0},
      {name: false, args: [false], expected: false},
      {name: null, args: [null], expected: null},
      {name: undefined, args: [undefined], expected: undefined},
    ];
  function ta(arg) {
    let result;
    result = arg;
    return result;
  };
  run_tests(ta, ta_cases)


console.log('--- break-down --');

  const bd_cases = [
      // {name: '', args: [''], expected: ?}, -> won't happen !
      // {name: '1', args: ['1'], expected: ?}, -> won't happen !
      {name: '12', args: ['12'], expected: ['1', '2']},
      {name: '123', args: ['123'], expected: ['1', '23']},
      {name: '1234', args: ['1234'], expected: ['12', '34']},
      {name: '12345', args: ['12345'], expected: ['12', '345']},
      {name: '123456', args: ['123456'], expected: ['123', '456']},
      {name: '1234567', args: ['1234567'], expected: ['123', '4567']}
    ];
  function bd(arg) {
    let result = [];
    result.push(arg.slice(0, arg.length/2)); 
    result.push(arg.slice(arg.length/2, arg.length));
    return result;
  };
  run_tests(bd, bd_cases)


console.log('--- recurse ---');

  const recurse_cases = [
      {name: '[a, 1]', args: [['a', '1']], expected: ['a', '1']},
      {name: '[a, 12]', args: [['a', '12']], expected: ['a', '21']},
      {name: '[ab, 12]', args: [['ab', '12']], expected: ['ba', '21']},
      {name: '[abc, 12]', args: [['abc', '12']], expected: ['cba', '21']},
      {name: '[abc, 123]', args: [['abc', '123']], expected: ['cba', '321']},
      {name: '[abcd, 1234]', args: [['abcd', '1234']], expected: ['dcba', '4321']},
    ];
  // function recurse_dev(arg) {
  //   let result = [];
  //   result.push( og( arg[0] ) );
  //   result.push( og( arg[1] ) );
  //   return result;
  // };
  // run_tests(recurse_dev, recurse_cases);
  function recurse(arg) {
    let result = [];
    result.push( abstrec( arg[0] ) );
    result.push( abstrec( arg[1] ) );
    return result;
  };
  run_tests(recurse, recurse_cases);

console.log('--- build-up ---')

  const bu_cases = [
      // {name: '[]', args: [[]], expected: ?}, -> won't happen !
      // {name: '[a]', args: [['a']], expected: ?}, -> won't happen !
      {name: '[a, 1]', args: [['a','1']], expected: '1a'},
      {name: '[ab, 12]', args: [['ab','12']], expected: '12ab'},
      {name: '[z, z]', args: [['z','z']], expected: 'zz'},
    ];
  function bu(arg) {
    let result;
    result = arg[1] + arg[0];
    return result;
  };
  run_tests(bu, bu_cases)





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