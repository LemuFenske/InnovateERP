const { Production } = require('../../db');

const updateProduction = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const [rowsUpdated] = await Production.update(updatedFields, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('El Producto no existe en la base de datos');
    }

    res.status(200).json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = updateProduction;