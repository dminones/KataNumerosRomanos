var expect = chai.expect;

describe("Transformación de Arábico a Romano", function() {
  context(
    " Usuario inserta un numero que se transforma a una sola letra",
    function() {
      it("1 -> I", function() {
        expect(arabicoARomano(1)).to.be.equal("I");
      });

      it("5 -> V", function() {
        expect(arabicoARomano(5)).to.be.equal("V");
      });
    }
  );
});
