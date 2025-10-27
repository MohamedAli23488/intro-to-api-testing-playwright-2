import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoginDto } from '../dto/login.dto'

test('Should return token with correct username and password', async ({ request }) => {
  // prepare request body
  const requestBody = LoginDto.createLoginDto()
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response body and token:', await response.text())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Should not return token with incorrect username and password', async ({ request }) => {
  // prepare request body
  const requestBody = new LoginDto('mohamedmorsy','')
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response body and token:', await response.text())
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})