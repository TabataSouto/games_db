import { Model, INTEGER, STRING, NUMBER } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  gameName!: string;
  year!: number;
  price!: number;
  image!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  gameName: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false
  },
  price: {
    type: NUMBER,
    allowNull: false
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  console: {
    type: STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  tableName: 'Games',
  timestamps: false,
});