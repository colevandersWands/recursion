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

console.log('--- manually log results ---')
  /*
    f(n) === [arg, return]                :: n === 1
    f(n) === [arg, rec_l, rec_r, return]  :: n > 1
  */

{  const log = {};

    const r_1 = [1, 
                1];
    log.r_1 = r_1;

    const r_2 = [1, 
                  [1, 1], 
                  [1, 1], 
                1];
    log.r_2 = r_2;

    const r_3 = [1, 
                  [1, 
                    [1, 1], 
                    [1, 1], 
                  1], 
                  [1, 
                    [1, 1], 
                    [1, 1], 
                  1], 
                1];
    log.r_3 = r_3;

    const r_4 = [1,
                  [1, 
                    [1, 
                      [1, 1], 
                      [1, 1], 
                    1], 
                    [1, 
                      [1, 1], 
                      [1, 1], 
                    1], 
                  1],
                  [1, 
                    [1, 
                      [1, 1], 
                      [1, 1], 
                    1], 
                    [1, 
                      [1, 1], 
                      [1, 1], 
                    1], 
                  1],
                1];
    log.r_4 = r_4;

    const r_5 = [1,
                  [1,
                    [1, 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                    1],
                    [1, 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                    1],
                  1],
                  [1,
                    [1, 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                    1],
                    [1, 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                      [1, 
                        [1, 1], 
                        [1, 1], 
                      1], 
                    1],
                  1],
                1];
    log.r_5 = r_5;

console.log(log) };


console.log('--- auto-log results ---')

  function reslog(n) {                            const log = [n];
    const is_base = n === 1;                
    if (is_base) {
      const turnt = n;                            log.push(turnt)
      return log;                        
    } else {
      const broke_n = n - 1;                
      const rec_log = reslog(broke_n);            log.push(rec_log);
      const rec_rog = reslog(broke_n);            log.push(rec_rog);
        const rec_l = rec_log[rec_log.length-1];
        const rec_r = rec_rog[rec_rog.length-1];
      const built = rec_l + rec_r;                log.push(built)
      return log;
    }
  }
  log_reports(reslog, test_cases)

console.log('--- manually log strategy ---')

  { const log = {};

    log.r_1 = {
                '0 arg': 1,
                '1 base': true,
                '2 turnt': 1
              };
    log.r_1.result = log.r_1['2 turnt'];

    log.r_2 = {
                '0 arg': 2,
                '1 base': false,
                '2 brokn': 1,
                '3 left recurse': log.r_1,
                '3 right recurse': log.r_1,
                '4 built': log.r_1.result + log.r_1.result,
              };
    log.r_2.result = log.r_2['4 built'];

    log.r_3 = {
                '0 arg': 3,
                '1 base': false,
                '2 brokn': 2,
                '3 left recurse': log.r_2,
                '3 right recurse': log.r_2,
                '4 built': log.r_2.result + log.r_2.result,
              };
    log.r_3.result = log.r_3['4 built'];

    log.r_4 = {
                '0 arg': 3,
                '1 base': false,
                '2 brokn': 2,
                '3 left recurse': log.r_3,
                '3 right recurse': log.r_3,
                '4 built': log.r_3.result + log.r_3.result,
              };
    log.r_4.result = log.r_4['4 built'];

  console.log(log) };

console.log('--- auto-log strategy ---');

  function stratlog(n) {                          const log = {'0 arg': n};
    const is_base = n === 1;                      log['1 is base'] = is_base;
    if (is_base) {
      const turnt = n;                            log['2 turnt'] = turnt;
      return {result: turnt, log};                        
    } else {
      const broke_n = n - 1;                      log['2 broke n'] = broke_n;
      const rec_log = stratlog(broke_n);          log['3 rec left'] = rec_log;
      const rec_rog = stratlog(broke_n);          log['3 rec right'] = rec_rog;
        const rec_l = rec_log.result;
        const rec_r = rec_rog.result;
      const built = rec_l + rec_r;                log['4 built'] = built;
      return {result: built, log};
    }
  }
  log_reports(stratlog, test_cases)






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
  };
  console.log(report)
};
}