const { Client } = require('../../db');

const updateClient = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const [rowsUpdated] = await Client.update(updatedFields, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('El Cliente no existe en la base de datos');
    }

    res.status(200).json({ message: 'Cliente actualizado correctamente' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = updateClient;
