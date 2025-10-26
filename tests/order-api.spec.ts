import { test, expect } from '@playwright/test'
import { OrderDto } from '../dto/order-dto'
import { StatusCodes } from 'http-status-codes'

test('put order with Valid ID should receive code 200', async ({ request }) => {
  const requestBody = new OrderDto('OPEN', 1, 'Moh', '4587', 'adc', 9)
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/9', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('put order with Valid API Key should receive code 200', async ({ request }) => {
  const requestBody = new OrderDto('OPEN', 0, 'Moh', '4587', 'adc', 4)
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/2', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('put order with ID less than 1 should receive code 400', async ({ request }) => {
  const requestBody = new OrderDto('OPEN', 0, 'Moh', '4587', 'adc', 8)
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})
