const { RANKING, CORRECT, UNIT } = require("../utils/constant");

class CntCorrect {
  constructor() {
    this.rating = {};
    this.winNubmers = [];
    this.bonusNumber = 0;
  }

  getInfo(lottos, winNubmers, bonusNumber) {
    this.winNubmers = winNubmers;
    this.bonusNumber = bonusNumber;
    for (let rank = 1; rank <= 6; rank++) this.rating[rank] = 0;
    lottos.forEach((lotto) => {
      this.checkLotto(lotto);
    });

    return this.rating;
  }

  checkLotto(lotto) {
    const [cntCorrect, isHaveBouns] = this.cntCorrectNumber(lotto);
    this.rating[this.checkRating(cntCorrect, isHaveBouns)] += UNIT.CNT;
  }

  cntCorrectNumber(lotto) {
    let cntCorrect = 0;
    let isHaveBonus = CORRECT.NOT_BONUS;
    lotto.forEach((number) => {
      if (this.winNubmers.includes(number)) cntCorrect += UNIT.CNT;
      if (this.bonusNumber === number) isHaveBonus = CORRECT.BONUS;
    });
    return [cntCorrect, isHaveBonus];
  }

  checkRating(cntCorrect, isHaveBonus) {
    switch (cntCorrect) {
      case CORRECT.SIX:
        return RANKING.FIRST;
      case CORRECT.FIVE:
        return isHaveBonus ? RANKING.SECOND : RANKING.THIRD;
      case CORRECT.FOUR:
        return RANKING.FOURTH;
      case CORRECT.THREE:
        return RANKING.FIFTH;
    }
    return RANKING.NONE;
  }
}

module.exports = CntCorrect;
