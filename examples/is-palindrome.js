console.log('--- the problem ---');
	// is it a palindrome
	const test_cases = [
		{name: 'racecar', args: ['racecar'], expected: true},
    {name: 'racear', args: ['racear'], expected: false},
    {name: 'dgsg', args: ['dogeeseseegod'], expected: true},
    {name: 'toad', args: ['toad'], expected: false},
	];

console.log('--- manually solve some ---');

console.log('--- developing chunks ---');

console.log('--- develop break_down ---')

  function find_outers(str) {
    return [str[0], str[str.length - 1]]
  }
  // console.log(find_outers('wert'))

  function find_middle(str) {
    const midds = str.slice(1, str.length - 1);
    return midds
  }
  // console.log(find_middle('er'))

console.log('--- develop base_cases ---');

  function outers_are_equal(_outers) {
    return _outers[0] === _outers[1]
  }

  function bottomed_out(middle) {
    return middle.length === 1 || middle.length === 0
  }

console.log('--- develop turn-around ---');

  // true if bottomed out
  // false if not
  
  // could pass awkwardly compress this into a funciton
  //  but in this problem we don't always bottom out

console.log('--- develop build_up ---');

  // none, just pass it on

console.log('--- scaffold solution ---');

  function palindrome_checker(string) {
    const outers = find_outers(string);
    const middle = find_middle(string);
    if (!outers_are_equal(outers)) {
      return false;
    } else if (bottomed_out(middle)){
      return true;
    } else {
      return palindrome_checker(middle);
    }
  }
  // console.log(palindrome_checker('asdsea'))
  run_tests(palindrome_checker, test_cases)

console.log('--- de-scaffold it ---');

console.log('--- trace it ---');
// or switch these orders?
console.log('--- log it ---')

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