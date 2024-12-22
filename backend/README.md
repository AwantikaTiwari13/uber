# User API Documentation

## Register User
Endpoint for registering a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Validation Rules
- `firstname`: Minimum 3 characters
- `email`: Must be a valid email address
- `password`: Minimum 6 characters

### Response

#### Success (201 Created)
```json
{
    "token": "jwt-token-string",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string"
    }
}
```

#### Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Error message",
            "param": "field_name"
        }
    ]
}
```

### Required Fields
- firstname
- email
- password

### Notes
- Password is automatically hashed before storage
- A JWT token is generated and returned upon successful registration
- The response includes both the authentication token and user details
- Password is excluded from the returned user object

### Example Responses

#### Success Example
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

#### Error Examples

Invalid Email:
```json
{
    "errors": [
        {
            "msg": "Please provide a valid email address",
            "param": "email"
        }
    ]
}
```

Password Too Short:
```json
{
    "errors": [
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password"
        }
    ]
}
```

Email Already Exists:
```json
{
    "errors": [
        {
            "msg": "User with this email already exists",
            "param": "email"
        }
    ]
}
```
