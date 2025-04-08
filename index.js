function receivesAFunction(callBackFunction) {
  callBackFunction();
}

function returnsANamedFunction() {
  function namedFunction() {}
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
