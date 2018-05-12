/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
      /**
       * Created by joshg on 8/14/2017.
       */
      var oe = __webpack_require__(1);

      window.onload = function() {
        // console.log('Random Star Default')
        console.log("[x3][r*]");
        console.log(oe("e@asd.com", "[x3][r*]"));
        console.log(oe("em@asd.com", "[x3][r*]"));
        console.log(oe("ema@asd.com", "[x3][r*]"));
        console.log(oe("email@asd.com", "[x3][r*]"));

        // console.log('[r*][x3]')
        // console.log(oe('e@asd.com', '[r*][x3]'))
        // console.log(oe('em@asd.com', '[r*][x3]'))
        // console.log(oe('ema@asd.com', '[r*][x3]'))
        // console.log(oe('email@asd.com', '[r*][x3]'))

        console.log("Star Default");
        console.log("[x3][*]");
        console.log(oe("e@asd.com", "[x3][*]"));
        console.log(oe("em@asd.com", "[x3][*]"));
        console.log(oe("ema@asd.com", "[x3][*]"));
        console.log(oe("email@asd.com", "[x3][*]"));

        // console.log('[*][x3]')
        // console.log(oe('e@asd.com', '[*][x3]'))
        // console.log(oe('em@asd.com', '[*][x3]'))
        // console.log(oe('ema@asd.com', '[*][x3]'))
        // console.log(oe('email@asd.com', '[*][x3]'))

        // console.log('Star w/ Set Value')
        // console.log('[*3][x3]')
        // console.log(oe('e@asd.com', '[*3][x3]'))
        // console.log(oe('em@asd.com', '[*3][x3]'))
        // console.log(oe('ema@asd.com', '[*3][x3]'))
        // console.log(oe('email@asd.com', '[*3][x3]'))

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

        // console.log('[r*6][x3]')
        // console.log(oe('e@asd.com', '[r*6][x3]'))
        // console.log(oe('em@asd.com', '[r*6][x3]'))
        // console.log(oe('ema@asd.com', '[r*6][x3]'))
        // console.log(oe('email@asd.com', '[r*6][x3]'))

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

      /***/
    },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
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
          console.log("numstars", numStars);
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
              console.log(obfuscatedEmail);
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

      /***/
    }
    /******/
  ]
);
