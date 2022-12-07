const { Console } = require("@woowacourse/mission-utils");
const { RESULT } = require("../utils/constant");

const OutputView = {
  printPurchaseLottos(lottoCnt, lottos) {
    Console.print(`\n${lottoCnt}${RESULT.PURCHASE}`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  },

  printResult(result, profit) {
    Console.print(RESULT.GUIDE_LINE);
    const ranking = Object.keys(result).reverse().splice(1);
    ranking.forEach((rank) => {
      Console.print(`${RESULT[rank]}${result[rank]}${RESULT.PCS}`);
    });
    Console.print(`${RESULT.PROFIT_FRONT}${profit}${RESULT.PROFIT_BACK}`);
    Console.close();
  },
};

module.exports = OutputView;
