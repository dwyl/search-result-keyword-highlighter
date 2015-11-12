var options = {
  startTag : "<b class='highlight'>", // could be a hyperlink
  endTag   : "</b>" // or you could use <i> instead of <b> ... want it? ask!
}
/**
 * Want to Set the Desired Start Tag to apply to the highlight?
 * see: https://github.com/dwyl/search-result-keyword-highlighter/issues/5
 * Potential future feature ...
 */


/**
 * highilight does simple sting Substitution
 * it looks for a set of keywords in a given body of text
 * and substitutes the keyword with a marked up html Tag
 * @param {String} keywords - a string of one or more keywords
 *   separated by spaces.
 * @param {String} text - the body of text where you want to highlight keywords
 * @returns {String} text - the text with all highilights.
 */
function highlight(keywords, text) {
  var arr = keywords.split(' ');
  for (var k = 0; k < arr.length; k++) {  // loop through one or more keywords
    var regex = new RegExp(arr[k], "gi"); // global and case insensitive
    var match;
    var matches = [];
    var matchpos = [];
    // find all the matches for the given keyword and store the position:
    while ( (match = regex.exec(text)) ) {
      matches.push(match[0]);        // keyword fmatched case insensitively
      matchpos.push(match['index']); // where the match was found in the text
    } // can you think of a better way to find all the matches? Submit a PR! :-)

    for(var i = matches.length-1; i > -1; i--) { // Good Old Zero-index ...
      var sub = options.startTag + matches[i] + options.endTag;
      var start = text.slice(0,matchpos[i]); // slice of text until keyword
      var end   = text.slice(matchpos[i] + matches[i].length, text.length);
      text = start + sub + end; // replace the text
    }
  }
  console.log(text);
  return text;
}

module.exports = highlight;
