const {Production} = require('../../db')
const {Op} = require('sequelize')



const getProductionByName = async (req, res) => {
    try {
      const name = req.query.name;
  
      const dbResults = await Production.findOne({
        where: {
          name: {
            [Op.iLike]: name
          }
        }
      })
      
      return res.status(200).json(dbResults);
    } catch (error) {
      res.status(404).json(error.message);
    }
  };


module.exports = getProductionByName;