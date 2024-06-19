import { Component, OnInit } from '@angular/core';
import { ZajednickiService } from '../zajednicki.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis:ZajednickiService, private router:Router) { }

  k_ime:string 
  lozinka:string
  greska:string

  ngOnInit(): void {
  }
  login(){
    if(!this.k_ime || !this.lozinka){
      this.greska = "Svi podaci su obavezni"
      return;
    }
    this.servis.login(this.k_ime, this.lozinka).subscribe((res)=>{
      if(res && res){
        console.log(res)
        localStorage.setItem("ulogovan", JSON.stringify(res))
        this.router.navigate(['nastavnik'])
      }else{
        this.greska="Pogresno uneti podaci"
      }
    })

  }

}
