"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (error, _request, response, next) => {
    const { status, message } = error;
    response.status(status || 500).json({ message });
};
exports.default = httpErrorMiddleware;
