const MESSAGE = {
  PURCHASE: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const RESULT = {
  PURCHASE: "개를 구매했습니다.",
  GUIDE_LINE: "\n당첨 통계\n---",
  1: "6개 일치 (2,000,000,000원) - ",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  3: "5개 일치 (1,500,000원) - ",
  4: "4개 일치 (50,000원) - ",
  5: "3개 일치 (5,000원) - ",
  PCS: "개",
  PROFIT_FRONT: "총 수익률은 ",
  PROFIT_BACK: "%입니다.",
};

const RANKING = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  NONE: 6,
};

const CORRECT = {
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  NOT_BONUS: false,
  BONUS: true,
};

const UNIT = {
  THOUSAND: 1000,
  MIN: 1,
  MAX: 45,
  ALLOW: false,
  NOT_ALLOW: true,
  CNT: 1,
};

const WIN_MONEY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  6: 0,
};

module.exports = { MESSAGE, RESULT, RANKING, CORRECT, UNIT, WIN_MONEY };
