import app from './app.js';
import sequelize from './src/config/zutomayo-db.js';
import './src/models/carrito.js'; // Importar el modelo de carrito 
//import './src/models/itemdecarrito.js'; // Importar el modelo de itemdecarrito 
//import './src/models/orden.js'; // Importar el modelo de orden 
//import './src/models/itemdeorden.js'; // Importar el modelo de itemdeorden 
import './src/models/music_movie.js'; // Importar el modelo de music_movies 
import './src/models/usuario.js'; // Importar el modelo de usuario
async function main() {
    
    try {
        const init = process.argv[2];
        
        if (init) {
            await sequelize.sync({alter: true})
        } else {
            await sequelize.sync({alter: false});
        }

        const port = process.env.PORT || 4001;

        console.log('Database synchronized');

        app.listen(port,() => {
            console.log('Server is running on port 4001');
        })

    } catch(error) {
        console.error(error);
    }
}

main();