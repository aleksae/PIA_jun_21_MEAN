"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zamena_controller_1 = __importDefault(require("../controllers/zamena.controller"));
const zamenaRouter = express_1.default.Router();
zamenaRouter.route('/dohvati_moje').post((req, res) => new zamena_controller_1.default().dohvati_moje(req, res));
zamenaRouter.route('/dohvati_zeljeno').post((req, res) => new zamena_controller_1.default().dohvati_zeljeno(req, res));
zamenaRouter.route('/obrisi').post((req, res) => new zamena_controller_1.default().obrisi(req, res));
zamenaRouter.route('/ubaci').post((req, res) => new zamena_controller_1.default().ubaci(req, res));
zamenaRouter.route('/obrisi_sve_za_zeljeno').post((req, res) => new zamena_controller_1.default().obrisi_sve_za_zeljeno(req, res));
exports.default = zamenaRouter;
//# sourceMappingURL=zamena.router.js.map