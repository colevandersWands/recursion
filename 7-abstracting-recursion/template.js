{ console.log('--- -- one funk to rule them all --- ---')

console.log('--- given: formal definition ---')

  // you'll get this from the assignment sheet

console.log('--- standard recursive solution ---')

  // write this based on the given formal definition


console.log('--- test cases ---')

  const test_cases = [
      // write these
    ];
  run_tests(og, test_cases);


console.log('--- abstracted recursive solution ---')
  // this is template!  
  // it can work for any and all recursive challenges
  // your task is to develop the 5 chunks below this function

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
      {name: '', args: [], expected: undefined}
    ];
  function bc(arg) {
    let result;
    /* modify only this! */
    return result;
  };
  run_tests(bc, bc_cases)


console.log('--- turn-around --');

  const ta_cases = [
      {name: '', args: [], expected: undefined}
    ];
  function ta(arg) {
    let result;
    /* modify only this! */
    return result;
  };
  run_tests(ta, ta_cases)


console.log('--- break-down --');

  const bd_cases = [
      {name: '', args: [], expected: undefined}
    ];
  function bd(arg) {
    let result;
    /* modify only this! */
    return result;
  };
  run_tests(bd, bd_cases)


console.log('--- recurse ---');
  // develop this chunk in recurse_dev by calling og
  // once all the chunks are ready
  //  comment out recurse_dev
  //  move your code to recurse & call abstrec



  const recurse_cases = [

    ];
  function recurse_dev(arg) { // use this one for developing the chunks
    let result;
    /* call og from here */
    return result;
  }
  run_tests(recurse_dev, recurse_cases)

  // function recurse(arg) { // use this one for testing the abstracted solution
  //   let result;
  //   /* call abstrec from here */
  //   return result;
  // }
  // run_tests(recurse, recurse_cases)


console.log('--- build-up ---')

  const bu_cases = [
      {name: '', args: [], expected: undefined}
    ];
  function bu(arg) {
    let result;
    /* modify only this! */
    return result;
  };
  // run_tests(bu, bu_cases)




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