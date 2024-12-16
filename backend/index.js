const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı'))
.catch(err => console.log('MongoDB bağlantı hatası:', err));

// Rotalar
const ratingRoutes = require('./routes/rating');
app.use('/api/ratings', ratingRoutes);

// Basit bir route
app.get('/', (req, res) => {
    res.send('Backend çalışıyor');
});

// Sunucuyu Başlatma
app.listen(PORT, () => {
    console.log(`Sunucu port ${PORT} üzerinde çalışıyor`);
});
