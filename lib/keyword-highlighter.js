var options = {
  startTag : "<b class='highlight'>",
  endTag   : "</b>"
}
/**
 * Set the Default Start Tag to Apply to a
 */



/**
 * highilight does simple sting Substitution
 *
 */
function highlight(keywords, text) {
  // if (value instanceof Array) {
  //   console.log("Array!");
  // }
  var regex = new RegExp(keywords, "gi");
  var sub;
  var match;
  var matches = [];
  while ( (match = regex.exec(text)) ) {
    console.log(match);
    matches.push(match[0]);
  }
  matches.forEach( function(entry) {
    sub = options.startTag + entry + options.endTag;
    console.log('entry >> ' +entry)
    text = text.replace(regex, sub);
  });
  // var highliged = text.replace(regex, sub);
  return text;
}

module.exports = highlight;
