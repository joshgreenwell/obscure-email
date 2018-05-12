/* global describe, expect, it */

describe("Starts with a *", () => {
  describe("[r*#][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[r*][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[*][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[*#][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });
});

describe("Starts with a letter, ends with a *", () => {
  describe("[x][r*#]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][r*]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][*]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][*#]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });
});

describe("Starts with a letter, ends with a letter", () => {
  describe("[x][r*#][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][r*][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][*][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });

  describe("[x][*#][x]", () => {
    it.skip("should obfuscate an email with 1 letter (edge case)", () => {
      expect();
    });
    it("should obfuscate an email with less letters then in variation", () => {
      expect();
    });
    it("should obfuscate an email with the same number of letters as variation", () => {
      expect();
    });
    it("should obfuscate an email with more letters then the variation", () => {
      expect();
    });
  });
});

describe("Errors", () => {
  describe("Validation", () => {
    it("should throw an error if no email is passed in", () => {
      expect();
    });
    it("should throw an error if an invalid email is passed in", () => {
      expect();
    });
    it("should throw an error if no [x] is passed in to the variation", () => {
      expect();
    });
    it("should throw an error if no [*] is passed in to the variation", () => {
      expect();
    });
  });
});
