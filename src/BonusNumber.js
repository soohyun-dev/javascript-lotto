const LottoGame = require("./Model/LottoGame");
const { UNIT } = require("./utils/constant");
const ERROR = require("./utils/errorMessage");

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.lottoGame = new LottoGame();
    this.validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  validate(bonusNumber) {
    if (
      this.isAllowRange(bonusNumber) ||
      this.isHaveEmpty(bonusNumber) ||
      this.isNaturalNumber(bonusNumber)
    ) {
      throw new Error(ERROR.BONUS_NUMBER);
    }
  }

  isAllowRange(bonusNumber) {
    return bonusNumber < UNIT.MIN || bonusNumber > UNIT.MAX;
  }

  isHaveEmpty(bonusNumber) {
    return bonusNumber.trim().length !== bonusNumber.length;
  }

  isNaturalNumber(bonusNumber) {
    return ~~bonusNumber !== +bonusNumber;
  }

  isDuplicate(bonusNumber, winNumber) {
    if (winNumber.includes(+bonusNumber))
      throw new Error(ERROR.BONUS_NUMBER_DUPLICATE);
  }
}

module.exports = BonusNumber;
