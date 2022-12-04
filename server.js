const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/customerRoutes');
const app = express();

// mongoose.connect('mongodb://127.0.0.1/CustomersDB')
mongoose.connect('mongodb+srv://mongoadmin:pwd123@cluster0.os9kjcg.mongodb.net/CustomersDB')
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Application connected to database');
    }
})

app.use(express.json());
app.use('/api/v1', routes);

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});