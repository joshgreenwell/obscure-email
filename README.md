## Introduction

This is a module that will obfuscate emails. There are four variations as of now, listed below.

Any style not listed below, and that is passed in, will be `null`

## Install

```
npm install --save obscure-email
```

## Examples

```javascript
var obf_email = require("obscure-email");

obf_email("someone@something.com");

obf_email("someone@something.com", "default");
```

## Styles

| styles   | description                                                                                                 | example output                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| default  | Shows the first 3 letters and stars the rest of the letters till the @ sign                                 | email@foo.com : ema\*\*@foo.com                                    |
| end3     | Stars the letters until the last 3 before the @ sign                                                        | email@foo.com : \*\*ail@foo.com                                    |
| first3rs | Displays the first 3 letters with a random number of stars after, between 3 and 13                          | email@foo.com : ema\*\*\*@foo.com -- ema\*****\*\*\*\*****@foo.com |
| end3rs   | Displays a random number of stars first, between 3 and 13, and then the last 3 characters before the @ sign | email@foo.com : \*\*\*ail@foo.com -- \*****\*\*\*\*****ail@foo.com |

## Edge Case Examples

| styles   | edge examples output                                                                         |
| -------- | -------------------------------------------------------------------------------------------- |
| default  | e@foo.com : \*@foo.com -- em@foo.com : e\*@foo.com -- ema@foo.com : em\*@foo.com             |
| end3     | e@foo.com : \*@foo.com -- em@foo.com : \*m@foo.com -- ema@foo.com : \*ma@foo.com             |
| first3rs | e@foo.com : \*\*\*@foo.com -- em@foo.com : e\*\*\*@foo.com -- ema@foo.com : em\*\*\*@foo.com |
| end3rs   | e@foo.com : \*\*\*@foo.com -- em@foo.com : \*\*\*m@foo.com -- ema@foo.com : \*\*\*ma@foo.com |

**NOTE:** As above, you can go to 13 stars, 3 was chosen here for simplicity.
