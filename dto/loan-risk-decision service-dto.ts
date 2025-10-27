export class LoanRiskDecisionServiceDto {
  income: number
  debt: number
  age: number
  employed: boolean
  loanAmount: number
  loanPeriod: number

  constructor(
    income: number,
    debt: number,
    age: number,
    employed: boolean,
    loanAmount: number,
    loanPeriod: number,
  ) {
    this.income = income
    this.debt = debt
    this.age = age
    this.employed = employed
    this.loanAmount = loanAmount
    this.loanPeriod = loanPeriod
  }
  static assessNewNegativeLoanWithHighRiskDecision(): LoanRiskDecisionServiceDto {
    return new LoanRiskDecisionServiceDto(100, 0, 20, true, 1000, 24)
  }

  static assessNewPositiveLoanWithMediumRiskDecision(): LoanRiskDecisionServiceDto {
    return new LoanRiskDecisionServiceDto(20000, 0, 30, true, 500, 6)
  }

  static assessNewPositiveLoanWithLowRiskDecision(): LoanRiskDecisionServiceDto {
    return new LoanRiskDecisionServiceDto(20000, 0, 30, true, 500, 12)
  }
}
