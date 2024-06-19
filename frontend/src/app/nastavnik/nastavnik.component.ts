import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { ZajednickiService } from '../zajednicki.service';
import { Dezurstvo } from 'src/models/dezurstvo';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  constructor(private router:Router, private zajednicki:ZajednickiService) { }

  ulogovan:Korisnik
  dezurstva:Dezurstvo[] = []
  nastavnici:Korisnik[] = []
  dezurstva_nastavnici:Object = []
  izabran:string
  dezurstvo_za_prikaz_id:string = ""
  ngOnInit(): void {
    this.ulogovan = JSON.parse(localStorage.getItem("ulogovan"))
    this.zajednicki.dezurstva_za_nastavnika(this.ulogovan.korisnickoIme).subscribe((res:Dezurstvo[])=>{
      if(res.length>0){
        this.dezurstva = res
        for(let d of this.dezurstva){
          d.dat_date = new Date(d.datumVreme)
        }
        this.dezurstva.sort((a,b)=>{
          if(a.dat_date>b.dat_date) return 1
          else if(a.dat_date<b.dat_date) return -1
          else return 0
        })
      }else{

      }
    })
    this.zajednicki.dohvati_sve_korisnike().subscribe(async (res:Korisnik[])=>{
      if(res.length>0){
        this.nastavnici = res

        let i=0;
        let za_brisanje = -1;
        for(let n of this.nastavnici){
          if(n.korisnickoIme==this.ulogovan.korisnickoIme) za_brisanje = i
          if(za_brisanje!=i){
            await this.zajednicki.dezurstva_za_nastavnika(n.korisnickoIme).subscribe((res:Dezurstvo[])=>{
              if(res.length>0){
                for(let r of res){
                  r.dat_date = new Date(r.datumVreme)
                }
                this.dezurstva_nastavnici[n.korisnickoIme] = res
                
                
              }
            })
          }
          i++;
        }
        this.nastavnici.splice(za_brisanje,1)
      }else{

      }
    })
  }
 
  poklapa_se(d:Dezurstvo){
    let ret=false
    for(let dd of this.dezurstva){
      if(dd.datumVreme == d.datumVreme && d.predmet == dd.predmet) {
        ret = true;
      }else{
      }
    }

    return ret;
  }
  zamena(d:Dezurstvo){
    let nastavnik:Korisnik
    for(let n of this.nastavnici){
      if(n.korisnickoIme == this.izabran) nastavnik = n
    }
    localStorage.setItem("izabran", JSON.stringify(nastavnik))
    localStorage.setItem("dezurstvo", JSON.stringify(d))
    this.router.navigate(['zamena'])

  }
  logout(){
    localStorage.removeItem("ulogovan")
    this.router.navigate([''])
  }

}
