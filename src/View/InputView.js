const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../utils/constant");

const InputView = {
  inputPurchaseAmount(input) {
    Console.readLine(MESSAGE.PURCHASE, input);
  },

  inputWinNumber(input) {
    Console.readLine(MESSAGE.WIN_NUMBER, input);
  },

  inputBonusNumber(input) {
    Console.readLine(MESSAGE.BONUS_NUMBER, input);
  },
};

module.exports = InputView;
