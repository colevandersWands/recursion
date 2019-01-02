{ console.log('# recursion with different function types ')


{ console.log('## standard function');

  function recurse(a) {
    if (a > 3) {
      return {base: true, a};
    } else {
      const reclog = recurse( a + 1 );
      return {base: false, a, reclog};
    }
  };
  console.log('recurse: ', recurse)
  console.log(recurse(1));
 

  console.log('*breaks if reassigned variables*')
  const other_var = recurse;
  recurse = undefined;
  console.log('recurse: ', recurse);
  console.log('other_var: ', other_var);
  try {
    console.log(recurse(1));
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
  console.log('recurse: ', recurse);
  console.log(recurse(1));
 

  console.log('*cant reassign to new variables*')
  const other_var = recurse;
  recurse = undefined;
  console.log('recurse: ', recurse);
  console.log('other_var: ', other_var);
  try {
    console.log(recurse(1));
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
  console.log('public_name: ', public_name)
  console.log(public_name(1));
 

  console.log('*cant call inner name from outside*')
  try {
    console.log(private_name(1));
  } catch(err) {
    console.log(err);
  }

  console.log('*can reassign to new variables*')
  const other_var = public_name;
  public_name = undefined;
  console.log('public_name: ', public_name)
  console.log('other_var: ', other_var);
  try {
    console.log(other_var(1));
  } catch(err) {
    console.log(err);
  }

  console.log('*the inner function name is preserved inside the original function*')
  const private_name = (a) => a;
  console.log('private_name: ', private_name);
  console.log('other_var: ', other_var);

  try {
    console.log(other_var(1));  
  } catch(err) {
    console.log(err);
  }
}



}