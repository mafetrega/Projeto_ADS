import { Router } from 'express';
import ControllerListResponsavel from '../../app/Controllers/ControllersResponsaveis/ControllerListResponsavel.js';
import ControllerGetResponsavel from '../../app/Controllers/ControllersResponsaveis/ControllerGetResponsavel.js';
import ControllerCreateResponsaveis from '../../app/Controllers/ControllersResponsaveis/ControllerCreateResponsaveis.js';
import ControllerUpdateResponsavel from '../../app/Controllers/ControllersResponsaveis/ControllerUpdateResponsavel.js';
import ControllerDeleteResponsavel from '../../app/Controllers/ControllersResponsaveis/ControllerDeleteResponsavel.js';

export default (function () {
    const router = Router();

    // GET - Listar todos os responsáveis
    router.get('/api/responsaveis', ControllerListResponsavel.list);

    // GET - Obter um responsável por ID
    router.get('/api/responsaveis/:id', ControllerGetResponsavel.get);

    // POST - Cadastrar novo responsável
    router.post('/api/responsaveis', ControllerCreateResponsaveis.create);

    // PUT - Atualizar responsável
    router.put('/api/responsaveis/:id', ControllerUpdateResponsavel.update);

    // DELETE - Excluir responsável
    router.delete('/api/responsaveis/:id', ControllerDeleteResponsavel.delete);

    return router;
})();