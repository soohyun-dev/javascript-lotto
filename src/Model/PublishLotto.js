const MissionUtils = require("@woowacourse/mission-utils");
const { UNIT } = require("../utils/constant");

class PublishLotto {
  constructor() {}

  publish(amount) {
    const cnt = this.checkCnt(amount);
    const lottos = [];
    for (let i = 0; i < cnt; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(this.sortNumber(numbers));
    }

    return lottos;
  }

  checkCnt(amount) {
    return ~~(amount / UNIT.THOUSAND);
  }

  sortNumber(numbers) {
    return numbers.sort((pre, cur) => pre - cur);
  }
}

module.exports = PublishLotto;
