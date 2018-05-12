module.exports = (email, variation = "[x3][*]") => {
  // Validate email
  if (!email || !email.includes("@")) {
    throw new Error("obscure-email: No valid email was passed!");
  }

  // Validate variation
  const charLoc = variation.indexOf("[x");
  const charLoc2 = variation.indexOf("[x", charLoc + 1);
  const ranStarLoc = variation.indexOf("[r*");
  const staticStarLoc = variation.indexOf("[*");

  if (charLoc < 0 || (ranStarLoc < 0 && staticStarLoc < 0)) {
    throw new Error("obscure-email: Variation invalid!");
  }

  // Set @ loc and star str builder
  const at = email.indexOf("@");
  const getStars = (stars, loop, i) => {
    if (i === loop) {
      return stars;
    }
    return getStars((stars += "*"), loop, ++i);
  };
  const emailNoAt = email.substring(0, at);

  // Vars to be used
  let stars = "";
  let loop;
  let regex;
  let obfuscatedEmail;

  // Determine char nums
  regex = /\[x(.*?)\]/;
  const numChars = +variation.match(regex)[1] || 3;
  const subChar2 = variation.substring(charLoc + 1).match(regex);
  const numChars2 = (subChar2 && +subChar2[1]) || 0;
  const parsedNumChars = numChars + numChars2;

  // Get star string
  if (ranStarLoc > -1) {
    // Get the random number of stars or default to 10
    regex = /\[r\*(.*?)\]/;
    const numStars = variation.match(regex);
    const parsedNumStars = +numStars[1] || 10;

    loop = Math.floor(Math.random() * parsedNumStars + 1);
  } else {
    // Get the defined number of stars if any
    regex = /\[\*(.*?)\]/;
    const numStars = variation.match(regex);

    loop = +numStars[1] || Math.max(1, at - parsedNumChars);
  }

  stars = getStars(stars, loop, 0);

  // Build the email str
  if (charLoc === 0) {
    // Variations that start with text
    const suffix = email.substring(at);
    obfuscatedEmail = `${emailNoAt}${stars}${suffix}`;

    if (charLoc2 < 0) {
      if (emailNoAt.length > parsedNumChars) {
        obfuscatedEmail = `${emailNoAt.substring(
          0,
          parsedNumChars
        )}${stars}${suffix}`;
      }
    } else {
      // Variation has second char set
      if (emailNoAt.length > parsedNumChars) {
        obfuscatedEmail = `${emailNoAt.substring(
          0,
          numChars
        )}${stars}${emailNoAt.substring(at - numChars2)}${suffix}`;
      }
    }
  } else if (ranStarLoc === 0 || staticStarLoc === 0) {
    // Variations that starts with stars
    obfuscatedEmail = `${stars}${email}`;
    if (emailNoAt.length > parsedNumChars) {
      obfuscatedEmail = `${stars}${email.substring(
        at - parsedNumChars,
        email.length
      )}`;
    }
  } else {
    throw new Error("obscure-email: Could not build string...");
  }

  return obfuscatedEmail;
};
