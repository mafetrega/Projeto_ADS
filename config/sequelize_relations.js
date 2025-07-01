import Aluno from "../app/Models/ModelsAlunos/Aluno.js"
import ModelTurma from "../app/Models/ModelsTurma/ModelTurma.js"
import ModelComunicados from "../app/Models/ModelsComunicados/ModelComunicados.js"
import ModelResponsaveis from "../app/Models/ModelResponsaveis/ModelResponsaveis.js"
import ModelAvaliacoes from "../app/Models/ModelsAvaliacoes/ModelAvaliacoes.js"

export default () => {

    // Definindo a relação entre Aluno e Turma
    // Um Aluno pertence a uma Turma
    Aluno.belongsTo(ModelTurma, {
        foreignKey: 'turma_id',
        as: 'turma',
    });

    // Definindo a relação inversa, onde uma Turma pode ter muitos Alunos
    // Uma Turma tem muitos Alunos
    ModelTurma.hasMany(Aluno, {
        foreignKey: 'turma_id',
        as: 'alunos',
    });


    // Definindo a relação entre Comunicados e Turma
    // Um Comunicado pode estar associado a uma Turma  
    ModelComunicados.belongsTo(ModelTurma, {
        foreignKey: 'turma_id',
        as: 'turma',
    });

    // Definindo a relação inversa, onde uma Turma pode ter muitos Comunicados
    // Uma Turma tem muitos Comunicados
    ModelTurma.hasMany(ModelComunicados, {
        foreignKey: 'turma_id',
        as: 'comunicados',
    });

    // Definindo a relação entre Comunicados e Aluno
    // Um Comunicado pode estar associado a um Aluno
    Aluno.hasMany(ModelComunicados, {
        foreignKey: 'aluno_id',
        as: 'comunicados',
    });

    // Definindo a relação inversa, onde um Comunicado pertence a um Aluno
    // Um Comunicado pertence a um Aluno
    ModelComunicados.belongsTo(Aluno, {
        foreignKey: 'aluno_id',
        as: 'aluno',
    });

    // Definindo a relação entre Comunicados e Responsáveis
    // Um Comunicado pode ter um Responsável
    ModelResponsaveis.hasMany(ModelComunicados, {
        foreignKey: 'responsavel_id',
        as: 'comunicados',
    });

    // Definindo a relação inversa, onde um Comunicado pertence a um Responsável
    // Um Comunicado pertence a um Responsável
    ModelComunicados.belongsTo(ModelResponsaveis, {
        foreignKey: 'responsavel_id',
        as: 'responsavel',
    });

    // Definindo a relação entre Avaliações e Turma
    // Uma Avaliação pertence a uma Turma
    ModelAvaliacoes.belongsTo(ModelTurma, {
        foreignKey: 'turma_id',
        as: 'turma',
    });

    // Definindo a relação inversa, onde uma Turma pode ter muitas Avaliações
    // Uma Turma tem muitas Avaliações
    ModelTurma.hasMany(ModelAvaliacoes, {
        foreignKey: 'turma_id',
        as: 'avaliacoes',
    });

    // Definindo a relação entre Avaliações e Aluno
    // Uma Avaliação pode estar associada a um Aluno
    Aluno.hasMany(ModelAvaliacoes, {
        foreignKey: 'aluno_id',
        as: 'avaliacoes',
    });
    // Definindo a relação inversa, onde uma Avaliação pertence a um Aluno
    // Uma Avaliação pertence a um Aluno
    ModelAvaliacoes.belongsTo(Aluno, {
        foreignKey: 'aluno_id',
        as: 'aluno',
    });

} 