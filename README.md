## Introduction

This is a module that will obfuscate emails. There are four variations as of now listed below

## Install

```
npm install --save obscure-email
```

## Examples

```javascript
var obf_email = require('obscure-email');

obf_email('someone@something.com');

obf_email('someone@something.com', 'default');
```

## Styles

styles | description
------ | -----------
default | Shows the first 3 letters and stars the rest of the letters till the @ sign
end3 | Stars the letters until the last 3 before the @ sign
first3rs | Displays the first 3 letters with a random number of starts after, between 3 and 13
end3rs | Displays a random number of starts first, between 3 and 13, and then the last 3 characters before the @ sign