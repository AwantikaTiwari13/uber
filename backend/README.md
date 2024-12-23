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

## Routes Overview
- POST `/captains/register` - Register new captain
- POST `/captains/login` - Authenticate captain
- GET `/captains/profile` - Get captain profile
- GET `/captains/logout` - Logout captain

## Register Captain (POST `/captains/register`)

### Request Body
```json
{
    "fullname": {
        "firstname": "John",     // required, min 3 characters
        "lastname": "Doe"        // required, min 3 characters
    },
    "email": "john@example.com", // required, valid email format
    "password": "password123",   // required, min 6 characters
    "vehicle": {
        "color": "Black",        // required, min 3 characters
        "plate": "ABC123",       // required, min 3 characters
        "capacity": 4,           // required, min value: 1
        "vehicleType": "car"     // required, enum: ["car", "motorcycle", "auto"]
    }
}
```

### Success Response (201 Created)
```json
{
    "token": "eyJhbGciOiJIUzI1...", // JWT authentication token
    "captain": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## Login Captain (POST `/captains/login`)

### Request Body
```json
{
    "email": "john@example.com",  // required, valid email
    "password": "password123"     // required, min 6 characters
}
```

### Success Response (200 OK)
```json
{
    "token": "eyJhbGciOiJIUzI1...", // JWT authentication token
    "captain": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## Get Profile (GET `/captains/profile`)

### Headers
```
Authorization: Bearer <token>    // JWT token required
```

### Success Response (200 OK)
```json
{
    "captain": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## Logout (GET `/captains/logout`)

### Headers
```
Authorization: Bearer <token>    // JWT token required
```

### Success Response (200 OK)
```json
{
    "message": "Logout successfully"
}
```


