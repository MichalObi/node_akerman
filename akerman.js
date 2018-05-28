if (!Object.assign) {
  Object.assign = require('object-assign'); // fix for older node version
}

module.exports.akerman = function () {

  var m, n;

  function checkUserInput() {
    var userInput = process.env.npm_config_input;
        m = parseInt(userInput.split(',')[0]);
        n = parseInt(userInput.split(',')[1]);

    function isInputExist() {
      return m && n;
    }

    function isInputNumeric() {
      return typeof m === 'number' && typeof n === 'number';
    }

    return isInputExist() && isInputNumeric();
  }

  function logError() {
    console.log('Wrong input - try again.');
  }

  function akerman(m, n) {

    if (m === 0) {
      var result = n + 1;
      console.log( 'A(0, ' + n + ')' );
      return result;
    }

    if (m > 0 && n === 0) {
      console.log( 'A(' + m + ', ' + n + ')' );
      return akerman(m - 1, 1);
    }

    if (m > 0 && n > 0) {
      console.log( 'A(' + (m - 1) + ', '
      + 'A(' + m + ', ' + (n - 1) + ')' + ')' );
      return akerman(m - 1, akerman(m, n - 1));
    }
  }

  return checkUserInput() ? akerman(m, n) : logError();
}

require('make-runnable');
