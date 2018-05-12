/**
 * Created by joshg on 8/14/2017.
 */
var oe = require("../dist/index");

window.onload = function() {
  console.log("Random Star Default");
  console.log("[x3][r*]");
  console.log(oe("e@asd.com", "[x3][r*]"));
  console.log(oe("em@asd.com", "[x3][r*]"));
  console.log(oe("ema@asd.com", "[x3][r*]"));
  console.log(oe("email@asd.com", "[x3][r*]"));

  console.log("[r*][x3]");
  console.log(oe("e@asd.com", "[r*][x3]"));
  console.log(oe("em@asd.com", "[r*][x3]"));
  console.log(oe("ema@asd.com", "[r*][x3]"));
  console.log(oe("email@asd.com", "[r*][x3]"));

  console.log("Star Default");
  console.log("[x3][*]");
  console.log(oe("e@asd.com", "[x3][*]"));
  console.log(oe("em@asd.com", "[x3][*]"));
  console.log(oe("ema@asd.com", "[x3][*]"));
  console.log(oe("email@asd.com", "[x3][*]"));

  console.log("[*][x3]");
  console.log(oe("e@asd.com", "[*][x3]"));
  console.log(oe("em@asd.com", "[*][x3]"));
  console.log(oe("ema@asd.com", "[*][x3]"));
  console.log(oe("email@asd.com", "[*][x3]"));

  console.log("Star w/ Set Value");
  console.log("[*3][x3]");
  console.log(oe("e@asd.com", "[*3][x3]"));
  console.log(oe("em@asd.com", "[*3][x3]"));
  console.log(oe("ema@asd.com", "[*3][x3]"));
  console.log(oe("email@asd.com", "[*3][x3]"));

  console.log("[x3][*3]");
  console.log(oe("e@asd.com", "[x3][*3]"));
  console.log(oe("em@asd.com", "[x3][*3]"));
  console.log(oe("ema@asd.com", "[x3][*3]"));
  console.log(oe("email@asd.com", "[x3][*3]"));

  console.log("Star w/ Random Set Range");
  console.log("[x3][r*6]");
  console.log(oe("e@asd.com", "[x3][r*6]"));
  console.log(oe("em@asd.com", "[x3][r*6]"));
  console.log(oe("ema@asd.com", "[x3][r*6]"));
  console.log(oe("email@asd.com", "[x3][r*6]"));

  console.log("[r*6][x3]");
  console.log(oe("e@asd.com", "[r*6][x3]"));
  console.log(oe("em@asd.com", "[r*6][x3]"));
  console.log(oe("ema@asd.com", "[r*6][x3]"));
  console.log(oe("email@asd.com", "[r*6][x3]"));

  console.log("--------------------");
  console.log("[x1][r*][x1]");
  console.log(oe("e@asd.com", "[x1][r*][x1]"));
  console.log(oe("em@asd.com", "[x1][r*][x1]"));
  console.log(oe("ema@asd.com", "[x1][r*][x1]"));
  console.log(oe("email@asd.com", "[x1][r*][x1]"));

  console.log("[x1][*][x1]");
  console.log(oe("e@asd.com", "[x1][*][x1]"));
  console.log(oe("em@asd.com", "[x1][*][x1]"));
  console.log(oe("ema@asd.com", "[x1][*][x1]"));
  console.log(oe("email@asd.com", "[x1][*][x1]"));

  console.log("[x1][r*4][x1]");
  console.log(oe("e@asd.com", "[x1][r*4][x1]"));
  console.log(oe("em@asd.com", "[x1][r*4][x1]"));
  console.log(oe("ema@asd.com", "[x1][r*4][x1]"));
  console.log(oe("email@asd.com", "[x1][r*4][x1]"));

  console.log("[x1][*3][x1]");
  console.log(oe("e@asd.com", "[x1][*3][x1]"));
  console.log(oe("em@asd.com", "[x1][*3][x1]"));
  console.log(oe("ema@asd.com", "[x1][*3][x1]"));
  console.log(oe("email@asd.com", "[x1][*3][x1]"));
};
