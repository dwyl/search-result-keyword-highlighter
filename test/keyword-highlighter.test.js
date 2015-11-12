var dir  = __dirname.split('/')[__dirname.split('/').length-1];
var file = dir + __filename.replace(__dirname, '') + " > ";
var test = require('tape');

var h    = require('../lib/keyword-highlighter.js');

test(file+'Basic Single String Substitution', function(t) {
  var str = 'The Cat in the Hat Sat on the Mat.';
  var res = h('Hat', str);
  var expected = "The Cat in the <b class='highlight'>Hat</b> Sat on the Mat.";
  t.equal(res, expected, 'The Word "Hat" is highlighted: '+res);
  t.end();
});

test(file+'Case iNsEnSiTive Text hiGhLighTing', function(t) {
  var str = 'The cAt in the Hat Sat on the Mat.';
  var res = h('cat', str);
  var expected = "The <b class='highlight'>cAt</b> in the Hat Sat on the Mat.";
  t.equal(res, expected, 'The Word "cAt" is highlighted: '+res);
  t.end();
});

test.only(file+'Partial String match Java in JavaScript', function(t) {
  var str = 'Simon is Super Good at JavaScript!';
  var res = h('Java', str);
  var expected = "Simon is Super Good at <b class='highlight'>Java</b>Script!";
  t.equal(res, expected, 'Highlight "Java" in JavaScript: '+res);
  t.end();
});
