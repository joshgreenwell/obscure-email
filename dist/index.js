"use strict";

module.exports = function(email) {
  var variation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "[x3][*]";

  // Validate email
  if (!email || !email.includes("@")) {
    throw new Error("obscure-email: No valid email was passed!");
  }

  // Validate variation
  var charLoc = variation.indexOf("[x");
  var charLoc2 = variation.indexOf("[x", charLoc + 1);
  var ranStarLoc = variation.indexOf("[r*");
  var staticStarLoc = variation.indexOf("[*");

  if (charLoc < 0 || (ranStarLoc < 0 && staticStarLoc < 0)) {
    throw new Error("obscure-email: Variation invalid!");
  }

  // Set @ loc and star str builder
  var at = email.indexOf("@");
  var getStars = function getStars(stars, loop, i) {
    if (i === loop) {
      return stars;
    }
    return getStars((stars += "*"), loop, ++i);
  };
  var emailNoAt = email.substring(0, at);

  // Vars to be used
  var stars = "";
  var loop = void 0;
  var regex = void 0;
  var obfuscatedEmail = void 0;

  // Determine char nums
  regex = /\[x(.*?)\]/;
  var numChars = +variation.match(regex)[1] || 3;
  var subChar2 = variation.substring(charLoc + 1).match(regex);
  var numChars2 = (subChar2 && +subChar2[1]) || 0;
  var parsedNumChars = numChars + numChars2;

  // Get star string
  if (ranStarLoc > -1) {
    // Get the random number of stars or default to 10
    regex = /\[r\*(.*?)\]/;
    var numStars = variation.match(regex);
    var parsedNumStars = +numStars[1] || 10;

    loop = Math.floor(Math.random() * parsedNumStars + 1);
  } else {
    // Get the defined number of stars if any
    regex = /\[\*(.*?)\]/;
    var _numStars = variation.match(regex);

    loop = +_numStars[1] || Math.max(1, at - parsedNumChars);
  }

  stars = getStars(stars, loop, 0);

  // Build the email str
  if (charLoc === 0) {
    // Variations that start with text
    var suffix = email.substring(at);
    obfuscatedEmail = "" + emailNoAt + stars + suffix;

    if (charLoc2 < 0) {
      if (emailNoAt.length > parsedNumChars) {
        obfuscatedEmail =
          "" + emailNoAt.substring(0, parsedNumChars) + stars + suffix;
      }
    } else {
      // Variation has second char set
      if (emailNoAt.length > parsedNumChars) {
        obfuscatedEmail =
          "" +
          emailNoAt.substring(0, numChars) +
          stars +
          emailNoAt.substring(at - numChars2) +
          suffix;
      }
    }
  } else if (ranStarLoc === 0 || staticStarLoc === 0) {
    // Variations that starts with stars
    obfuscatedEmail = "" + stars + email;
    if (emailNoAt.length > parsedNumChars) {
      obfuscatedEmail =
        "" + stars + email.substring(at - parsedNumChars, email.length);
    }
  } else {
    throw new Error("obscure-email: Could not build string...");
  }

  return obfuscatedEmail;
};
