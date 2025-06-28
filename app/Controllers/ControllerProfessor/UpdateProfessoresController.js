import Professor from '../../Models/ModelsProfessores/Professor.js';

export default {
  update: async (req, res) => {
    try {
      const professor = await Professor.findByPk(req.params.id);
      if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado.' });
      }

      await professor.update(req.body);
      return res.status(200).json(professor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar professor.' });
    }
  }
};
