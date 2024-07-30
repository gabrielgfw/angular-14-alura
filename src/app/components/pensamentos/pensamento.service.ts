import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API_URL = "http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) {}

  listar(): Observable<Array<PensamentoModel>> {
    return this.http.get<Array<PensamentoModel>>(this.API_URL);
  }

  criar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this.http.post<PensamentoModel>(this.API_URL, pensamento);
  }
}
