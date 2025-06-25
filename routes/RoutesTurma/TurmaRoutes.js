import { Router } from "express";
import GetTurmaController from "../../app/Controllers/ControllersTurma/GetTurmaController.js";
import ListTurmaController from "../../app/Controllers/ControllersTurma/ListTurmaController.js";
import InsertTurmaController from "../../app/Controllers/ControllersTurma/InsertTurmaController.js";
import UpdateTurmaController from "../../app/Controllers/ControllersTurma/UpdateTurmaController.js";
import DeleteTurmaController from "../../app/Controllers/ControllersTurma/DeleteTurmaController.js";

export default (function () {
    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET List
    router.get("/api/Turma", ListTurmaController.list);

    // GET Obter um
    router.get("/api/Turma/:id", GetTurmaController.get);

    // POST Insert
    router.post("/api/Turma", InsertTurmaController.insert);

    // PUT Update
    router.put("/api/Turma/:id", UpdateTurmaController.update);

    // DELETE Atualizar
    router.delete("/api/Turma/:id", DeleteTurmaController.delete);

    return router;
})();