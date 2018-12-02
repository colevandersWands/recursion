function mult(a, b) {
  if (b === 1) {
    return a;
  } else {
    return a + mult(a, b - 1);
  }
};
function mult(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a + mult(a, b - 1);
  }
};
function mult(a, b) {
  if (b === 1) {
    return a;
  } else {
    return mult(a, b - 1) + a;
  }
};
function mult(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return mult(a, b - 1) + a;
  }
};

function pow(a, b) {
  if (b === 1) {
    return a;
  } else {
    return a * pow(a, b - 1);
  }
};
function pow(a, b) {
  if (b === 0) {
    return 1;
  } else {
    return a * pow(a, b - 1);
  }
};
function pow(a, b) {
  if (b === 1) {
    return a;
  } else {
    return pow(a, b - 1) * a;
  }
};
function pow(a, b) {
  if (b === 0) {
    return 1;
  } else {
    return pow(a, b - 1) * a;
  }
};

  function add_rec(a, b) {
    if (b > 1) {
      return a + add_rec(a, b-1);
    } else {
      return a;
    };
  };
  function pow_rec(a, b) {
    if (b > 1) {
      return a * pow_rec(a, b-1);
    } else {
      return a;
    };
  };

// have this one build an array
// and make a few slightly different versions
function count_down(count) {
  --count
  if (count === 0) {
    return count
  } else {
    return count_down(count)
  }
}

//fibonacci,other recursive sequences, fractals?
//  things from math notation