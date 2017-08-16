/**
 * Created by joshg on 8/14/2017.
 */
var oe = require('obscure-email')

window.onload = function () {
  console.log(oe('email@asd.com'))
  console.log(oe('emailasdasdasd@asd.com'))
  console.log(oe('emailasdasdasd@asd.com', 'fir3rs'))
  console.log(oe('asdemail@asd.com', 'end3'))
  console.log(oe('asdemail@asd.com', 'end3rs'))
  console.log(oe('asdemail@asd.com', 'default'))
  console.log(oe('il@asd.com'))
  console.log(oe('i@asd.com'))
  console.log(oe('il@asd.com', 'end3'))
  console.log(oe('i@asd.com', 'end3'))
    // console.log(oe());
    // console.log(oe());
  console.log(oe('asd.com'))
  console.log(oe())
  console.log(oe('', 'asd'))
}
