import { Component, OnInit } from '@angular/core';
import { Dezurstvo } from 'src/models/dezurstvo';
import { Korisnik } from 'src/models/korisnik';
import { ZajednickiService } from '../zajednicki.service';
import { Zamena } from 'src/models/zamena';

@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {

  constructor(private zajednicki:ZajednickiService) { }
  ulogovan:Korisnik
  dezurstva:Dezurstvo[] = []
  zamene:any[] = []
  sva_dezurstva:Dezurstvo[]
  ngOnInit():void {
    this.ulogovan = JSON.parse(localStorage.getItem("ulogovan"))
    this.zajednicki.dezurstva_za_nastavnika(this.ulogovan.korisnickoIme).subscribe((res:Dezurstvo[])=>{
      if(res.length>0){
        this.dezurstva = res
        for(let d of this.dezurstva){
          d.dat_date = new Date(d.datumVreme)
        }
        
        this.zajednicki.dohvati_sva_dezurstva().subscribe((res:Dezurstvo[])=>{
          this.sva_dezurstva = res
          for(let d of this.sva_dezurstva){
            d.dat_date = new Date(d.datumVreme)
          }
          
       
          for(let d of this.dezurstva){
            console.log("trazi se "+d.id)
            this.zajednicki.dohvati_zeljene(d.id).subscribe((res:Zamena[])=>{
              
              for(let r of res){
                this.zamene.push({
                  '_id' : r._id,
                  'zamena':r,
                  'dezurstvo_moje': this.nadji(r.dezurstvoMoje),
                  'dezurstvo_zeljeno':d
                })
              }
            })
          }
         
        })

        this.dezurstva.sort((a,b)=>{
          if(a.dat_date>b.dat_date) return 1
          else if(a.dat_date<b.dat_date) return -1
          else return 0
        })
      }else{

      }
    })

  }
  nadji(d){
    for(let dd of this.sva_dezurstva){
      if(d== dd.id) return dd;
    }
    return null
  }

  prihvati(o:Object){

  }

}
