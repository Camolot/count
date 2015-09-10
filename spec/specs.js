describe('countup', function() {

    it("returns error when mulitple is greater than high end", function() {
      expect(countUp(1, 2)).to.equal("error");
    });

    it("returns a count to two by single digits", function() {
      expect(countUp(2, 1)).to.equal("1,2");
    });

    it("returns a count to ten by two", function() {
      expect(countUp(10, 2)).to.equal("2,4,6,8,10");
    });

    it("returns a count to one hundred by fifty", function() {
      expect(countUp(100, 50)).to.equal("50,100");
    });


});
