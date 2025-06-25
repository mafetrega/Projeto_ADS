import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    /*-- Tabela Refeicoes
CREATE TABLE
    refeicoes (
        refeicao_id SERIAL PRIMARY KEY,
        data TIMESTAMP NOT NULL,
        tipo_refeicao VARCHAR(50),
        descricao TEXT,
        observacoes TEXT
    );
    */

    return sequelize.define(
        "Refeicao",
        {
            refeicao_id: { // Chave primária
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            data: { // Data de publicação do comunicado
                type: DataTypes.DATE,
                allowNull: false
            },
            tipo_refeicao: { // Tipo de comunicado
                type: DataTypes.VARCHAR(50),
                allowNull: false
            },
            descricao: { // Título do comunicado
                type: DataTypes.TEXT,
                allowNull: false
            },
            observacoes: { // Mensagem do comunicado
                type: DataTypes.TEXT,
                allowNull: false
            },
        },
        {
            tableName: "Refeicoes",
            timestamps: false
        }
    );

})();
