import { Router } from 'express';
import GetAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/GetAvaliacoesController.js';
import ListAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/ListAvaliacoesController.js';
import InsertAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/InsertAvaliacoesController.jss';
import UpdateAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/UpdateAvaliacoesController.js';
import DeleteAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/DeleteAvaliacoesController.js';

export default (function () {

    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET List
    router.get('/api/Avaliacoes', ListAvaliacoesController);

    // GET Obter um
    router.get('/api/Avaliacoes/:id', GetAvaliacoesController);

    // POST Insert
    router.post('/api/Avaliacoes', InsertAvaliacoesController);

    // PUT Update
    router.put('/api/Avaliacoes/:id', UpdateAvaliacoesController);

    // DELETE Atualizar
    router.delete('/api/Avaliacoes/:id', DeleteAvaliacoesController);

    return router;

})();