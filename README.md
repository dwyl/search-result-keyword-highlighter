# Search Result Keyword Highlighter

[![Build Status](https://travis-ci.org/dwyl/search-result-keyword-highlighter.svg)](https://travis-ci.org/dwyl/search-result-keyword-highlighter)
[![codecov.io](https://codecov.io/github/dwyl/search-result-keyword-highlighter/coverage.svg?branch=master)](https://codecov.io/github/dwyl/search-result-keyword-highlighter?branch=master)
[![Dependency Status](https://david-dm.org/dwyl/search-result-keyword-highlighter.svg)](https://david-dm.org/dwyl/search-result-keyword-highlighter)
[![devDependency Status](https://david-dm.org/dwyl/search-result-keyword-highlighter/dev-status.svg)](https://david-dm.org/dwyl/search-result-keyword-highlighter#info=devDependencies)

Highlight a keyword in the body of text for a given search result.

## Why?

People who use search want to have the word(s) they searched for
highlighted in the results. We *know* this. (*because Google does it*)

![google-search-result-keyword-bold](https://cloud.githubusercontent.com/assets/194400/11105849/a2a2b008-88c9-11e5-9462-77f6c4577233.png)

Google have *user-tested every feature* of their site/experience...


## What?

For a given set of keywords that a person is searching for,
we highlight all occurrences of the word in the text of the search results.

## Features?

### Case-insentive Keyword Highlighting

a search for `Java`, `javA` or `java` will highlight `JAVA` or `JaVa` in the search result.

### Finds *Multiple Occurrences* of the *Same* Keyword in Text

Example:

```js
var str = 'London Bridge is Falling Down FALLING down, fALLiNG Down!';
var res = h('falling', str);
console.log(res);
```
```Text
London Bridge is <b class='highlight'>Falling</b> Down
<b class='highlight'>FALLING</b> down,
<b class='highlight'>fALLiNG</b> Down!
```



## How?

Install th

## Is it *Fast*?

> Try it! And Judge for yourself!
