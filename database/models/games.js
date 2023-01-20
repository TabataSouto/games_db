const GameDatabase = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define(
    'Game',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      year: DataTypes.NUMBER,
      console: DataTypes.NUMBER,
    },
    { timestamps: false },
  );

  return AssetTable;
};

module.exports = GameDatabase;
