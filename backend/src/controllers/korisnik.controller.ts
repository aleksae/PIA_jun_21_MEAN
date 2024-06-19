import express from 'express'
import korisnikModel from '../models/korisnik.models'
export class KorisnikController{
    login = (req:express.Request, res:express.Response)=>{
        korisnikModel.findOne({"korisnickoIme":req.body.korisnickoIme, "lozinka":req.body.lozinka}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })

    }
    dohvati_sve=(req:express.Request, res:express.Response)=>{
        korisnikModel.find({}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })

    }
}
export default KorisnikController