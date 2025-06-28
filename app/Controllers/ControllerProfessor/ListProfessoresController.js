import Professor from '../../Models/ModelsProfessores/Professor.js';

export default {
  list: async (req, res) => {
    try {
      const professores = await Professor.findAll();
      return res.status(200).json(professores);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar professores.' });
    }
  }
};
