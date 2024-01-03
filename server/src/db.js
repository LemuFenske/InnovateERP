require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const ClientModel = require ('./models/Client')
const ProductionModel = require ('./models/Production')
const RawMaterialModel = require ('./models/RawMaterial')
const SupplierModel = require ('./models/Supplier')

const database =  new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/innovate`, 
{
    logging: false
})

ClientModel(database)
ProductionModel(database)
RawMaterialModel(database)
SupplierModel(database)

const { Client, Production, RawMaterial, Supplier } = database.models;

Client.belongsToMany(Production, { through: 'ClientProduction', timestamps: false });
Production.belongsToMany(Client, { through: 'ClientProduction', timestamps: false });

Production.belongsToMany(RawMaterial, { through: 'RawMaterialProduction', timestamps: false });
RawMaterial.belongsToMany(Production, { through: 'RawMaterialProduction', timestamps: false });

Supplier.hasMany(RawMaterial);
RawMaterial.belongsTo(Supplier);


module.exports = {database, ...database.models}


// Importamos los módulos necesarios
// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// // Creamos una instancia de Sequelize para la conexión a la base de datos
// const database = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/innovate`,
//    {
//       logging: false, // Configuramos para que no se muestren las consultas SQL en la consola
//    }
// );

// // Leemos los archivos de modelos de la carpeta 'models'
// const modelDefiners = [];
// const basename = path.basename(__filename);

// fs.readdirSync(path.join(__dirname, '/models'))
//    .filter(
//       (file) =>
//          file.indexOf('.') !== 0 &&
//          file !== basename &&
//          file.slice(-3) === '.js'
//    )
//    .forEach((file) => {
//       modelDefiners.push(require(path.join(__dirname, '/models', file)));
//    });

// // Injectamos la conexión (database) a todos los modelos
// modelDefiners.forEach((model) => model(database));

// // Capitalizamos los nombres de los modelos
// let entries = Object.entries(database.models);
// let capsEntries = entries.map((entry) => [
//    entry[0][0].toUpperCase() + entry[0].slice(1),
//    entry[1],
// ]);
// database.models = Object.fromEntries(capsEntries);

// // Definimos las relaciones de los modelos
// // Ajusta esto según las relaciones reales de tus modelos
// Client.belongsToMany(Production, { through: 'ClientProduction', timestamps: false });
// Production.belongsToMany(Client, { through: 'ClientProduction', timestamps: false });

// Production.belongsToMany(RawMaterial, { through: 'RawMaterialProduction', timestamps: false });
// RawMaterial.belongsToMany(Production, { through: 'RawMaterialProduction', timestamps: false });

// Supplier.hasMany(RawMaterial);
// RawMaterial.belongsTo(Supplier);

// // Exportamos la conexión y los modelos
// module.exports = { database, ...database.models };
