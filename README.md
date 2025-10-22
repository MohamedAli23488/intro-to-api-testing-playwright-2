# Checklist
Creating checklist for Put, Delete and Get requests.
1-PUT request to update an existing order using the Order ID and API key.
2-Delete request to delete an existing order using the Order ID and API key.
3-Get request using valid username and valid password.

# Put request checklist.
| Test Scenario                                 | Response Code     | 
|-----------------------------------------------|-------------------|
| Update order with valid order ID              | `200:Success`     |
| Update order with valid API Key               | `200:Success`     |
| Update order with ID less than 1              | `400:Bad Request` |
| Update order with ID more than 10             | `400:Bad Request` |
| Update order with invalid API Key             | `400:Bad Request` |
| Update order with API Key less than 16 digits | `400:Bad Request` |
| Update order with API Key more than 16 digits | `400:Bad Request` |
| Update order with empty API Key               | `400:Bad Request` |

# Delete request checklist.
| Test Scenario                                 | Response Code     | 
|-----------------------------------------------|-------------------|
| Delete order with valid order ID              | `204:Success`     |
| Delete order with valid API Key               | `204:Success`     |
| Delete order with ID less than 1              | `400:Bad Request` |
| Delete order with ID more than 10             | `400:Bad Request` |
| Delete order with invalid API Key             | `400:Bad Request` |
| Delete order with API Key less than 16 digits | `400:Bad Request` |
| Delete order with API Key more than 16 digits | `400:Bad Request` |
| Delete order with empty API Key               | `400:Bad Request` |

# Get request (Login with username and password) checklist.
| Test Scenario                                  | Response Code               | 
|------------------------------------------------|-----------------------------|
| Login with valid username and password         | `200:Success`               |
| Login with valid username and missing password | `500:Internal Server error` |
| Login with missing username and Valid password | `500:Internal Server error` |
