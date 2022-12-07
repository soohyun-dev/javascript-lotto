const { UNIT } = require("./utils/constant");
const ERROR = require("./utils/errorMessage");

class Purchase {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (
      this.isPositive(amount) ||
      this.isThousands(amount) ||
      this.isNaturalNumber(amount)
    ) {
      throw new Error(ERROR.PURCAHSE_AMOUNT);
    }
  }

  isPositive(amount) {
    return amount < UNIT.THOUSAND;
  }

  isThousands(amount) {
    return amount % UNIT.THOUSAND !== 0;
  }

  isNaturalNumber(amount) {
    return String(amount).length !== String(~~amount).length;
  }
}

module.exports = Purchase;
