import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('get order with correct id should receive code 200', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 200
  expect(response.status()).toBe(200)
})

test('get order with  order id 5 should receive code 200', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/5')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 200
  expect(response.status()).toBe(200)
})

test('get order with  wrong ID should receive code 400', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/0')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 400 Bad
  expect(response.status()).toBe(400)
})

test('post order with correct data should receive code 201', async ({ request }) => {
  // prepare request body
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/test-orders', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

// PUT Request
test('put order with Valid ID should receive code 200', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/5', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('put order with Valid API Key should receive code 200', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 4,
  }
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

test('put order with ID less than 1 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
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

test('put order with ID more than 10 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/11', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('put order with Invalid API Key should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: 'abcdefghijklmnop',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('put order with API Key less than 16 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '1234567890123',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('put order with API Key more than 16 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '1234567890123456789',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('put order with Empty API Key should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

// Delete Request

test('Delete order with Valid ID should receive code 204', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 9,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/9', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Delete order with Valid API Key should receive code 204', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 4,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/9', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Delete order with ID less than 1 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Delete order with ID more than 10 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 11,
  }
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/11', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Delete order with Invalid API Key should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: 'abcdefghijklmnop',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/8', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('Delete order with API Key less than 16 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '1234567890123',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders8', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('Delete order with API Key more than 16 should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '1234567890123456789',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/8', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('Delete order with Empty API Key should receive code 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 8,
  }
  const requestHeaders = {
    api_key: '',
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/8', {
    data: requestBody,
    headers: requestHeaders,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.text())
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

// Get request (Login with username and password)

test('Get order with Valid username & password should receive code 200', async ({ request }) => {
  const username = 'Mohamed'
  const password = 'Abcd123456'

  const requestHeaders = {
    username: username,
    password: password,
  }

  const response = await request.get(
    'https://backend.tallinn-learning.ee/test-orders?username=Mohamed&password=Abcd123456',
    {
      headers: requestHeaders,
    },
  )
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Get order with Valid username & Missing password should receive code 500', async ({
  request,
}) => {
  const username = 'Mohamed'
  const password = ''

  const requestHeaders = {
    username: username,
    password: password,
  }

  const response = await request.get(
    'https://backend.tallinn-learning.ee/test-orders?username=Mohamed',
    {
      headers: requestHeaders,
    },
  )
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
})

test('Get order with Missing username & valid password should receive code 500', async ({
  request,
}) => {
  const username = ''
  const password = 'Abcd123456'

  const requestHeaders = {
    username: username,
    password: password,
  }

  const response = await request.get(
    'https://backend.tallinn-learning.ee/test-orders?password=Abcd123456',
    {
      headers: requestHeaders,
    },
  )
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
})
