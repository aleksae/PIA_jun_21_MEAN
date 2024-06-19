"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dezurstvo_controller_1 = __importDefault(require("../controllers/dezurstvo.controller"));
const dezurstvoRouter = express_1.default.Router();
dezurstvoRouter.route('/dohvati_za_nastavnika').post((req, res) => new dezurstvo_controller_1.default().dohvati_za_nastavnika(req, res));
dezurstvoRouter.route('/dohvati_sve').post((req, res) => new dezurstvo_controller_1.default().dovhati_sve(req, res));
exports.default = dezurstvoRouter;
//# sourceMappingURL=dezurstvo.router.js.map