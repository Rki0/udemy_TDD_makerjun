// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};

const clickOperationButtons = (operation) => {
  cy.get(".operation").contains(operation).click();
};

const checkDisplayValue = (value) => {
  cy.get("#total").should("have.text", value);
};

// 테스트하고자 하는 핵심 기능이 뭐지?
// 계산기를 클릭해서 원하는 값이 display에 표시되는 것!
describe("계산기 앱 테스트", () => {
  // 각 테스트(it)에 대하여 사전에 실행한다.
  beforeEach("페이지 방문", () => {
    cy.visit("../../index.html");
  });

  it("디스플레이에 기본적으로 숫자 0이 표시된다.", () => {
    checkDisplayValue(0);
  });

  // know to unknown으로 점진적으로 원하는 결과치에 다가가는 것이다!
  it("1개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1"]);
    checkDisplayValue("1");
  });

  it("2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1", "2"]);
    checkDisplayValue("12");
  });

  it("3개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    checkDisplayValue("123");
  });

  it("3개의 숫자 버튼을 클릭하고 연산자 버튼을 클릭하면 display에 연산자가 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    checkDisplayValue("123+");
  });

  it("연산자 버튼을 여러 번 누르면 display에 마지막 연산자만 표시한다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickOperationButtons("-");
    checkDisplayValue("123-");
  });

  it("2번째 숫자를 입력하면 display에 2번째 숫자를 누적하여 표시한다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    checkDisplayValue("123+456");
  });

  xit("덧셈 : 123+456을 클릭하고 = 버튼을 클릭하면 display에 연산의 결과값이 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue("579");
  });

  xit("뺄셈 : 123-456을 클릭하고 = 버튼을 클릭하면 display에 연산의 결과값이 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue("-333");
  });

  xit("곱셈 : 123X456을 클릭하고 = 버튼을 클릭하면 display에 연산의 결과값이 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue("56088");
  });

  xit("나눗셈 : 123/456을 클릭하고 = 버튼을 클릭하면 display에 연산의 결과값이 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue("0");
  });

  xit("AC 버튼을 클릭하면 display의 값이 0으로 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    cy.get(".modifier").click();
    checkDisplayValue("0");
  });
});
