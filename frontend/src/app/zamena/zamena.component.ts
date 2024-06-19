import { Component, OnInit } from '@angular/core';
import { Dezurstvo } from 'src/models/dezurstvo';
import { Korisnik } from 'src/models/korisnik';
import { ZajednickiService } from '../zajednicki.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zamena',
  templateUrl: './zamena.component.html',
  styleUrls: ['./zamena.component.css']
})
export class ZamenaComponent implements OnInit {

  constructor(private zajednicki:ZajednickiService, private router:Router) { }

  d:Dezurstvo
  nastavnik:Korisnik
  ulogovan:Korisnik
  dezurstva:Dezurstvo[] = []
  ngOnInit(): void {
    this.nastavnik = JSON.parse(localStorage.getItem("izabran"))
    this.d = JSON.parse(localStorage.getItem("dezurstvo"))
    //localStorage.removeItem("izabran")
    //localStorage.removeItem("dezurstvo")
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
  }

  nazad(){
    this.router.navigate(['nastavnik'])
  }
  posalji(dd:Dezurstvo){
    this.zajednicki.dodaj_zamenu(dd.id, this.d.id).subscribe((res)=>{
      if(res['message']=='ok'){
        this.router.navigate(['nastavnik'])
      }
    })
  }
}
