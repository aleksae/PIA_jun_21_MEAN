import express from 'express'
import zamenaModel from '../models/zamena.model'
export class ZamenaController{
    dohvati_moje = (req:express.Request, res:express.Response) =>{
        zamenaModel.find({'dezurstvoMoje':req.body.dezurstvoMoje}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }
    dohvati_zeljeno = (req:express.Request, res:express.Response) =>{
        zamenaModel.find({'dezurstvoZeljeno':req.body.dezurstvoZeljeno}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }
    obrisi = (req:express.Request, res:express.Response) =>{
        zamenaModel.deleteOne({'_id':req.body._id}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({'message':'ok'})
        })
    }
    obrisi_sve_za_zeljeno = (req:express.Request, res:express.Response) =>{
        zamenaModel.deleteMany({'dezurstvoZeljeno':req.body._id}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({'message':'ok'})
        })
    }
    ubaci = (req:express.Request, res:express.Response) =>{
        let zamena = new zamenaModel(req.body)
        zamena.save((err, resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"})
        })
    }

}
export default ZamenaController