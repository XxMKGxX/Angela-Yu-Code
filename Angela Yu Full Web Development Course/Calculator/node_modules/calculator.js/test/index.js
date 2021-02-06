var pgk = require('../index.js');
var assert = require('power-assert');

describe('add', function(){

  it('(1,1)', function(){
    assert(pgk.add(1, 1) === 2);
  });

  it('(1)(1)', function(){
    assert(pgk.add(1)(1) === 2);
  });
});
