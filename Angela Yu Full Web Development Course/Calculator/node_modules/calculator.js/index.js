var _ = require('lodash');

module.exports = {
  add: _.curry(function(a, b){
    return a + b;
  })
};
