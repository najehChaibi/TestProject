import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartiesService {
private _url: string = ".././assets/parties.json";
  constructor(private http: HttpClient) { }

  getParties(){
    return this.http.get(this._url);
  }
}
