import express from 'express'
import ZamenaController from '../controllers/zamena.controller'

const zamenaRouter = express.Router()

zamenaRouter.route('/dohvati_moje').post((req, res)=>new ZamenaController().dohvati_moje(req, res))
zamenaRouter.route('/dohvati_zeljeno').post((req, res)=>new ZamenaController().dohvati_zeljeno(req, res))
zamenaRouter.route('/obrisi').post((req, res)=>new ZamenaController().obrisi(req, res))
zamenaRouter.route('/ubaci').post((req, res)=>new ZamenaController().ubaci(req, res))
zamenaRouter.route('/obrisi_sve_za_zeljeno').post((req, res)=>new ZamenaController().obrisi_sve_za_zeljeno(req, res))


export default zamenaRouter