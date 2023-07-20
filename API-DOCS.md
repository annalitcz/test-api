# API Documentation

## Get Hello Message

Mengambil pesan "Hello" dari API.

**URL**

```
GET /api/hello
```

**Headers**

| Header       | Value           | Required | Description                         |
|--------------|-----------------|----------|-------------------------------------|
| `x-api-key`  | string          | Yes      | API Key untuk mengakses API (otentikasi) |

**Response**

- **Status**: 200 OK
- **Content Type**: application/json

```json
{
  "message": "Anda terhubung ke API saya"
}
```

**Error Responses**

- **Status**: 401 Unauthorized
- **Content**: Unauthorized

### Example

**Request**

```
GET /api/hello
x-api-key: Anzz-API
```

**Response**

```json
{
  "message": "Anda terhubung ke API saya"
}
```

### Example (Unauthorized)

**Request**

```
GET /api/hello
x-api-key: incorrect_api_key
```

**Response**

```
Unauthorized
```