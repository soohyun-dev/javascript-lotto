const CntCorrect = require("./cntCorrect");
const PublishLotto = require("./PublishLotto");
const { WIN_MONEY } = require("../utils/constant");

class LottoGame {
  constructor() {
    this.publishLotto = new PublishLotto();
    this.cntCorrect = new CntCorrect();
    this.purchaseAmount = 0;
    this.winNumber = [];
    this.bonusNumber = 0;
    this.haveLottoNumbers = [];
  }

  buy(amount) {
    this.purchaseAmount = amount;
    this.haveLottoNumbers = this.publishLotto.publish(amount);

    return [this.haveLottoNumbers.length, this.haveLottoNumbers];
  }

  getWinNumber(winNumbers) {
    this.winNumber = winNumbers.split(",").map(Number);
  }

  getBonusNubmer(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  giveWinNumber() {
    return this.winNumber;
  }

  makeResult() {
    const result = this.cntCorrect.getInfo(
      this.haveLottoNumbers,
      this.winNumber,
      this.bonusNumber
    );
    const profit = this.cntProfit(result);
    return [result, profit];
  }

  cntProfit(result) {
    const winMoney = this.getTotal(result);
    return ((winMoney / this.purchaseAmount).toFixed(3) * 100).toFixed(1);
  }

  getTotal(result) {
    let winMoney = 0;
    const rankings = Object.keys(result);
    rankings.forEach((ranking) => {
      winMoney += result[ranking] * WIN_MONEY[ranking];
    });

    return winMoney;
  }
}

module.exports = LottoGame;
