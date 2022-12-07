const BonusNumber = require("../BonusNumber");
const Lotto = require("../Lotto");
const LottoGame = require("../Model/LottoGame");
const Purchase = require("../Purchase");
const InputView = require("../View/inputView");
const OutputView = require("../View/OutputView");

class Controller {
  constructor() {
    this.lottogame = new LottoGame();
  }

  start() {
    InputView.inputPurchaseAmount(this.isAllowAmount.bind(this));
  }

  isAllowAmount(amount) {
    new Purchase(amount);
    this.orderBuyLotto(amount);
  }

  orderBuyLotto(amount) {
    const [lottoCnt, lottos] = this.lottogame.buy(amount);
    this.orderPrintPurchased(lottoCnt, lottos);
  }

  orderPrintPurchased(lottoCnt, lottos) {
    OutputView.printPurchaseLottos(lottoCnt, lottos);
    this.orderInputWinNumber();
  }

  orderInputWinNumber() {
    InputView.inputWinNumber(this.isAllowNumbers.bind(this));
  }

  isAllowNumbers(numbers) {
    new Lotto(numbers.split(","));
    this.giveWinNumber(numbers);
  }

  giveWinNumber(winNumbers) {
    this.lottogame.getWinNumber(winNumbers);
    this.orderInputBonusNumber();
  }

  orderInputBonusNumber() {
    InputView.inputBonusNumber(this.isAllowNumber.bind(this));
  }

  isAllowNumber(number) {
    this.bonusNumber = new BonusNumber(number);
    const winNumber = this.lottogame.giveWinNumber();
    this.bonusNumber.isDuplicate(number, winNumber);
    this.giveBonusNumber(number);
  }

  giveBonusNumber(bonusNumber) {
    this.lottogame.getBonusNubmer(bonusNumber);
    const [result, profit] = this.lottogame.makeResult();
    this.orderPrintResult(result, profit);
  }

  orderPrintResult(result, profit) {
    OutputView.printResult(result, profit);
  }
}

module.exports = Controller;
