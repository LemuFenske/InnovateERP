const { DataTypes } = require('sequelize');



module.exports = (database) => {

  database.define('Production', {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:  true
    },
    unitOfMeasurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
//   { timestamps: false} esto es para que aparezca la feche de creacion y actualizacion
  )
};