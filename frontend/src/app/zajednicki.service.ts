import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZajednickiService {

  constructor(private http:HttpClient) { }

  login(k_ime, lozinka) {
    const data={
      korisnickoIme:k_ime,
      lozinka:lozinka
    }
    return this.http.post('http://localhost:4000/korisnik/login', data)
  }
  dezurstva_za_nastavnika(nastavnik){
    const data={
      nastavnik:nastavnik
    }
    return this.http.post('http://localhost:4000/dezurstvo/dohvati_za_nastavnika', data)
  }
  dohvati_sve_korisnike(){
    const data={}
    return this.http.post('http://localhost:4000/korisnik/dohvati_sve', data)
  }
  dodaj_zamenu(id1, id2){
    const data={
      dezurstvoMoje:parseInt(id1),
      dezurstvoZeljeno:parseInt(id2)
    }
    return this.http.post('http://localhost:4000/zamena/ubaci', data)
  }
  dohvati_zeljene(dezurstvoZeljeno:Number){
    const data={
      dezurstvoZeljeno:dezurstvoZeljeno
    }
    return this.http.post('http://localhost:4000/zamena/dohvati_zeljeno', data)
  }
  dohvati_sva_dezurstva(){
    const data = {}
    return this.http.post('http://localhost:4000/dezurstvo/dohvati_sve', data)
  }
  obrisi_sve_zamene_za_zeljeno(id){
    const data = {
      dezurstvoZeljeno:id
    }
    return this.http.post('http://localhost:4000/zamena/obrisi_sve_za_zeljeno', data)
  }

  
}
