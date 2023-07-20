import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware untuk verifikasi API Key
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  // Ganti 'api_key_rahasia' dengan API Key yang Anda inginkan
  if (apiKey === 'Anzz-API') {
    next(); // API Key valid, melanjutkan ke handler route
  } else {
    res.status(401).send('Anda perlu berlangganan untuk mendapatkan API key'); // API Key tidak valid, respon dengan status 401 Unauthorized
  }
};

app.get('/api/hello', authenticate, (req, res) => {
  const data = {
    message: 'Selamat!! anda terhubung ke API saya'
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.get('/api/data', authenticate, (req, res) => {
  const data = {
    message: 'API ini dibuat oleh Anzz Code',
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
      },
      {
        id: 3,
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com'
      }
    ],
    products: [
      {
        id: 1,
        name: 'Product A',
        price: 9.99
      },
      {
        id: 2,
        name: 'Product B',
        price: 19.99
      },
      {
        id: 3,
        name: 'Product C',
        price: 14.99
      }
    ]
  };

  // Mengirim respons JSON sebagai raw data
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
