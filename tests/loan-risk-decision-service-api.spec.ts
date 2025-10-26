import { expect, test } from '@playwright/test'
import { LoanRiskDecisionServiceDto } from '../dto/loan-risk-decision service-dto'
import { StatusCodes } from 'http-status-codes'

test('Validate the risk decision of Loan for user with income range from than 0 to 1000 & big loan amount should return 200 & Very High Risk decision', async ({
  request,
}) => {
  const requestBody = LoanRiskDecisionServiceDto.assessNewNegativeLoanWithHighRiskDecision()
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBe('Very High Risk')
  expect.soft(responseBody.riskDecision).toBe('negative')
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test(' Validate risk decision for user with income range from than 1000 to 5000 & loan amount range from 100 to 500 & Loan period 6 should return 200 & Medium Risk decision', async ({
  request,
}) => {
  const requestBody = LoanRiskDecisionServiceDto.assessNewPositiveLoanWithMediumRiskDecision()
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBe('Medium Risk')
  expect.soft(responseBody.riskDecision).toBe('positive')
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test(' Validate risk decision for user with income range from than 1000 to 5000 & loan amount range from 100 to 500 & Loan period 12 should return 200 & Low Risk decision', async ({
  request,
}) => {
  const requestBody = LoanRiskDecisionServiceDto.assessNewPositiveLoanWithLowRiskDecision()
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBe('Low Risk')
  expect.soft(responseBody.riskDecision).toBe('positive')
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test('Validate the creation of Loan with all valid date should return 200', async ({ request }) => {
  const requestBody = new LoanRiskDecisionServiceDto(1000, 0, 20, true, 500, 12)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBeDefined()
  expect.soft(responseBody.riskDecision).toBeDefined()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test('Validate the creation of Loan with Invalid date should return 400', async ({ request }) => {
  const requestBody = new LoanRiskDecisionServiceDto(0, -1, 15, false, -1000, 0)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.text()
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Validate the assertion of Loan with income greater than 0 should return 200', async ({
  request,
}) => {
  const requestBody = new LoanRiskDecisionServiceDto(10000, 0, 20, true, 1000, 24)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBeDefined()
  expect.soft(responseBody.riskDecision).toBeDefined()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test('Validate the assertion of Loan with with income less than 0 should return 400', async ({
  request,
}) => {
  const requestBody = new LoanRiskDecisionServiceDto(-10, 0, 20, true, 1000, 24)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.text()
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Validate the assertion of Loan with Debt equal or greater than 0 should return 200', async ({
  request,
}) => {
  const requestBody = new LoanRiskDecisionServiceDto(10000, 5, 20, true, 1000, 24)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.json()
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseBody.riskLevel).toBeDefined()
  expect.soft(responseBody.riskDecision).toBeDefined()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.applicationId).toBeDefined()
})

test('Validate the assertion of Loan with with Debt less than 0 should return 400', async ({
  request,
}) => {
  const requestBody = new LoanRiskDecisionServiceDto(1000, -10, 20, true, 1000, 24)
  const response = await request.post(
    'https://backend.tallinn-learning.ee/api/loan-calc/decision',
    {
      data: requestBody,
    },
  )
  const responseBody = await response.text()
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  console.log(responseBody)
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})
