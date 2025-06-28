import Professor from '../../Models/ModelsProfessores/Professor.js';

export default {
  delete: async (req, res) => {
    try {
      const professor = await Professor.findByPk(req.params.id);
      if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado.' });
      }

      await professor.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar professor.' });
    }
  }
};
