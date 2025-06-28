import Professor from '../../Models/ModelsProfessores/Professor.js';

const ProfessorController = {
  async listar(req, res) {
    try {
      const professores = await Professor.findAll();
      res.json(professores);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar professores.' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const professor = await Professor.findByPk(req.params.id);
      if (professor) {
        res.json(professor);
      } else {
        res.status(404).json({ erro: 'Professor não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar professor.' });
    }
  },

  async criar(req, res) {
    try {
      const novoProfessor = await Professor.create(req.body);
      res.status(201).json(novoProfessor);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar professor.' });
    }
  },

  async atualizar(req, res) {
    try {
      const professor = await Professor.findByPk(req.params.id);
      if (professor) {
        await professor.update(req.body);
        res.json(professor);
      } else {
        res.status(404).json({ erro: 'Professor não encontrado.' });
      }
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao atualizar professor.' });
    }
  },

  async deletar(req, res) {
    try {
      const professor = await Professor.findByPk(req.params.id);
      if (professor) {
        await professor.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ erro: 'Professor não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar professor.' });
    }
  }
};

export default ProfessorController;
