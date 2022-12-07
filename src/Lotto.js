const { UNIT } = require("./utils/constant");
const ERROR = require("./utils/errorMessage");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (this.isAllowRange(numbers) || this.isNaturalNumber(numbers)) {
      throw new Error(ERROR.WIN_NUMBER);
    }

    if (this.isDuplicate(numbers)) throw new Error(ERROR.WIN_NUMBER_DUPLICATE);
  }

  isAllowRange(numbers) {
    let check = UNIT.ALLOW;
    numbers.forEach((number) => {
      if (+number < UNIT.MIN || +number > UNIT.MAX) check = UNIT.NOT_ALLOW;
    });

    return check;
  }

  isNaturalNumber(numbers) {
    let check = UNIT.ALLOW;
    numbers.forEach((number) => {
      if (String(number).length !== String(~~number).length)
        check = UNIT.NOT_ALLOW;
    });

    return check;
  }

  isDuplicate(numbers) {
    const list = numbers.map((number) => Number(number));
    return numbers.length !== [...new Set(list)].length;
  }
}

module.exports = Lotto;
