"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZamenaController = void 0;
const zamena_model_1 = __importDefault(require("../models/zamena.model"));
class ZamenaController {
    constructor() {
        this.dohvati_moje = (req, res) => {
            zamena_model_1.default.find({ 'dezurstvoMoje': req.body.dezurstvoMoje }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dohvati_zeljeno = (req, res) => {
            zamena_model_1.default.find({ 'dezurstvoZeljeno': req.body.dezurstvoZeljeno }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.obrisi = (req, res) => {
            zamena_model_1.default.deleteOne({ '_id': req.body._id }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.obrisi_sve_za_zeljeno = (req, res) => {
            zamena_model_1.default.deleteMany({ 'dezurstvoZeljeno': req.body._id }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.ubaci = (req, res) => {
            let zamena = new zamena_model_1.default(req.body);
            zamena.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.ZamenaController = ZamenaController;
exports.default = ZamenaController;
//# sourceMappingURL=zamena.controller.js.map