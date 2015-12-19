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
 * wraps a single string passed to it in the start and end tags of the options
 * @param {String} match - the string to be wrapped
 * @returns {String} - the string wraped
 */

function wrapper (match) {
  return options.startTag + match + options.endTag;
}

/**
 * highilight does Simple String Substitution given a set of keywords in
 * a body of text and substitutes the keyword with a marked up html Tag
 * @param {String} keywords - a string of one or more keywords
 *   separated by spaces.
 * @param {String} text - the body of text where you want to highlight keywords
 * @returns {String} text - the text with all highilights.
 */
function highlight(keywords, text) {
  var regex = keywords.split(' ').join('|');
  regex = regex.replace(/[-[\]{}()*+?.,\\^$]/g, "\\$&");
  var matcher = new RegExp(regex, 'gi');
  return text.replace(matcher, wrapper);
}

module.exports = highlight;
