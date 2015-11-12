# Search Result Keyword Highlighter

[![Build Status](https://travis-ci.org/dwyl/search-result-keyword-highlighter.svg)](https://travis-ci.org/dwyl/search-result-keyword-highlighter)
[![codecov.io](https://codecov.io/github/dwyl/search-result-keyword-highlighter/coverage.svg?branch=master)](https://codecov.io/github/dwyl/search-result-keyword-highlighter?branch=master)
[![Code Climate](https://codeclimate.com/github/dwyl/search-result-keyword-highlighter/badges/gpa.svg)](https://codeclimate.com/github/dwyl/search-result-keyword-highlighter)
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

### *Case-insentive* Keyword Highlighting

a search for `Java`, `javA` or `java` will highlight `JAVA` or `JaVa` in the search result.

### Finds *Multiple Occurrences* of the *Same* Keyword in Text

Example:

```js
var text = 'London Bridge is Falling Down FALLING down, fALLiNG Down!';
var highlighted = h('falling', text);
console.log(highlighted);
```
The resulting `highlighted`
```html
London Bridge is <b class='highlight'>Falling</b> Down
<b class='highlight'>FALLING</b> down,
<b class='highlight'>fALLiNG</b> Down!
```

### *Partial* match for Keyword in Text

Imagine you are looking for `PHP` and someone has
listed `phpunit` in their recent experience,
this would be highliged as:
```html
We used <b class='highlight'>php</b>unit for our TDD.
```

### Match *Several Distinct* Keywords

If you pass in a `String` which contains multiple keywords,
it will be `split()` into an `Array` and then each
word will be highlighted in the `text`:



## How?

#### Install the module from NPM:

```sh
npm install keyword-highlighter --save
```

#### Use it in your code:

```js
var highlighter = require('keyword-highlighter');
var text   = 'I write JavaScript Code in Lovely London!';
var result = highlighter('javascript london', text);
console.log(result);
```

This will output:
```html
I write <b class='highlight'>JavaScript</b>
Code in Lovely <b class='highlight'>London</b>!
```

# Done.

<br />
<br />
<hr />

## Discussion:

### Is it *Fast*?

> Try it! And Judge for yourself!

### Should we only sub complete words...?

Consider the following example:

```js
var highlighter = require('keyword-highlighter');
var text = 'She sells sea shells on the sea shore.';
var result = highlighter('she sea', text);
console.log(result);
```
This will output:
```html
<b class='highlight'>She</b> sells
<b class='highlight'>sea</b> <b class='highlight'>she</b>lls
on the <b class='highlight'>sea</b> shore.
```

I'm not *convinced* its *useful* to *highlight* `she`
in the string `shell` ... you? *Please* [***discuss***](https://github.com/dwyl/search-result-keyword-highlighter/issues)
