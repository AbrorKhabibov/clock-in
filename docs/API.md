# API Documentation

## Base URL

```
http://localhost:3001
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Auth

#### POST /auth/login

Login with email and password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "accessToken": "jwt-token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "EMPLOYEE"
  }
}
```

### Users

#### GET /users

Get all users (requires authentication).

#### GET /users/:id

Get user by ID.

#### POST /users

Create a new user.

#### PATCH /users/:id

Update user.

#### DELETE /users/:id

Delete user.

### Companies

#### GET /companies

Get all companies.

#### GET /companies/:id

Get company by ID.

#### POST /companies

Create a new company.

#### PATCH /companies/:id

Update company.

#### DELETE /companies/:id

Delete company.

### Schedules

#### GET /schedules

Get all schedules.

#### GET /schedules/:id

Get schedule by ID.

#### GET /schedules/user/:userId

Get schedules for a specific user.

#### POST /schedules

Create a new schedule.

#### PATCH /schedules/:id

Update schedule.

#### DELETE /schedules/:id

Delete schedule.

### Time Logs

#### GET /time-logs

Get all time logs.

#### GET /time-logs/:id

Get time log by ID.

#### GET /time-logs/user/:userId

Get time logs for a specific user.

#### POST /time-logs/clock-in

Clock in.

**Request Body:**

```json
{
  "userId": "uuid",
  "nfcTagId": "optional-nfc-tag-id"
}
```

#### PATCH /time-logs/clock-out/:id

Clock out.

#### POST /time-logs

Create a time log.

#### PATCH /time-logs/:id

Update time log.

#### DELETE /time-logs/:id

Delete time log.

### NFC Tags

#### GET /nfc-tags

Get all NFC tags.

#### GET /nfc-tags/:id

Get NFC tag by ID.

#### POST /nfc-tags/verify

Verify an NFC tag.

**Request Body:**

```json
{
  "tagId": "nfc-tag-id"
}
```

#### POST /nfc-tags

Create a new NFC tag.

#### PATCH /nfc-tags/:id

Update NFC tag.

#### DELETE /nfc-tags/:id

Delete NFC tag.

## Error Responses

All endpoints may return the following error responses:

- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Missing or invalid authentication
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error
