if (!Object.assign) {
  Object.assign = require('object-assign'); // fix for older node version
}

module.exports.akerman = function () {

  // default values
  var m = 4, n = 2;

  function checkUserInput() {
    var userInput = process.env.npm_config_input;

    if (userInput) {
      m = parseInt(userInput.split(',')[0]);
      n = parseInt(userInput.split(',')[1]);
    }


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
