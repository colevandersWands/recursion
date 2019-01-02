{ console.log('# recursion with different function types ')

console.log('(test cases)');
  const recurse_cases = [
      {name: '-1', args: [-1], expected: undefined},
      {name: '0', args: [0], expected: undefined},
      {name: '1', args: [1], expected: undefined},
      {name: '2', args: [2], expected: undefined},
      {name: '3', args: [3], expected: undefined},
      {name: '4', args: [4], expected: undefined},
    ]

{ console.log('## standard function');

  function recurse(a) {
    if (a > 3) {
      return {base: true, a};
    } else {
      const reclog = recurse( a + 1 );
      return {base: false, a, reclog};
    }
  };
  console.log('recurse(test_cases)');
  console.log('recurse: ', recurse)
  log_reports(recurse, recurse_cases);

  console.log('*breaks if reassigned variables*')
  const other_var = recurse;
  recurse = undefined;
  console.log('recurse: ', recurse);
  console.log('other_var: ', other_var);
  try {
    console.log('other_var(test_cases)'); /// go through and fix these.  change to camelcase, line up the right names with the right calls
    log_reports(other_var, recurse_cases);
  } catch(err) {
    console.log(err);
  }
}

{ console.log('## anonymous function');

  let recurse = function(a) {
    if (a > 3) {
      return {base: true, a};
    } else {
      const reclog = recurse( a + 1 );
      return {base: false, a, reclog};
    }
  };
  console.log('recurse(test_cases)');
  console.log('recurse: ', recurse)
  log_reports(recurse, recurse_cases);

  console.log('*cant reassign to new variables*')
  const other_var = recurse;
  recurse = undefined;
  console.log('recurse: ', recurse);
  console.log('other_var: ', other_var);
  try {
    console.log('other_var(test_cases)');
    log_reports(other_var, recurse_cases);
  } catch(err) {
    console.log(err);
  }
}

{ console.log('## named function on a variable ');

  let public_name = function private_name(a) {
    if (a > 3) {
      return {base: true, a};
    } else {
      const reclog = private_name( a + 1 );
      return {base: false, a, reclog};
    }
  };
  console.log('recurse(test_cases)');
  console.log('public_name: ', public_name)
  log_reports(public_name, recurse_cases);

  console.log('*cant call inner name from outside*')
  try {
    console.log('recurse(test_cases)');
    log_reports(private_name, recurse_cases);
  } catch(err) {
    console.log(err);
  }

  console.log('*can reassign to new variables*')
  const other_var = public_name;
  public_name = undefined;
  console.log('public_name: ', public_name)
  console.log('other_var: ', other_var);
  try {
    log_reports(other_var, recurse_cases);
  } catch(err) {
    console.log(err);
  }

  console.log('*the inner function name is protected*')
  const private_name = (a) => a;
  console.log('private_name: ', private_name);

  console.log('other_var: ', other_var);
  try {
    log_reports(other_var, recurse_cases);
  } catch(err) {
    console.log(err);
  }
}




// ------ test utils ------

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  };
  console.log(report)
};
}