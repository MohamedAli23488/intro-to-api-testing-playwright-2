import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoginDto } from '../dto/login.dto'

test.describe('Authorization Test scenarios', () => {
  // Positive test cases
  test('Should return token with correct username and password', async ({ request }) => {
    const requestBody = LoginDto.createLoginDto()
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    console.log('response body and token:', await response.text())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('should return token with Valid JWT', async ({ request }) => {
    const requestBody = LoginDto.createLoginDto()
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    const jwtValue = await response.text()
    const jwtRegex = /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/
    expect(response.status()).toBe(StatusCodes.OK)
    expect(jwtValue).toMatch(jwtRegex)
  })

  //   Negative test cases
  test('Should not return token with incorrect username and password and return 401', async ({
    request,
  }) => {
    const requestBody = LoginDto.wrongCredentials()
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    console.log('response body and token:', await response.text())
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  })

  test('Missing Password Should not return token and return 401', async ({ request }) => {
    const requestBody = LoginDto.missingPassword()
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    console.log('response body and token:', await response.text())
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  })

  test('Missing UserName Should not return token and return 401', async ({ request }) => {
    const requestBody = LoginDto.missingUserName()
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    console.log('response body and token:', await response.text())
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  })

  test('Sending GET method should return 405 response ', async ({ request }) => {
    const requestBody = LoginDto.createLoginDto()
    const response = await request.get('https://backend.tallinn-learning.ee/login/student', {
      data: requestBody,
    })
    console.log('response body and token:', await response.json())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })
})
