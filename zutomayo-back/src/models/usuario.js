import { DataTypes } from 'sequelize';
import sequelize from '../config/zutomayo-db.js';

const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  prefijo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cumple: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardholderName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  expiry: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

export default Usuario;
