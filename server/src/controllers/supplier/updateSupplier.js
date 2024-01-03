const { Supplier } = require('../../db');

const updateSupplier = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const [rowsUpdated] = await Supplier.update(updatedFields, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('El Supplier no existe en la base de datos');
    }

    res.status(200).json({ message: 'Supplier actualizado correctamente' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = updateSupplier;