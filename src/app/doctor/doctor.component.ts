import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
     mediciens : Array<{nom: string, specialite : string, disponibilite: boolean }> = [
    {"nom":'DR SOPHIE PIERREPONT',"specialite":'Ophtalmologiste',"disponibilite":true},
    {"nom":'DR Alexandra Dupont',"specialite":'Ophtalmologiste',"disponibilite":false},
    {"nom":'Dr Alexandre Paul',"specialite":'radiologue',"disponibilite":true},
    {"nom":'Dr Nadir Madani',"specialite":'Pédiatre',"disponibilite":false}
  ]
  constructor() { }
  medSelected: any;
  val: any
  specialite: any;
  i: any;

  ngOnInit(): void {
    console.log(this.mediciens)
  }
  specialte(event: any){
    this.val = event.target.value;
    for(var i =0; i<this.mediciens.length; i++){
      if(this.val == this.mediciens[i].specialite){
        var nom = this.mediciens[i].nom;
        var specialite = this.mediciens[i].specialite;
        var disponibilite = this.mediciens[i].disponibilite;
        document.getElementById("demo").innerHTML +=`<p>Liste des médiciens </p> <table width='70%'  border='1 solid black'><thead><tr><th>Nom</th><th>spécialite</th><th>Disponibilite</th><th></th></tr></thead><tbody><tr><td> ${nom }</td><td>${specialite}</td><td>${disponibilite}</td><td> <button if(${disponibilite}==true) onclick='Disponibilite(); return false;' >Prendre rendez-vous</button> <button if(${disponibilite}==false) disabled style{display='none'}>Prendre rendez-vous</button></td></tr></tbody></table>`;
      }
    }
  }
   Disponibilite():void{
    document.getElementById("demo2").innerHTML += `nom <br> Nom de patient <input type="text"><button>Confirm</button> `;


  }
}
