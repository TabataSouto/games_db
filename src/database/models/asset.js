const AssetSchema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Asset', {
    paper: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    amount: DataTypes.NUMBER,
  }, { timestamps: false });

  return AssetTable;
};

module.exports = AssetSchema;
