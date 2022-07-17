const AssetDatabase = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define(
    'Asset',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      paper: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
      amount: DataTypes.NUMBER,
    },
    { timestamps: false },
  );

  return AssetTable;
};

module.exports = AssetDatabase;
