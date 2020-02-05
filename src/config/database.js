module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamps: true, // em cada tabela terá as colunas createdAt e updatedAt
    underscored: true, // padroniza a criação de tabelas e colunas separadas por underscore
    underscoredAll: true,
  },
};
