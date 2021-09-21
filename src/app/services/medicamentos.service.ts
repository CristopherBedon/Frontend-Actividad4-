import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamentos } from '../models/medicamentos.model';

const baseURL = "http://localhost:8090/rest/medicamento"

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(
    private http : HttpClient
  ) { }

  crear (data:Medicamentos): Observable<any>{
    return this.http.post(baseURL,data);
  }

}
