import express from 'express'
import KorisnikController from '../controllers/korisnik.controller'

const korisnikRouter = express.Router()

korisnikRouter.route('/login').post((req, res)=>new KorisnikController().login(req, res))
korisnikRouter.route('/dohvati_sve').post((req, res)=>new KorisnikController().dohvati_sve(req, res))

export default korisnikRouter