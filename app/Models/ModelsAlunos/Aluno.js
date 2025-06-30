const Aluno = (sequelize, DataTypes) => {
  return sequelize.define('Aluno', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    turma: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

export default Aluno;