var options = {
  startTag : "<b class='highlight'>",
  endTag   : "</b>"
}
/**
 * Set the Desired Start Tag to apply to the highlight
 * e.g:
 */



/**
 * highilight does simple sting Substitution
 *
 */
function highlight(keywords, text) {
  // if (value instanceof Array) {
  //   console.log("Array!");
  // }
  // for (var k = 0; k < keywords.length)
  var regex = new RegExp(keywords, "gi");
  var sub;
  var match;
  var matches = [];
  var matchpos = [];
  while ( (match = regex.exec(text)) ) {
    matches.push(match[0]);        // keyword fmatched case insensitively
    matchpos.push(match['index']); // where the match was found in the text
  }
  console.log(' - - - - - - - - - - - - - - matches:');
  console.log(matches);
  console.log(' - - - - - - - - - - - - - - - - - - ')
  console.log(matchpos);

  console.log(matches.length)
  for(var i = matches.length-1; i > -1; i--) { // Good Old Zero-index ...
    sub = options.startTag + matches[i] + options.endTag;
    var start = text.slice(0,matchpos[i]);
    var end   = text.slice(matchpos[i] + matches[i].length, text.length);
    console.log(' - - - - - - - - - - - - - - - - - - start: ');
    console.log(start);
    console.log(' - - - - - - - - - - - - - - - - - - end: ');
    console.log(end);
    // var reg = new RegExp(entry, "gi");
    text = start + sub + end;
    // text = text.replace(reg, sub); // iterate
  }
  console.log(text);
  return text;
}

module.exports = highlight;
