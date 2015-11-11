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
  var sub = options.startTag + keywords + options.endTag;
  var reg = new RegExp(keywords, "g");
  var highliged = text.replace(reg, sub);
  return highliged;
}

module.exports = highlight;
