"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_models_1 = __importDefault(require("../models/korisnik.models"));
class KorisnikController {
    constructor() {
        this.login = (req, res) => {
            korisnik_models_1.default.findOne({ "korisnickoIme": req.body.korisnickoIme, "lozinka": req.body.lozinka }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dohvati_sve = (req, res) => {
            korisnik_models_1.default.find({}, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
exports.default = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map