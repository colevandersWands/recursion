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

console.log('--- manual replacement ---')
  // practice applying formal replacement

  { console.log('-- r(3) === 4 --')
    const expected = 4;
    const steps = {};
    steps.step_1 =             r(3);
    steps.step_2 =     r(2)      +     r(2);
    steps.step_3 = (r(1) + r(1)) + (r(1) + r(1));
    steps.step_4 =   (1  +   1)  +   (1  +   1);
    steps.step_5 =       2       +       2;
    steps.step_6 =               4;
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(`${step}: ${steps[step]} \n`);
      };
    };
  }

  { console.log('-- r(5) === 16 --')
    const expected = 16;
    const steps = {};
    steps.step_1 =             r(5);
    steps.step_2 =     r(4)      +     r(4);
    steps.step_3 = (r(3) + r(3)) + (r(3) + r(3));
    steps.step_4 =   (4  +   4)  +   (4  +   4);
    steps.step_5 =       8       +       8;
    steps.step_6 =              16
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(`${step}: ${steps[step]} \n`);
      };
    };
  }

  { console.log('-- r(8) === 128 --')
    const expected = 128;
    const steps = {};
    steps.step_1 =                               r(8);
    steps.step_2 =              r(7)               +              r(7);
    steps.step_3 =     (r(6)      +     r(6))      +     (r(6)      +     r(6));
    steps.step_4 = ((r(5) + r(5)) + (r(5) + r(5))) + ((r(5) + r(5)) + (r(5) + r(5)));
    steps.step_5 =  ((16  +  16)  +  (16  +  16))  +  ((16  +  16)  +  (16  +  16));
    steps.step_6 =       (32      +       32)      +       (32      +       32);
    steps.step_7 =                64               +                64;
    steps.step_8 =                                128;
    for (let step in steps) {
      if (steps[step] !== expected) {
        console.log(`${step}: ${steps[step]} \n`);
      };
    };
  }



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