const { RawMaterial } = require('../../db');

const updateRawMaterial = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const [rowsUpdated] = await RawMaterial.update(updatedFields, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('El Materia Prima no existe en la base de datos');
    }

    res.status(200).json({ message: 'Materia Prima actualizado correctamente' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = updateRawMaterial;