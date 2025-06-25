import express from 'express';
import alunoController from '../controllers/alunoController.js';

const router = express.Router();

router.get('/api/alunos', alunoController.listar);
router.get('/api/alunos/:id', alunoController.buscarPorId);
router.post('/api/alunos', alunoController.criar);
router.put('/api/alunos/:id', alunoController.atualizar);
router.delete('/api/alunos/:id', alunoController.deletar);

export default router;
