import Sequelize from "sequelize";

const hostname = 'zutomayo-db.postgres.database.azure.com';
const username = 'administrador';
const password = 'Zutomayo1';
const database = 'basedatos'
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;