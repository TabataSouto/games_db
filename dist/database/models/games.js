"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Games extends sequelize_1.Model {
}
Games.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    gameName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    year: {
        type: sequelize_1.INTEGER,
        allowNull: false
    },
    price: {
        type: sequelize_1.NUMBER,
        allowNull: false
    },
    image: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    console: {
        type: sequelize_1.STRING,
        allowNull: false,
    }
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'Games',
    timestamps: false,
});
exports.default = Games;
