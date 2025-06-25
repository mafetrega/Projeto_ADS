import express from 'express';
import { Router } from 'express';
import AlunoController from '../../app/Controllers/ControllersAlunos/alunoController.js';

export default (function () {

    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET List
    router.get('/api/Alunos', AlunoController.listar);

    // GET Obter um
    router.get('/api/Alunos/:id', AlunoController.buscarPorId);

    // POST Insert
    router.post('/api/Alunos', AlunoController.criar);

    // PUT Update
    router.put('/api/Alunos/:id', AlunoController.atualizar);

    // DELETE Atualizar
    router.delete('/api/Alunos/:id', AlunoController.deletar);

    return router;

})();