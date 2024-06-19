import express from 'express'
import dezurstvoModel from '../models/dezurstvo.model'
export class DezurstvoController{
    dohvati_za_nastavnika = (req:express.Request, res:express.Response)=>{
       dezurstvoModel.find({'nastavnik':req.body.nastavnik}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
       })
    }
    dovhati_sve = (req:express.Request, res:express.Response)=>{
        dezurstvoModel.find({}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
       })
    }
    
}
export default DezurstvoController