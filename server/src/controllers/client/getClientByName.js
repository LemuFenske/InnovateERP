const {Client} = require('../../db')
const {Op} = require('sequelize')



const getClientByName = async (req, res) => {
    try {
      const name = req.query.name;
  
      const dbResults = await Client.findOne({
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


module.exports = getClientByName;