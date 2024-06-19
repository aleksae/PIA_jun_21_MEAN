import express from 'express'
import dezurstvoController from '../controllers/dezurstvo.controller'

const dezurstvoRouter = express.Router()

dezurstvoRouter.route('/dohvati_za_nastavnika').post((req, res)=>new dezurstvoController().dohvati_za_nastavnika(req, res))
dezurstvoRouter.route('/dohvati_sve').post((req, res)=>new dezurstvoController().dovhati_sve(req, res))

export default dezurstvoRouter