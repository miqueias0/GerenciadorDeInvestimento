import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as baseUrl from 'src/config/api';

const service = {
  name: 'Integracao',
  url: 'integracao',
}


@Injectable({
  providedIn: 'root'
})
export class IntegracaoService {
  API_URL = (baseUrl.baseUrl.includes("/api/")  ? baseUrl.baseUrl: baseUrl.baseUrl.concat("/api/")) + service.url;
  constructor(
    private http: HttpClient,
  ) { }

  async cadastrarPapeisPlanilha(planilha: string) {
    const endpoint = this.API_URL + '/cadastrarPapeisPlanilha';
    return this.http.post<string>(endpoint, planilha).toPromise().then();
  }

  async cadastrarInvestimentoPlanilha(planilha: string) {
    const endpoint = this.API_URL + '/cadastrarInvestimentoPlanilha';
    return this.http.post<string>(endpoint, planilha).toPromise().then();
  }

}