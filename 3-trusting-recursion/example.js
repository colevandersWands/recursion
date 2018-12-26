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

console.log('--- expand solution ---')

  function pand(n) {
    const is_base = n === 1
    if (is_base) {
      return n
    } else {
      let result; { // pand(n-1) + pand(n-1)
        const broke_n = n - 1;
        const rec_l = pand(broke_n);
        const rec_r = pand(broke_n);
        const built = rec_l + rec_r
        result = built
      }
      return result;
    }
  }
  run_tests(pand, test_cases)


console.log('--- step-throughs ---')
  // trust the r!
  //  any failing asserts will come from you, not the r


  console.log(' --  r(1) === 1  --')
  let r_1; { /* = r(1); */               const log = [{n: 1}];        
    if (1 === 1) {                       log.push({base: true});
      r_1 = 1;                           log.push({r_1: 1});
    } else {
      const broke_n = 1 - 1;
      const rec_l = r(0); // trust!
      const rec_r = r(0); // trust!
      const built = rec_l + rec_r;
      r_1 = built;
    }                                     console.log(log)
  }
  console.assert(r_1 === 1, 'r_1');

  console.log(' --  r(2) === 2  --')
  let r_2; { /* = r(2); */                const log = [{n: 2}];
    if (2 === 1) {                        log.push({base: false});
      r_2 = 2;
    } else {
      const broke_n = 2 - 1;              log.push({broke_n: 1});
      const rec_l = r(1); /* trust! */    log.push({rec_l});
      const rec_r = r(1); /* trust! */    log.push({rec_r});
      const built = rec_l + rec_r;        log.push({built});
      r_2 = built;
    }                                     console.log(log);
  }
  console.assert(r_2 === r(2), 'r_2');

  console.log(' --  r(3) === 4  --')
  let r_3; { /* = r(3); */                const log = [{n: 3}];
    if (3 === 1) {                        log.push({base: false});
      r_3 = 3;
    } else {      
      const broke_n = 3 - 1;              log.push({broke_n: 2});
      const rec_l = r(2); /* trust! */    log.push({rec_l});
      const rec_r = r(2); /* trust! */    log.push({rec_r});
      const built = rec_l + rec_r;        log.push({built});
      r_3 = built;
    }                                     console.log(log);
  }
  console.assert(r_3 === r(3), 'r_3');

  console.log(' --  r(4) === 8  --')
  let r_4; { /* = r(4); */                const log = [{n: 4}];
    if (4 === 1) {                        log.push({base: false});
      r_4 = 4;
    } else {
      const broke_n = 4 - 1;              log.push({broke_n: 3});
      const rec_l = r(3); /* trust! */    log.push({rec_l});
      const rec_r = r(3); /* trust! */    log.push({rec_r});
      const built = rec_l + rec_r;        log.push({built});
      r_4 = built;
    }                                     console.log(log);
  }
  console.assert(r_4 === r(4), 'r_4');

  console.log(' --  r(15) === 16384  --')
  let r_15; { /* = r(15); */              const log = [{n: 15}];
    if (15 === 1) {                       log.push({base: false});
      r_15 = 15;
    } else {
      const broke_n = 15 - 1;             log.push({broke_n: 14});
      const rec_l = r(14); /* trust! */   log.push({rec_l});
      const rec_r = r(14); /* trust! */   log.push({rec_r});
      const built = rec_l + rec_r;        log.push({built});
      r_15 = built;
    }                                     console.log(log);
  }
  console.assert(r_15 === r(15), 'r_15');
 

  

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