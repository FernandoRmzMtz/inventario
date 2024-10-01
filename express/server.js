const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/inventario') //Es la ruta de la bd de mongoDB, si quieren ponerle otra ruta porque usan otro puerto le pueden cambiar aqui
    .then(() => console.log('Conected to MongoDB'))
    .catch(err => console.error(err));


const app = express();
app.use(cors());
app.use(bodyParser.json());

const Producto = mongoose.model('Producto', new mongoose.Schema({
    productName: String,
    quantity: Number,
    purchasePrice: Number,
    publicPrice: Number
}), 'producto'); 


app.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

app.post('/productos', async (req, res) => {
    const newProducto = new Producto(req.body);
    await newProducto.save();
    res.json(newProducto);
});

app.delete('/productos/:id', async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto deleted' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
