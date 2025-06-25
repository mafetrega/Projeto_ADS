/*
Este arquivo define e exporta o roteador principal da aplicação Express.
Ele configura middlewares para servir arquivos estáticos, processar JSON,
e inclui as rotas do sistema. Caso nenhuma rota seja encontrada,
ele retorna um erro 404.
*/
import { Router } from 'express';
import express from 'express';
import path from 'path';

import AvaliacoesRoutes from "./RoutesAvaliacoes/AvaliacoesRoutes.js";
import ComunicadosRoutes from "./RoutesComunicados/ComunicadosRoutes.js";
import RefeicoesRoutes from './RoutesRefeicoes/RefeicoesRoutes.js';
import AlunosRoutes from './RoutesAlunos/AlunosRoutes.js';
import FrequenciaRoutes from './RoutesFrequencia/FrequenciaRoutes.js';
import ResponsaveisRoutes from './RoutesResponsaveis/ResponsaveisRoutes.js';
import TurmaRoutes from './RoutesTurma/TurmaRoutes.js';

export default (function () {

    const router = Router();

    /** Usado para servir json */
    router.use(express.json());

    /** Servir o public estaticamente, tanto para arquivos como para os assets de frontend */
    // NÃO SERÁ CHAMADO CASO TENHA A CAMADA DE NGINX COM ARQUIVOS ESTÁTICOS
    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    // Rotas de avaliações
    router.use('/', AvaliacoesRoutes);

    // Rotas de comunicados
    router.use('/', ComunicadosRoutes);

    // Rotas de Refeicoes
    router.use('/', RefeicoesRoutes);

    // Rotas de Alunos
    router.use('/', AlunosRoutes);

    // Rotas de Frequencia
    router.use('/', FrequenciaRoutes);

    // Rotas de Responsaveis
    router.use('/', ResponsaveisRoutes);

    // Rotas de Turma
    router.use('/', TurmaRoutes);

    /** Se nenhuma rota for encontrada retorna 404 */
    router.use((req, res) => {
        res.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})();