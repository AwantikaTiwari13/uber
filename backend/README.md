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

