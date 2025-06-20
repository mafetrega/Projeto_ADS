import { Router } from 'express';

import GetComunicadosController from '../../app/Controllers/ControllersComunicados/GetComunicadosController.js';
import ListComunicadosController from '../../app/Controllers/ControllersComunicados/ListComunicadosController.js';
import InsertComunicadosController from '../../app/Controllers/ControllersComunicados/InsertComunicadosController.js';
import UpdateComunicadosController from '../../app/Controllers/ControllersComunicados/UpdateComunicadosController.js';
import DeleteComunicadosController from '../../app/Controllers/ControllersComunicados/DeleteComunicadosController.js';

export default (function () {

    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET List
    router.get('/api/Comunicados', ListComunicadosController.list);

    // GET Obter um
    router.get('/api/Comunicados/:id', GetComunicadosController.get);

    // POST Insert
    router.post('/api/Comunicados', InsertComunicadosController.insert);

    // PUT Update
    router.put('/api/Comunicados/:id', UpdateComunicadosController.update);

    // DELETE Atualizar
    router.delete('/api/Comunicados/:id', DeleteComunicadosController.delete);

    return router;

})();