import { Router } from "express";
import GetRefeicoesController from "../../app/Controllers/ControllersRefeicoes/GetRefeicoesController.js";
import ListRefeicoesController from "../../app/Controllers/ControllersRefeicoes/ListRefeicoesController.js";
import InsertRefeicoesController from "../../app/Controllers/ControllersRefeicoes/InsertRefeicoesController.js";
import UpdateRefeicoesController from "../../app/Controllers/ControllersRefeicoes/UpdateRefeicoesController.js";
import DeleteRefeicoesController from "../../app/Controllers/ControllersRefeicoes/DeleteRefeicoesController.js";

export default (function () {
	const router = Router();

	// router.metodo("/rota", (request, response) => {...})

	// GET List
	router.get("/api/Refeicoes", ListRefeicoesController.list);

	// GET Obter um
	router.get("/api/Refeicoes/:id", GetRefeicoesController.get);

	// POST Insert
	router.post("/api/Refeicoes", InsertRefeicoesController.insert);

	// PUT Update
	router.put("/api/Refeicoes/:id", UpdateRefeicoesController.update);

	// DELETE Atualizar
	router.delete("/api/Refeicoes/:id", DeleteRefeicoesController.delete);

	return router;
})();
