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

  editar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    const URL = `${this.API_URL}/${pensamento.id}`;
    console.log(`# URL:`, URL);
    return this.http.put<PensamentoModel>(URL, pensamento);
  }

  excluir(id: number): Observable<PensamentoModel> {
    const URL = `${this.API_URL}/${id}`;
    return this.http.delete<PensamentoModel>(URL);
  }

  buscarPensamentoPorId(id: number): Observable<PensamentoModel> {
    const URL = `${this.API_URL}/${id}`;
    return this.http.get<PensamentoModel>(URL);
  }
}
