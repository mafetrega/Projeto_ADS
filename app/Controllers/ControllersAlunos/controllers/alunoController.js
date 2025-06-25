import { Aluno } from '../models/index.js';

const alunoController = {
  async listar(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar alunos.' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (aluno) {
        res.json(aluno);
      } else {
        res.status(404).json({ erro: 'Aluno não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar aluno.' });
    }
  },

  async criar(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      res.status(201).json(novoAluno);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar aluno.' });
    }
  },

  async atualizar(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (aluno) {
        await aluno.update(req.body);
        res.json(aluno);
      } else {
        res.status(404).json({ erro: 'Aluno não encontrado.' });
      }
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao atualizar aluno.' });
    }
  },

  async deletar(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (aluno) {
        await aluno.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ erro: 'Aluno não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar aluno.' });
    }
  }
};

export default alunoController;
