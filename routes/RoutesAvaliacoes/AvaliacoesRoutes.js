import { Router } from 'express';
import GetAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/GetAvaliacoesController.js';
import ListAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/ListAvaliacoesController.js';
import InsertAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/InsertAvaliacoesController.js';
import UpdateAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/UpdateAvaliacoesController.js';
import DeleteAvaliacoesController from '../../app/Controllers/ControllersAvaliacoes/DeleteAvaliacoesController.js';

export default (function () {

    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET List
    router.get('/api/Avaliacoes', ListAvaliacoesController.list);

    // GET Obter um
    router.get('/api/Avaliacoes/:id', GetAvaliacoesController.get);

    // POST Insert
    router.post('/api/Avaliacoes', InsertAvaliacoesController.insert);

    // PUT Update
    router.put('/api/Avaliacoes/:id', UpdateAvaliacoesController.update);

    // DELETE Atualizar
    router.delete('/api/Avaliacoes/:id', DeleteAvaliacoesController.delete);

    return router;

})();