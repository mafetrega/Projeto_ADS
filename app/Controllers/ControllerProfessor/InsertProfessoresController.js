import Professor from '../../Models/ModelsProfessores/Professor.js';

export default {
  insert: async (req, res) => {
    try {
      const novoProfessor = await Professor.create(req.body);
      return res.status(201).json(novoProfessor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar professor.' });
    }
  }
};
