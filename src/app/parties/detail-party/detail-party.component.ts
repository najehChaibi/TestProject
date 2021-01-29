import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {PartiesService} from '../../../app/parties.service';

@Component({
  selector: 'app-detail-party',
  templateUrl: './detail-party.component.html',
  styleUrls: ['./detail-party.component.css']
})
export class DetailPartyComponent implements OnInit {
  
  parties= [];
  p : any;
  style: any;
  nb: any;

  constructor(private partiesService: PartiesService) {

  }

  ngOnInit(): void {
    this.partiesService.getParties().subscribe((data: any)=>{
      this.parties = data
      console.log(this.parties);
    });
  }

  reserve(){
    document.getElementById("demo").innerHTML =`Nomber de place a réserver</br> <input tpye="text" [(ngModel)]='nb'></br> <button onclick='valide(nb)'>Valider</button>` ;

  }
 valide(nb: any): void{
    console.log('test');

  }


  //  nbPlace() {
  //   if(this.p.nb_place > 0 && this.p.nb_place < 40){
  //     return this.style ("background-color: orange;");
  //    } else if(this.p.nb_place > 40 && this.p.nb_place < 100){
  //     return this.style ("background-color: orange;");
  //    } else if(this.p.nb_place > 100){
  //      return this.style ("background-color: yellow;");

  //    }
  //  }

  // *ngIf="p.nb_place > 0 && p.nb_place < 40" {
  //   style="background-color: orange;"
  // }  else *ngIf="p.nb_place > 40 && p.nb_place < 100"  {
  //   style="background-color: green;"
  // }else *ngIf="p.nb_place > 100" {
  //   style="background-color: yellow;"
  // }

    }
  