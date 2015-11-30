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

test(file+'Partial String match Java in JavaScript', function(t) {
  var str = 'Simon is Super Good at JavaScript!';
  var res = h('Java', str);
  var expected = "Simon is Super Good at <b class='highlight'>Java</b>Script!";
  t.equal(res, expected, 'Highlight "Java" in JavaScript: '+res);
  t.end();
});

test(file+'Match multiple distinct keywords', function(t) {
  var text = 'I write JavaScript Code in Lovely London!';
  var result = h('javascript london', text);
  // console.log(result);
  var expected = "I write <b class='highlight'>JavaScript</b> Code in Lovely <b class='highlight'>London</b>!";
  t.equal(result, expected, 'The words "JavaScript" and "London" are highlighted: '+result);
  t.end();
});

test(file+'Find keyword containing hyphen', function(t) {
  var text = 'Everyone loves their mother-in-law right?';
  var result = h('mother-in-law', text);
  // console.log(result);
  var expected = "Everyone loves their <b class='highlight'>mother-in-law</b> right?";
  t.equal(result, expected, 'Highlight hyphenated word: '+result);
  t.end();
});

test(file+'Find keyword and delete unnecessary spaces', function(t) {
  var text = 'Whaouu too many spaces here!';
  var result = h('many            spaces', text);
  var expected = "Whaouu too <b class='highlight'>many</b> <b class='highlight'>spaces</b> here!";
  t.equal(result, expected, 'Highlight "spaces" word and delete unnecessary spaces: '+result);
  t.end();
});
