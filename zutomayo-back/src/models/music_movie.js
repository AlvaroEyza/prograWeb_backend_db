import sequelize from "../config/zutomayo-db.js";
import { DataTypes } from "sequelize";

const Music_Movies = sequelize.define('music_movies', { 
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    }, 
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    imagen: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    tipo: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    precio: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    stock: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }
}, {
    tableName: 'music_movies',
    timestamp: false
})

export default Music_Movies;