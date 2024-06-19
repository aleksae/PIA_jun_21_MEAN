"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DezurstvoController = void 0;
const dezurstvo_model_1 = __importDefault(require("../models/dezurstvo.model"));
class DezurstvoController {
    constructor() {
        this.dohvati_za_nastavnika = (req, res) => {
            dezurstvo_model_1.default.find({ 'nastavnik': req.body.nastavnik }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dovhati_sve = (req, res) => {
            dezurstvo_model_1.default.find({}, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
    }
}
exports.DezurstvoController = DezurstvoController;
exports.default = DezurstvoController;
//# sourceMappingURL=dezurstvo.controller.js.map