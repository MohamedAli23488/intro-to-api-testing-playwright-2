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

# Checklist 2

# Post request for credit risk assessment

# Assessing new loan risk with negative decision with high risk
| Test Scenario                                                                                   | Response Code     | Response Body                                                    |
|-------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------|
| Validate risk decision of loan for user with income range from than 0 to 1000 & big loan amount | `200:OK`          | `{ "riskDecision": "negative" , "riskLevel": "Very High Risk" }` |
# Assessing new loan risk with positive decision with Medium risk
| Test Scenario                                                                                                                           | Response Code  | Response Body                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------|--------------------------------------------------------------|
| Validate risk decision for user with income range from than 1000 to 5000 & loan amount range from 100 to 500 & Loan period less than 12 | `200:OK`       | `{ "riskDecision": "positive", "riskLevel": "Medium Risk" }` |
# Assessing new loan risk with positive decision with Low risk
| Test Scenario                                                                                                                              | Response Code  | Response Body                                                |
|--------------------------------------------------------------------------------------------------------------------------------------------|----------------|--------------------------------------------------------------|
| Validate risk decision for user with income range from than 1000 to 5000 & loan amount range from 100 to 500 & Loan period greater than 12 | `200:OK`       | `{ "riskDecision": "positive", "riskLevel": "Low Risk" }` |
# Assessing new loan risk with general cases
| Test Scenario                                                    | Response Code     | Response Body                                                                                              |
|------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------|
| Validate the creation of new loan with all valid data            | `200:OK`          | `{"riskScore":xx,"riskLevel":"xxx Risk","riskPeriods":[x,x,x],"applicationId":"...","riskDecision":"xxx"}` |
| Validate the creation of new loan with all INVALID data          | `400:Bad Request` | `Text response Body`                                                                                       |
| Validate response body for user with income greater than 0       | `200:OK`          | `{"riskScore":xx,"riskLevel":"xxx Risk","riskPeriods":[x,x,x],"applicationId":"...","riskDecision":"xxx"}` |
| Validate response body for user with income less than 0          | `400:Bad Request` | `Text response Body`                                                                                       |
| validate response body  for user with debt >= 0                  | `200:OK`          | `{"riskDecision": "negative"}`                                                                             |
| Validate response body for user with debt < 0                    | `400:Bad Request` | `Text response Body`                                                                                       |
| Validate response body for user with age > 16 (Not Implemented)  | `200:OK`          | `{"riskDecision": "negative"}`                                                                             |
| Validate response body for user with age < 0  (Not Implemented)  | `400:Bad Request` | `Text response Body`                                                                                       |
