// solving from scratch with recursion
// need to work on these questions
{ console.log('--- -- name of challenge -- --- ');

console.log('--- challenge description ---');

  // given. there'll be a list of challenges


console.log('--- test cases ---');

  // build test cases now with nothing to test
  //  to understand the problem
  //  and so they're ready for later

  const test_cases = [
      {name: '', args: [], expected: undefined}
    ];


console.log('--- initial recursion planning ---');
  // all text ?

  /*  initial recursion planning 
    what is the whole big task?
    how can this be broken into little, similar tasks?
    how can the smaller pieces be reassembled?

    use this space to take notes and do your planning
  */


console.log('--- formal definition ---');

  /*
    try expressing your solution as a formal definition
    
    until you get it all right
      it'll be a back-and-forth between this and the chunks 
  */


console.log('--- break-down & base case ---');

  /*  
    what is the smallest/simplest arg you can solve for?
    how can you move a larger arg closer to the smallest one?
  */

  // break-down
  const bd_tests = [
      {name: '', args: [], expected: undefined};
    ];
  function bd() {
    // build this
  }
  run_tests(bd, bd_tests);

  // base-case check
  const bc_tests = [
      {name: '', args: [], expected: undefined};
    ];
  function bc() {
    // build this
  }
  run_tests(bc, bc_tests);


console.log('--- turn-around ---');

  /*  turn-around
    what do you do to that smallest thing once you have it?
  */

  const ta_tests = [
      {name: '', args: [], expected: undefined};
    ];
  function ta() {
    // build this
  }
  run_tests(ta, ta_tests);


console.log('--- build-up ---');

  /*  build-up
    how can two partial solutions be combined into one whole?
  */

  const bu_tests = [
      {name: '', args: [], expected: undefined};
    ];
  function bu() {
    // build this
  }
  run_tests(bu, bu_tests);


console.log('--- scaffolded solution ---');

  const bc_tests = [
      {name: '', args: [], expected: undefined};
    ];
  function og() {
    // build this
  }
  run_tests(og, test_cases);


console.log('--- composed solution ---');

  function compo() {
    // build this
  }
  run_tests(compo, test_cases);


console.log('--- es6-ified ---');

  function es6() {
    // build this
  }
  run_tests(es6, test_cases);





// ----- testing utils -----

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