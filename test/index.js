
var requires = require('..');
var fs = require('fs');

describe('requires(str)', function(){
  it('should return an array of require paths', function(){
    var a = fs.readFileSync('test/fixtures/a.styl', 'utf8');
    var ret = requires(a);

    ret[0].should.eql({
      string: "@require './a.styl'",
      path: './a.styl',
      index: 0
    });

    ret[1].should.eql({
      string: "@require './something/here/whoop'",
      path: './something/here/whoop',
      index: 20
    });

    ret[2].should.eql({
      string: "@require \"something\"",
      path: 'something',
      index: 54
    });
  })
})

describe('requires(str, fn)', function(){
  it('should replace requires', function(){
    var a = fs.readFileSync('test/fixtures/a.styl', 'utf8');
    var str = requires(a, function(require){
      return '@require "woot/' + require.path + '"';
    });

    str.should.include('@require "woot/./a.styl"');
    str.should.include('@require "woot/./something/here/whoop"');
  })
})
