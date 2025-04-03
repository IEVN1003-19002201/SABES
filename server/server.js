require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const sequelize = new Sequelize('nombre_bd', 'usuario', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});


const InternetService = sequelize.define('InternetService', {
  date: { type: DataTypes.DATE, allowNull: false },
  connectionType: { type: DataTypes.STRING, allowNull: false },
  bandwidth: { type: DataTypes.STRING, allowNull: false },
  equipment: { type: DataTypes.INTEGER, allowNull: false },
  financedBy: { type: DataTypes.STRING, allowNull: false },
  provider: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  observation: { type: DataTypes.TEXT, allowNull: true },
});


sequelize.sync()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log('Error en la conexión:', error));


app.post('/services', async (req, res) => {
  try {
    const service = await InternetService.create(req.body);
    res.json({ message: 'Servicio guardado', service });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/services', async (req, res) => {
  try {
    const services = await InternetService.findAll();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
