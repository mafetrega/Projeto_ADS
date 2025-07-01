import Aluno from "../app/Models/ModelsAlunos/Aluno.js"
import ModelTurma from "../app/Models/ModelsTurma/ModelTurma.js"

export default () => {
    Aluno.belongsTo(ModelTurma, {
        foreignKey: 'turma_id',
        as: 'turma',
    });

    ModelTurma.hasMany(Aluno, {
        foreignKey: 'turma_id',
        as: 'alunos',
    });
} 