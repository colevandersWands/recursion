// stepping through recursive calls one at a time
/*  to step through recursion requires trusting recursion
  think back to the fait-cases from last time
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

console.log('--- expand solution ---')

  function pand(n) {
    const is_base = n === 1
    if (is_base) {
      const turnt = n;
      return turnt;
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

console.log('--- log strategy ---')

  function logged(n) {                      const log = {['0 args']: {n}};
    const is_base = n === 1;                log['1 base'] = is_base;
    if (is_base) {
      const turnt = n;                      log['2 turnt'] = turnt;
      return {result: turnt, log};                        
    } else {
      const broke_n = n - 1;                log['2 broke n'] = broke_n
      const rec_log = logged(broke_n);      log['3 rec left'] = rec_log;
      const rec_rog = logged(broke_n);      log['3 rec right'] = rec_rog;
        const rec_l = rec_log.result;
        const rec_r = rec_rog.result;
      const built = rec_l + rec_r;          log['4 built'] = built;
      return {result: built, log};
    }
  }
  log_reports(logged, test_cases)


console.log('--- count operations ---')

  const count_cases = [
      {name: '1', args: [1], expected: 2},
      {name: '2', args: [2], expected: 8},
      {name: '3', args: [3], expected: 20},
      {name: '4', args: [4], expected: 44},
      {name: '5', args: [5], expected: 92},
      {name: '6', args: [6], expected: 188},
      {name: '7', args: [7], expected: 380},
      {name: '8', args: [8], expected: 764},
    ]

  function count(n) {                       let ops_count = 0;
    const is_base = n === 1;                ops_count+=2;
    if (is_base) {                          
      const turnt = n;                 
      return ops_count;
    } else {
      const broke_n = n - 1;                ops_count++;
      const rec_l = count(broke_n);         ops_count += rec_l;
      const rec_r = count(broke_n);         ops_count += rec_r;
      const built = rec_l + rec_r;          ops_count++;
      return ops_count;
    }
  }
  run_tests(count, count_cases)

console.log('--- log ops count ---')

  function steplog(n) {                     const log = {ops: 0};
    const is_base = n === 1;                log.ops+=2;
    if (is_base) {                          
      const turnt = n;                    
      return {ops: log.ops, log};                        
    } else {
      const broke_n = n - 1;                log.ops++;
      const rec_log = steplog(broke_n);     log.rec_l = rec_log;
      const rec_rog = steplog(broke_n);     log.rec_r = rec_rog;
        const rec_l = rec_log.ops;          log.ops+=rec_l;
        const rec_r = rec_rog.ops;          log.ops+=rec_r;
      const built = rec_l + rec_r;          log.ops++;
      return {ops: log.ops, log};
    }
  }
  log_reports(steplog, test_cases)



console.log('--- explain it ---');


  function plaind(n) {                      let ops = 0;
                                            const log = {['0 args']: {n, ops}};
    const is_base = n === 1;                ops+=2;
                                            log['1 base'] = {is_base, ops};
    if (is_base) {
      const turnt = n;                      log['2 turnt'] = {turnt, ops};
      return {result: turnt, ops, log};                        
    } else {
      const broke_n = n - 1;                ops++;
                                            log['2 broke n'] = {broke_n, ops};
      const rec_log = plaind(broke_n);      ops+=rec_log.ops;
                                            log['3 rec left'] = {rec_log, ops};
      const rec_rog = plaind(broke_n);      ops+=rec_rog.ops;
                                            log['3 rec right'] = {rec_rog, ops};
        const rec_l = rec_log.result;
        const rec_r = rec_rog.result;
      const built = rec_l + rec_r;          ops++;
                                            log['4 built'] = {built, ops};
      return {result: built, ops, log};
    }
  }
  log_reports(plaind, test_cases)



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
function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}
}