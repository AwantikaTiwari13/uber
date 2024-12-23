# User API Documentation

## Register User
Endpoint for registering a new user in the system.

### HTTP Method & Endpoint
- **Method**: POST
- **Path**: `/users/register`

### Request Body Format
JSON object containing:
```
{
    "fullname": {
        "firstname": string,    // required, min 3 chars
        "lastname": string      // optional, min 3 chars
    },
    "email": string,           // required, valid email
    "password": string         // required, min 6 chars
}
```
### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

# Captain API Documentation

## Register Captain
Endpoint for registering a new captain in the system.

### HTTP Method & Endpoint
- **Method**: POST
- **Path**: `/captains/register`

### Request Body Format
JSON object containing:
```
{
    "fullname": {
        "firstname": string,    // required, min 3 chars
        "lastname": string,     // required, min 3 chars
    },
    "email": string,           // required, valid email
    "password": string,        // required, min 6 chars
    "vehicle": {
        "color": string,       // required, min 3 chars
        "plate": string,       // required, min 3 chars
        "capacity": number,    // required, min 1
        "vehicleType": string  // required, enum: ['car', 'motorcycle', 'auto']
    }
}
```

### Validation Rules
1. Personal Information:
   - firstname: Minimum 3 characters
   - lastname: Minimum 3 characters
   - email: Must be valid email format
   - password: Minimum 6 characters

2. Vehicle Information:
   - color: Minimum 3 characters
   - plate: Minimum 3 characters
   - capacity: Integer greater than 0
   - vehicleType: Must be one of: 'car', 'motorcycle', 'auto'

### Response Status Codes
- 201: Created - Successful registration
- 400: Bad Request - Validation errors
- 409: Conflict - Email already exists
- 500: Internal Server Error - Server-side issues

### Success Response Format
```
{
    "captain": {
        "fullname": {
            "firstname": string,
            "lastname": string
        },
        "email": string,
        "vehicle": {
            "color": string,
            "plate": string,
            "capacity": number,
            "vehicleType": string
        }
    },
    "token": string           // JWT authentication token
}
```


