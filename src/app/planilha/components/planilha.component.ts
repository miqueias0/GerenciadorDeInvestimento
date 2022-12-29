import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntegracaoService } from 'src/app/services';

@Component({
  selector: 'app-planilha',
  templateUrl: './planilha.component.html',
  styleUrls: ['./planilha.component.scss']
})
export class PlanilhaComponent implements OnInit {

  odata: string = "";

  constructor(
    private readonly router: Router,
    private readonly integracaoService: IntegracaoService,
  ) { }

  ngOnInit(): void {
    localStorage.getItem('token') == null? this.router.navigate(['/login']): "";
  }

  async onFileSelected(event: any) {
    localStorage.getItem('token') == null? this.router.navigate(['/login']): "";
    const file: File = event.target.files[0];
    event.target.value = null;
    if (!file) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async (e) => {
      this.odata = btoa(String.fromCharCode(...new Uint8Array(reader.result as ArrayBuffer)));
      await this.integracaoService.cadastrarPapeisPlanilha(this.odata);
      await this.integracaoService.cadastrarInvestimentoPlanilha(this.odata);
      
    }
  }
  async onFileSelected2(event: any) {
    localStorage.getItem('token') == null? this.router.navigate(['/login']): "";
    const file: File = event.target.files[0];
    event.target.value = null;
    if (!file) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async (e) => {
      this.odata = btoa(String.fromCharCode(...new Uint8Array(reader.result as ArrayBuffer)));
      
    }
  }

}
